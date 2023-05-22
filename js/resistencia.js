const boton = document.getElementById("calcularCapacitancia")
const medidas = document.getElementById("unidades")

medidas.addEventListener("click", e=>{
    console.log(medidas.value)
    e.stopPropagation()
    e.preventDefault()

    if((medidas.value) === "1"){
        document.getElementById("pegarUnidades1").textContent = "uΩm"
        document.getElementById("pegarUnidades2").innerHTML = "dm"
        document.getElementById("pegarUnidades3").innerHTML = "cm<sup>2</sup>"
        document.getElementById("pegarUnidades4").innerHTML = "uΩ"


    }else if((medidas.value === "2")){
        document.getElementById("pegarUnidades1").innerHTML = "Ωm"
        document.getElementById("pegarUnidades2").innerHTML = "m"
        document.getElementById("pegarUnidades3").innerHTML = "m <sup>2</sup>"
        document.getElementById("pegarUnidades4").innerHTML = "Ω"

    }

    document.getElementById("resistencia"). textContent = ""
})


boton.addEventListener("click", (event)=>{
    event.stopPropagation()
    event.preventDefault()

    let resistividad = Number(document.getElementById("resistividad").value)
    let longitud = Number(document.getElementById("longitud").value)
    let area = Number(document.getElementById("area").value)

    resistencia = resistividad * longitud/area

    if(medidas.value ==="0"){
        alert("Debe elegir una unidad de medida")
    } else if(medidas.value ==="1"){
        document.getElementById("resistencia").textContent = (resistencia*10**3)
    } else{
        document.getElementById("resistencia").textContent = resistencia
    }
})