

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
    if(count_num>3){
        var final_k_value = actual_value/1000
        // alert(`resistance is ${final_k_value} Kilo Ohm ${tolerance_band} % +- tolerance`)
        Swal.fire(`resistance is ${final_k_value} Kilo Ohm ${tolerance_band} % +- tolerance`)
    }
    else{
        var final_o_value = actual_value
        // alert(`resistance is ${final_o_value} Ohm ${tolerance_band} % tolerance`)
        Swal.fire(`resistance is ${final_o_value} Ohm ${tolerance_band} % tolerance`)
    }


})