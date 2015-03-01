/*
 * February 2015
 * floatLabel 1.0.0
 * @author Mario Vidov
 * @url http://vidov.it
 * @twitter MarioVidov
 * GPL license
 */
$.fn.floatLabel = function(options) {
    var settings = $.extend({
    }, options);

    var isFocused = "active",
        isVisible = "visible";

    $(this.selector).bind("isEmpty",function(){
        var label = $(this).prev("label");
        label.text(this.placeholder);
        label.attr({
            for: this.id
        });
        if(this.value !== ""){
            label.addClass(isVisible);
        } else {
            label.removeClass(isVisible);
        }
    }).on("keyup",function(){
        $(this).trigger("isEmpty");
    }).on("focus",function(){
        $(this).prev("label").addClass(isFocused);
    }).on("blur",function(){
        $(this).prev("label").removeClass(isFocused);
    });
}