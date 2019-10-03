
onmessage = evt => {

    var suma=parseInt(evt.data.numero1)+parseInt(evt.data.numero2);
   postMessage(`El resultado de ${evt.data.numero1} y de ${evt.data.numero2} es: `+suma);
};
