/*
 * February 2015
 * floatLabel 1.0.1
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

    this.init = function() {
        var inputs = $(this.selector);
        $.each(inputs, function(i, el) {
            var hasLabel = $(el).parent().find("label").length;
            if (!hasLabel) {
                $(el).parent().prepend("<label />");
            }
        });
    };

    $(this.selector).bind("isEmpty",function(){
        var label = $(this).prev("label");
        var name = $(this).attr("placeholder") || $(this).attr("name") || $(this).attr("id") || "";
        label.text(name);
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

    this.init();
};
