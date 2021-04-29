/*
TUTORIAL EXPORT & IMPORT
file state.js ini adalah berkas yg akan kita gunakan untuk meng-export nilai, agar bisa digunakan oleh berkas yang lain.

1. CARA MENGEXPORT SEBUAH NILAI yg ada didalam SEBUAH BERKAS.
Berikut adalah contoh nilainya

const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200,
};

Cara meng-export nilai tersebut dari berkas ini adalah dengan meuliskan kode berikut:
module.exports = coffeeStock;


2. CARA MENGEXPORT BEBERAPA NILAI yang ada didalam SEBUAH BERKAS.
*/

const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200,
};

const mesinKopiSiap = true;

module.exports = {coffeeStock,mesinKopiSiap};
