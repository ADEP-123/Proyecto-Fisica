function mapa(vect1, vect2, titulo) {
  document.getElementById(
    "chartCont"
  ).innerHTML = `<canvas id="myChart"></canvas>`;
  const labels1 = vect2;
  const data1 = {
    labels: labels1,
    datasets: [
      {
        label: titulo,
        data: vect1,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  const config1 = {
    type: "line",
    data: data1,
  };
  new Chart("myChart", config1);
}
function ordenar(vector) {
  let aux;
  for (let i = 0; i < vector.length - 1; i++) {
    for (let j = i + 1; j < vector.length; j++)
      if (Number(vector[i]) > Number(vector[j])) {
        aux = Number(vector[i]);
        vector[i] = Number(vector[j]);
        vector[j] = aux;
      }
  }
}
const valor = document.getElementById("value");
const tipo = document.getElementById("tipo");
const datSec = document.getElementById("datsec");

valor.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  if (valor.value === "1" || valor.value === "2") {
    tipo.removeAttribute("disabled");
  } else if (valor.value === "3") {
    datSec.innerHTML = `
    <table>
        <thead>
            <tr>
                <th>Intensidad</th>
                <th>Resistencia</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <input type="number" id="dato1">
                </td>
                <td>
                    <input type="number" id="dato2">
                </td>
            </tr>
        </tbody>
    </table>
    <br><br><br><br>
    <button type="button" class="btn btn-outline-light" id="calcular2">Calcular</button>
    <h1 id="resultado">Voltaje:</h1>
`;
  } else {
    tipo.setAttribute("disabled", "true");
    tipo.value = "1";
    document.getElementById("chartCont").setAttribute("hidden", "true");
    document.getElementById("imgleyohm").removeAttribute("hidden");
    datSec.innerHTML = `

        `;
  }
});

tipo.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  if (tipo.value === "2") {
    document.getElementById("chartCont").removeAttribute("hidden");
    document.getElementById("imgleyohm").setAttribute("hidden", "true");
    if (valor.value === "1") {
      datSec.innerHTML = `
        <p>Escriba los voltajes en voltios separados por coma</p><input type="text" id="volt">
        <p>Escriba las corrientes en amperios separadas por comas</p><input type="text" id="res">
        <button type="button" class="btn btn-outline-light" id="calcular">Calcular</button>
        <h1 id="result">Resistencia: </h1>`;
    } else {
      datSec.innerHTML = `
        <p>Escriba los voltajes en voltios separados por coma</p><input type="text" id="volt">
        <p>Escriba las resistencias en ohmios separadas por comas</p><input type="text" id="res">
        <button type="button" class="btn btn-outline-light" id="calcular">Calcular</button>
        <h1 id="result">Corriente: </h1>`;
    }

    const enviar = document.getElementById("calcular");
    enviar.addEventListener("click", (f) => {
      f.stopPropagation();
      f.preventDefault();

      const volt = document.getElementById("volt").value;
      const res = document.getElementById("res").value;
      let voltArray = volt.split(",");
      let resArray = res.split(",");
      ordenar(voltArray);
      ordenar(resArray);
      if (valor.value === "1") {
        mapa(voltArray, resArray, "Voltaje Vs Corriente");
      } else {
        mapa(voltArray, resArray, "Voltaje Vs Resistencia");
      }
      let n;
      if (voltArray.length < resArray.length) {
        n = voltArray.length;
      }
      n = resArray.length;
      let sumxy = 0;
      let sumx = 0;
      let sumy = 0;
      let sumxcuad = 0;
      for (let i = 0; i < n; i++) {
        sumxy += voltArray[i] * resArray[i];
        sumx += resArray[i];
        sumy += voltArray[i];
        sumxcuad += voltArray[i] ** 2;
      }
      let sumxalcuad = sumx ** 2;
      let pend = (n * sumxy - sumx * sumy) / (n * sumxcuad - sumxalcuad);
      if (valor.value === "1") {
        document.getElementById("result").innerHTML = `Resistencia: ${pend}`;
      } else document.getElementById("result").innerHTML = `Corriente: ${pend}`;
    });
  } else {
    document.getElementById("chartCont").setAttribute("hidden", "true");
    document.getElementById("imgleyohm").removeAttribute("hidden");
    if (valor.value === "1") {
      datSec.innerHTML = `
    <table>
        <thead>
            <tr>
                <th>Voltaje</th>
                <th>Intensidad</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <input type="number" id="dato1">
                </td>
                <td>
                    <input type="number" id="dato2">
                </td>
            </tr>
        </tbody>
    </table>
    <br><br><br><br>
    <button type="button" class="btn btn-outline-light" id="calcular2">Calcular</button>
    <h1 id="resultado">Resistencia:</h1>
`;
    } else if (valor.value === "2") {
      datSec.innerHTML = `
    <table>
        <thead>
            <tr>
                <th>Voltaje</th>
                <th>Resistencia</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <input type="number" id="dato1">
                </td>
                <td>
                    <input type="number" id="dato2">
                </td>
            </tr>
        </tbody>
    </table>
    <br><br><br><br>
    <button type="button" class="btn btn-outline-light" id="calcular2">Calcular</button>
    <h1 id="resultado">Corriente:</h1>
`;
    }
    const enviar = document.getElementById("calcular2");
    enviar.addEventListener("click", (z) => {
      z.preventDefault();
      z.stopPropagation();
      const dato1 = Number(document.getElementById("dato1").value);
      const dato2 = Number(document.getElementById("dato2").value);
      let result;
      switch (valor.value) {
        case "1":
          result = dato1 / dato2;
          document.getElementById("resultado").innerHTML = `Resistencia: ${result}`
          break;

        case "2":
          result = dato1 / dato2;
          document.getElementById("resultado").innerHTML = `Corriente: ${result}`
          break;

        case "3":
          result = dato1 * dato2;
          document.getElementById("resultado").innerHTML = `Voltaje: ${result}`
          break;
      }
    });
  }
});
