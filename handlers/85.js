function return85(bingo){
    if(typeof(bingo) !== "string"){
        throw Error("Input must be a string");
    }
    return 85 * parseFloat(bingo)
}

module.exports = {
    return85
}