// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let errorPara = document.getElementById('error')
console.log(errorPara)

function errorMessage() {
    errorPara.textContent = "Something went wrong, please try again";
}

