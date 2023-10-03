const calcule = () => {
    const result = document.getElementById("result");
    const num1 = parseFloat(document.getElementById("input").value);

        if (isNaN(num1)) {
            result.textContent = "Escribe un valor válido";
        } else { if (num1 === 0) {
            result.textContent = "el número es = 0";
        } else { if (num1 > 0) {
            result.textContent = "el número es positivo";
        } else { result.textContent = "el número es negativo"; 
        }}}

}