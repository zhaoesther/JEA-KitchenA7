// Calls this while document not ready
var ready = false;
if (!ready) {
	loading();
}
function loading() {
	console.log('loading...');
	$('.preloader').show();
}

$(document).ready(function() {
    $('.preloader').hide();
    ready = true;
    console.log('loaded!');

    // Show name of page
    var showpagename = function() {
        if ($("#main").offset().top > 200) {
            $("#pagename").show();
            $("#pagename").removeClass("fadeOut");
            $("#pagename").addClass("fadeIn");
        } else {
            $("#pagename").removeClass("fadeIn");
            $("#pagename").addClass("fadeOut");
        }
    };
    // Show now if page is not at top
    showpagename();
    // Show when page is scrolled
    $(window).scroll(showpagename);
    
    // Navbar Active Selection
    var url = window.location;
    $('ul.nav a[href="'+ url +'"]').parent().addClass('active');
    $('ul.nav a').filter(function() {
          return this.href == url;
    }).parent().addClass('active');

    window.onclick = function(event) {
        if (event.target != document.getElementById('mainnav') && event.target !=document.getElementById('opensidebar') && event.target !=document.getElementById('closesidebar')) {
            closeNav();
        }
    }

    
});

// * Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mainnav").style.width = "430px";
    document.getElementById("main").style.marginLeft = "430px";
    $("#opensidebar").hide();
    $("#closesidebar").show();
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mainnav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    $("#opensidebar").show();
    $("#closesidebar").hide();
}
