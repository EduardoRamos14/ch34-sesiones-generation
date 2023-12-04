const urlApi = "https://reqres.in/api/users?delay=3";  // Cambiado a español

const btnMostrarUsuarios = document.querySelector("#show-users-btn");  // Cambiadas las variables a español
const refSpinnerInicial = document.querySelector("#initial-spinner");
const refContenedorDatosUsuarios = document.querySelector("#users-data-container");
const refTitulo = document.querySelector("#titles");
const refNumPeticiones = document.querySelector("#num-fetch-title");
let contadorPeticiones = 0;

const actualizarTituloPeticiones = () => {
	contadorPeticiones++;
	refNumPeticiones.innerHTML = `Peticiones nuevas ${contadorPeticiones}`;
};

/**
 * Recibe una lista de usuarios y muestra cada usuario en una tarjeta HTML en el DOM.
 * @param {*} arrayUsuarios Este array contiene un grupo de usuarios.
 * @returns la ejecución de una función que imprime los usuarios en el DOM.
 */
const imprimirArrayUsuarios = (arrayUsuarios) => {
	let arrayTarjetasUsuarios = arrayUsuarios.map((usuario) => {
		return `
		<div class="user-card">
  			<div class="user-card-header">
    			<img class="user-card-img" src="${usuario.avatar}" alt="imagen de perfil de usuario" />
 			</div>
  			<div class="user-card-body">
    			<h4>${usuario.first_name + " " + usuario.last_name}</h4>
      			<p>${usuario.email}</p>
  			</div>
		</div>
		`;
	});
	arrayTarjetasUsuarios = arrayTarjetasUsuarios.join("");
	return (refContenedorDatosUsuarios.innerHTML = arrayTarjetasUsuarios);
};

/**
 * Retorna el objeto asociado con la clave "datosUsuariosConMarcaDeTiempo" en el Local Storage.
 * @returns un objeto vacío si la clave "datosUsuariosConMarcaDeTiempo" no existe en el Local Storage.
 */
const leerLocalStorage = () => {
	const datosUsuariosConMarcaDeTiempo = JSON.parse(
		localStorage.getItem("datosUsuariosConMarcaDeTiempo")
	);
	return datosUsuariosConMarcaDeTiempo;
};

/**
 * Guarda los datos en el almacenamiento local con la clave "datosUsuariosConMarcaDeTiempo".
 * @param {*} datos objeto con el array de usuarios.
 *
 */
const guardarDatosUsuariosLocalStorage = (datos) => {
	const marcaDeTiempo = new Date().getTime();
	const datosUsuariosConMarcaDeTiempo = { usuarios: datos, marcaDeTiempo: marcaDeTiempo };
	localStorage.setItem(
		"datosUsuariosConMarcaDeTiempo",
		JSON.stringify(datosUsuariosConMarcaDeTiempo)
	);
};

/**
 * Realiza una petición GET con la constante urlApi.
 * Guarda la respuesta en el LocalStorage con la clave "datosUsuariosConMarcaDeTiempo".
 * Imprime el error en la consola si existe.
 * @returns un array con los datos de los usuarios.
 */
const obtenerDatosUsuarios = async () => {
	let datosUsuarios;
	actualizarTituloPeticiones();
	try {
		const respuesta = await fetch(urlApi);
		const datosRespuesta = await respuesta.json();
		datosUsuarios = datosRespuesta.data;
		guardarDatosUsuariosLocalStorage(datosUsuarios);
	} catch (error) {
		console.log(error);
	}

	return datosUsuarios;
};

/**
 * Compara la diferencia entre una marca de tiempo con la marca de tiempo actual.
 * @param {*} marcaDeTiempo Los datos de la marca de tiempo para comparar con la marca de tiempo actual.
 * @returns verdadero si la diferencia es menor a 60000ms, falso en caso contrario.
 */
const validezMarcaDeTiempo = (marcaDeTiempo) => {
	const tiempoActual = new Date().getTime();
	const diferenciaDeTiempo = tiempoActual - marcaDeTiempo;
	return diferenciaDeTiempo <= 60000;
};

/**
 * Lee el objeto "datosUsuariosConMarcaDeTiempo" del Local Storage y compara su marca de tiempo
 * con la marca de tiempo actual.
 * @returns verdadero si la diferencia es menor a 60000ms, falso en caso contrario.
 */
const validarDatosLocalStorage = () => {
	const datosUsuariosConMarcaDeTiempo = leerLocalStorage();
	const marcaDeTiempo = datosUsuariosConMarcaDeTiempo
		? datosUsuariosConMarcaDeTiempo.marcaDeTiempo
		: 0;

	return marcaDeTiempo;
};

// 27/11/2023 Se comprobaron las funciones creadas hasta este punto todo ok

/**
 * Obtiene datos de usuarios del servidor y los muestra en el DOM.
 */
const obtenerMostrarUsuarios = async () => {
	const datosUsuarios = await obtenerDatosUsuarios();
	imprimirArrayUsuarios(datosUsuarios);
};

/**
 * Valida si la aplicación necesita actualizar los datos de usuarios al inicio de la aplicación
 * y muestra los datos de usuarios en el DOM.
 */
const iniciarAplicacion = async () => {
	const marcaDeTiempo = validarDatosLocalStorage();
	if (validezMarcaDeTiempo(marcaDeTiempo)) {
		const datosUsuarios = leerLocalStorage().usuarios;
		await imprimirArrayUsuarios(datosUsuarios);
		refTitulo.classList.remove("mt-45");
		refSpinnerInicial.classList.add("d-none");
		refNumPeticiones.classList.remove("d-none");
		setInterval(obtenerMostrarUsuarios, 60000);
	} else {
		await obtenerMostrarUsuarios();
		refTitulo.classList.remove("mt-45");
		refSpinnerInicial.classList.add("d-none");
		refNumPeticiones.classList.remove("d-none");
		setInterval(obtenerMostrarUsuarios, 60000);
	}
};

/** Inicia el flujo de la aplicación y cambia estilos al botón inicial */
btnMostrarUsuarios.addEventListener("click", () => {
	refSpinnerInicial.classList.remove("d-none");
	btnMostrarUsuarios.classList.add("d-none");
	iniciarAplicacion();
});
