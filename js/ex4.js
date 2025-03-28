const form = document.getElementById('sampleForm');
const table = document.getElementById('dataTable');
const tbody = table.querySelector('tbody');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    tbody.innerHTML = '';

    const formData = new FormData(form);

    for (let [key, value] of formData.entries()) {
        const row = document.createElement('tr');

        const keyCell = document.createElement('td');
        keyCell.textContent = key;

        const valueCell = document.createElement('td');
        valueCell.textContent = value;

        row.appendChild(keyCell);
        row.appendChild(valueCell);
        tbody.appendChild(row);
    }

    table.style.display = 'table';
});
