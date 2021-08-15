$(".show-asidebar-btn").click(function(){
    $(".asidebar").animate({marginLeft: 0});
})

$(".hide-asidebar-btn").click(function(){
    $(".asidebar").animate({marginLeft: "-100%"});
})

function go(url){
   setTimeout(function(){
    location.href = `${url}`
   },500)
}
$(function(){
    $('[data-toggle="popover"]').popover()
})

$(".full-screen-btn").on("click",function(){
    let current = $(this).closest(".card");
    current.toggleClass("full-screen-card");
    // console.log(current.hasClass("full-screen-card"));
    if(current.hasClass("full-screen-card")){
        $(this).html(`<i class="feather-minimize-2"></i>`);
    }else{
        $(this).html(`<i class="feather-maximize-2"></i>`);
    }
})

//to detect scroll and animate
let screenHeight = $(window).height();
let currentMenuHeight = $(".nav-menu .active").offset().top;

if(currentMenuHeight > screenHeight*0.8){
    $(".asidebar").animate({
        scrollTop:currentMenuHeight-200
    },1000)
}