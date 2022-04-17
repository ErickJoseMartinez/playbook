console.log("Hola Explorer")

let myCar = new Object()
myCar.model = "Audi"
// console.log(myCar)

const myModule = (() => {
    const privateFoo = "No quiero que vean esto"

    const exported = {
        publicFoo: "Quiero que vean"
    }

    return exported
})

console.log(myModule())
console.log(myModule().privateFoo)
console.log(myModule().publicFoo)