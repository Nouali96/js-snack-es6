function RandomNr(start, end) {
    end -= start;
    return Math.floor(Math.random() * end) + start;
}

const squadreDiCalcio = [
    {
        nome: "Milan",
        punti_fatti: 0,
        falli_subiti: 0

    },
    {
        nome: "Inter",
        punti_fatti: 0,
        falli_subiti: 0

    },
    {
        nome: "Juve",
        punti_fatti: 0,
        falli_subiti: 0

    },
    {
        nome: "Roma",
        punti_fatti: 0,
        falli_subiti: 0

    },
    {
        nome: "Napoli",
        punti_fatti: 0,
        falli_subiti: 0

    },
];

function RandomNr(start, end) {
    end -= start;
    return Math.floor(Math.random() * end) + start;
}

for (let i = 0; i < squadreDiCalcio.length; i++) {
    squadreDiCalcio[i].punti_fatti = RandomNr(0, 10);
    squadreDiCalcio[i].falli_subiti = RandomNr(0, 5);
}

const squadra_falli = []

for (let i = 0; i < squadreDiCalcio.length; i++) {
    let squadra = squadreDiCalcio[i];
    const {nome, falli_subiti} = squadra;

    console.log(nome, falli_subiti)
    squadra_falli.push({nome, falli_subiti});    
}

console.log(squadra_falli);