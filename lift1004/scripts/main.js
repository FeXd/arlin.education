document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("mousemove", parallax);
    function parallax(event) {
        this.querySelectorAll(".parallax").forEach((shift) => {
            let currentPositionX = shift.style.backgroundPositionX.split("px")[0];
            if (!currentPositionX) {
                currentPositionX = 0;
            }
            currentPositionX = parseInt(currentPositionX);

            let x = (event.pageX / window.innerWidth);
            let max_shift = 20;

            switch (shift.id) {
                case 'sky':
                    max_shift = 5;
                    break;
                case 'ceiling':
                    max_shift = 10;
                    break;
                case 'land':
                    max_shift = 20;
                    break;
                case 'floor':
                    max_shift = 25;
                    break;
                default:
                    break;
            }

            let actual_shift = (50 - max_shift / 2) + (x * max_shift); // 40 to 60
            shift.style.backgroundPositionX = `${actual_shift}%`;
        });
    }
});

// https://dev.to/clementgaudiniere/create-a-parallax-effect-when-the-mouse-moves-3km0
// document.addEventListener("mousemove", parallax);
// function parallax(event) {
//     this.querySelectorAll(".parallax-wrap span").forEach((shift) => {
//         const position = shift.getAttribute("value");
//         const x = (window.innerWidth - event.pageX * position) / 90;
//         const y = (window.innerHeight - event.pageY * position) / 90;

//         shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
//     });
// }
