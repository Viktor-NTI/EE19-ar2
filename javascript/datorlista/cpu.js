// Hitta element vi behöver
const rutNamn = document.querySelector("input");
const meny = document.querySelector("select");
const knapp = document.querySelector("button");
const lista = document.querySelector("ul");

// Vad händer när man klickar på knappen?
knapp.addEventListener("click",function () {
    console.log("Du har klickat på knappen!")

    // Läs av textrutan och lagra i en variabel
    var namn = rutNamn.value;
    console.log(namn);

    // Läs in valet i meny
    var cpu = meny.value;
    console.log(cpu);

    // Skriv i ul-listan
    if (cpu == "Ryzen3") {
        lista.innerHTML = "<li>" + 
                    "<img src\" https://inetimg2.se/img/688x386/5303156_0.jpg +
                    "AMD Ryzen 3 3300X 3.8GHz 18MB<br>" +
                    "Antal kärnor: 4 st | Antal trådar: 8 st | TDP 65 W +
                    "</li>";
    }
    if (cpu == "Ryzen5") {
        lista.innerHTML = "<li>" + 
                    "<img src\" https://inetimg2.se/img/688x386/5303474_3.jpg +
                    "AMD Ryzen 5 5600X 3.7 GHz 35MB<br>" +
                    "Antal kärnor: 6 st | Antal trådar: 12 st | TDP 65 W" +
                    "</li>";
    }
    if (cpu == "Ryzen7") {
        lista.innerHTML = "<li>" + 
                    "<img src\" https://inetimg2.se/img/688x386/5303156_0.jpg +
                    "AMD Ryzen 7 3800XT 3.9GHz 36MB<br>" +
                    "Antal kärnor: 8 st | Antal trådar: 16 st | TDP: 105 W" +
                    "</li>";
    }
  
});