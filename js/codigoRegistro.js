//const sqlite3 = require('sqlite3').verbose();

/*const db = new sqlite3.Database('./baseDeDatos/digiArt.db', (err) =>{
	if(err){
		console.error(err.message);
	}
	console.log('conectado a la base de datos de prueba');
});*/

var nombre = document.getElementById('nombre');
var correo = document.getElementById('correo');
var contraseña = document.getElementById('contraseña');
var btRegistrar = document.getElementById('registrarte');

function redirect() {
    let nombreVal = nombre.value;
    let correoVal = correo.value;
    let contVal = contraseña.value;
    /*db.run('INSERT INTO userInfo(correo, contraseña) VALUES(?),(?)', [correoVal, contVal], function(err){
        if(err){
            return console.log(err.message);
        }
        console.log('A row has been inserted');
    });*/

    //window.location.href="Digi-Art/digiArt-draw.html";
}

//btRegistrar.addEventListener('click', redirect);

/*db.close((err)=>{
	if (err) {
		console.error(err.message);
	}
	console.log('Cerrada la conexion a la base de datos');
});*/