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
        nombre: 'Casa de veraneo con piscina',
        src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '323 Pool Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Pequeña casa en el bosque',
        src: 'https://plus.unsplash.com/premium_photo-1686090450488-48ce19426bbe?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '213 Forest Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 1,
        costo: 2200,
        smoke: false,
        pets: false
    }
    
];


function mostrarPropiedadesindex(propiedades, contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    let html = '';
  // Tomar solo los tres primeros objetos
  const propiedadesFiltradas = propiedades.slice(0, 3);

  
    for ( let propiedad of propiedadesFiltradas){
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
mostrarPropiedadesindex(propiedades_venta, 'ventas');










// PROPIEDADES EN ALQUILER
const propiedades_alquiler = [
  {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de la montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    baños: 1,
    costo: 1200,
    smoke: true,
    pets: true
},
{
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    baños: 2,
    costo: 2000,
    smoke: false,
    pets: true
},
{
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    baños: 3,
    costo: 2200,
    smoke: false,
    pets: false
}
];



function mostrarPropiedadesAlquiler(propiedades, contenedorId) {
  const contenedorAlquiler = document.getElementById(contenedorId);
  let htmlAlquiler = '';

  for (let alquiler of propiedades) {
    htmlAlquiler += `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${alquiler.src}" class="card-img-top" alt="Imagen de la propiedad" />
          <div class="card-body">
            <h5 class="card-title">${alquiler.nombre}</h5>
            <p class="card-text">${alquiler.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${alquiler.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${alquiler.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${alquiler.baños} Baños</p>
            <p><i class="fas fa-dollar-sign"></i> ${alquiler.costo}</p>
            ${alquiler.smoke ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}
            ${alquiler.pets ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>'}
          </div>
        </div>
      </div>
    `;
  }

  contenedorAlquiler.innerHTML = htmlAlquiler;
}

// Mostrar propiedades en alquiler
mostrarPropiedadesAlquiler(propiedades_alquiler, 'alquileres');

















