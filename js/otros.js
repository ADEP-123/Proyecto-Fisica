const tipoResistencias = document.getElementById("tipoResistencias");

tipoResistencias.addEventListener("click", (e) => {
  if (tipoResistencias.value === "1") {
    document.getElementById("pegarResistencias").innerHTML = `
        <table class="table table-bordered">
            <tr>
                <td colspan="2"><img src="../img/resistenciasEnSerie.png" alt=""></td>
            </tr>
            <thead class="table-light">
                <tr>
                    <td colspan="2">Suma de resistencias en serie</td>
                 </tr>
            </thead>
            <tr>
                <td>
                    <label><h3>R<sub>1</sub>: </h3><label>
                    <input type="number" id="resistencia1">Ω
                </td>
                <td>
                    <label><h3>R<sub>2</sub>: </h3><label>
                    <input type="number" id="resistencia2">Ω
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <h3>R<sub>12</sub> = <span id="respuesta"></span>Ω</h3>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <button class="btn btn-outline-success" id="botonSubir">Calcular</button>
                </td>
            </tr>
        </table>
        `;

    const calcular = document.getElementById("botonSubir");
    calcular.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      let r1 = Number(document.getElementById("resistencia1").value);
      let r2 = Number(document.getElementById("resistencia2").value);

      document.getElementById("respuesta").textContent = r1 + r2;
    });
  } else if (tipoResistencias.value === "2") {
    document.getElementById("pegarResistencias").innerHTML = `
        <table class="table table-bordered">
            <tr>
                <td colspan="2"><img src="../img/resistenciasEnParalelo.png" alt=""></td>
            </tr>
            <thead class="table-light">
                <tr>
                    <td colspan="2">Suma de resistencias en paralelo</td>
                 </tr>
            </thead>
            <tr>
                <td>
                    <label><h3>R<sub>1</sub>: </h3><label>
                    <input type="number" id="resistencia1">Ω
                </td>
                <td>
                    <label><h3>R<sub>2</sub>: </h3><label>
                    <input type="number" id="resistencia2">Ω
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <h3>R<sub>12</sub> = <span id="respuesta"></span>Ω</h3>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <button class="btn btn-outline-success" id="botonSubir">Calcular</button>
                </td>
            </tr>
        </table>
        `;

    const calcular = document.getElementById("botonSubir");
    calcular.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      let r1 = Number(document.getElementById("resistencia1").value);
      let r2 = Number(document.getElementById("resistencia2").value);

      document.getElementById("respuesta").textContent = 1 / (1 / r1 + 1 / r2);
    });
  } else {
    document.getElementById("pegarResistencias").innerHTML = ``;
  }
});

const tipoCondensadores = document.getElementById("tipoCondensadores");

tipoCondensadores.addEventListener("click", (e) => {
  if (tipoCondensadores.value === "1") {
    document.getElementById("pegarCondensadores").innerHTML = `
        <table class="table table-bordered">
            <tr>
                <td colspan="2"><img src="../img/condensadoresEnParalelo.png" alt=""></td>
            </tr>
            <thead class="table-light">
                <tr>
                    <td colspan="2">Suma de condensadores en paralelo</td>
                 </tr>
            </thead>
            <tr>
                <td>
                    <label><h3>C<sub>1</sub>: </h3><label>
                    <input type="number" id="condensador1">F
                </td>
                <td>
                    <label><h3>C<sub>2</sub>: </h3><label>
                    <input type="number" id="condensador2">F
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <h3>C<sub>12</sub> = <span id="respuesta2"></span>Ω</h3>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <button class="btn btn-outline-success" id="botonSubir2">Calcular</button>
                </td>
            </tr>
        </table>
        `;

    const calcular = document.getElementById("botonSubir2");
    calcular.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      let c1 = Number(document.getElementById("condensador1").value);
      let c2 = Number(document.getElementById("condensador2").value);

      document.getElementById("respuesta2").textContent = c1 + c2;
    });
  } else if (tipoCondensadores.value === "2") {
    document.getElementById("pegarCondensadores").innerHTML = `
        <table class="table table-bordered">
            <tr>
                <td colspan="2"><img src="../img/condensadoresEnSerie.png" alt=""></td>
            </tr>
            <thead class="table-light">
                <tr>
                    <td colspan="2">Suma de condensadores en Serie</td>
                 </tr>
            </thead>
            <tr>
                <td>
                    <label><h3>C<sub>1</sub>: </h3><label>
                    <input type="number" id="condensador1">F
                </td>
                <td>
                    <label><h3>C<sub>2</sub>: </h3><label>
                    <input type="number" id="condensador2">F
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <h3>C<sub>12</sub> = <span id="respuesta2"></span>Ω</h3>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <button class="btn btn-outline-success" id="botonSubir2">Calcular</button>
                </td>
            </tr>
        </table>
        `;

    const calcular = document.getElementById("botonSubir2");
    calcular.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      let c1 = Number(document.getElementById("condensador1").value);
      let c2 = Number(document.getElementById("condensador2").value);

      document.getElementById("respuesta2").textContent = 1 / (1 / c1 + 1 / c2);
    });
  } else {
    document.getElementById("pegarCondensadores").innerHTML = ``;
  }
});

const desplegar = document.getElementById("desplegar");
desplegar.addEventListener("click", (i) => {
  if (desplegar.value === "1") {
    document.getElementById("tableporcerror").innerHTML = `<tr>
    <td colspan="2"><img src="../img/porcerror.png" alt=""></td>
</tr>
<thead class="table-light">
    <tr>
        <td colspan="2">Porcentaje de error</td>
     </tr>
</thead>
<tr>
    <td>
        <label><h3>Valor<sub>teorico</sub>: </h3><label>
        <input type="number" id="vteor">
    </td>
    <td>
        <label><h3>Valor<sub>experimental</sub>: </h3><label>
        <input type="number" id="vexp">
    </td>
</tr>
<tr>
    <td colspan="2">
        <h3>E = <span id="respuesta2"></span>%</h3>
    </td>
</tr>
<tr>
    <td colspan="2">
        <button class="btn btn-outline-success" id="botonSubir2">Calcular</button>
    </td>
</tr>`;
    const calcular2 = document.getElementById("botonSubir2");
    calcular2.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const vteor = Number(document.getElementById("vteor").value);
      const vexp = Number(document.getElementById("vexp").value);

      const res = (Math.abs(vteor - vexp) / vteor) * 100;

      document.getElementById("respuesta2").textContent = res;
    });
  } else {
    document.getElementById("tableporcerror").innerHTML = ``;
  }
});

const frameCont = document.getElementById("iframecontenedor");
const herrAd = document.getElementById("herrAdic");
herrAd.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  switch (herrAd.value) {
    case "1":
      frameCont.innerHTML = `<iframe src="https://phet.colorado.edu/sims/html/charges-and-fields/1.0.47/charges-and-fields_es_MX.html" frameborder="0" class="frame" allow="fullscreen" scrolling="yes"></iframe>
      <br>
      <p><b>Este simulador fue tomado de:</b></p> <a href="https://phet.colorado.edu/sims/html/charges-and-fields/1.0.47/charges-and-fields_es_MX.html" target="_blank">https://phet.colorado.edu/sims/html/charges-and-fields/1.0.47/charges-and-fields_es_MX.html</a>`;
      break;
    case "2":
      frameCont.innerHTML = `<iframe src="https://www.vascak.cz/data/android/physicsatschool/template.php?s=elpole_kondenzator&l=en" frameborder="0" class="frame" allow="fullscreen" scrolling="yes"></iframe>
      <br>
      <p><b>Este simulador fue tomado de:</b></p> <a href="https://www.vascak.cz/data/android/physicsatschool/template.php?s=elpole_kondenzator&l=en" target="_blank">https://www.vascak.cz/data/android/physicsatschool/template.php?s=elpole_kondenzator&l=en</a>`;
      break;
    case "3":
      frameCont.innerHTML = `<iframe src="https://www.vascak.cz/data/android/physicsatschool/template.php?s=ele_odpor&l=en" frameborder="0" class="frame" allow="fullscreen" scrolling="yes"></iframe>
      <br>
      <p><b>Este simulador fue tomado de:</b></p> <a href="https://www.vascak.cz/data/android/physicsatschool/template.php?s=ele_odpor&l=en" target="_blank">https://www.vascak.cz/data/android/physicsatschool/template.php?s=ele_odpor&l=en</a>`;
      break;
  }
});
