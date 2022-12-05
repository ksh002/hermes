$(function(){

	$('#fullpage').fullpage({
		//options here
		licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',  // 무료 사용시 해당 라이센스 카피할 것(반드시 있어야함)
		navigation: true,  //우측페이저유무
		navigationPosition: 'right', // left,right(default) 페이저 위치
		autoScrolling:true,
		scrollHorizontally: true,
		slidesNavigation: false, // 슬라이드섹션 네비게이션 유무
		slidesNavPosition: 'bottom', //네비게이션 위치 (top,bottom)
		// navigationTooltips: ['에르메스 홀리데이', '에르메스 맞춤안장'], //navigation active시 타이틀 노출여부(hover포함)
		showActiveTooltip: true,  //네비게이션 hover(default:false)시 툴팁 표기
		fitToSection: true,
		fitToSectionDelay: 1000, // 섹션 넘어갈 때 걸리는 딜레이 시간
		keyboardScrolling: true, // 키보드 방향키로 스크롤 컨트롤 여부
		animateAnchor: true,
		// sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'] // 섹션별 컬러
	});

    var swiper = new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });

    


    // header 고정
    // var $header = $("header");
    // $("body").scroll(function(){
    //     if($(this).scrollTop() > 0){
    //         $("header").addClass("sticky");
    //     }else{
    //         $("header").removeClass("sticky");
    //     }
    // });

    setInterval(function(){
        if($("body").hasClass("fp-viewing-0")){
            $("header").removeClass("scroll_on");
            $("header .logo").css("display","block");
            
        }else{
            $("header").addClass("scroll_on");
            $("header .logo").css("display","none");
            
        }
    })

    // $(".modal-inner").focus(function(){
    //     $("#fullpage").removeClass(".section");
    // })
    $(".modal_btn button").click(function(){
        $(".modal-inner").stop().fadeOut();
    })




})