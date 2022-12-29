document.querySelector('.calculate').addEventListener("click", () => {
    var band1 = document.querySelector('.band1').value;
    var band2 = document.querySelector('.band2').value;
    var band3 = document.querySelector('.band3').value;
    var multiplierBand = document.querySelector('.multiplierBand').value;
    var toleranceBand = document.querySelector('.toleranceBand').value;

    var band1String = band1.toString();
    var band2String = band2.toString();
    var band3String = band3.toString();
    var total3BandString = band1String + band2String + band3String;
    var total3BandInt = parseInt(total3BandString);

    var calculate = total3BandInt * multiplierBand; 
    var lengthCalculate = calculate.toString().length;
    if(lengthCalculate>4){
        var actualCalculate = calculate/1000
    }
     
    // alert(`${actualCalculate} kilo ohm ${toleranceBand} % tolerance`);
    Swal.fire(`${actualCalculate} kilo ohm ${toleranceBand} % tolerance`)

})

