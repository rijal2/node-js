/* cara menampilakn tulisan di bawah ini menggunakan node.js adalah dengan dengan menuliskan "node index.js" pada terminal.

console.log("Menyalakan mesin kopi");
console.log("Menggiling biji kopi");
console.log("Memanaskan air");
console.log("Mencampurkan air dan kopi");
console.log("Menuangkan kopi ke dalam gelas");
console.log("Menuangkan susu ke dalam gelas");
console.log("Kopi Anda sudah siap!");

*/

/* cara mengimport module yang sudah diexport oleh state.js
1. Tuliskan kode berikut:
const coffeeStock = require('./state');

2. Kemudian deklarasikan perintah. Contoh perintah paling sederhana adalah menampilkan tulisan yang ada dalam variable cofeeStock. Seperti pada kode di bawah ini:
console.log(coffeeStock)

*/

const coffeeStock = require('./state');

const makeCofee = (type,miligrams) => {
    if (coffeeStock[type] >= miligrams) {
        console.log("Bagus! Kopi berhasil dibuat");
    } else {
        console.log("Maaf! Biji kopi habis");
    }
}

makeCofee("robusta",80);