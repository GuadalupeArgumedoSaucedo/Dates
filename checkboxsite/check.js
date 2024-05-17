"use strict";

// Defining global variables
let extraPerDay = 0;
const OUTPUTELEMENT = document.getElementById("output");

window.onload = function () {
    // Getting the elements by their Ids
    const govtChkBox = document.getElementById("govt");
    const tt = document.getElementById("tollTag");
    const g = document.getElementById("gps");
    const rs = document.getElementById("roadside");
    const w = document.getElementById("wifi");

    // Assign the "onclick" for the elements to respective functions
    govtChkBox.onclick = onGovtChkBoxClicked;
    g.onclick = () => toggleOption(g, 4.95);
    tt.onclick = () => toggleOption(tt, 3.95);
    rs.onclick = () => toggleOption(rs, 2.95);
    w.onclick = () => toggleOption(w, 10.00);
};

// Generic function to handle checkbox clicks
function toggleOption(element, amount) {
    if (element.checked) {
        extraPerDay += amount;
    } else {
        extraPerDay -= amount;
    }
    OUTPUTELEMENT.innerHTML = extraPerDay.toFixed(2);
}

// Using the onclick function with the govt box to check an additional checkbox (roadside assistance)
function onGovtChkBoxClicked() {
    const roadsideChkBox = document.getElementById("roadside");
    if (this.checked) {
        if (!roadsideChkBox.checked) {
            roadsideChkBox.checked = true;
            extraPerDay += 2.95;
        }
    } else {
        if (roadsideChkBox.checked) {
            roadsideChkBox.checked = false;
            extraPerDay -= 2.95;
        }
    }
    OUTPUTELEMENT.innerHTML = extraPerDay.toFixed(2);
}
