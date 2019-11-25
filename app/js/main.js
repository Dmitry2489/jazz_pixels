$(function(){
    $('.slider__ineer').slick({
        infinite: false,
        slidesToShow: 1.1,
        prevArrow: 'true',
        nextArrow: 'false',
        dots: true,
        
    });

    let content = document.getElementById("content")
    let show = document.getElementById("showContent")
    let hide = document.getElementById("hideContent")
    
    show.addEventListener("click", () => {
        content.style.display = "block"
    })
    
    hide.addEventListener("click", () => {
        content.style.display = "none"
    })
    
});