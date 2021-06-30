//This is for the menu icon

$(document).ready(function(){
    $('.menuIcon').click(function(){
        $('body').toggleClass('menuShown')
    })
})

// smooth scroll

$(document).ready(function(){
    $("menu a,#scrollTop a,.btns .btn").on('click',function(event){

        if(this.hash !== ""){
            event.preventDefault();

            var hash = this.hash;
            $('html,body').animate({
                scrollTop:$(hash).offset().top
            },1000, function(){
                window.location.hash = hash;
            });
        }
    });
});

//Blog
var section = $('#blog li, .faq li');
function toggleAccordion() {
    section.removeClass('active');
    $(this).addClass('active');
}

section.on('click',toggleAccordion);