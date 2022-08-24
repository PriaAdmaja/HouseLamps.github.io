let saklarRT1 = document.getElementById('saklar-rt1');
let saklarRT2 = document.getElementById('saklar-rt2');
let saklarRT3 = document.getElementById('saklar-rt3');
let saklarRK1 = document.getElementById('saklar-rk1');
let saklarRK2 = document.getElementById('saklar-rk2');
let saklarRK3 = document.getElementById('saklar-rk3');
let saklarKT1 = document.getElementById('saklar-kt1');
let saklarKT2 = document.getElementById('saklar-kt2');
let saklarD1 = document.getElementById('saklar-d1');
let saklarD2 = document.getElementById('saklar-d2');

let switchRT = document.getElementById('switch-rt');
let switchRK = document.getElementById('switch-rk');
let switchKT = document.getElementById('switch-kt');
let switchD = document.getElementById('switch-d');

let lampuRT1 = document.getElementById('lamp-rt1');
let lampuRT2 = document.getElementById('lamp-rt2');
let lampuRT3 = document.getElementById('lamp-rt3');
let lampuRK1 = document.getElementById('lamp-rk1');
let lampuRK2 = document.getElementById('lamp-rk2');
let lampuRK3 = document.getElementById('lamp-rk3');
let lampuKT1 = document.getElementById('lamp-kt1');
let lampuKT2 = document.getElementById('lamp-kt2');
let lampuD1 = document.getElementById('lamp-d1');
let lampuD2 = document.getElementById('lamp-d2');



function saklarUtama() {

    if (switchRT.checked) {
        saklarRT1.checked = true;
        saklarRT2.checked = true;
        saklarRT3.checked = true;
    } else {
        saklarRT1.checked = false;
        saklarRT2.checked = false;
        saklarRT3.checked = false;
    } if (switchRK.checked) {
        saklarRK1.checked = true;
        saklarRK2.checked = true;
        saklarRK3.checked = true;
    } else {
        saklarRK1.checked = false;
        saklarRK2.checked = false;
        saklarRK3.checked = false;
    } if (switchKT.checked) {
        saklarKT1.checked = true;
        saklarKT2.checked = true;
        
    } else {
        saklarKT1.checked = false;
        saklarKT2.checked = false;
    } if (switchD.checked) {
        saklarD1.checked = true;
        saklarD2.checked = true;
        
    } else {
        saklarD1.checked = false;
        saklarD2.checked = false;
    } 

    saklar();
}


function saklar() {

    if (saklarRT1.checked) {
        lampuRT1.src = 'asset/images/on.gif';
    } else {
        lampuRT1.src = 'asset/images/off.gif';
    } if (saklarRT2.checked) {
        lampuRT2.src = 'asset/images/on.gif';
    } else {
        lampuRT2.src = 'asset/images/off.gif';
    } if (saklarRT3.checked) {
        lampuRT3.src = 'asset/images/on.gif';
    } else {
        lampuRT3.src = 'asset/images/off.gif';
    } if (saklarRK1.checked) {
        lampuRK1.src = 'asset/images/on.gif';
    } else {
        lampuRK1.src = 'asset/images/off.gif';
    } if (saklarRK2.checked) {
        lampuRK2.src = 'asset/images/on.gif';
    } else {
        lampuRK2.src = 'asset/images/off.gif';
    } if (saklarRK3.checked) {
        lampuRK3.src = 'asset/images/on.gif';
    } else {
        lampuRK3.src = 'asset/images/off.gif';
    } if (saklarKT1.checked) {
        lampuKT1.src = 'asset/images/on.gif';
    } else {
        lampuKT1.src = 'asset/images/off.gif';
    } if (saklarKT2.checked) {
        lampuKT2.src = 'asset/images/on.gif';
    } else {
        lampuKT2.src = 'asset/images/off.gif';
    } if (saklarD1.checked) {
        lampuD1.src = 'asset/images/on.gif';
    } else {
        lampuD1.src = 'asset/images/off.gif';
    } if (saklarD2.checked) {
        lampuD2.src = 'asset/images/on.gif';
    } else {
        lampuD2.src = 'asset/images/off.gif';
    } if (saklarRT1.checked == false && saklarRT2.checked == false && saklarRT3.checked == false) {
        switchRT.checked = false;
    } else {
        switchRT.checked = true;
    } if (saklarRK1.checked == false && saklarRK2.checked == false && saklarRK3.checked == false) {
        switchRK.checked = false;
    } else {
        switchRK.checked = true;
    } if (saklarKT1.checked == false && saklarKT2.checked == false) {
        switchKT.checked = false;
    } else {
        switchKT.checked = true;
    } if (saklarD1.checked == false && saklarD2.checked == false) {
        switchD.checked = false;
    } else {
        switchD.checked = true;
    }
}
