
const removeInput = () => {
    document.querySelector('input[name=nome]').value = '';
    document.querySelector('input[name=empresa]').value = '';
    document.querySelector('input[name=area]').value = '';
    document.querySelector('input[name=email]').value = '';
}

const dadosEnviados = (event) => {
    event.preventDefault();

    const nome = document.querySelector('input[name=nome]').value;
    const empresa = document.querySelector('input[name=empresa]').value;
    const area = document.querySelector('input[name=area]').value;
    const email = document.querySelector('input[name=email]').value;

    fetch('https://api.sheetmonkey.io/form/v1xWHKTQ8Q2HaeN6f2H49A', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
        },
        body: JSON.stringify({nome, empresa, area, email}),
    }).then(response => {
        if (response.ok) {
            removeInput(); // Limpa os campos após o envio
        }
    });
}

document.querySelector('form').addEventListener('submit', dadosEnviados);