const propiedadesEnAlquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
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
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
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
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial.',
        ubicacion: '123 Main Street, Anytown, CA 91234.',
        habitaciones: 2,
        baños:2,
        costo: '2.200',
        smoke: false,
        pets: false,
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial.',
        ubicacion: '123 Main Street, Anytown, CA 91234.',
        habitaciones: 2,
        baños:2,
        costo: '2.200',
        smoke: true,
        pets: false,
    }
]

const alquiler = document.querySelector('.alquilerStyle')
htmlA = ''

for(let alquiler of propiedadesEnAlquiler){
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

const btnVolver = document.getElementById('btn-volver')
const btnVentas = document.getElementById('btn-ventas')
const btnHome = document.getElementById('btn-home')

btnVolver.addEventListener('click', ()=>{
    window.location.href = 'index.html'
})

btnVentas.addEventListener('click',()=>{
    window.location.href = ' propiedades_venta.html'
})

//icono hamburguesa
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', function () {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
});

