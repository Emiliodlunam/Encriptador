document.getElementById('encrypt-btn').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;

    if (inputText.trim() === "") {
        Swal.fire('Error', 'No se ha encontrado ningún mensaje para encriptar.', 'error');
    } else if (!isValidText(inputText)) {
        Swal.fire('Error', 'El texto contiene mayúsculas o caracteres acentuados. Por favor, ingrese solo letras minúsculas sin acentos.', 'error');
    } else {
        const encryptedText = encryptText(inputText);
        document.getElementById('output-text').value = encryptedText;
        document.getElementById('copy-btn').style.display = 'block';
        Swal.fire('Éxito', 'Texto encriptado con éxito.', 'success');
    }
    
    document.getElementById('input-text').value = ""; 
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;

    if (inputText.trim() === "") {
        Swal.fire('Error', 'No se ha encontrado ningún mensaje encriptado.', 'error');
    } else if (!isValidText(inputText)) {
        Swal.fire('Error', 'El texto contiene mayúsculas o caracteres acentuados. Por favor, ingrese solo letras minúsculas sin acentos.', 'error');
    } else {
        const decryptedText = decryptText(inputText);
        document.getElementById('output-text').value = decryptedText;
        document.getElementById('copy-btn').style.display = 'block';
        Swal.fire('Éxito', 'Texto desencriptado con éxito.', 'success');
    }
    
    document.getElementById('input-text').value = ""; 
});

document.getElementById('copy-btn').addEventListener('click', function() {
    const outputText = document.getElementById('output-text');
    outputText.select();
    document.execCommand('copy');
    Swal.fire('Éxito', 'Texto copiado al portapapeles.', 'success');
});

function encryptText(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

function decryptText(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

// Función para validar que el texto solo contenga letras minúsculas sin acentos
function isValidText(text) {
    const regex = /^[a-z\s]+$/;
    return regex.test(text);
}

// Inicialmente ocultamos el botón de copiar
document.getElementById('copy-btn').style.display = 'none';

