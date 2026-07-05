const tg = window.Telegram.WebApp;

tg.expand();
tg.ready();

function kirimData() {
  tg.sendData("Halo dari Web App!");
}
