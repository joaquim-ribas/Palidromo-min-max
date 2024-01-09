function isPalindrome(str) {
  let stringSemEspaco = '';

  let stringAoContrario = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      stringSemEspaco += str[i];
    }
  }

  let ultimaLetra = stringSemEspaco.length - 1;

  for (let i = ultimaLetra; i >= 0; i--) {
    stringAoContrario += stringSemEspaco[i];
  }
  if (stringSemEspaco.toLowerCase() === stringAoContrario.toLowerCase()) {
    return true;
  }
  return false;
}

isPalindrome();

function arrayMaxMin(arr) {
  let resultado = [];
  if (arr.length === 0) {
    resultado.push(`O array está vazio.`);
    return resultado;
  
  }
  let menorValor = arr[0];
  let maiorValor = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < menorValor) {
      menorValor = arr[i];
    }
    else if (arr[i] > maiorValor) {
      maiorValor = arr[i];
    }
  }
  resultado.push(menorValor);
  resultado.push(maiorValor);

  return resultado;
}

arrayMaxMin()
