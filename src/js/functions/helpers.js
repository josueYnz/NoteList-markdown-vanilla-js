function cleanDom(element) {
  if (element.firstChild) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
    return;
  }
}
function dataIterator(dataEstructure, callback) {
  if (Array.isArray(dataEstructure) || dataEstructure instanceof Set) {
    for (const value of dataEstructure) {
      callback(value);
    }
  } else {
    for (const value of Object.value(dataEstructure)) {
      callback(value);
    }
  }
}
function arrayData(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    const element = matriz[i];
    return element === undefined ? undefined : true;
  }
}
function valuePorcent(value, porcent) {
  return value * porcent / 100;
}
export { cleanDom, dataIterator, arrayData, valuePorcent };
