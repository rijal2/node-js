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

Misal pada sebuah berkas (state.js) terdapat dua buah nilai yaitu coffeStock dan mesinKopiSiap,

        const coffeeStock = {
            arabica: 100,
            robusta: 150,
            liberica: 200,
        };

        const mesinKopiSiap = true;

Untuk mengeksport kedua nilai tersebut, kita tidak bisa menggunakan metode seperti mengexport sebuah nilai saja
        module.exports = coffeeStock;
        module.exports = mesinKopiSiap;

Baris kode kedua berarti kita menginisialisasikan ulang nilai properti module.exports,
sehingga nilai yang di-export hanya variabel mesinKopiSiap.

Solusinya kita bisa memanfaatkan object literals "{}" seperti pada kode berikut ini:
        module.exports = {coffeeStock,mesinKopiSiap};

*/
