// Creamos una funcion que permita tomar la ID del elemento padre y la data a utilizar
// para generar contenido dinámico
const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños: 2,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Hermoso domo a orilla de lago',
        src: 'https://plus.unsplash.com/premium_photo-1718204436526-277f9f34607c?q=80&w=1809&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descripcion: 'Este hermoso domo ofrece la tranquilidad y vista soñada',
        ubicacion: '56 Lake Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        baños: 1,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso en el bosque',
        src: 'https://images.unsplash.com/photo-1718717722247-26f4c6c09192?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al bosque',
        ubicacion: '456 Forest Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        baños: 2,
        costo: 2500,
        smoke: true,
        pets: true
    }
    
];


function mostrarPropiedades(propiedades, contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    let html = '';
  
    for ( let propiedad of propiedades_venta){
      html += `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${propiedad.src}" class="card-img-top" alt="Imagen de la propiedad" />
            <div class="card-body">
              <h5 class="card-title">${propiedad.nombre}</h5>
              <p class="card-text">${propiedad.descripcion}</p>
              <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
              <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedad.baños} Baños</p>
              <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
              ${propiedad.smoke ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}
              ${propiedad.pets ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'}
            </div>
          </div>
        </div>
      `
    }

    contenedor.innerHTML = html;
}

// Mostrar propiedades en venta
mostrarPropiedades(propiedades_venta, 'ventas');

















