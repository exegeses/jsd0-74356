let usuarios = [
                        {
                            id: 1,
                            nombre: 'Juan',
                            avatar: 'profile-1.png',
                            ciudad: 'Barcelona',
                            profesion: 'Programador'
                        },
                        {
                            id: 2,
                            nombre: 'María',
                            avatar: 'profile-2.png',
                            ciudad: 'Madrid',
                            profesion: 'Diseñadora'
                        },
                        {
                            id: 3,
                            nombre: 'Carlos',
                            avatar: 'profile-3.png',
                            ciudad: 'Valencia',
                            profesion: 'Analista'
                        },
                        {
                            id: 4,
                            nombre: 'Ana',
                            avatar: 'profile-4.png',
                            ciudad: 'Sevilla',
                            profesion: 'Arquitecta'
                        },
                        {
                            id: 5,
                            nombre: 'Luis',
                            avatar: 'profile-5.png',
                            ciudad: 'Bilbao',
                            profesion: 'Desarrollador'
                        },
                        {
                            id: 6,
                            nombre: 'Elena',
                            avatar: 'profile-6.png',
                            ciudad: 'Zaragoza',
                            profesion: 'Ingeniera'
                        }
                ];

const tarjetasUsuarios = document.querySelector('#tarjetas-usuarios');

/* generar cada una de las tarjetas de los usuarios
    utilizando un bucle forEach */
usuarios.forEach( usuario =>
                            {
                                tarjetasUsuarios.innerHTML += `<article class="card">
                                                                   <img src="imgs/${usuario.avatar}" class="avatar">
                                                                   <span class="name">${usuario.nombre}</span>
                                                                   <span class="ciudad">Ciudad: ${usuario.ciudad}</span>
                                                                   <span class="profesion">Profesión: ${usuario.profesion}</span>
                                                               </article>`;
                            }
                );