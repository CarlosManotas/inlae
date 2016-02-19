$.noConflict();
jQuery(document).ready(function($){
    var $navegador = $("#nav");
    var $btnMenu = $(".icon-menu");
    var $preload = $(".preload");
    window.onload = function() {
	  $preload.hide();
	};
    $btnMenu.on("click",function(){
    	$navegador.toggleClass("mostrar");
    	$navegador.find("li").toggleClass("opacidad");
        $navegador.find("li").on("click",function(){
            t = $(this);
            $navegador.removeClass("mostrar");
            $navegador.find("li").removeClass("opacidad");
        })
    })
});
