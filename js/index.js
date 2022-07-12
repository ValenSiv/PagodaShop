const productos = [
	{
			id: 1,
			nombre: 'Camiseta Boca Juniors 1970',
			descripcion: 'Camiseta retro titular temporada 1970 con escudo',
			precio: 3000,
			imagen: './imagenes/anillo1.png'
	},
	{
			id: 2,
			nombre: 'Camiseta Boca Juniors 1981',
			descripcion: 'Camiseta retro Diego Armando Maradona temporada 1981',
			precio: 3400,
			imagen: './imagenes/anillo2.png'
	},
	{
			id: 3,
			nombre: 'Camiseta Boca Juniors 1991',
			descripcion: 'Camiseta retro suplente Fiat temporada 1991',
			precio: 4900,
			imagen: './imagenes/anillo3.png'
	},
	{
			id: 4,
			nombre: 'Camiseta Boca Juniors 1987',
			descripcion: 'Camiseta retro suplente Parmalat edicion 1987',
			precio: 4000,
			imagen: './imagenes/anillo3.png'
	},
	{
			id: 5,
			nombre: 'Camiseta Boca Juniors 1975',
			descripcion: 'Camiseta retro Chapa Suñe temporada 1975',
			precio: 5000,
			imagen: './imagenes/anillo3.png'
	},
	{
			id: 6,
			nombre: 'Camiseta Boca Juniors 1994',
			descripcion: 'Camiseta retro titular Parmalat temporada 1994',
			precio: 6200,
			imagen: './imagenes/anillo3.png'
	},
	{
			id: 7,
			nombre: 'Camiseta Boca Juniors 1985',
			descripcion: 'Camiseta retro titular Adidas temporada 1985',
			precio: 5400,
			imagen: './imagenes/anillo3.png'
	},
	{
			id: 8,
			nombre: 'Camiseta Boca Juniors 2000',
			descripcion: 'Camiseta retro suplente temporada 2000',
			precio: 4800,
			imagen: './imagenes/anillo3.png'
	},
	{
			id: 9,
			nombre: 'Camiseta Boca Juniors 2004',
			descripcion: 'Camiseta retro alternativa Megatone blanca temporada 2004',
			precio: 6000,
			imagen: './imagenes/anillo3.png'
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