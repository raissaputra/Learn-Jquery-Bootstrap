$(document).ready(function () {
  $("#pendaftaran").submit(function (event) {
    var fname = $("#firstname").val();
    var lname = $("lastname").val();

    // panggil fungsi
    val_name(fname, event, "#firstname-error");
    val_name(lname, event, "#lastname-error");
  });

  function val_name(name, event, error) {
    if (!cekAngka(name)) {
      $(error).text("Nama tidak boleh kosong atau angka!");
      event.preventDefault();
    } else {
      $(error).text("");
    }
  }

  function cekAngka(name) {
    var cek = /^[a-zA-Z]{1, 50}$/;
    return cek.test(name);
  }
});