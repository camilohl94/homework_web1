let total = 95;

function sumarIva(){
    
   return total +10;
}
function sumarImpuesto(){
    
     return total +10;
}


const iva = sumarIva();
const impuesto = sumarImpuesto();


console.log("el total sin modificarse con precio del iva: " + total);
console.log("el total  del iva: " + iva);





