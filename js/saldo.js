window.onload = () => {
  let inputText = document.getElementById('cardNum')
  inputText.addEventListener('keypress', () => {
    let key = event.which || event.keyCode;
    if (key === 13) {
      let cardNum = inputText.value;
      inputText.value = '';

      fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${cardNum}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          document.getElementById('numTar').innerHTML = data['N&ordm; tarjeta bip! '];
          document.getElementById('saldo').innerHTML = data['Saldo  tarjeta'];
          document.getElementById('fecha').innerHTML = data['Fecha saldo'];
          document.getElementById('estado').innerHTML = data['Estado de contrato'];
        })
    }
  })
}