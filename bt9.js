class Temperature {
    constructor(celsius) {
        if (celsius < -273) {
            this.celsius = 0;
        } else {
            this.celsius = celsius;
        }

    }
    doCSangDoF() {
        return 1.8 * C + 32;
    }
    doCSangDok() {
        return C+273.15
    }
}
let temperature = new Temperature(25)
console.log(temperature.doCSangDoF);
console.log(temperature.doCSangDok);
