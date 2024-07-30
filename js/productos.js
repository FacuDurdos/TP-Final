
let almacen = ["nacho", "facu", "emi", "ian", "piscu"];
let bebidas = ["nacho", "facu", "emi", "ian", "piscu"];
let frescos = ["nacho", "facu", "emi", "ian", "piscu"];
let limpieza = ["nacho", "facu", "emi", "ian", "piscu"];
let hogar = ["nacho", "facu", "emi", "ian", "piscu"];
let preciosAlmacen = [1, 2, 3, 4, 5];
let preciosBebidas = [2000, 3000, 4000, 5000, 6000];
let preciosFrescos = [1, 2, 3, 4, 5];
let preciosLimpieza = [1, 2, 3, 4, 5];
let preciosHogar = [1, 2, 3, 4, 5];
let stockAlmacen = [5, 5, 5, 5, 5];
let stockBebidas = [5, 5, 5, 5, 5];
let stockFrescos = [5, 5, 5, 5, 5];
let stockLimpieza = [5, 5, 5, 5, 5];
let stockHogar = [5, 5, 5, 5, 5];
let total = 0

let llenarProductos = function (categoria, productos, precios, stock) {
   let padre = document.getElementById(categoria)
   for (let i = 0; i < productos.length; i++) {
      let card = padre.children[i];
      card.getElementsByTagName("h1")[0].innerHTML = productos[i]
      card.getElementsByTagName("h2")[0].innerHTML = `$ ${precios[i]}`
      card.getElementsByTagName("h4")[0].innerHTML = `Productos disponibles: ${stock[i]}`
      card.getElementsByTagName("button")[0].addEventListener("click",()=>comprar(card, i, precios, stock))
   }
}

let comprar = function (card, i, precios, stock) {
   let cantidad = card.getElementsByTagName("input")[0].value
   if (cantidad > 0 && stock[i] >= cantidad) {
      total += cantidad * precios[i]
      stock[i] -= cantidad
      card.getElementsByTagName("h4")[0].innerHTML = stock[i]
   } else {
      alert("ingrese una cantidad mayor a cero o no hay stock disponible")
   }
}



llenarProductos("almacen", almacen, preciosAlmacen, stockAlmacen);
llenarProductos("bebidas", bebidas, preciosBebidas, stockBebidas);
llenarProductos("frescos", frescos, preciosFrescos, stockFrescos);
llenarProductos("limpieza", limpieza, preciosLimpieza, stockLimpieza);
llenarProductos("hogar", hogar, preciosHogar, stockHogar);

let finalizarCompra = document.getElementById("finalizarCompra")
finalizarCompra.addEventListener("click", () => alert(`Productos comprados: Total $${total}`))
