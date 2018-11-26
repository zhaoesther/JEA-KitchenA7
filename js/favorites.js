// Calls this while document not ready
var ready = false;
if (!ready) {
	loading();
}
function loading() {
	console.log('loading...');
	$('#loading-icon').show();
}

$(document).ready(function() {
    $('#loading-icon').hide();
	ready = true;

    // Show name of page
    var showpagename = function() {
        if ($("#main").offset().top > 300) {
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
    
    
    var fav = JSON.parse(localStorage.getItem('favoritedrecipes'));
    if (fav) {
        
        var source2 = document.getElementById("favoritetemplatecard").innerHTML;
        var template2 = Handlebars.compile(source2);
        var parent2 = $("#templatedfavorites");

        for (var i = 0; i<fav.length; i++) {
            var curdata = fav[i];
            console.log(fav[i]);
            var curhtml = template2(curdata);
            parent2.append(curhtml);
        }
    }
    else {
        emptymessage();
        console.log('hide empty message');
    }
    
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

function emptymessage() {
    $('#empty-message').toggle();
}

$('#clear-favorites').click(function() {
    $('#templatedfavorites').empty();
    $('#empty-message').show();
    localStorage.removeItem("favoritedrecipes");
    console.log('Favorites Cleared!');
  });


// var favorited = [
//     {'name': 'chicken_kale_soup_recipe','index': '1'},
//     {'name': 'cranberry_kale_salad_recipe','index': '2'}
// ]
// var dummy = {'name': 'Recipe Name','index': '#'}

// LEARNING TEMPLATE
// var source = $("#recipetemplate").html();
// var template = Handlebars.compile(source);
// var parent = $("#templatedfavorites");

// var html = template(simple)
// for (var i = 0; i<favorited.length; i++) {
//     var curdata = favorited[i];
//     var curhtml = template(curdata);
//     parent.append(curhtml);
// }
