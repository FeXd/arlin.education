document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll('section h2').forEach((sec) => {
        sec.addEventListener("click", () => {
            sec.parentElement.classList.toggle('hide');
        })
    });

});