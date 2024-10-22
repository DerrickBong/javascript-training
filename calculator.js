function error(a, b) {
    if (isNaN(a) || isNaN(b)) {
        console.log("Please enter a valid number!")
        return true
    } else {
        return false
    }
}

function add(a, b) {
    var checkError = error(a, b)
    if (!checkError) {
        console.log(a + b)
    }
}

function sub(a, b) {
    var checkError = error(a, b)
    if (checkError) {
    } else {
        console.log(a - b)
    }
}

function mul(a, b) {
    var checkError = error(a, b)
    if (checkError) {
    } else {
        console.log(a * b)
    }
}

function div(a, b) {
    var checkError = error(a, b)
    if (checkError) {
    } else {
        console.log(a / b)
    }
}

//Addition
add(12, "h");

