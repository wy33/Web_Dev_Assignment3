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

        cell.setAttribute("bgcolor", "FFFFFF");//creates the cell with a default white color
        cell.addEventListener("click", setColor); //creates a listener for each cell to set its color
    }
    // Add empty row
    else {
        for(let i = 0; i < cols; i++) {
            let cell = row.insertCell(i);

            cell.setAttribute("bgcolor", "FFFFFF");//creates the cell with a default white color
            cell.addEventListener("click", setColor); //creates a listener for each cell to set its color
        }
    }
});

const addColButton = document.body.querySelector("#add-col");
addColButton.addEventListener("click", () => {
    // Create first row if none exist (and column)
    if (rows === 0) {
        let row = table.insertRow(0);
        let cell = row.insertCell(0);

        cell.setAttribute("bgcolor", "FFFFFF"); //creates the cell with a default white color
            cell.addEventListener("click", setColor); //creates a listener for each cell to set its color
        rows += 1;
    }
    // Add empty column
    else {
        // Loop through rows and APPEND the column cells to the right
        for(let i = 0; i < rows; i++) {
            let cell = table.rows[i].insertCell(cols);   // APPEND a cell to the right
            cell.setAttribute("bgcolor", "FFFFFF"); //creates the cell with a default white color
            cell.addEventListener("click", setColor); //creates a listener for each cell to set its color
        }
    }
    cols += 1;
});

function setColor(evt) {
    const color = document.body.querySelector("#color-picker").value; //this is the current color of the color-picker
    evt.target.setAttribute("bgcolor", color);
}

const allColorButton = document.body.querySelector("#color-all");
allColorButton.addEventListener("click", () => {
    const color = document.body.querySelector("#color-picker").value;
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            table.rows[i].cells[j].setAttribute("bgcolor", color);
        }
    }
});

const allUncoloredButton = document.body.querySelector("#color-uncolored");
allUncoloredButton.addEventListener("click", () => {
    const color = document.body.querySelector("#color-picker").value;
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(table.rows[i].cells[j].getAttribute("bgcolor") == "FFFFFF") {
                table.rows[i].cells[j].setAttribute("bgcolor", color);
            }
        }
    }
});

const clearAllButton = document.body.querySelector("#clear");
clearAllButton.addEventListener("click", () => {
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            table.rows[i].cells[j].setAttribute("bgcolor", "FFFFFF");
        }
    }
});