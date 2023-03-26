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

// first band
document.querySelector(".first_Black").addEventListener("click", () => {
    document.querySelector(".first_strip_band").classList.add("Black")
    document.querySelector(".first_strip_band").classList.remove("Brown")
    document.querySelector(".first_strip_band").classList.remove("Red")
    document.querySelector(".first_strip_band").classList.remove("Orange")
    document.querySelector(".first_strip_band").classList.remove("Yellow")
    document.querySelector(".first_strip_band").classList.remove("Green")
    document.querySelector(".first_strip_band").classList.remove("Blue")
    document.querySelector(".first_strip_band").classList.remove("Violet")
    document.querySelector(".first_strip_band").classList.remove("Gray")
    document.querySelector(".first_strip_band").classList.remove("White")

})
document.querySelector(".first_Brown").addEventListener("click", () => {
    document.querySelector(".first_strip_band").classList.add("Brown")
    document.querySelector(".first_strip_band").classList.remove("Black")
    document.querySelector(".first_strip_band").classList.remove("Red")
    document.querySelector(".first_strip_band").classList.remove("Orange")
    document.querySelector(".first_strip_band").classList.remove("Yellow")
    document.querySelector(".first_strip_band").classList.remove("Green")
    document.querySelector(".first_strip_band").classList.remove("Blue")
    document.querySelector(".first_strip_band").classList.remove("Violet")
    document.querySelector(".first_strip_band").classList.remove("Gray")
    document.querySelector(".first_strip_band").classList.remove("White")
})
document.querySelector(".first_Red").addEventListener("click", () => {
    document.querySelector(".first_strip_band").classList.add("Red")

    document.querySelector(".first_strip_band").classList.remove("Black")
    document.querySelector(".first_strip_band").classList.remove("Brown")
    document.querySelector(".first_strip_band").classList.remove("Orange")
    document.querySelector(".first_strip_band").classList.remove("Yellow")
    document.querySelector(".first_strip_band").classList.remove("Green")
    document.querySelector(".first_strip_band").classList.remove("Blue")
    document.querySelector(".first_strip_band").classList.remove("Violet")
    document.querySelector(".first_strip_band").classList.remove("Gray")
    document.querySelector(".first_strip_band").classList.remove("White")
})
document.querySelector(".first_Orange").addEventListener("click", () => {
    document.querySelector(".first_strip_band").classList.add("Orange")

    document.querySelector(".first_strip_band").classList.remove("Black")
    document.querySelector(".first_strip_band").classList.remove("Brown")
    document.querySelector(".first_strip_band").classList.remove("Red")
    document.querySelector(".first_strip_band").classList.remove("Yellow")
    document.querySelector(".first_strip_band").classList.remove("Green")
    document.querySelector(".first_strip_band").classList.remove("Blue")
    document.querySelector(".first_strip_band").classList.remove("Violet")
    document.querySelector(".first_strip_band").classList.remove("Gray")
    document.querySelector(".first_strip_band").classList.remove("White")
})
document.querySelector(".first_Yellow").addEventListener("click", () => {
    document.querySelector(".first_strip_band").classList.add("Yellow")

    document.querySelector(".first_strip_band").classList.remove("Black")
    document.querySelector(".first_strip_band").classList.remove("Brown")
    document.querySelector(".first_strip_band").classList.remove("Orange")
    document.querySelector(".first_strip_band").classList.remove("Red")
    document.querySelector(".first_strip_band").classList.remove("Green")
    document.querySelector(".first_strip_band").classList.remove("Blue")
    document.querySelector(".first_strip_band").classList.remove("Violet")
    document.querySelector(".first_strip_band").classList.remove("Gray")
    document.querySelector(".first_strip_band").classList.remove("White")
})
document.querySelector(".first_Green").addEventListener("click", () => {
    document.querySelector(".first_strip_band").classList.add("Green")

    document.querySelector(".first_strip_band").classList.remove("Black")
    document.querySelector(".first_strip_band").classList.remove("Brown")
    document.querySelector(".first_strip_band").classList.remove("Orange")
    document.querySelector(".first_strip_band").classList.remove("Red")
    document.querySelector(".first_strip_band").classList.remove("Yellow")
    document.querySelector(".first_strip_band").classList.remove("Blue")
    document.querySelector(".first_strip_band").classList.remove("Violet")
    document.querySelector(".first_strip_band").classList.remove("Gray")
    document.querySelector(".first_strip_band").classList.remove("White")
})
document.querySelector(".first_Blue").addEventListener("click", () => {
    document.querySelector(".first_strip_band").classList.add("Blue")

    document.querySelector(".first_strip_band").classList.remove("Black")
    document.querySelector(".first_strip_band").classList.remove("Brown")
    document.querySelector(".first_strip_band").classList.remove("Orange")
    document.querySelector(".first_strip_band").classList.remove("Red")
    document.querySelector(".first_strip_band").classList.remove("Yellow")
    document.querySelector(".first_strip_band").classList.remove("Green")
    document.querySelector(".first_strip_band").classList.remove("Violet")
    document.querySelector(".first_strip_band").classList.remove("Gray")
    document.querySelector(".first_strip_band").classList.remove("White")
})
document.querySelector(".first_Violet").addEventListener("click", () => {
    document.querySelector(".first_strip_band").classList.add("Violet")

    document.querySelector(".first_strip_band").classList.remove("Black")
    document.querySelector(".first_strip_band").classList.remove("Brown")
    document.querySelector(".first_strip_band").classList.remove("Orange")
    document.querySelector(".first_strip_band").classList.remove("Red")
    document.querySelector(".first_strip_band").classList.remove("Yellow")
    document.querySelector(".first_strip_band").classList.remove("Green")
    document.querySelector(".first_strip_band").classList.remove("Blue")
    document.querySelector(".first_strip_band").classList.remove("Gray")
    document.querySelector(".first_strip_band").classList.remove("White")
})
document.querySelector(".first_Gray").addEventListener("click", () => {
    document.querySelector(".first_strip_band").classList.add("Gray")

    document.querySelector(".first_strip_band").classList.remove("Black")
    document.querySelector(".first_strip_band").classList.remove("Brown")
    document.querySelector(".first_strip_band").classList.remove("Orange")
    document.querySelector(".first_strip_band").classList.remove("Red")
    document.querySelector(".first_strip_band").classList.remove("Yellow")
    document.querySelector(".first_strip_band").classList.remove("Green")
    document.querySelector(".first_strip_band").classList.remove("Blue")
    document.querySelector(".first_strip_band").classList.remove("Violet")
    document.querySelector(".first_strip_band").classList.remove("White")
})
document.querySelector(".first_White").addEventListener("click", () => {
    document.querySelector(".first_strip_band").classList.add("White")

    document.querySelector(".first_strip_band").classList.remove("Black")
    document.querySelector(".first_strip_band").classList.remove("Brown")
    document.querySelector(".first_strip_band").classList.remove("Orange")
    document.querySelector(".first_strip_band").classList.remove("Red")
    document.querySelector(".first_strip_band").classList.remove("Yellow")
    document.querySelector(".first_strip_band").classList.remove("Green")
    document.querySelector(".first_strip_band").classList.remove("Blue")
    document.querySelector(".first_strip_band").classList.remove("Violet")
    document.querySelector(".first_strip_band").classList.remove("Gray")
})

// second band

document.querySelector(".second_Black").addEventListener("click", () => {
    document.querySelector(".second_strip_band").classList.add("Black")

    document.querySelector(".second_strip_band").classList.remove("Brown")
    document.querySelector(".second_strip_band").classList.remove("Orange")
    document.querySelector(".second_strip_band").classList.remove("Red")
    document.querySelector(".second_strip_band").classList.remove("Yellow")
    document.querySelector(".second_strip_band").classList.remove("Green")
    document.querySelector(".second_strip_band").classList.remove("Blue")
    document.querySelector(".second_strip_band").classList.remove("Violet")
    document.querySelector(".second_strip_band").classList.remove("Gray")
    document.querySelector(".second_strip_band").classList.remove("White")
})
document.querySelector(".second_Brown").addEventListener("click", () => {
    document.querySelector(".second_strip_band").classList.add("Brown")

    document.querySelector(".second_strip_band").classList.remove("Black")
    document.querySelector(".second_strip_band").classList.remove("Orange")
    document.querySelector(".second_strip_band").classList.remove("Red")
    document.querySelector(".second_strip_band").classList.remove("Yellow")
    document.querySelector(".second_strip_band").classList.remove("Green")
    document.querySelector(".second_strip_band").classList.remove("Blue")
    document.querySelector(".second_strip_band").classList.remove("Violet")
    document.querySelector(".second_strip_band").classList.remove("Gray")
    document.querySelector(".second_strip_band").classList.remove("White")
})
document.querySelector(".second_Red").addEventListener("click", () => {
    document.querySelector(".second_strip_band").classList.add("Red")

    document.querySelector(".second_strip_band").classList.remove("Black")
    document.querySelector(".second_strip_band").classList.remove("Brown")
    document.querySelector(".second_strip_band").classList.remove("Orange")
    document.querySelector(".second_strip_band").classList.remove("Yellow")
    document.querySelector(".second_strip_band").classList.remove("Green")
    document.querySelector(".second_strip_band").classList.remove("Blue")
    document.querySelector(".second_strip_band").classList.remove("Violet")
    document.querySelector(".second_strip_band").classList.remove("Gray")
    document.querySelector(".second_strip_band").classList.remove("White")
})
document.querySelector(".second_Orange").addEventListener("click", () => {
    document.querySelector(".second_strip_band").classList.add("Orange")

    document.querySelector(".second_strip_band").classList.remove("Black")
    document.querySelector(".second_strip_band").classList.remove("Brown")
    document.querySelector(".second_strip_band").classList.remove("Red")
    document.querySelector(".second_strip_band").classList.remove("Yellow")
    document.querySelector(".second_strip_band").classList.remove("Green")
    document.querySelector(".second_strip_band").classList.remove("Blue")
    document.querySelector(".second_strip_band").classList.remove("Violet")
    document.querySelector(".second_strip_band").classList.remove("Gray")
    document.querySelector(".second_strip_band").classList.remove("White")
})
document.querySelector(".second_Yellow").addEventListener("click", () => {
    document.querySelector(".second_strip_band").classList.add("Yellow")

    document.querySelector(".second_strip_band").classList.remove("Black")
    document.querySelector(".second_strip_band").classList.remove("Brown")
    document.querySelector(".second_strip_band").classList.remove("Orange")
    document.querySelector(".second_strip_band").classList.remove("Red")
    document.querySelector(".second_strip_band").classList.remove("Green")
    document.querySelector(".second_strip_band").classList.remove("Blue")
    document.querySelector(".second_strip_band").classList.remove("Violet")
    document.querySelector(".second_strip_band").classList.remove("Gray")
    document.querySelector(".second_strip_band").classList.remove("White")
})
document.querySelector(".second_Green").addEventListener("click", () => {
    document.querySelector(".second_strip_band").classList.add("Green")

    document.querySelector(".second_strip_band").classList.remove("Black")
    document.querySelector(".second_strip_band").classList.remove("Brown")
    document.querySelector(".second_strip_band").classList.remove("Orange")
    document.querySelector(".second_strip_band").classList.remove("Red")
    document.querySelector(".second_strip_band").classList.remove("Yellow")
    document.querySelector(".second_strip_band").classList.remove("Blue")
    document.querySelector(".second_strip_band").classList.remove("Violet")
    document.querySelector(".second_strip_band").classList.remove("Gray")
    document.querySelector(".second_strip_band").classList.remove("White")
})
document.querySelector(".second_Blue").addEventListener("click", () => {
    document.querySelector(".second_strip_band").classList.add("Blue")

    document.querySelector(".second_strip_band").classList.remove("Black")
    document.querySelector(".second_strip_band").classList.remove("Brown")
    document.querySelector(".second_strip_band").classList.remove("Orange")
    document.querySelector(".second_strip_band").classList.remove("Red")
    document.querySelector(".second_strip_band").classList.remove("Yellow")
    document.querySelector(".second_strip_band").classList.remove("Green")
    document.querySelector(".second_strip_band").classList.remove("Violet")
    document.querySelector(".second_strip_band").classList.remove("Gray")
    document.querySelector(".second_strip_band").classList.remove("White")
})
document.querySelector(".second_Violet").addEventListener("click", () => {
    document.querySelector(".second_strip_band").classList.add("Violet")

    document.querySelector(".second_strip_band").classList.remove("Black")
    document.querySelector(".second_strip_band").classList.remove("Brown")
    document.querySelector(".second_strip_band").classList.remove("Orange")
    document.querySelector(".second_strip_band").classList.remove("Red")
    document.querySelector(".second_strip_band").classList.remove("Yellow")
    document.querySelector(".second_strip_band").classList.remove("Green")
    document.querySelector(".second_strip_band").classList.remove("Blue")
    document.querySelector(".second_strip_band").classList.remove("Gray")
    document.querySelector(".second_strip_band").classList.remove("White")
})
document.querySelector(".second_Gray").addEventListener("click", () => {
    document.querySelector(".second_strip_band").classList.add("Gray")

    document.querySelector(".second_strip_band").classList.remove("Black")
    document.querySelector(".second_strip_band").classList.remove("Brown")
    document.querySelector(".second_strip_band").classList.remove("Orange")
    document.querySelector(".second_strip_band").classList.remove("Red")
    document.querySelector(".second_strip_band").classList.remove("Yellow")
    document.querySelector(".second_strip_band").classList.remove("Green")
    document.querySelector(".second_strip_band").classList.remove("Blue")
    document.querySelector(".second_strip_band").classList.remove("Violet")
    document.querySelector(".second_strip_band").classList.remove("White")
})
document.querySelector(".second_White").addEventListener("click", () => {
    document.querySelector(".second_strip_band").classList.add("White")

    document.querySelector(".second_strip_band").classList.remove("Black")
    document.querySelector(".second_strip_band").classList.remove("Brown")
    document.querySelector(".second_strip_band").classList.remove("Orange")
    document.querySelector(".second_strip_band").classList.remove("Red")
    document.querySelector(".second_strip_band").classList.remove("Yellow")
    document.querySelector(".second_strip_band").classList.remove("Green")
    document.querySelector(".second_strip_band").classList.remove("Blue")
    document.querySelector(".second_strip_band").classList.remove("Violet")
    document.querySelector(".second_strip_band").classList.remove("Gray")
})

// third band

document.querySelector(".third_Black").addEventListener("click",()=>{
    document.querySelector(".third_strip_band").classList.add("Black")

    document.querySelector(".third_strip_band").classList.remove("Brown")
    document.querySelector(".third_strip_band").classList.remove("Red")
    document.querySelector(".third_strip_band").classList.remove("Orange")
    document.querySelector(".third_strip_band").classList.remove("Yellow")
    document.querySelector(".third_strip_band").classList.remove("Green")
    document.querySelector(".third_strip_band").classList.remove("Blue")
    document.querySelector(".third_strip_band").classList.remove("Violet")
    document.querySelector(".third_strip_band").classList.remove("Gray")
    document.querySelector(".third_strip_band").classList.remove("White")

})

document.querySelector(".third_Brown").addEventListener("click",()=>{
    document.querySelector(".third_strip_band").classList.add("Brown")

    document.querySelector(".third_strip_band").classList.remove("Black")
    document.querySelector(".third_strip_band").classList.remove("Red")
    document.querySelector(".third_strip_band").classList.remove("Orange")
    document.querySelector(".third_strip_band").classList.remove("Yellow")
    document.querySelector(".third_strip_band").classList.remove("Green")
    document.querySelector(".third_strip_band").classList.remove("Blue")
    document.querySelector(".third_strip_band").classList.remove("Violet")
    document.querySelector(".third_strip_band").classList.remove("Gray")
    document.querySelector(".third_strip_band").classList.remove("White")
    
})

document.querySelector(".third_Red").addEventListener("click",()=>{
    document.querySelector(".third_strip_band").classList.add("Red")
    
    document.querySelector(".third_strip_band").classList.remove("Black")
    document.querySelector(".third_strip_band").classList.remove("Brown")
    document.querySelector(".third_strip_band").classList.remove("Orange")
    document.querySelector(".third_strip_band").classList.remove("Yellow")
    document.querySelector(".third_strip_band").classList.remove("Green")
    document.querySelector(".third_strip_band").classList.remove("Blue")
    document.querySelector(".third_strip_band").classList.remove("Violet")
    document.querySelector(".third_strip_band").classList.remove("Gray")
    document.querySelector(".third_strip_band").classList.remove("White")
})

document.querySelector(".third_Orange").addEventListener("click",()=>{
    document.querySelector(".third_strip_band").classList.add("Orange")
    
    document.querySelector(".third_strip_band").classList.remove("Black")
    document.querySelector(".third_strip_band").classList.remove("Brown")
    document.querySelector(".third_strip_band").classList.remove("Red")
    document.querySelector(".third_strip_band").classList.remove("Yellow")
    document.querySelector(".third_strip_band").classList.remove("Green")
    document.querySelector(".third_strip_band").classList.remove("Blue")
    document.querySelector(".third_strip_band").classList.remove("Violet")
    document.querySelector(".third_strip_band").classList.remove("Gray")
    document.querySelector(".third_strip_band").classList.remove("White")
})

document.querySelector(".third_Yellow").addEventListener("click",()=>{
    document.querySelector(".third_strip_band").classList.add("Yellow")
    
    document.querySelector(".third_strip_band").classList.remove("Black")
    document.querySelector(".third_strip_band").classList.remove("Brown")
    document.querySelector(".third_strip_band").classList.remove("Red")
    document.querySelector(".third_strip_band").classList.remove("Orange")
    document.querySelector(".third_strip_band").classList.remove("Green")
    document.querySelector(".third_strip_band").classList.remove("Blue")
    document.querySelector(".third_strip_band").classList.remove("Violet")
    document.querySelector(".third_strip_band").classList.remove("Gray")
    document.querySelector(".third_strip_band").classList.remove("White")
})

document.querySelector(".third_Green").addEventListener("click",()=>{
    document.querySelector(".third_strip_band").classList.add("Green")

    document.querySelector(".third_strip_band").classList.remove("Black")
    document.querySelector(".third_strip_band").classList.remove("Brown")
    document.querySelector(".third_strip_band").classList.remove("Red")
    document.querySelector(".third_strip_band").classList.remove("Orange")
    document.querySelector(".third_strip_band").classList.remove("Yellow")
    document.querySelector(".third_strip_band").classList.remove("Blue")
    document.querySelector(".third_strip_band").classList.remove("Violet")
    document.querySelector(".third_strip_band").classList.remove("Gray")
    document.querySelector(".third_strip_band").classList.remove("White")
})

document.querySelector(".third_Blue").addEventListener("click",()=>{
    document.querySelector(".third_strip_band").classList.add("Blue")

    document.querySelector(".third_strip_band").classList.remove("Black")
    document.querySelector(".third_strip_band").classList.remove("Brown")
    document.querySelector(".third_strip_band").classList.remove("Red")
    document.querySelector(".third_strip_band").classList.remove("Orange")
    document.querySelector(".third_strip_band").classList.remove("Yellow")
    document.querySelector(".third_strip_band").classList.remove("Green")
    document.querySelector(".third_strip_band").classList.remove("Violet")
    document.querySelector(".third_strip_band").classList.remove("Gray")
    document.querySelector(".third_strip_band").classList.remove("White")  
})

document.querySelector(".third_Violet").addEventListener("click",()=>{
    document.querySelector(".third_strip_band").classList.add("Violet")

    document.querySelector(".third_strip_band").classList.remove("Black")
    document.querySelector(".third_strip_band").classList.remove("Brown")
    document.querySelector(".third_strip_band").classList.remove("Red")
    document.querySelector(".third_strip_band").classList.remove("Orange")
    document.querySelector(".third_strip_band").classList.remove("Yellow")
    document.querySelector(".third_strip_band").classList.remove("Green")
    document.querySelector(".third_strip_band").classList.remove("Blue")
    document.querySelector(".third_strip_band").classList.remove("Gray")
    document.querySelector(".third_strip_band").classList.remove("White")
})

document.querySelector(".third_Gray").addEventListener("click",()=>{
    document.querySelector(".third_strip_band").classList.add("Gray")

    document.querySelector(".third_strip_band").classList.remove("Black")
    document.querySelector(".third_strip_band").classList.remove("Brown")
    document.querySelector(".third_strip_band").classList.remove("Red")
    document.querySelector(".third_strip_band").classList.remove("Orange")
    document.querySelector(".third_strip_band").classList.remove("Yellow")
    document.querySelector(".third_strip_band").classList.remove("Green")
    document.querySelector(".third_strip_band").classList.remove("Blue")
    document.querySelector(".third_strip_band").classList.remove("Violet")
    document.querySelector(".third_strip_band").classList.remove("White")
})

document.querySelector(".third_White").addEventListener("click",()=>{
    document.querySelector(".third_strip_band").classList.add("White")

    document.querySelector(".third_strip_band").classList.remove("Black")
    document.querySelector(".third_strip_band").classList.remove("Brown")
    document.querySelector(".third_strip_band").classList.remove("Red")
    document.querySelector(".third_strip_band").classList.remove("Orange")
    document.querySelector(".third_strip_band").classList.remove("Yellow")
    document.querySelector(".third_strip_band").classList.remove("Green")
    document.querySelector(".third_strip_band").classList.remove("Blue")
    document.querySelector(".third_strip_band").classList.remove("Violet")
    document.querySelector(".third_strip_band").classList.remove("Gray")
})


// fourth band



document.querySelector(".fifth_Black").addEventListener("click",()=>{
    document.querySelector(".fifth_strip_band").classList.add("Black")

    document.querySelector(".fifth_strip_band").classList.remove("Brown")
    document.querySelector(".fifth_strip_band").classList.remove("Red")
    document.querySelector(".fifth_strip_band").classList.remove("Orange")
    document.querySelector(".fifth_strip_band").classList.remove("Yellow")
    document.querySelector(".fifth_strip_band").classList.remove("Green")
    document.querySelector(".fifth_strip_band").classList.remove("Blue")
    document.querySelector(".fifth_strip_band").classList.remove("Violet")
    document.querySelector(".fifth_strip_band").classList.remove("Gray")
    document.querySelector(".fifth_strip_band").classList.remove("White")

})

document.querySelector(".fifth_Brown").addEventListener("click",()=>{
    document.querySelector(".fifth_strip_band").classList.add("Brown")

    document.querySelector(".fifth_strip_band").classList.remove("Black")
    document.querySelector(".fifth_strip_band").classList.remove("Red")
    document.querySelector(".fifth_strip_band").classList.remove("Orange")
    document.querySelector(".fifth_strip_band").classList.remove("Yellow")
    document.querySelector(".fifth_strip_band").classList.remove("Green")
    document.querySelector(".fifth_strip_band").classList.remove("Blue")
    document.querySelector(".fifth_strip_band").classList.remove("Violet")
    document.querySelector(".fifth_strip_band").classList.remove("Gray")
    document.querySelector(".fifth_strip_band").classList.remove("White")
    
})

document.querySelector(".fifth_Red").addEventListener("click",()=>{
    document.querySelector(".fifth_strip_band").classList.add("Red")
    
    document.querySelector(".fifth_strip_band").classList.remove("Black")
    document.querySelector(".fifth_strip_band").classList.remove("Brown")
    document.querySelector(".fifth_strip_band").classList.remove("Orange")
    document.querySelector(".fifth_strip_band").classList.remove("Yellow")
    document.querySelector(".fifth_strip_band").classList.remove("Green")
    document.querySelector(".fifth_strip_band").classList.remove("Blue")
    document.querySelector(".fifth_strip_band").classList.remove("Violet")
    document.querySelector(".fifth_strip_band").classList.remove("Gray")
    document.querySelector(".fifth_strip_band").classList.remove("White")
})

document.querySelector(".fifth_Orange").addEventListener("click",()=>{
    document.querySelector(".fifth_strip_band").classList.add("Orange")
    
    document.querySelector(".fifth_strip_band").classList.remove("Black")
    document.querySelector(".fifth_strip_band").classList.remove("Brown")
    document.querySelector(".fifth_strip_band").classList.remove("Red")
    document.querySelector(".fifth_strip_band").classList.remove("Yellow")
    document.querySelector(".fifth_strip_band").classList.remove("Green")
    document.querySelector(".fifth_strip_band").classList.remove("Blue")
    document.querySelector(".fifth_strip_band").classList.remove("Violet")
    document.querySelector(".fifth_strip_band").classList.remove("Gray")
    document.querySelector(".fifth_strip_band").classList.remove("White")
})

document.querySelector(".fifth_Yellow").addEventListener("click",()=>{
    document.querySelector(".fifth_strip_band").classList.add("Yellow")
    
    document.querySelector(".fifth_strip_band").classList.remove("Black")
    document.querySelector(".fifth_strip_band").classList.remove("Brown")
    document.querySelector(".fifth_strip_band").classList.remove("Red")
    document.querySelector(".fifth_strip_band").classList.remove("Orange")
    document.querySelector(".fifth_strip_band").classList.remove("Green")
    document.querySelector(".fifth_strip_band").classList.remove("Blue")
    document.querySelector(".fifth_strip_band").classList.remove("Violet")
    document.querySelector(".fifth_strip_band").classList.remove("Gray")
    document.querySelector(".fifth_strip_band").classList.remove("White")
})

document.querySelector(".fifth_Green").addEventListener("click",()=>{
    document.querySelector(".fifth_strip_band").classList.add("Green")

    document.querySelector(".fifth_strip_band").classList.remove("Black")
    document.querySelector(".fifth_strip_band").classList.remove("Brown")
    document.querySelector(".fifth_strip_band").classList.remove("Red")
    document.querySelector(".fifth_strip_band").classList.remove("Orange")
    document.querySelector(".fifth_strip_band").classList.remove("Yellow")
    document.querySelector(".fifth_strip_band").classList.remove("Blue")
    document.querySelector(".fifth_strip_band").classList.remove("Violet")
    document.querySelector(".fifth_strip_band").classList.remove("Gray")
    document.querySelector(".fifth_strip_band").classList.remove("White")
})

document.querySelector(".fifth_Blue").addEventListener("click",()=>{
    document.querySelector(".fifth_strip_band").classList.add("Blue")

    document.querySelector(".fifth_strip_band").classList.remove("Black")
    document.querySelector(".fifth_strip_band").classList.remove("Brown")
    document.querySelector(".fifth_strip_band").classList.remove("Red")
    document.querySelector(".fifth_strip_band").classList.remove("Orange")
    document.querySelector(".fifth_strip_band").classList.remove("Yellow")
    document.querySelector(".fifth_strip_band").classList.remove("Green")
    document.querySelector(".fifth_strip_band").classList.remove("Violet")
    document.querySelector(".fifth_strip_band").classList.remove("Gray")
    document.querySelector(".fifth_strip_band").classList.remove("White")  
})

document.querySelector(".fifth_Violet").addEventListener("click",()=>{
    document.querySelector(".fifth_strip_band").classList.add("Violet")

    document.querySelector(".fifth_strip_band").classList.remove("Black")
    document.querySelector(".fifth_strip_band").classList.remove("Brown")
    document.querySelector(".fifth_strip_band").classList.remove("Red")
    document.querySelector(".fifth_strip_band").classList.remove("Orange")
    document.querySelector(".fifth_strip_band").classList.remove("Yellow")
    document.querySelector(".fifth_strip_band").classList.remove("Green")
    document.querySelector(".fifth_strip_band").classList.remove("Blue")
    document.querySelector(".fifth_strip_band").classList.remove("Gray")
    document.querySelector(".fifth_strip_band").classList.remove("White")
})

document.querySelector(".fifth_Gray").addEventListener("click",()=>{
    document.querySelector(".fifth_strip_band").classList.add("Gray")

    document.querySelector(".fifth_strip_band").classList.remove("Black")
    document.querySelector(".fifth_strip_band").classList.remove("Brown")
    document.querySelector(".fifth_strip_band").classList.remove("Red")
    document.querySelector(".fifth_strip_band").classList.remove("Orange")
    document.querySelector(".fifth_strip_band").classList.remove("Yellow")
    document.querySelector(".fifth_strip_band").classList.remove("Green")
    document.querySelector(".fifth_strip_band").classList.remove("Blue")
    document.querySelector(".fifth_strip_band").classList.remove("Violet")
    document.querySelector(".fifth_strip_band").classList.remove("White")
})

document.querySelector(".fifth_White").addEventListener("click",()=>{
    document.querySelector(".fifth_strip_band").classList.add("White")

    document.querySelector(".fifth_strip_band").classList.remove("Black")
    document.querySelector(".fifth_strip_band").classList.remove("Brown")
    document.querySelector(".fifth_strip_band").classList.remove("Red")
    document.querySelector(".fifth_strip_band").classList.remove("Orange")
    document.querySelector(".fifth_strip_band").classList.remove("Yellow")
    document.querySelector(".fifth_strip_band").classList.remove("Green")
    document.querySelector(".fifth_strip_band").classList.remove("Blue")
    document.querySelector(".fifth_strip_band").classList.remove("Violet")
    document.querySelector(".fifth_strip_band").classList.remove("Gray")
})



// fifth band


document.querySelector(".fourth_Brown").addEventListener("click",()=>{
    document.querySelector(".fourth_strip_band").classList.add("Brown")

    document.querySelector(".fourth_strip_band").classList.remove("Red")
    document.querySelector(".fourth_strip_band").classList.remove("Green")
    document.querySelector(".fourth_strip_band").classList.remove("Blue")
    document.querySelector(".fourth_strip_band").classList.remove("Violet")
    document.querySelector(".fourth_strip_band").classList.remove("Gold")
    document.querySelector(".fourth_strip_band").classList.remove("Silver")

})

document.querySelector(".fourth_Red").addEventListener("click",()=>{
    document.querySelector(".fourth_strip_band").classList.add("Red")

    document.querySelector(".fourth_strip_band").classList.remove("Brown")
    document.querySelector(".fourth_strip_band").classList.remove("Green")
    document.querySelector(".fourth_strip_band").classList.remove("Blue")
    document.querySelector(".fourth_strip_band").classList.remove("Violet")
    document.querySelector(".fourth_strip_band").classList.remove("Gold")
    document.querySelector(".fourth_strip_band").classList.remove("Silver")
})

document.querySelector(".fourth_Green").addEventListener("click",()=>{
    document.querySelector(".fourth_strip_band").classList.add("Green")

    document.querySelector(".fourth_strip_band").classList.remove("Brown")
    document.querySelector(".fourth_strip_band").classList.remove("Red")
    document.querySelector(".fourth_strip_band").classList.remove("Blue")
    document.querySelector(".fourth_strip_band").classList.remove("Violet")
    document.querySelector(".fourth_strip_band").classList.remove("Gold")
    document.querySelector(".fourth_strip_band").classList.remove("Silver")
})

document.querySelector(".fourth_Blue").addEventListener("click",()=>{
    document.querySelector(".fourth_strip_band").classList.add("Blue")

    document.querySelector(".fourth_strip_band").classList.remove("Brown")
    document.querySelector(".fourth_strip_band").classList.remove("Red")
    document.querySelector(".fourth_strip_band").classList.remove("Green")
    document.querySelector(".fourth_strip_band").classList.remove("Violet")
    document.querySelector(".fourth_strip_band").classList.remove("Gold")
    document.querySelector(".fourth_strip_band").classList.remove("Silver")
})

document.querySelector(".fourth_Violet").addEventListener("click",()=>{
    document.querySelector(".fourth_strip_band").classList.add("Violet")


    document.querySelector(".fourth_strip_band").classList.remove("Brown")
    document.querySelector(".fourth_strip_band").classList.remove("Red")
    document.querySelector(".fourth_strip_band").classList.remove("Green")
    document.querySelector(".fourth_strip_band").classList.remove("Blue")
    document.querySelector(".fourth_strip_band").classList.remove("Gold")
    document.querySelector(".fourth_strip_band").classList.remove("Silver")
})

document.querySelector(".fourth_Gold").addEventListener("click",()=>{
    document.querySelector(".fourth_strip_band").classList.add("Gold")


    document.querySelector(".fourth_strip_band").classList.remove("Brown")
    document.querySelector(".fourth_strip_band").classList.remove("Red")
    document.querySelector(".fourth_strip_band").classList.remove("Green")
    document.querySelector(".fourth_strip_band").classList.remove("Blue")
    document.querySelector(".fourth_strip_band").classList.remove("Violet")
    document.querySelector(".fourth_strip_band").classList.remove("Silver")
})

document.querySelector(".fourth_Silver").addEventListener("click",()=>{
    document.querySelector(".fourth_strip_band").classList.add("Silver")

    document.querySelector(".fourth_strip_band").classList.remove("Brown")
    document.querySelector(".fourth_strip_band").classList.remove("Red")
    document.querySelector(".fourth_strip_band").classList.remove("Green")
    document.querySelector(".fourth_strip_band").classList.remove("Blue")
    document.querySelector(".fourth_strip_band").classList.remove("Violet")
    document.querySelector(".fourth_strip_band").classList.remove("Gold")
})