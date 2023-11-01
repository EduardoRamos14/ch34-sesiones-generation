
function algoritmoBurbuja(arr) {
    let n = arr.length;
    let swapped;
        do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
            // Intercambiar arr[i] y arr[i+1]
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            swapped = true;
            }
        }
        } while (swapped);
    
        return arr;
    }

    let entrada = [3, 6, 12, 5, 100, 1];
    console.log(entrada);
    let salida = algoritmoBurbuja(entrada);
    console.log(salida);
    // Salida: [1, 3, 5, 6, 12, 100]