
let currentStep = 1;
let fahrten = [];
let kinder = [];

function showStep(n) {
    document.querySelectorAll('.step').forEach((el, i) => {
        el.classList.remove('active');
        if (i === n - 1) el.classList.add('active');
    });
}

function nextStep() {
    currentStep++;
    if (currentStep === 6) showSummary();
    showStep(currentStep);
}

function goToStart() {
    currentStep = 1;
    fahrten = [];
    kinder = [];
    document.getElementById("fahrtenListe").innerHTML = "";
    document.getElementById("kinderListe").innerHTML = "";
    showStep(currentStep);
}

function addFahrt() {
    const f = {
        start: document.getElementById("startort").value,
        ziel: document.getElementById("zielort").value,
        km: parseFloat(document.getElementById("kilometer").value)
    };
    fahrten.push(f);
    const li = document.createElement("li");
    li.textContent = `${f.start} → ${f.ziel}: ${f.km} km`;
    document.getElementById("fahrtenListe").appendChild(li);
}

function addKind() {
    const k = {
        name: document.getElementById("kindName").value,
        geburtsdatum: document.getElementById("kindGeburtsdatum").value,
        kindergeld: document.getElementById("kindergeld").checked
    };
    kinder.push(k);
    const li = document.createElement("li");
    li.textContent = `${k.name}, geb. ${k.geburtsdatum} (${k.kindergeld ? "Kindergeld" : "kein Kindergeld"})`;
    document.getElementById("kinderListe").appendChild(li);
}

function showSummary() {
    const summary = {
        steuerjahr: document.getElementById("steuerjahr").value,
        fahrzeug: {
            hersteller: document.getElementById("hersteller").value,
            modell: document.getElementById("modell").value,
            baujahr: document.getElementById("baujahr").value,
            kraftstoff: document.getElementById("kraftstoff").value,
            verbrauch: document.getElementById("verbrauch").value
        },
        fahrten,
        kinder
    };
    document.getElementById("summary").textContent = JSON.stringify(summary, null, 2);
}
