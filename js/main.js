const prev = document.querySelector('.btn-prev'),
    next = document.querySelector('.btn-next'),
    slides = document.querySelectorAll('.slide'),
    dots = document.querySelectorAll('.dot'),
    titles = document.querySelectorAll('.tit');

let index = 0;

const activSlide = n => {
    console.log(n)
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}
const activDot = n => {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}
const activTit = n => {
    for (tit of titles) {
        tit.classList.remove('active');
    }
    titles[n].classList.add('active');
}
function prepareCurentSlide(ind) {
    activSlide(ind);
    activDot(ind);
    activTit(ind);
}
const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurentSlide(index);
    } else {
        index++;
        prepareCurentSlide(index);
    }
}
const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1
        prepareCurentSlide(index);
    } else {
        index--;
        prepareCurentSlide(index);
    }
}

prepareCurentSlide(index);
dots.forEach((item, indexDot) => {
    item.addEventListener('click',()=>{
    index = indexDot;
    prepareCurentSlide(index);
})
})

titles.forEach((item, indexTit) => {
    item.addEventListener('click',()=>{
    index = indexTit;
    prepareCurentSlide(index);
})
})

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);