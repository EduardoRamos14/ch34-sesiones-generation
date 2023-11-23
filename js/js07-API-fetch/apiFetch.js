console.log("JS07 - apiFetch");

/*
 API: Application Programming Interface
   Permite la comunicación entre dos aplicaciones de software
   a travéz de un conjunto de reglas.

 La API Fetch nos ayuda a acceder y manipular 
 peticiones HTTP (GET, POST, PUT, DELETE).
 
 Sintaxis:
    fetch( resource , options);

La API fetch en JavaScript proporciona una interfaz para realizar 
solicitudes de red, como solicitudes HTTP, de manera asíncrona. 
Es una forma moderna y más poderosa de realizar solicitudes HTTP 
en comparación con métodos más antiguos, como XMLHttpRequest.

*/

const urlFakeStore = "https://fakestoreapi.com/products";//api
//const urlFakeStore = "pokemones.json"; //recurso json creado por ti mismo

const getProducts = (url) => {
    // Realizando solicitud Get
    // .then() consum/maneja la promesa cuando sea resuelta
    // .catch() se ejecuta en caso de que la promesa sea rechazada.
    fetch(url)
        .then((response) => {
            console.log("status code: " + response.status); // 200
            return response.json();
        })
        .then(products => {
            // console.log(products); 
            imprimirEnDOM(products);
        })
        .catch((error) => {
            console.log("Error en la solicitud: ");
            console.warn(error);
        });
};

//segunda forma de utilizar apis con async
const getProductsUsingAsyncAwait = async (url) => {
    try {
        const response = await fetch(url);
        const products = await response.json();
        imprimirEnDOM(products);

    } catch (error) {
        console.log(error);
    }
}
// getProducts(urlFakeStore);
getProductsUsingAsyncAwait(urlFakeStore);

function imprimirEnDOM(products) {
    const productsContainer = document.getElementById("products-container");

    // solución 1
    const myArrayOfTitle = [];
    products.forEach((element, idex, array) => { myArrayOfTitle.push(`<p>${element.title}</p>`) });

    // solución 2
    // products.map( (element, idex, array )=>{}  ); 
    const productsTitle = products.map((product, index, array) => `
        <article class="col-lg-3 col-md-4">
            <div class="card mt-3 mx-auto" style="width: 18rem; height:60rem;">
                <img src="${product.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text">${product.id}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>          
        </article>
    `
    );

    console.log(myArrayOfTitle);
    console.log(productsTitle);

    productsContainer.innerHTML = productsTitle.join("");
    // productsContainer.innerHTML =   myArrayOfTitle.join("");
}


/*
1. El cliente hace una solicitud get al servidor
2. el servidor devuelve los datos de usuario y lo almacena en el local storage y se guarda fecha y hora de solicitud (retardo de 5 segundos)
3. El local storage lo muestra en el DOM
4. En el plazo de 1 minuto se debe de jalar la informacion del local storage (para ello debe de checar la fecha y hora de la primera solicitud)
5. En caso de que pase mas de un minuto se debe de volver a hacer una solicitud get al servidor */