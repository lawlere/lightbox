function showLightbox()
{
	document.getElementById("lightboxBG").style.display = "block";
	document.getElementById("lightboxFG").style.display = "block";
}

function hideLightbox()
{
	document.getElementById("lightboxBG").style.display = "none";
	document.getElementById("lightboxFG").style.display = "none";
}

jQuery(function($){
    var 
    Node = $('#lightboxFG'),
    BaseWidth = Node.width();
    
    $(window).resize(function() {
        $('#lightboxFG').css({
            top: ($(window).height() - $('#lightboxFG').outerHeight()) / 2
        });
    });
    
    
    
    $(window).resize();
    
    
    var $scrollingDiv = Node;
    $(window).scroll(function() {
        var winScrollTop = $(window).scrollTop() + 0,
            zeroSizeHeight = $(document).height() - $(window).height(),
            newSize = BaseWidth * ( 1 - (winScrollTop / zeroSizeHeight) * (2/3) );
        
        Node.css({
            width: newSize,
            "marginTop": winScrollTop + "px"
        });
    });
});

jQuery(function($){
 var 
    Node = $('.image_size'),
    BaseWidth = Node.width();
    
    $(window).resize(function() {
        $('.image_size').css({
            top: ($(window).height() - $('.image_size').outerHeight()) / 2
        });
    });
    
    
    
    $(window).resize();
    
    
    var $scrollingDiv = Node;
    $(window).scroll(function() {
        var winScrollTop = $(window).scrollTop() + 0,
            zeroSizeHeight = $(document).height() - $(window).height(),
            newSize = BaseWidth * ( 1 - (winScrollTop / zeroSizeHeight) * (2/3) );
        
        Node.css({
            width: newSize,
            "marginTop": winScrollTop + "px"
        });
    });
});

jQuery(function($){
 var 
    Node = $('#text_width'),
    BaseWidth = Node.width();
    
    $(window).resize(function() {
        $('#text_width').css({
            top: ($(window).height() - $('#text_width').outerHeight()) / 2
        });
    });
    
    
    
    $(window).resize();
    
    
    var $scrollingDiv = Node;
    $(window).scroll(function() {
        var winScrollTop = $(window).scrollTop() + 0,
            zeroSizeHeight = $(document).height() - $(window).height(),
            newSize = BaseWidth * ( 1 - (winScrollTop / zeroSizeHeight) * (2/3) );
        
        Node.css({
            width: newSize,
            "marginTop": winScrollTop + "px"
        });
    });
});