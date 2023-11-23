




function Nacimiento() {

    let fnaci=prompt("ingrese su fecha de nacimiento-año-mes-dia")
    let fNaci= Date.parse(fnaci)
    let fnacimiento= new Date(fNaci)
    let diasem= fnacimiento.getDay()
    console.log(diasem)
    const dsemana =["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado"]
    let dsema= fnacimiento.getDay()
    console.log("Tu día de nacimiento fue-"+dsemana[diasem])
    alert("Naciste un día_"+dsemana[diasem])


}
Nacimiento()

let activa=  prompt("Ingresa el valor de potencia activa del mes")
    let reactiva=  prompt("Ingrese el valor de potencia reactiva del mes")

function cosdephi(){
    let cosdephi=((activa) / Math.sqrt((activa*activa)+(reactiva*reactiva)))
    let valor= cosdephi.toFixed(3)
    alert("_el cos de phi es_" + valor)
    console.log(valor)
}
cosdephi()

class Estacion{
    constructor(unidad,potencia,numeroEquipos,codigo, nombre){
        this.unidad=unidad
        this.potencia=potencia
        this.numeroEquipos=numeroEquipos
        this.codigo=codigo
        this.nombre=nombre
    }
}

const Estacion1= new Estacion("ufc","100kw","4","cs","colombes")
const Estacion2=new Estacion("ufp","60kw","2","co","colón")
const Estacion3= new Estacion("ufm","180kw","4","pa","pantanoso")
const Estacion4=new Estacion("ufpa","200kw", "3","ch","chacarita")


const estaciones=[Estacion1,Estacion2,Estacion3,Estacion4]



class Equipos{
    constructor(marca, modelo, codigo, estacion, nombre){
        this.marca=marca
        this.modelo=modelo 
        this.codigo=codigo
        this.estacion=estacion
        this.nombre=nombre
    }
}

const equipo1= new Equipos("flowserver","m4","ebp01","cs","bp1")
const equipo2= new Equipos("flowserver","m4","ebp02","cs","bp2")
const equipo3= new Equipos("flowserver","m4","ebp03","cs","bp3")
const equipo4= new Equipos("flowserver","m4","ebp04","cs","bp4")
const equipo5= new Equipos("goulds","v3","ebp01","co","bp1")
const equipo6= new Equipos("goulds","v3","ebp02","co","bp2")
const equipo7= new Equipos("flygt","3201","ebp01","pa","bp1")
const equipo8= new Equipos("flygt","3201","ebp02","pa","bp2")
const equipo9= new Equipos("flygt","3201","ebp03","pa","bp3")
const equipo10= new Equipos("flygt","3201","ebp04","pa","bp4")
const equipo11= new Equipos("ksb","amacan","ebp01","ch","bp1")
const equipo12= new Equipos("ksb","amacan","ebp02","ch","bp2")
const equipo13= new Equipos("ksb","amacan","ebp03","ch","bp3")

const equipos=[equipo1,equipo2,equipo3,equipo4,equipo5,equipo6,equipo7,equipo8,equipo9,equipo10,equipo1,equipo12,equipo13]


equipos.forEach((equipo,indice) => {
    console.log(equipo,indice) 
})
estaciones.forEach((estacion,indice)=>{
    console.log(estacion,indice)
})

console.log(estaciones.find(estacion=> estacion.unidad==="ufp"))

console.log(estaciones.filter(equipo=>equipo.potencia>="60kw"))

const nombres = estaciones.map(estacion => estacion.nombre)
console.log(nombres)

const ubicacion = estaciones.map(estacion => estacion.unidad)
console.log(ubicacion)

const Marcas = equipos.map(estacion => estacion.marca)
console.log(Marcas)
