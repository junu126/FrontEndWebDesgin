make = () => {
    let cPpx = document.getElementById("Ppx");
    cPpx === 'number';
    
    let cCpx = document.getElementById("Cpx");
    cCpx === 'number';
    
    let x = (cCpx.value / cPpx.value )* 100;
    
    return document.getElementById('demo').innerHTML = x;
}