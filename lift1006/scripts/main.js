document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll('section').forEach((sec) => {
        sec.addEventListener("click", () => {
            sec.classList.toggle('hide');
        })
    });

});