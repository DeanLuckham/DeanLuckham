function updateParallax() {
    var pos = $(window).scrollTop();
    var winHeight = $(window).height();
    var docHeight = $(document).height();
    var scrollLength = docHeight - winHeight;
    var scrollPct = Math.min(60, pos/scrollLength * 100 * (docHeight/winHeight) * 0.5);

    document.querySelectorAll('.parallax').forEach(elem => {
        $(elem).css('backgroundPosition', '50% ' + (20 + scrollPct) + '%')
    })
}

window.onscroll = function () {updateParallax()};