jQuery(document).ready(function($){
    var $navegador = $("#nav");
    var $btnMenu = $(".icon-menu");
    var $dinamico = $("#movil-off");
    var $paraBtn = $(".btn-llamar");
    var $preload = $(".preload");
    var $btnPreguntas = $(".preguntas");
    window.onload = function() {
	  $preload.hide();
	};
    $btnPreguntas.on("click", "h3" ,function(){
    	t = $(this);
    	t.parent().find(".aparece").removeClass("aparece");
    	t.next().addClass("aparece");
    });
    $btnMenu.on("click",function(){
    	$navegador.toggleClass("mostrar");
    	$navegador.find("li").toggleClass("opacidad");
    })

    $.getScript('/js/isMobile.js', function()
	{

	    if (isMobile.apple.phone || isMobile.android.phone || isMobile.windows_phone) {
	        $dinamico.remove();
	        $paraBtn.append('<a href="tel:+541152774997"><button class="icon-telefono espacio btn-gracias">LLAMANOS!</button></a>');
      	}
	    
	});
	$.getScript('https://cdn.jsdelivr.net/scrollreveal.js/3.0.9/scrollreveal.min.js', function()
	{

	    window.sr = ScrollReveal();
		sr.reveal(".aparecer-arriba",{duration:1000,useDelay:"always"});
		sr.reveal(".aparecer-derecha",{duration:1000,useDelay:"always",origin:"left"});
		sr.reveal(".aparecer-izquierda",{duration:1000,useDelay:"always",origin:"right",delay:500});
		sr.reveal(".aparecer-abajo",{duration:1000,useDelay:"always",origin:"top"});
	    
	});
});
