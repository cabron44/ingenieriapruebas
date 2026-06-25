function suma(a, b) { 
    if(typeof a !== "number" || typeof b !== "number"){
        throw new Error("error")
    }
    return a + b; 
}
 module.exports = { suma }; 