var canvas = new fabric.Canvas('myCanvas');
var paleteColor = getNodo('paletaColores');
var pickColor1 = getNodo('color1');
var pickColor2 = getNodo('color2');
var btPincel = getNodo('pincel');
var btBorrador = getNodo('borrador');
var btLineas = getNodo('lineas');
var btMover = getNodo('mover');
var btBalde = getNodo('balde');
var btSeleccion = getNodo('seleccion');

//Configurar erasable
const group = new fabric.Group([], {erasable: 'deep'});


function getNodo(id) {
  return document.getElementById(id);
}

fabric.Object.prototype.transparentCorners = false;

//Variables a guardar
let colorA = '#000';
let colorB = '#fff';

//funciones
function pintar(){
  canvas.set('isDrawingMode', true);
}

function seleccionarColor() {
  var brocha = canvas.freeDrawingBrush;
  brocha.color = pickColor1.value;
  var sombra = canvas.freeDrawingBrush;
  sombra.shadow.color =pickColor2.value;
}

function borrar() {
  canvas.freeDrawingBrush = new fabric.EraserBrush(canvas);
  canvas.isDrawingMode = true;
  canvas.freeDrawingBrush.inverted = true;
}

function mover() {
  for(let i=0; i<canvas.getObjects().length; i++){
    canvas.item(i).lockMovementX = false;
    canvas.item(i).lockMovementY = false;
  }
}

function seleccionar(){
  canvas.isDrawingMode = false;
  for(let i=0; i<canvas.getObjects().length; i++){
    canvas.item(i).lockMovementX = true;
    canvas.item(i).lockMovementY = true;
  }
  
}

function copy(){
  canvas.getActiveObject().clone(function(cloned) {
		_clipboard = cloned;
	});
}

function paste(){
  _clipboard.clone(function(clonedObj) {
		canvas.discardActiveObject();
		clonedObj.set({
			left: clonedObj.left + 10,
			top: clonedObj.top + 10,
			evented: true,
		});
    if(clonedObj.type == 'activeSelection'){
      clonedObj.canvas = canvas;
			clonedObj.forEachObject(function(obj) {
				canvas.add(obj);
			});
      clonedObj.setCoords();
    }else{
      canvas.add(clonedObj);
    }
    _clipboard.top += 10;
		_clipboard.left += 10;
		canvas.setActiveObject(clonedObj);
		canvas.requestRenderAll();
	});
}

//funciones con teclas
function teclaFun(e){
  if(e.ctrlKey && e.code == 'KeyC'){
    copy;
    console.log("se copio");
  }else if(e.ctrlKey && e.code == 'KeyV'){
    paste;
  }
}

//Eventos
btPincel.addEventListener('click', pintar);
paleteColor.addEventListener('change', seleccionarColor);
btBorrador.addEventListener('click', borrar);
btMover.addEventListener('click', mover);
btSeleccion.addEventListener('click', seleccionar);

window.addEventListener('keydown',teclaFun);

