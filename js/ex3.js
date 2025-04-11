const countries = [];

function addCountry() {
    const countryName = document.getElementById("country").value.trim();
    const yearVisited = document.getElementById("year").value.trim();

    if (!countryName || !yearVisited) {
        console.error("Please enter both country name and year.");
        return;
    }

    countries.push({ name: countryName, year: parseInt(yearVisited) });

    document.getElementById("countryDisplay").innerHTML += `<li>${countryName} (Visited in ${yearVisited})</li>`;

    document.getElementById("country").value = "";
    document.getElementById("year").value = "";
}

function sendData() {
    const userName = document.getElementById("name").value.trim();
    
    if (!userName || countries.length === 0) {
        console.error("Please enter your name and at least one country.");
        return;
    }

    const data = {
        name: userName,
        countries: countries
    };

      // Send form data to the server with an asynchronous POST request
    fetch("https://thejsway-server.herokuapp.com/api/countries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
        .then(response => response.text())
        .then(result => { 
            console.log(result.message);
        })
        .catch(error => {
            console.error(err.message);
        });

};
