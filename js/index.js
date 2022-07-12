const productos = [
	{
			id: 1,
			nombre: 'Anillo Solitario Corona',
			descripcion: 'Anillo Brillante Rosa Recubrimiento en Oro Rosa de 14k',
			precio: 3000,
			imagen: './imagenes/anillo1.png'
	},
	{
			id: 2,
			nombre: 'Anillo Oro 14K ',
			descripcion: 'Anillo de oro cuadrado con halo brillante',
			precio: 3400,
			imagen: './imagenes/anillo2.png'
	},
	{
			id: 3,
			nombre: 'Anillo redondo con halo brillante',
			descripcion: 'Anillo redondo de plata con halo brillante',
			precio: 4900,
			imagen: './imagenes/anillo3.png'
	},
	{
			id: 4,
			nombre: 'Anillo Banda Triple Resplandeciente',
			descripcion: 'Anillo Banda Triple de plata con diamantes',
			precio: 4000,
			imagen: './imagenes/anillo4.png'
	},
	{
			id: 5,
			nombre: 'Anillo Solitario Corazón',
			descripcion: 'Anillo de plata Solitario Corazón Resplandeciente',
			precio: 5000,
			imagen: './imagenes/anillo5.png'
	},
	{
			id: 6,
			nombre: 'Anillo Minnie Mouse De Disney',
			descripcion: 'Anillo Cabeza Reluciente Minnie Mouse De Disney',
			precio: 6200,
			imagen: './imagenes/anillo6.png'
	},
	{
			id: 7,
			nombre: 'Anillo de banda triple cruzado',
			descripcion: 'Anillo de banda triple cruzado Recubrimiento en Oro Rosa de 14k',
			precio: 5400,
			imagen: './imagenes/anillo7.png'
	},
	{
			id: 8,
			nombre: 'Anillo con halo brillante',
			descripcion: 'Anillo con halo brillante en forma de gota',
			precio: 4800,
			imagen: './imagenes/anillo8.png'
	},
	{
			id: 9,
			nombre: 'Anillo Círculo clásico',
			descripcion: 'Anillo Círculo clásico Recubrimiento en Oro Rosa de 14k',
			precio: 6000,
			imagen: './imagenes/anillo9.png'
	}
	
]

let carrito = [];
let total = 0;
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMmodal = document.querySelector('#modal');


function renderizarProductos() {
	productos.forEach((info) => {

			const div = document.createElement('div');

			const tarjetas = document.createElement('div');
			tarjetas.classList.add("a");

			const Title = document.createElement('h5');

			Title.textContent = info.nombre;

			const Imagen = document.createElement('img');

			Imagen.classList.add("imagen_card");

			Imagen.setAttribute('src', info.imagen);
			const descripcion = document.createElement('p');
			descripcion.textContent = info.descripcion;
			const Precio = document.createElement('p');
			Precio.classList.add("precio");
			Precio.textContent = '$' + info.precio ;
			
			const Boton = document.createElement('button');
			Boton.classList.add("boton_js");
			Boton.textContent = 'Agregar al carrito';
			Boton.setAttribute('marcador', info.id);
			Boton.addEventListener('click', agregarProducto);

			tarjetas.appendChild(Imagen);
			tarjetas.appendChild(Title);
			tarjetas.appendChild(descripcion);
			tarjetas.appendChild(Precio);
			tarjetas.appendChild(Boton);
			div.appendChild(tarjetas);
			DOMitems.appendChild(div);
	});

}

function agregarProducto(evento) {

	carrito.push(evento.target.getAttribute('marcador'))

	calcularTotal();

	renderizarCarrito();

}


function renderizarCarrito() {

	DOMcarrito.textContent = '';

	const carritoSinDuplicados = [...new Set(carrito)];

	carritoSinDuplicados.forEach((item) => {
			const miItem = productos.filter((itemProducto) => {
					return itemProducto.id === parseInt(item);
			});

			const numeroUnidadesItem = carrito.reduce((total, itemId) => {
					return itemId === item ? total += 1 : total;
			}, 0);

			const lista = document.createElement('li');

			lista.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}$`;
			const miBoton = document.createElement('button');
			DOMcarrito.appendChild(lista);
	});
}


function calcularTotal() {
	total = 0;
	carrito.forEach((item) => {
			const miItem = productos.filter((itemProducto) => {
					return itemProducto.id === parseInt(item);
			});
			total = total + miItem[0].precio;
	});
	DOMtotal.textContent = `Pagás: $${total}`;
}



renderizarProductos();