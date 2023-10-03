"use strict";
function updateParallax() {
    const pos = $(window).scrollTop();
    const winHeight = $(window).height();
    const docHeight = $(document).height();
    const scrollLength = docHeight - winHeight;
    const scrollPct = Math.min(60, pos / scrollLength * 100 * (docHeight / winHeight) * 0.5);
    document.querySelectorAll('.parallax').forEach(elem => {
        $(elem).css('backgroundPosition', '50% ' + (20 + scrollPct) + '%');
    });
}
window.onscroll = () => {
    updateParallax();
};
