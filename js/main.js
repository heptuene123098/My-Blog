//Filter JS
$(document).ready(function(){
    $(".filter-item").click(function (){
        const value = $(this).attr("data-filter");
        if (value == "all") {
            $(".post-box").show(1000); // Correctly pass number instead of string
        } else {
            $(".post-box").not("." + value).hide(1000); // Correctly pass number instead of string
            $(".post-box").filter("." + value).show(1000); // Correctly pass number instead of string
        }
    });
    // Add active to btn
    $('.filter-item').click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});
//Header background change on scroll
let header = document.querySelector('header')

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0)
}) 
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.flashcard').forEach(card => {
            card.addEventListener('click', () => {
                card.querySelector('.flashcard-content').classList.toggle('flipped');
            });
        });
    });
