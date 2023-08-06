   const cantidad = document.querySelector("#cantidad")
   const color = document.querySelector("#color")
   const btn = document.querySelector("#btn");
   const total = document.querySelector("#total");
   const cantidadFinal = document.querySelector("#cantidadFinal");
   const precio = 700000;
   const colortext = document.querySelector("#colortext")
   const colorcircle = document.querySelector("#colorcircle")

// Evento para que boton haga el calculo
   btn.addEventListener("click", ()=> {
    const cantidad = document.querySelector("#cantidad").value;
    total.innerText = cantidad * precio;
    cantidadFinal.innerText = cantidad;
})

// Evento para que el color cambie inmediatamente al momento de escribir en el input
colortext.addEventListener("input", ()=>{
    colorcircle.style.color = colortext.value;
})