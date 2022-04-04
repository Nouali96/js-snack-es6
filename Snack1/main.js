const biciclette = [{
        nome: "bici 1",
        peso: 18
    },
    {
        nome: "bici 2",
        peso: 12
    },
    {
        nome: "bici 3",
        peso: 14
    },
    {
        nome: "bici 4",
        peso: 20
    },
    {
        nome: "bici 5",
        peso: 16
    },
];
const pesoBici = []

let biciPiùLeggera = biciclette[0];

for (let i = 0; i < biciclette.length; i++) {
    let bicicletta = biciclette[i];
    if (biciPiùLeggera.peso > bicicletta.peso) {
        biciPiùLeggera = bicicletta;
    }
}
console.log(biciPiùLeggera);

const { nome, peso } = biciPiùLeggera;

console.log(`la bici che pesa di meno : ${nome} pesa ${peso}`)