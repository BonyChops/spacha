const colors = ["#134a9e", "#00b8d4", "#00bfa5", "#ffb300", "#e65100", "#c2185b", "#d00000"];
const base_colors = ["#134a9e", "#00e5ff", "#1de9b6", "#ffca28", "#f57c00", "#e91e63", "#e62117"];
const txt_colors = ["white", "black", "black", "black", "black", "white", "white"];
const n = [0, 200, 500, 1000, 2000, 5000, 10000];
const themes = {
    blue: {},
    lightblue: {},
    green: {},
    yellow: {},
    orange: {},
    pink: {},
    red: {}
};
const exp = {};
Object.keys(themes).map((key, i) => ({
    key,
    v: {
        color: colors[i],
        baseColor: base_colors[i],
        txtColor: txt_colors[i],
        price: n[i]
    }
})).forEach(v => exp[v.key] = v.v);
console.log(exp);