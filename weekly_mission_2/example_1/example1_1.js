console.log("Alooo")

const myFirstProject = {}

console.log(`1. Objeto vacío: ${myFirstProject}`)

console.log(myFirstProject)

const alumno ={
    name: "Erick",
    first_name:"Martinez",
    last_name:"Lopez",
    blog:{
        url:"https://"
    }
}

console.log(alumno)
console.log(alumno.name)


class Ajolonauta {
    constructor(name, mision, age, color){
        this.name = name,
        this.mision = mision,
        this.age = age,
        this.color = color
    }
    sayHello(){
        return `${this.name} te dice hola enfermera`
    }
}

const woopa = new Ajolonauta("Erick", "Lunar", 28, "Blue")
console.log(woopa.name)

woopa.name ="Manuelito"

console.log(woopa.name)

console.log(woopa.sayHello())