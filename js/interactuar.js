let total = 95;

function sumarIva(){
    
   return total +10;
}
function sumarImpuesto(){
    
     return total +10;
}


const iva = sumarIva();
const impuesto = sumarImpuesto();
const general = iva +impuesto;


console.log("Valor total de la factura sin iva ni impuesto : " + total);
console.log("el total mas iva: " + iva);
console.log("el total mas impuesto: " + impuesto);






