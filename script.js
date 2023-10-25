"use strict";
let interMiami = 11;
let fcDallas = 11;
let messi = 1;
let juegaMessi = true;
function jugar(equipo1, equipo2, juegaMessi) {
    if (juegaMessi)
        equipo1 += messi;
    if (equipo1 > equipo2)
        console.log('Gana Inter Miami');
    if (equipo1 = equipo2)
        console.log('Empatan');
    if (equipo1 < equipo2)
        console.log('Gana FC Dallas');
}
jugar(interMiami, fcDallas, juegaMessi);
