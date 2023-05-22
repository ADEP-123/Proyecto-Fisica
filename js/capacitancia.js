const boton = document.getElementById("calcularCapacitancia")
const medidas = document.getElementById("unidades")

medidas.addEventListener("click", e=>{
    console.log(medidas.value)
    e.stopPropagation()
    e.preventDefault()

    if((medidas.value) === "1"){
        document.getElementById("pegarUnidades1").textContent = "mm"
        document.getElementById("pegarUnidades2").innerHTML = "mm <sup>2</sup>"
        document.getElementById("pegarUnidades3").textContent = "pF"

    }else if((medidas.value === "2")){
        document.getElementById("pegarUnidades1").textContent = "m"
        document.getElementById("pegarUnidades2").innerHTML = "m <sup>2</sup>"
        document.getElementById("pegarUnidades3").textContent = "F"
    }
})


boton.addEventListener("click", (event)=>{
    event.stopPropagation()
    event.preventDefault()

    const permitividad = 8.85*10**-12
    let dielectrico = Number(document.getElementById("dielectrico").value)
    let distancia = Number(document.getElementById("distancia").value)
    let area = Number(document.getElementById("area").value)

    capacitancia = permitividad * dielectrico * area/distancia

    if(medidas.value ==="0"){
        alert("Debe elegir una unidad de medida")
    } else{
        document.getElementById("capacitancia").textContent = capacitancia
    }
})