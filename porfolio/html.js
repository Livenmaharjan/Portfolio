const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function () {
    this.classList.toggle('bi-moon');
    if (this.classList.toggle('bi-brightness-high-fill')) {
        document.body.style.backgroundImage = "url(images/ok2.jpg)";
        document.body.style.backgroundImage = "url(images/ok2.jpg)";
        body.style.transition = '2s';
    }
    else {
        document.body.style.backgroundImage = "url(images/ok.jpg)";
        document.body.style.backgroundImage = "url(images/ok.jpg)";

        body.style.transition = '2s';
    }
})