let productos = [270,340,390]
let plantilla = ""
let i = 1
for (i in productos) {
    plantilla += Number(i)+1 + ". $" + productos[i]  + "\n"
} 
let monedas = [100,50,10]
let valor= 0
let suma = 0
let resto = 0
let vueltos = 0
let resultado = 0
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
while (confirm("*** Bienvenido a nuestra maquina de alimentos ***\n¿Desea adquirir algun producto?")){
    let opcion = Number(prompt("Por favor escoja uno de nuestros productos 1, 2 o 3\n"+ plantilla))
    switch (opcion) {
        case 1:
            alert("El producto que haz elegido tiene un valor de $270\nSolo se aceptan pagos en monedas de $10, $50 y $100")
            valor= 0
            suma = 0
            resto = 270
            while (suma < 270){
                resto = resto - valor
                valor = Number(prompt(`Ingrese Moneda, le faltan $${resto}`))
                if (valor === 10 || valor === 50 || valor === 100){
                    suma = suma + valor
                }
                else {
                    alert("El valor ingresado es invalido")
                    valor = 0
                }
            }
                vueltos = 0
                vueltos = suma - 270
                alert(`Le sobran: $${vueltos}`)
                resultado = darCambio(vueltos);
                alert(`Sus vueltos son ${resultado.length} monedas de ${resultado} respectivamente`)
                break
        case 2:
            alert("El producto que haz elegido tiene un valor de $340\nSolo se aceptan pagos en monedas de $10, $50 y $100")
            valor= 0
            suma = 0
            resto = 340
            while (suma < 340){
                resto = resto - valor
                valor = Number(prompt(`Ingrese Moneda, le faltan $${resto}`))
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
        case 3:
            alert("El producto que haz elegido tiene un valor de $390\nSolo se aceptan pagos en monedas de $10, $50 y $100")
            valor= 0
            suma = 0
            resto = 390
            while (suma < 390){
                resto = resto - valor
                valor = Number(prompt(`Ingrese Moneda, le faltan $${resto}`))
                if (valor === 10 || valor === 50 || valor === 100){
                    suma = suma + valor}
                else {
                    alert("El valor ingresado es invalido")
                    valor = 0
                }
            }
                vueltos = 0
                vueltos = suma - 390
                alert(`Le sobran: $${vueltos}`)
                resultado = darCambio(vueltos);
                alert(`Sus vueltos son ${resultado.length} monedas de ${resultado} respectivamente`)
                break
        default: alert("Opcion no valida") 
        break    
    }
}