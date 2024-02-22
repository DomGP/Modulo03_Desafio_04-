//Arrays
const propiedadesEnVenta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src:"./assets/imgs/venta_01.jpg",
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños:4,
        costo: '5.000',
        smoke: false,
        pets: false,
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: "./assets/imgs/venta_02.jpg",
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        baños:1,
        costo: '1.200',
        smoke: true,
        pets: true,
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: "./assets/imgs/venta_03.jpg",
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        baños:3,
        costo: '4.500',
        smoke: false,
        pets: true,
    },
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src:"./assets/imgs/venta_01.jpg",
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños:4,
        costo: '5.000',
        smoke: false,
        pets: false,
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: "./assets/imgs/venta_02.jpg",
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        baños:1,
        costo: '1.200',
        smoke: true,
        pets: true,
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: "./assets/imgs/venta_03.jpg",
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        baños:3,
        costo: '4.500',
        smoke: false,
        pets: true,
    },
]
const propiedadesEnAlquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: "./assets/imgs/arriendo_01.jpg",
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234.',
        habitaciones: 2,
        baños:2,
        costo: '2.000',
        smoke: false,
        pets: true,
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: "./assets/imgs/arriendo_02.jpg",
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar.',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789.',
        habitaciones: 3,
        baños:3,
        costo: '2.500',
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: "./assets/imgs/arriendo_03.jpg",
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial.',
        ubicacion: '123 Main Street, Anytown, CA 91234.',
        habitaciones: 2,
        baños:2,
        costo: '2.200',
        smoke: false,
        pets: false,
    },
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: "./assets/imgs/arriendo_01.jpg",
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234.',
        habitaciones: 2,
        baños:2,
        costo: '2.000',
        smoke: false,
        pets: true,
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: "./assets/imgs/arriendo_02.jpg",
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar.',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789.',
        habitaciones: 3,
        baños:3,
        costo: '2.500',
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src:  "./assets/imgs/arriendo_03.jpg",
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial.',
        ubicacion: '123 Main Street, Anytown, CA 91234.',
        habitaciones: 2,
        baños:2,
        costo: '2.200',
        smoke: true,
        pets: false,
    }
]

//Recorrido de primer array
const ventas = document.querySelector('.ventasStyle')
htmlV = ''

for(let i = 0; i < 3 && i < propiedadesEnVenta.length; i++){
    const propiedad = propiedadesEnVenta[i]
    htmlV += `
        <div class="card">
            <img src="${propiedad.src}" alt="">
            <h3>${propiedad.nombre}</h3>
            <p>${propiedad.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
            <div class='conditionalStyle'>
                <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |</p>
                <p><i class="fas fa-bath"></i> ${propiedad.baños <= 1 ? propiedad.baños + ' Baño' : propiedad.baños + ' Baños'}</p>    
            </div>
            <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
            ${propiedad.smoke ? '<p class="smoking"><i class="fas fa-smoking"></i> Permitido Fumar</p>' : '<p class="noSmoking"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}
            ${propiedad.pets ? '<p class="pets"><i class="fas fa-paw"></i> Mascotas Permitidas</p>' : '<p class="noPets"><i class="fas fa-ban"></i> No se permiten Mascotas</p>'}
        </div>
    `
}
ventas.innerHTML = htmlV


//Recorrido de segundo array
const alquiler = document.querySelector('.alquilerStyle')
htmlA = ''

for(let i = 0; i < 3 && i < propiedadesEnAlquiler.length; i++){
    const alquiler = propiedadesEnAlquiler[i]
    htmlA += `
    <div class="card">
        <img src="${alquiler.src}" alt="">
        <h3>${alquiler.nombre}</h3>
        <p>${alquiler.descripcion}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${alquiler.ubicacion}</p>
            <div class='conditionalStyle'>
                <p><i class="fas fa-bed"></i> ${alquiler.habitaciones} Habitaciones |</p>
                <p><i class="fas fa-bath"></i> ${alquiler.baños <= 1 ? alquiler.baños + ' Baño' : alquiler.baños + ' Baños'}</p>    
            </div>
            <p><i class="fas fa-dollar-sign"></i> ${alquiler.costo}</p>
            ${alquiler.smoke ? '<p class="smoking"><i class="fas fa-smoking"></i> Permitido Fumar</p>' : '<p class="noSmoking"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}
            ${alquiler.pets ? '<p class="pets"><i class="fas fa-paw"></i> Mascotas Permitidas</p>' : '<p class="noPets"><i class="fas fa-ban"></i> No se permiten Mascotas</p>'}
    </div>
`
}
alquiler.innerHTML = htmlA

//CAMBIO DE PAGINA NAVBAR
const btnVentasNav = document.getElementById('btn-ventas-nav')
const btnAlquilerNav = document.getElementById('btn-alquiler-nav')

btnVentasNav.addEventListener('click', ()=> window.location.href = 'propiedades_venta.html')
btnAlquilerNav.addEventListener('click', ()=> window.location.href = 'propiedades_alquiler.html')

//BOTONES PARA CAMBIO DE PAGINA
const btnVentas = document.getElementById('btn-ventas')
const btnAlquiler = document.getElementById('btn-alquiler')

btnVentas.addEventListener('click', ()=>{
    window.location.href = 'propiedades_venta.html'
})

btnAlquiler.addEventListener('click', ()=>{
    window.location.href = 'propiedades_alquiler.html'
})

//icono hamburguesa
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', function () {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
});


