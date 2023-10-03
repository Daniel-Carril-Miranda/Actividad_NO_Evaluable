document.addEventListener('DOMContentLoaded', function() {
    const action = document.getElementById("calcule");
    const result = document.getElementById("display");

    action.addEventListener("click", function() {
        const num1 = parseFloat(document.getElementById("input").value);
        if (isNaN(num1)) {
            result.innerHTML = "Escribe un valor válido";
        } else { if (num1 === 0) {
            result.innerHTML = "el número es = 0";
        } else { if (num1 > 0) {
            result.innerHTML = "el número es positivo";
        } else { result.innerHTML = "el número es negativo"; 
        }}}
    });
});
