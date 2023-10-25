let interMiami: number = 11
let fcDallas: number = 11
let messi: number = 1
let juegaMessi: boolean = true

function jugar(equipo1: number, equipo2: number, juegaMessi: boolean): void{
    if(juegaMessi) equipo1 += messi
    if(equipo1 > equipo2) console.log('Gana Inter Miami')
    if(equipo1 = equipo2) console.log('Empatan')
    if(equipo1 < equipo2) console.log('Gana FC Dallas')
}
jugar(interMiami, fcDallas, juegaMessi)