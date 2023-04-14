
document.querySelector(".calculate").addEventListener("click", () => {
    var first_band = document.querySelector(".first-band").value
    var second_band = document.querySelector(".second-band").value

    var third_band = document.querySelector(".third-band").value
    var third_band_int = parseInt(third_band);

    var first_band_string = first_band.toString();
    var second_band_string = second_band.toString();
    var fs_band = first_band_string.concat(second_band_string);
    var fs_band_int = parseInt(fs_band)

    var actual_value = fs_band_int * third_band_int;
    var count_num = actual_value.toString().length;
    var tolerance_band = document.querySelector(".tolerance-band").value;
    if (count_num > 3) {
        var final_k_value = actual_value / 1000
        // alert(`resistance is ${final_k_value} Kilo Ohm ${tolerance_band} % +- tolerance`)
        Swal.fire(`resistance is ${final_k_value} Kilo Ohm ${tolerance_band} % +- tolerance`)
    }
    else {
        var final_o_value = actual_value
        // alert(`resistance is ${final_o_value} Ohm ${tolerance_band} % tolerance`)
        Swal.fire(`resistance is ${final_o_value} Ohm ${tolerance_band} % tolerance`)
    }
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

document.querySelector(".third_Black").addEventListener("click", () => {
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
document.querySelector(".third_Brown").addEventListener("click", () => {
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
document.querySelector(".third_Red").addEventListener("click", () => {
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
document.querySelector(".third_Orange").addEventListener("click", () => {
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
document.querySelector(".third_Yellow").addEventListener("click", () => {
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
document.querySelector(".third_Green").addEventListener("click", () => {
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
document.querySelector(".third_Blue").addEventListener("click", () => {
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
document.querySelector(".third_Violet").addEventListener("click", () => {
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
document.querySelector(".third_Gray").addEventListener("click", () => {
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
document.querySelector(".third_White").addEventListener("click", () => {
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


document.querySelector(".fourth_Brown").addEventListener("click", () => {
    document.querySelector(".fourth_strip_band").classList.add("Brown")

    document.querySelector(".fourth_strip_band").classList.remove("Red")
    document.querySelector(".fourth_strip_band").classList.remove("Green")
    document.querySelector(".fourth_strip_band").classList.remove("Blue")
    document.querySelector(".fourth_strip_band").classList.remove("Violet")
    document.querySelector(".fourth_strip_band").classList.remove("Gold")
    document.querySelector(".fourth_strip_band").classList.remove("Silver")
})
document.querySelector(".fourth_Red").addEventListener("click", () => {
    document.querySelector(".fourth_strip_band").classList.add("Red")

    document.querySelector(".fourth_strip_band").classList.remove("Brown")
    document.querySelector(".fourth_strip_band").classList.remove("Green")
    document.querySelector(".fourth_strip_band").classList.remove("Blue")
    document.querySelector(".fourth_strip_band").classList.remove("Violet")
    document.querySelector(".fourth_strip_band").classList.remove("Gold")
    document.querySelector(".fourth_strip_band").classList.remove("Silver")
})
document.querySelector(".fourth_Green").addEventListener("click", () => {
    document.querySelector(".fourth_strip_band").classList.add("Green")

    document.querySelector(".fourth_strip_band").classList.remove("Brown")
    document.querySelector(".fourth_strip_band").classList.remove("Red")
    document.querySelector(".fourth_strip_band").classList.remove("Blue")
    document.querySelector(".fourth_strip_band").classList.remove("Violet")
    document.querySelector(".fourth_strip_band").classList.remove("Gold")
    document.querySelector(".fourth_strip_band").classList.remove("Silver")
})
document.querySelector(".fourth_Blue").addEventListener("click", () => {
    document.querySelector(".fourth_strip_band").classList.add("Blue")

    document.querySelector(".fourth_strip_band").classList.remove("Brown")
    document.querySelector(".fourth_strip_band").classList.remove("Red")
    document.querySelector(".fourth_strip_band").classList.remove("Green")
    document.querySelector(".fourth_strip_band").classList.remove("Violet")
    document.querySelector(".fourth_strip_band").classList.remove("Gold")
    document.querySelector(".fourth_strip_band").classList.remove("Silver")
})
document.querySelector(".fourth_Violet").addEventListener("click", () => {
    document.querySelector(".fourth_strip_band").classList.add("Violet")

    document.querySelector(".fourth_strip_band").classList.remove("Brown")
    document.querySelector(".fourth_strip_band").classList.remove("Red")
    document.querySelector(".fourth_strip_band").classList.remove("Green")
    document.querySelector(".fourth_strip_band").classList.remove("Blue")
    document.querySelector(".fourth_strip_band").classList.remove("Gold")
    document.querySelector(".fourth_strip_band").classList.remove("Silver")
})
document.querySelector(".fourth_Gold").addEventListener("click", () => {
    document.querySelector(".fourth_strip_band").classList.add("Gold")

    document.querySelector(".fourth_strip_band").classList.remove("Brown")
    document.querySelector(".fourth_strip_band").classList.remove("Red")
    document.querySelector(".fourth_strip_band").classList.remove("Green")
    document.querySelector(".fourth_strip_band").classList.remove("Blue")
    document.querySelector(".fourth_strip_band").classList.remove("Violet")
    document.querySelector(".fourth_strip_band").classList.remove("Silver")
})
document.querySelector(".fourth_Silver").addEventListener("click", () => {
    document.querySelector(".fourth_strip_band").classList.add("Silver")

    document.querySelector(".fourth_strip_band").classList.remove("Brown")
    document.querySelector(".fourth_strip_band").classList.remove("Red")
    document.querySelector(".fourth_strip_band").classList.remove("Green")
    document.querySelector(".fourth_strip_band").classList.remove("Blue")
    document.querySelector(".fourth_strip_band").classList.remove("Violet")
    document.querySelector(".fourth_strip_band").classList.remove("Gold")
})