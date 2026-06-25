function dividir(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Los parámetros deben ser numéricos');
    }

    if (b === 0) {
        throw new Error('El divisor no puede ser cero');
    }

    return a / b;
}

module.exports = { dividir };