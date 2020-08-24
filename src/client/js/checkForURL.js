function checkForURL(inputText) {
    var regex = RegExp('^(http|https):\/\/');
    if (regex.test(inputText) == false) {
        console.log('The url is not valid.');
        console.log('Need to start with \"http(s)://\".')
        return false;
    } else {
        console.log('The url is valid.');
        return true;
    }
}
export { checkForURL }
