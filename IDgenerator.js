// NO_CB_FACTORS: Number of different counterbalancing factors
const NO_CB_FAKTORS = 32;

// EX_CB_FACTORS: permutation modulos already finished (Integer array of values 0 up to (NOT INCLUSIVE) NO_CB_FAKTORS)
const EX_CB_FAKTORS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// NOISE: if you want the subject IDs to have a high range, change this parameter
const NOISE = 90;

// OFFSET: if you want the subject IDs to start at an specific value
const OFFSET = 3000;

// ~~~~~~~~~ you should never need to change those! ~~~~~~~~~
function displayIt() {
    var instrID = document.getElementById("instrID");
    var divID = document.getElementById("divID");
    var btnID = document.getElementById("btnID");
    instrID.innerHTML = "Please note down this number and return to the ePrime GO window";

    divID.innerHTML = getNextSubjectID().toString();

    btnID.innerHTML = "Done";
    btnID.classList = btnID.classList + " btn-success ";
    btnID.onclick = null; // prohibit multiple clickings
    btnID.hidden = true;

    console.log("displayIt successfully executed");
}

function getNextSubjectID() {
    var id = getRndInteger(1, NO_CB_FAKTORS*NOISE) + OFFSET;
    var i = 0;
    while (EX_CB_FAKTORS.includes(id % NO_CB_FAKTORS)) {
        i++;
        if (i > 1000) {
            return 9999; // this should never happen if you specified the parameters correctly!
        }
        id = getRndInteger(1, NO_CB_FAKTORS*NOISE) + OFFSET;
    }
    console.log("getNextSubjectID successfully executed");
    return id;
}


function getRndInteger(min, max) {
    var returnValue = Math.floor(Math.random() * (max - min + 1) ) + min;
    console.log("getRndInteger successfully executed");
    return returnValue;
}

