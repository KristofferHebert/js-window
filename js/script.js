(function(){
    // Cache current popup window
    var popup = false;

    // Create window popup based on link
    function triggerPopup(link){
        return function(e){
            e.preventDefault();
            var page = link.href.split('#').pop();
            
            // Create new or update existing popup
            if (popup != false){
                popup.location.replace(page);
            } else {
                popup = window.open(page, "Popup", 'location=yes,height=500,width=500,scrollbars=yes,status=yes');
            }
        }
    }

    // Used to close Window popup when user clicks close
    function closePopup(e){
        e.preventDefault();
        popup.close();
    }

    function bootstrap() {

        // Get all Menu anchor tags
        var menuLinks = document.querySelectorAll('li a');

        // Assign on click events
        for(var i = 0; i < menuLinks.length; i++){
            if(menuLinks[i].href.indexOf('close') !== -1){
                menuLinks[i].addEventListener("click", closePopup, true);
            } else {
                menuLinks[i].addEventListener("click", triggerPopup(menuLinks[i]), true);

            }
        }
    }

    window.onload = bootstrap;

})();