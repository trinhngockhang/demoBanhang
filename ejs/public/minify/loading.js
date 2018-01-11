;(function($) {
    var slideMostViewer = function() {
        $(".owl-carousel-3").owlCarousel({
            autoplay:false,
            nav: true,
            dots : false,
            responsive: true,
            margin:3,
            loop:true,
            items:5,
            responsive:{
                0:{
                    items: 2,
                    dots: false,
                    margin:10,
                },
                479:{
                    items: 2,
                    dots: false
                },
                600:{
                    items: 3,
                    dots: false
                },
                768:{
                    items: 4,
                     margin:20,
                },
                991:{
                    items: 5
                },
                1200: {
                    items: 5
                }
            }
        });
    };

    var tabImagebox = function() {
            var speed = 1000;
            $('.flat-imagebox').each(function() {
                $(this).find('.tab-list').children().first().addClass('active'),
                $(this).find('.box-product').children('.row').first().show().siblings().hide(),
                $(this).find('.tab-list').children('li').on('click', function(e){
                    var liActive = $(this).index();
                    $(this).addClass('active').siblings().removeClass('active');
                    $(this).addClass('active').closest('.flat-imagebox').find('.box-product').children('.row').eq(liActive).fadeIn(1000).show().siblings().hide();
                    e.preventDefault();
                });
            });
    }; 
    $(document).ready(function() {
        slideMostViewer();
        tabImagebox();
    });
})(jQuery);