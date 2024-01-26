document.addEventListener('DOMContentLoaded', function () {
    var images = document.querySelectorAll('.zoom-effect');

    images.forEach(function (image) {
        image.addEventListener('click', function () {
            this.classList.toggle('zoom-effect');
        })
    });
});
