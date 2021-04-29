/* cara menampilakn tulisan di bawah ini menggunakan node.js adalah dengan dengan menuliskan "node index.js" pada terminal.

console.log("Menyalakan mesin kopi");
console.log("Menggiling biji kopi");
console.log("Memanaskan air");
console.log("Mencampurkan air dan kopi");
console.log("Menuangkan kopi ke dalam gelas");
console.log("Menuangkan susu ke dalam gelas");
console.log("Kopi Anda sudah siap!");

*/

/* 
TUTORIAL EXPORT & IMPORT
file index.js ini adalah berkas yg akan kita gunakan untuk meng-IMPORT nilai dari berkas yang lain, dalam hal ini adalah state.js.

1. CARA MENGIMPORT SEBUAH NILAI dari SEBUAH BERKAS.

a. Tuliskan kode berikut:
const coffeeStock = require('./state');

b. Kemudian deklarasikan perintah.
- Contoh perintah paling sederhana adalah menampilkan tulisan yang ada dalam variable cofeeStock.
Seperti pada kode di bawah ini:

        console.log(coffeeStock);

- Atau gunakan perintah yang lebih kompleks, seperti pada kode berikut ini

        const makeCofee = (type,miligrams) => {
            if (coffeeStock[type] >= miligrams) {
                console.log("Bagus! Kopi berhasil dibuat");
            } else {
                console.log("Maaf! Biji kopi habis");
            }
        }

        makeCofee("robusta",80);



2. CARA MENGIMPORT beberapa NILAI dari SEBUAH BERKAS.
Kita bisa menggunakan model destructing object, seperti pada kode di bawah ini:

        const {coffeeStock, mesinKopiSiap} = require ('./state');

Dengan memasukkan kode di atas kita sudah berhasil mengimport nilai coffeeStock dan mesinKopiSiap dari berkas state.js.
Selanjutnya kita bisa memanggil nilai tersebut untuk kita gunakan pada modul(berkas) ini. Contoh penggunaan nilai tersebut untuk sebuah perintah sederhana,

        console.log(coffeeStock);
        console.log(mesinKopiSiap);

*/