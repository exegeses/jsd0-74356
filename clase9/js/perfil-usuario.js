// objeto con los datos de un usuario
const usuario = {
                        nombre: 'Juan',
                        avatar: 'profile-1.png',
                        ciudad: 'Barcelona',
                        profesion: 'Programador'
                     }

/*
    Generar una tarjeta con los datos de perfil de usuario obtenidos del objeto usuario
* */
const contenedor = document.querySelector('#contenedor');

contenedor.innerHTML = `<article class="card">
                            <img src="imgs/${usuario.avatar}" class="avatar">
                            <span class="name">${usuario.nombre}</span>
                            <span class="ciudad">Ciudad: ${usuario.ciudad}</span>
                            <span class="profesion">Profesión: ${usuario.profesion}</span>
                        </article>`;