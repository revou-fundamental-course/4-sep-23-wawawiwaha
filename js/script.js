function hitungLuas() {
  // Mengambil nilai panjang sisi dari input
  var inputLuas = document.getElementById("panjangLuasSisi");
  var panjangSisi = inputLuas.value.trim();

  // Membuat pola regex untuk angka
  var regex = /^[0-9]*$/;

  // Mengecek apakah input sesuai dengan pola regex
  if (!regex.test(panjangSisi)) {
      document.getElementById("errorLuas").innerHTML = "Masukkan jumlah sisi berupa angka!";
      inputLuas.focus();
      return;
  }

  // Menghapus pesan validasi jika input valid
  document.getElementById("errorLuas").innerHTML = "";

  // Menghitung luas persegi
  var luas = panjangSisi * panjangSisi;

  // Menampilkan hasil di elemen dengan id "hasil"
  document.getElementById("hasilLuas").innerHTML = "L = " + luas;
  document.getElementById("luasSisi").innerHTML = "L = " + panjangSisi + " x " + panjangSisi;

}

function resetLuas() {
  // Mereset nilai input dan hasil
  document.getElementById("panjangLuasSisi").value = "";
  document.getElementById("hasilLuas").innerHTML = "";
  document.getElementById("luasSisi").innerHTML = "";
  document.getElementById("errorLuas").innerHTML = "";
}



function hitungKeliling() {
  // Mengambil nilai panjang sisi dari input
  var inputKeliling = document.getElementById("panjangKelilingSisi");
  var panjangSisiKeliling = inputKeliling.value.trim();

  // Membuat pola regex untuk angka
  var regex = /^[0-9]*$/;

  // Mengecek apakah input sesuai dengan pola regex
  if (!regex.test(panjangSisiKeliling)) {
      document.getElementById("errorKeliling").innerHTML = "Masukan jumlah sisi berupa angka!";
      inputKeliling.focus();
      return;
  }

  // Menghapus pesan validasi jika input valid
  document.getElementById("errorKeliling").innerHTML = "";

  // Menghitung keliling persegi
  var keliling = 4 * parseFloat(panjangSisiKeliling);

  // Menampilkan hasil di elemen dengan id "hasilKeliling"
  document.getElementById("hasilKeliling").innerHTML = "K = " + keliling;
  document.getElementById("kelilingSisi").innerHTML = "K" + " " + "=" + " " + "4" + " " + "x" + " " + panjangSisiKeliling;
}

function resetKeliling() {
  // Mereset nilai input, hasil, dan pesan validasi
  document.getElementById("panjangKelilingSisi").value = "";
  document.getElementById("hasilKeliling").innerHTML = "";
  document.getElementById("kelilingSisi").innerHTML = "";
  document.getElementById("errorKeliling").innerHTML = "";
}


