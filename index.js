let table = document.body.querySelector("#grid");   // Get table object
let rows = 0;   // Rows counter
let cols = 0;   // Columns counter

const addRowButton = document.body.querySelector("#add-row");
addRowButton.addEventListener("click", () => {
    let row = table.insertRow(rows);    // APPEND a row at the bottom
    rows += 1;

    // Create first column if none exist
    if(cols === 0) {
        let cell = row.insertCell(0);

        cols += 1;

        cell.setAttribute("bgcolor", "FFFFFF");
    }
    // Add empty row
    else {
        for(let i = 0; i < cols; i++) {
            let cell = row.insertCell(i);

            cell.setAttribute("bgcolor", "FFFFFF");
        }
    }
});

const addColButton = document.body.querySelector("#add-col");
addColButton.addEventListener("click", () => {
    // Create first row if none exist (and column)
    if (rows === 0) {
        let row = table.insertRow(0);
        let cell = row.insertCell(0);

        cell.setAttribute("bgcolor", "FFFFFF");

        rows += 1;
    }
    // Add empty column
    else {
        // Loop through rows and APPEND the column cells to the right
        for(let i = 0; i < rows; i++) {
            let cell = table.rows[i].insertCell(cols);   // APPEND a cell to the right
            cell.setAttribute("bgcolor", "FFFFFF");
        }
    }
    cols += 1;
});


const removeRowButton = document.body.querySelector("#rem-row");
removeRowButton.addEventListener("click", () => {
    if (rows > 0) {
        table.deleteRow(rows - 1);
        rows -= 1;
        if (rows === 0) {
            cols = 0;
        }
    }
});

const removeColumnButton = document.body.querySelector("#rem-col");
removeColumnButton.addEventListener("click", () => {
    if (cols > 0) {
        for (let i = 0; i < rows; i++) {
            table.rows[i].deleteCell(cols - 1);
        }
        cols -= 1;
        if (cols === 0) {
            rows = 0;
        }
    }
});