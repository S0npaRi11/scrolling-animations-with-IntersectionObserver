const cards = document.querySelectorAll('.card');

const callback = (elements) => {
    elements.forEach(ele => {
        if(ele.isIntersecting  && !ele.target.classList.contains('show')){
            ele.target.classList.add('show')
        }else{
            ele.target.classList.remove('show')
        }
    })
}

const observer = new IntersectionObserver(callback);
cards.forEach(card => observer.observe(card))



