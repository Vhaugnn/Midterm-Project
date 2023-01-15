$(document).ready(function(){
    showMenu = false;
    $('.btn-bars').click(function(){
        if (!showMenu){
            $('.btn-bars').addClass('close');
            $('.dim').css('display', 'block');
            $('.side-bar').addClass('show');
            $('body').css('overflow-y', 'hidden');
            showMenu = true;
        } else{
            $('.btn-bars').removeClass('close');
            $('.dim').css('display', 'none');
            $('.side-bar').removeClass('show');
            $('body').css('overflow-y', 'visible');
            showMenu = false;
        }
    });

    $('.dim').click(function(){
        $(this).css('display', 'none');
        $('.side-bar').removeClass('show');
        $('.btn-bars').toggleClass('close');
        $('body').css('overflow-y', 'visible');
    })
});


