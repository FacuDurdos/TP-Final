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
   let todasTarjetas = ""
   let padre = document.getElementById(categoria);
   for (let i = 0; i < productos.length; i++) {
      todasTarjetas += `
      <div class="card">
         <h1 class="nombre">${productos[i]}</h1>
         <h2 class="precio">$ ${precios[i]}</h2>
         <h4 class="stock">Productos disponibles: ${stock[i]}</h4>
         <form>
            <input type="number" min=0 value="0" name="cantidad">
            <input type="submit" value="COMPRAR">
         </form>
      </div>
      `
      padre.innerHTML = todasTarjetas
   }
};

let agregarCompra = function () {
   let forms = document.querySelectorAll("form");
   forms.forEach(element => {
      element.addEventListener("submit",(e) =>{
         e.preventDefault()
         let card = element.parentElement
         let precioString = card.getElementsByTagName("h2")[0].innerText
         let stockString = card.getElementsByTagName("h4")[0].innerText
         let precio = Number(precioString.slice(2))
         let cantidad = Number(element.children[0].value)
         let stock = Number(stockString.slice(23))
         comprar(card,precio,stock,cantidad)
      } ) 
   })
}

let comprar = function (card,precio,stock,cantidad) {
   if (cantidad > 0 && stock >= cantidad) {
      total += cantidad * precio;
      stock -= cantidad;
      card.getElementsByTagName("h4")[0].innerHTML =`Productos disponibles: ${stock}`;
   } else {
      alert("ingrese una cantidad mayor a cero o no hay stock disponible");
   }
};



llenarProductos("almacen", almacen, preciosAlmacen, stockAlmacen);
llenarProductos("bebidas", bebidas, preciosBebidas, stockBebidas);
llenarProductos("frescos", frescos, preciosFrescos, stockFrescos);
llenarProductos("limpieza", limpieza, preciosLimpieza, stockLimpieza);
llenarProductos("hogar", hogar, preciosHogar, stockHogar);

agregarCompra()

let finalizarCompra = document.getElementById("finalizarCompra");
finalizarCompra.addEventListener("click", () => alert(`Productos comprados: Total $${total}`));
