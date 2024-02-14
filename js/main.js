let productos = [270,340,390]
let plantilla = ""
let i = 1
for (i in productos) {
    plantilla += Number(i)+1 + " .$" + productos[i]  + "\n"
} 
console.log(plantilla)

let opcion = Number(prompt("*** Bienvenido a nuestra maquina de alimentos ***\n Por favor escoja uno de nuestros productos 1, 2 o 3\n"+ plantilla))
let monedas = [100,50,10]
let valor= 0
let suma = 0
let resto = 0
let vueltos = 0
let resultado = 0
switch (opcion) {
    case 1:
        console.log("El producto que haz elegido tiene un valor de $270\nSolo se aceptan pagos en monedas de $10, $50 y $100")
        valor= 0
        suma = 0
        resto = 270
        while (suma < 270){
            resto = resto - valor
            valor = Number(prompt(`Ingrese Moneda, le faltan ${resto}`))
            if (valor === 10 || valor === 50 || valor === 100){
                suma = suma + valor}
            else {
                alert("El valor ingresado es invalido")
                valor = 0
            }
        }
            vueltos = 0
            vueltos = suma - 270
            alert(`Le sobran: $${vueltos}`)
            function darCambio(vueltos){
                let resultado = [];
                for (let moneda of monedas){
                    while (vueltos >= moneda){
                        resultado.push(moneda);
                        vueltos -= moneda;
                    }
                }
                return resultado;
            }
            resultado = darCambio(vueltos);
            alert(`Sus vueltos son ${resultado.length} monedas de ${resultado} respectivamente`)
            break
    case 2:
        console.log("El producto que haz elegido tiene un valor de $270\nSolo se aceptan pagos en monedas de $10, $50 y $100")
        valor= 0
        suma = 0
        resto = 340
        while (suma < 340){
            resto = resto - valor
            valor = Number(prompt(`Ingrese Moneda, le faltan ${resto}`))
            if (valor === 10 || valor === 50 || valor === 100){
                suma = suma + valor}
            else {
                alert("El valor ingresado es invalido")
                valor = 0
            }
        }
            vueltos = 0
            vueltos = suma - 340
            alert(`Le sobran: $${vueltos}`)
            resultado = darCambio(vueltos);
            alert(`Sus vueltos son ${resultado.length} monedas de ${resultado} respectivamente`)
            break        
}