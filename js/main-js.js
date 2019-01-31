/* SLIDER - START*/
$(document).ready(function(){
  $(".event-nearest__slider").slick({
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    dots: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: false,
          centerMode: true,
          centerPadding: "0",
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: false,
          centerMode: true,
          centerPadding: "0",
          slidesToShow: 1
        }
      }
    ]
  });
  $(".center").slick({
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          //centerPadding: "40px",
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      }
    ]
  });

  $(".carousel-main__comments").slick({
    centerMode: true,
    centerPadding: "150px",
    slidesToShow: 1,
    dots: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: false,
          centerMode: true,
          centerPadding: "0",
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0",
          slidesToShow: 1
        }
      }
    ]
  });
  $(".center").slick({
    centerMode: true,
    centerPadding: "160px",
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      }
    ]
  });

  /* SLIDER -END */

  /* TABS - START */

  	$("ul.tabs li").click(function(){
  		var tab_id = $(this).attr("data-tab");

  		$("ul.tabs li").removeClass("current");
  		$(".proposition-main__content").removeClass("current");

  		$(this).addClass("current");
  		$("#"+tab_id).addClass("current");
  	});

    /* TABS - END */

    /* POP-UP WINDOW - START */

    $('.btn-details').on('click', function(e){
      e.preventDefault();
      var popup = $('.popup-main');
      popup.show();
    });
    $('.popup-main').on('click', function(e){
      e.preventDefault();
      $(this).hide();
    })

    /* POP-UP WINDOW - END */
});
