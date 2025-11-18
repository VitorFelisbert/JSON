const objs = [
    {
        nome: 'Vitor',
        idade: 30,
        estaTrabalhando: true,
        detalhes_profissao: {
            profissao: 'Programador',
            empresa: 'EmpresasLog',
        },
        hobbies: ['programar', 'ler']
    },
    {
        nome: 'Edson',
        idade: 32,
        estaTrabalhando: false,
        detalhes_profissao: {
            profissao: 'Confeiteiro',
            empresa: null,
        },
        hobbies: ['fazer comida', 'ler']
    },
]

//JSON
const jsonData = JSON.stringify(objs)

console.log(jsonData)
console.log(typeof jsonData)

const objData = JSON.parse(jsonData)

objData.map((pessoa) => {
    conslole.log(pessoa.nome)
})