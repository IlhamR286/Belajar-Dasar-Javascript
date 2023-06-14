/*
console.log("Menyalakan mesin kopi");
console.log("Menggiling biji kopi");
console.log("Memanaskan air");
console.log("Mencampurkan air dan kopi");
console.log("Menuangkan kopi ke dalam gelas");
console.log("Menuangkan susu ke dalam gelas");
console.log("Kopi Anda sudah siap!");
*/
const { coffeStock, isCoffeMachineReady } = require("./state");
// console.log(coffeStock);
const makeCoffe = (type, miligrams) => {
  if (coffeStock[type] >= miligrams && isCoffeMachineReady == true) {
    console.log("Mesin Kopi Sudah Siap");
    console.log("Kopi ini berhasil di buat!");
  } else {
    console.log("Mohon maaf kopi telah habis");
  }
};

makeCoffe("robusta", 70);
