const items = document.querySelectorAll('#timeline li');  /*Gte all the list items*/

const isInViewport = el => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const run = () => items.forEach(item => {    //Looping through the li and if its in the viewport, add the class 'show'
    if (isInViewport(item)) {
        item.classList.add('show');
    }
});


//Events

window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);