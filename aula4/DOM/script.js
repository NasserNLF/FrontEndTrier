function enviarForm(){
    console.log(document);

    const inputNome = document.getElementById('nome');
    console.log(inputNome.value);

    const inputIdade = document.getElementById('idade');
    console.log(inputIdade.value);

    const inputs = document.getElementsByTagName('input')
    console.log(inputs);

    const labelByClass = document.getElementsByClassName('titulo-div')[0];
    console.log(labelByClass);
    
    const div = document.querySelector('div');
    console.log(div);

    event.preventDefault();

}

function adicionandoValor(){
    
}