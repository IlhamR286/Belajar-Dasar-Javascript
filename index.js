// Bagian Import
import { coffeStock, isCoffeMachineReady } from "./state.js";
/*
console.log("Menyalakan mesin kopi");
console.log("Menggiling biji kopi");
console.log("Memanaskan air");
console.log("Mencampurkan air dan kopi");
console.log("Menuangkan kopi ke dalam gelas");
console.log("Menuangkan susu ke dalam gelas");
console.log("Kopi Anda sudah siap!");
*/
// const { coffeStock, isCoffeMachineReady } = require("./state");
// console.log(coffeStock);
// Membuat Kopi
const makeCoffe = (type, miligrams) => {
  if (coffeStock[type] >= miligrams && isCoffeMachineReady == true) {
    console.log("Mesin Kopi Sudah Siap");
    console.log("Kopi ini berhasil di buat!");
  } else {
    console.log("Mohon maaf kopi telah habis");
  }
};
// Menampilkan Kopi
const menampilkanKopi = (stock) => {
  for (const type in stock) {
    console.log(type);
  }
};
menampilkanKopi(coffeStock);

makeCoffe("robusta", 70);
