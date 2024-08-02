let imgAlmacen = ["/TP Final/img/atun.jpg", "/TP Final/img/arroz gallo oro.jpg", "/TP Final/img/aceite-natura-girasol-900cc.jpg", "/TP Final/img/fideos tirabuzon.jpg", "/TP Final/img/BIMBO_GRANDE_2023.png"]
let imgBebidas = ["/TP Final/img/coca.png", "/TP Final/img/sprite.jpg", "/TP Final/img/fanta.jpg", "/TP Final/img/quilmes.jpg", "/TP Final/img/quilmesnegra2.jpg"]
let imgFrescos = ["/TP Final/img/leche.png", "/TP Final/img/queso finlandia.jpeg", "/TP Final/img/queso rallado.jpeg", "/TP Final/img/banana.jpg", "/TP Final/img/palta.jpg"]
let imgLimpieza = ["/TP Final/img/cif.jpg", "/TP Final/img/lysoformo desinfectante.png", "/TP Final/img/quitamanchas.jpg", "/TP Final/img/rollo de cocina elegante.png", "/TP Final/img/raid insectisida.jpg"]
let imgHogar = ["/TP Final/img/lagotita.png", "/TP Final/img/bolsas ziploc.jpg", "/TP Final/img/abrelatas loekemeyer.jpg", "/TP Final/img/juego de cubiertos carol.jpg", "/TP Final/img/pilas duracell x4.jpg"]
let almacen = ["Atun La Campagnola", "Arroz Gallo Oro", "Aceite Girasol Natura", "Fideos Tirabuzon Matarazzo", "Pan Bimbo"];
let bebidas = ["Coca Cola", "Sprite", "Fanta", "Cerveza Quilmes", "Cerveza Quilmes Negra"];
let frescos = ["Leche Entera Serenisima", "Queso Untable Finlandia", "Queso Rallado Serenisima", "Banana x1 Kg", "Palta x1 Un"];
let limpieza = ["Lavavajilla Cif", "Desinsfectante Lysoform", "Quitamanchas Ayudin", "Rollo de Cocina Elegante", "Raid Insecticida"];
let hogar = ["Lagotita Pegamento", "Bolsas Ziploc", "Abrelatas Loekemeyer", "Juego de Cubiertos Carol", "Pilas Duracell x4"];
let preciosAlmacen = [2520, 1575, 2050, 1400, 4900];
let preciosBebidas = [2169, 2900, 2900, 2499, 2599];
let preciosFrescos = [940, 3550, 1200, 1800, 850];
let preciosLimpieza = [2250, 2720, 5800, 3250, 6030];
let preciosHogar = [1750, 3300, 3500, 23000, 6025];
let stockAlmacen = [10, 7, 10, 8, 5];
let stockBebidas = [10, 8, 5, 9, 5];
let stockFrescos = [10, 6, 8, 7, 6];
let stockLimpieza = [6, 5, 8, 8, 7];
let stockHogar = [5, 5, 3, 2, 7];
let total = 0

let llenarProductos = function (categoria, productos, precios, stock, imagenes) {
   let todasTarjetas = ""
   let padre = document.getElementById(categoria);
   for (let i = 0; i < productos.length; i++) {
      todasTarjetas += `
      <div class="card">
         <img src="${imagenes[i]}" alt="${productos[i]}">
         <h1 class="nombre">${productos[i]}</h1>
         <h2 class="precio">$ ${precios[i]}</h2>
         <h4 class="stock">Productos disponibles: ${stock[i]}</h4>
         <form>
            <input type="number" min=0 value="0" name="cantidad" class="cantidad">
            <input type="submit" value="COMPRAR" class="comprar">
         </form>
      </div>
      `
      padre.innerHTML = todasTarjetas
   }
};

let agregarCompra = function () {
   let forms = document.querySelectorAll("form");
   forms.forEach(element => {
      element.addEventListener("submit", (e) => {
         e.preventDefault()
         let card = element.parentElement
         let precioString = card.getElementsByTagName("h2")[0].innerText
         let stockString = card.getElementsByTagName("h4")[0].innerText
         let precio = Number(precioString.slice(2))
         let cantidad = Number(element.children[0].value)
         let stock = Number(stockString.slice(23))
         comprar(card, precio, stock, cantidad)
      })
   })
}

let comprar = function (card, precio, stock, cantidad) {
   if (cantidad > 0 && stock >= cantidad) {
      total += cantidad * precio;
      stock -= cantidad;
      card.getElementsByTagName("h4")[0].innerHTML = `Productos disponibles: ${stock}`;
   } else {
      alert("ingrese una cantidad mayor a cero o no hay stock disponible");
   }
};



llenarProductos("almacen", almacen, preciosAlmacen, stockAlmacen, imgAlmacen);
llenarProductos("bebidas", bebidas, preciosBebidas, stockBebidas, imgBebidas);
llenarProductos("frescos", frescos, preciosFrescos, stockFrescos, imgFrescos);
llenarProductos("limpieza", limpieza, preciosLimpieza, stockLimpieza, imgLimpieza);
llenarProductos("hogar", hogar, preciosHogar, stockHogar, imgHogar);

agregarCompra();

let section = document.getElementById("section");

section.innerHTML += `
  <button id="finalizarCompra" class="finalizarCompra">Finalizar Compra</button>
`;

let finalizarCompra = document.getElementById("finalizarCompra");
finalizarCompra.addEventListener("click", () => alert(`Productos comprados: Total $${total}`));
