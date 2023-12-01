const container = document.querySelector(".container");
fetch("https://restcountries.com/v3.1/all")
    .then((data) => {
        return data.json()
    }).then((element) => {
        console.log(element);
        for (let i = 0; i < element.length; i++){
            const div = document.createElement("div");
            div.setAttribute("class", "card");
            div.classList.add("col-lg-3");
            div.innerHTML = `
            <div class="card">
            <h1 id="title" class="text-center">${element[i].name.common}</h1></div>
            <img src="${element[i].flags.png}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">Captial: ${element[i].capital}</p>
                <p class="card-text">Region: ${element[i].region}</p>
                <p class="card-text">Country code: ${element[i].subregion}<p>
            </div>
            <button type="button" id="button" class="btn btn-primary" onclick="getWeather('${element[i].capitalInfo.latlng}')">Click for weather</button>`
            container.append(div);
        }
    })
function getWeather(latlng) {
    const latLng = latlng.split(",");
    let lat = latLng[0];
    let lng = latLng[1];
    let key = "b21f5e99aec3818c2acfeb2034051e9a";
    console.log(lat, lng);
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${key}`)
        .then((data) => data.json()).then((element) => {
            console.log(element)
        })
   
}


