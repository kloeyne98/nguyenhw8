// fetch data and populate the table
fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json")
    .then(response => response.json())
    .then(paintings => {
        const table = document.getElementById("paintings"); // get table

        paintings.forEach(painting => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${painting.name}</td>
                <td>${painting.year}</td>
                <td>${painting.artist}</td>
            `;
            table.appendChild(row);
        });
    })
    .catch(error => console.error("Error fetching paintings:", error));
