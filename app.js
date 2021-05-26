var inputText = document.getElementById("inputTxt")
var outputtext = document.getElementById("outputTxt")
var translateBtn = document.getElementById("translateBtn")

var serverUrl = "	https://api.funtranslations.com/translate/minion.json"

function createUrl(text) {
    return serverUrl + "?text=" + text
}

function errorHandler(error) {
    console.log("Error, something went wrong :-" + error)
    alert("Error, something went wrong :-" + error)
}

function clickHandler(textInput) {
    var textInput = inputText.value
    fetch(createUrl(textInput))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated
            outputtext.innerText = translatedText
        })
        .catch(errorHandler)
}

translateBtn.addEventListener("click", clickHandler)