jQuery(document).ready(function($){
    var $navegador = $("#nav");
    var $btnMenu = $(".icon-menu");

    $btnMenu.on("click",function(){
    	$navegador.toggleClass("mostrar");
    	$navegador.find("li").toggleClass("opacidad");
    })
});
