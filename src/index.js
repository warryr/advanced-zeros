module.exports = function getZerosCount(number, base) {
    const baseFactors = {};
    const numberFactors = {};

    //base factors
    for (let i = 2; i <= base; i++) {
        while ((base % i) === 0) {
            base /= i;
            if (baseFactors[i] === undefined) {
                baseFactors[i] = 1;
            } else {
                baseFactors[i]++;
            }
        }
    }

    //number factors
    let  n, temp;
    for (let key in baseFactors) {
        n = 0;
        temp = number;
        while(temp > 1) {
            temp = Math.floor(temp / key);
            n += temp;
        }
        numberFactors[key] = n;
    }

    //count zeros
    const arr = [];
    for (let key in baseFactors) {
        arr.push(Math.floor(numberFactors[key] / baseFactors[key]));
    }
    return Math.min.apply(null, arr);
};