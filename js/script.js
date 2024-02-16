ScrollReveal().reveal('figure img', {
    duraction: 3600,
    origin: 'top',
    distance: '60px',
    reset: true
});

$(window).on('load', function () {
    $("#splash").delay(3500).fadeOut('slow');
    $("#splash_logo").delay(3000).fadeOut('slow');
    stroke.play(); //SVGアニメーションの実行
});

$('.slider').on('touchmove', function (event, slick, currentSlide, nextSlide) {
    $('.slider').slick('slickPlay');
});

$('.burger-btn').on('click', function () {
    $('.burger-btn').toggleClass('close');
    $('.nav-wrapper').toggleClass('slide-in');
    $('body').toggleClass('noscroll');
});

$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0 //ページトップまでスクロール
    }, 2000, "easeInOutQuint");
    return false;
});

//アコーディオンをクリックした時の動作
$('.title').on('click', function() {//タイトル要素をクリックしたら
	var findElm = $(this).next(".box");//直後のアコーディオンを行うエリアを取得し
	$(findElm).slideToggle();//アコーディオンの上下動作
	if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
		$(this).removeClass('close');//クラス名を除去し
	}else{//それ以外
		$(this).addClass('close');//クラス名close
	}
});
//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作
$(window).on('load', function(){
	$('.accordion-area li:first-of-type section').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
	$(".open").each(function(index, element){//openクラスを取得
		var Title =$(element).children('.title');	//openクラスの子要素のtitleクラスを取得
		$(Title).addClass('close');//タイトルにクラス名closeを付与し
		var Box =$(element).children('.box');//openクラスの子要素boxクラスを取得
		$(Box).slideDown(500);//アコーディオンを開く
	});
});