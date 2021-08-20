module.exports = function reverse(n) {
    let nStr = Math.abs(n).toString();
    let out = "";
    for (let i = nStr.length - 1; i >= 0; i--) {
        out += nStr[i];
    }
    out = Number(out);
    return out;
};
