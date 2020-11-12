

function inView(element) {

    const currentPosition = window.pageYOffset + window.innerHeight;

    const offsetTop = calculateOffsetTop(element);

    if(currentPosition >= (offsetTop + 50)) {
        return true;
    }

    return false;
}

function calculateOffsetTop (el) {
    let y = 0; 

    while(el) {
        y += el.offsetTop - el.scrollTop + el.clientTop;
        el = el.offsetParent;
    }
    
    return y;
}

export default inView;