const tg = window.Telegram.WebApp;

tg.expand();
tg.ready();

function tonton(film) {
  tg.sendData("TONTON:" + film);
  alert("Membuka film: " + film);
}

function vip() {
  tg.sendData("VIP_CLICK");
  alert("Masuk halaman VIP");
}
