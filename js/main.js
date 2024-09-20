/*PUEDES CONSULTAR STOCK EN TODAS LAS PAGES*/

const stockRemeras = [
    // Remeras
    {
      id: "0",
      descripcion: "Remera de algodón suave, con diseño urbano",
      precio: 12000
    },
    {
      id: "1",
      descripcion: "Remera blanca/opaco con diseño de falamas ATSOBER",
      precio: 12000
    },
    {
      id: "2",
      descripcion: "Remera con estampado de rayos en la parte superior de los hombros.",
      precio: 13000
    },
    {
      id: "3",
      descripcion: "Remera oversize de corte moderno, clasica opaca",
      precio: 10000
    },
    {
      id: "4",
      descripcion: "Remera con diseño de mariposa en el medio rosada",
      precio: 13000
    },
    {
      id: "5",
      descripcion: "Remera blanca estampada con diseño de flamas en el medio junto a unas estrellas",
      precio: 17000
    }
];
const stockPantalones = [
    // Pantalones
    {
      id: "6",
      descripcion: "Pantalon tipo jagger negro, Varios bolsillos",
      precio: 30000
    },
    {
      id: "7",
      descripcion: "Jagger Verde oscuro con elastico en la cintura/Varios bolsillos",
      precio: 28000
    },
    {
      id: "8",
      descripcion: "Jean negro, varios bolsillos para mejor calidad",
      precio: 24999
    },
    {
      id: "9",
      descripcion: "Jean negro clasico sin estampados, costura de calidad",
      precio: 26000
    },
    {
      id: "10",
      descripcion: "Jagger color beige, varios bolsillos a los costados",
      precio: 28000
    },
    {
      id: "11",
      descripcion: "Jean clasico / Camuflado militar / Buena costura",
      precio: 24999
    },
];
 const stockBuzos = [
    // Buzos
    {
      id: "12",
      descripcion: "buzo nike Bi-Color / Negro con beige / Bolsillos frontal",
      precio: 50000
    },
    {
      id: "13",
      descripcion: "Buzo nike Clasico Bi-Color / azul marino con gris",
      precio: 45000
    },
    {
      id: "14",
      descripcion: "Buzo nike Bi-Color / negro con blanco / No trae la cadena",
      precio: 50000
    }
];

/*Page CONTACTO*/

//config de el boton
let  botonEnviar = document.getElementById("boton-enviar")

botonEnviar.addEventListener("click", ()=>alert("Sus datos han sido enviados satisfactoriamente"))
