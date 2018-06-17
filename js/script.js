
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

function closePopup(e){
    e.preventDefault();
    popup.close();
}

// Cache current popup window
var popup = false;

// Get all Menu links
var menuLinks = document.querySelectorAll('li a');

for(var i = 0; i < menuLinks.length; i++){
    if(menuLinks[i].href.indexOf('close') !== -1){
        menuLinks[i].addEventListener("click", closePopup, true);
    } else {
        menuLinks[i].addEventListener("click", triggerPopup(menuLinks[i]), true);

    }
}