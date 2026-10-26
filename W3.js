
document.getElementById("somma").onclick = function() {
    const n1 = Number(document.getElementById("txt1").value);
    const n2 = Number(document.getElementById("txt2").value);

    const risultato = n1 + n2;

    document.getElementById("risultato").textContent = risultato;
};

document.getElementById("diff").onclick = function() {
    const n1 = Number(document.getElementById("txt1").value);
    const n2 = Number(document.getElementById("txt2").value);

    const risultato = n1 - n2;

    document.getElementById("risultato").textContent = risultato;
};
document.getElementById("molt").onclick = function() {
    const n1 = Number(document.getElementById("txt1").value);
    const n2 = Number(document.getElementById("txt2").value);

    const risultato = n1 * n2;

    document.getElementById("risultato").textContent = risultato;
};
document.getElementById("diff").onclick = function() {
    const n1 = Number(document.getElementById("txt1").value);
    const n2 = Number(document.getElementById("txt2").value);

    const risultato = n1 - n2;

    document.getElementById("risultato").textContent = risultato;
};
document.getElementById("div").onclick = function() {
    const n1 = Number(document.getElementById("txt1").value);
    const n2 = Number(document.getElementById("txt2").value);

    const risultato = n1 / n2;

    document.getElementById("risultato").textContent = risultato;
};
