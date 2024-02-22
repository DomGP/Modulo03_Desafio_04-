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

const ventas = document.querySelector('.ventasStyle')
htmlV = ''

for(let propiedad of propiedadesEnVenta){
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
            <br>
            ${propiedad.smoke ? '<p class="smoking"><i class="fas fa-smoking"></i> Permitido Fumar</p>' : '<p class="noSmoking"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}
            ${propiedad.pets ? '<p class="pets"><i class="fas fa-paw"></i> Mascotas Permitidas</p>' : '<p class="noPets"><i class="fas fa-ban"></i> No se permiten Mascotas</p>'}
        </div>
    `
}
ventas.innerHTML = htmlV

//BOTONES PARA CAMBIAR DE PAGINA
const btnHome = document.getElementById('btn-home')
const btnVolver = document.getElementById('btn-volver')
const btnAlquiler = document.getElementById('btn-alquiler')

btnHome.addEventListener('click', ()=> window.location.href = 'index.html')

btnVolver.addEventListener('click', ()=>{
    window.location.href = 'index.html'
})

btnAlquiler.addEventListener('click', ()=>{
    window.location.href = 'propiedades_alquiler.html'
})

//NAVBAR DESPLEGABLE
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', function () {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
});