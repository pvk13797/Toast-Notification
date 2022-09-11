jQuery(document).ready(function(){

    jQuery(document).on('click', '.apply', function(){
        jQuery('.toast_notification').addClass('active');
        jQuery('.progress').addClass('active');
        setTimeout(function(){
            jQuery('.toast_notification').removeClass('active');
            jQuery('.progress').removeClass('active');
        }, 5000);
    });
    jQuery(document).on('click', '.close_icon', function(){
        jQuery('.toast_notification').removeClass('active');
        jQuery('.progress').removeClass('active');
    });
});