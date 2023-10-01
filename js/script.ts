function updateParallax() {
    const pos: number = $(window).scrollTop()!!;
    const winHeight: number = $(window).height()!!;
    const docHeight: number = $(document).height()!!;
    const scrollLength: number = docHeight - winHeight;
    const scrollPct: number = Math.min(60, pos/scrollLength * 100 * (docHeight/winHeight) * 0.5);

    document.querySelectorAll('.parallax').forEach(elem => {
        $(elem).css('backgroundPosition', '50% ' + (20 + scrollPct) + '%');
    })
}

window.onscroll = () => {
    updateParallax();
};