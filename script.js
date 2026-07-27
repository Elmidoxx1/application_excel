const fichierExcel = "قائمة توزيع سفيان.xlsx";

fetch(fichierExcel)
.then(response => response.arrayBuffer())
.then(data => {

    const workbook = XLSX.read(data, {
        type: "array"
    });

    const feuille = workbook.Sheets[workbook.SheetNames[0]];

    const lignes = XLSX.utils.sheet_to_json(feuille);

    const tableau = document.getElementById("tableau");


    lignes.forEach(ligne => {

        let tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${Object.values(ligne)[0] || ""}</td>
            <td>${Object.values(ligne)[1] || ""}</td>
            <td>${Object.values(ligne)[2] || ""}</td>
        `;

        tableau.appendChild(tr);

    });

});
