function saniye() {
    const basla = new Date();
    const baslaSaniye = basla.getSeconds() + basla.getMinutes() * 60 + basla.getHours() * 3600;

    console.log("Başlama Vaxti:", basla.toLocaleTimeString());
    const sonSaniye = baslaSaniye + 5 * 60;
    const interval = setInterval(() => {
        const hazirkiVaxt = new Date();
        const kecenSaniye = hazirkiVaxt.getSeconds() + hazirkiVaxt.getMinutes() * 60 + hazirkiVaxt.getHours() * 3600;
        console.log("Cari Vaxt:", hazirkiVaxt.toLocaleTimeString());
        if (kecenSaniye >= sonSaniye) {
            clearInterval(interval);
            console.log("Sayim başa çatdi.");
        }
    }, 1000);
}
saniye();
  