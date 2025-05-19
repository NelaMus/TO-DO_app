const apiKey = 'ceb7c9609bc251b37fda2d9ccad58d05'; // Joseff Pavlicek Key

class Pocasi {
    constructor(teplota) {
        this.teplota = teplota;
    }
    doporuceni() {
        return "Užij si den!";
    }
}

class VelmiChladno extends Pocasi {
    doporuceni() {
        return "Vezmi si teplý kabát a šálu!";
    }
}

class Chladno extends Pocasi {
    doporuceni() {
        return "Vezmi si bundu a raději deštník s sebou!";
    }
}
class Přívětivo extends Pocasi {
    doporuceni() {
        return "Začíná být hezky, ale na mikinu nebo lehkou bundu nezapomeň!";
    }
}
class Teplo extends Pocasi {
    doporuceni() {
        return "Stačí lehké oblečení, užij si teplo!";
    }
}

class Horko extends Pocasi {
    doporuceni() {
        return "Nezapomeň na opalovací krém a dostatek vody!";
    }
}

function vytvorPocasiObjekt(teplota) {
    if (teplota < 0) {
        return new VelmiChladno(teplota);
    } else if (teplota < 10) {
        return new Chladno(teplota);
    } else if (teplota < 20) {
        return new Přívětivo(teplota);
    } else if (teplota < 30) {
        return new Teplo(teplota);
    } else {
        return new Horko(teplota);
    }
}

async function showWeatherBox(city = "České Budějovice") {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=cs`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Nelze načíst počasí");
        const data = await response.json();
        const { name, main, weather } = data;
        const pocasiObj = vytvorPocasiObjekt(main.temp);
        const html = `
            <div class="alert alert-info d-inline-block">
                <strong>${name}</strong><br>
                ${main.temp}°C<br> 
                ${weather[0].description}<br>
                <img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="ikona počasí">
                <div style="white-space:normal; word-break:break-word; margin-top:0.5em;">
                    <em>${pocasiObj.doporuceni()}</em>
                </div>
                <a href="/pocasi/" class="btn btn-sm btn-secondary mt-2">Detail</a>
            </div>
        `;
        document.getElementById('weatherBox').innerHTML = html;
    } catch (e) {
        document.getElementById('weatherBox').innerHTML = `<div class="alert alert-warning">Počasí nelze načíst</div>`;
    }
}

window.addEventListener('DOMContentLoaded', () => showWeatherBox());