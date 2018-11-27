/// Calls this while document not ready

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

    window.onclick = function(event) {
        if (event.target != document.getElementById('mainnav') && event.target !=document.getElementById('opensidebar') && event.target !=document.getElementById('closesidebar')) {
            closeNav();
        }
    }

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

    var ingredsource = $("#ingredientstemplate").html();
    var ingredtemplate = Handlebars.compile(ingredsource);
    var ingredientslist = $("#ingredientslist");
    var listOfItems = JSON.parse(localStorage.getItem("kitchen"));
    if ( listOfItems != null ) {
        for (var i = 0; i < listOfItems.length; i++) {
            var ingredients = listOfItems[i];
            var stuff = ingredtemplate(ingredients);
            ingredientslist.append(stuff);
        }
    }

    // Set up the template for recipes to be shown
    var source = $("#recipetemplatecard").html();
    var template = Handlebars.compile(source);
    var parentDiv = $("#recipedeposit2");

    // Check if user's kitchen has any ingredients inputted
    if( listOfItems != null ) {
            // Use a set data structure to hold the filtered recipes to be shown to the user
            var recipesToList = new Set();
            // Loop through the user's ingredients
            for( var i = 0; i < listOfItems.length; i++ ) {
                var theRecipe = null;
                var currItem = listOfItems[i];
                // Depending on which ingredient it is, look into the corresponding recipe array
                // Since we are using a set, duplicate recipes will be ignored
                switch(currItem.inv) {
                     case 'Broccoli':
                         theRecipe = recipes_broccoli;
                         break;
                     case 'Chicken':
                         theRecipe = recipes_chicken;
                         break;
                     case 'Egg':
                         theRecipe = recipes_egg;
                         break;
                     case 'Kale':
                         theRecipe = recipes_kale;
                         break;
                     case 'Salmon':
                         theRecipe = recipes_salmon;
                         break;
                     case 'Spinach':
                         theRecipe = recipes_spinach;
                         break;
                     case 'Tomato':
                         theRecipe = recipes_tomato;
                         break;
                     default: // No ingredient entered
                        alert('No ingredients entered!');
                }
                // Add the recipe names into the tentative recipes to be shown
                for( var k = 0; k < theRecipe.length; k++ ) {
                    recipesToList.add(theRecipe[k].name);
                }
            }
            // Insert recipe card into recipes.html in #recipedeposit2
            for( let recipeName of recipesToList) {
                for( var j = 0; j < recipes_all.length; j++ ) {
                    var currRecipe = recipes_all[j];
                    if( currRecipe.name === recipeName ) {
                        var currHtml = template(currRecipe);
                        parentDiv.append(currHtml);
                    }
                }
            }
            
        } else {
            $("#empty-message").show();
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

// RECIPE STORAGE TO LOCALSTORAGE
var recipes_all = [
    {'name': 'Chicken and Kale Soup', 'href':'./recipe_template.html?recipe=Chicken%20and%20Kale%20Soup', 'img':'./images/Chicken-Kale-Detox-Soup.jpg'},
    {'name': 'Cranberry Kale Salad', 'href':'./recipe_template.html?recipe=Cranberry%20Kale%20Salad','img':'./images/Cranberry-Kale-Salad.jpg'},
    {'name': 'Chinese Style Kale', 'href':'./recipe_template.html?recipe=Chinese%20Style%20Kale','img':'./images/Chinese-Style-Kale.jpg'},
    {'name': 'Kale Chips', 'href':'./recipe_template.html?recipe=Kale%20Chips','img':'./images/kale-chips.jpg'},
    {'name': 'Kale Pesto', 'href':'./recipe_template.html?recipe=Kale%20Pesto','img':'./images/kale-pesto.jpg'}, 
    {'name': 'Broccoli Cheddar Soup', 'href':'./recipe_template.html?recipe=Broccoli%20Cheddar%20Soup', 'img':'./images/broccoli-cheddar.jpg'},
    {'name': 'Mediterranean Broccoli & Cheese Omelet', 'href':'./recipe_template.html?recipe=Mediterranean%20Broccoli%20and%20Cheese%20Omelet', 'img':'./images/broccoli-cheese-omelete.jpg'},
    {'name': 'Creamy Chicken and Spinach Skillet', 'href':'./recipe_template.html?recipe=Creamy%20Chicken%20and%20Spinach%20Skillet','img':'./images/chicken-spinach.jpg'},
    {'name': 'Classic Deviled Eggs', 'href':'./recipe_template.html?recipe=Classic%20Deviled%20Eggs','img':'./images/devil-eggs.jpg'},
    {'name': 'Chinese Tomato and Eggs Stir-fry', 'href':'./recipe_template.html?recipe=Chinese%20Tomato%20and%20Eggs%20Stir-fry','img':'./images/tomato-egg.jpg'},
    {'name': 'Simple and Healthy Poached Salmon', 'href':'./recipe_template.html?recipe=Simple%20and%20Healthy%20Poached%20Salmon','img':'./images/simple-salmon.jpg'},
    {'name': 'Creamy Pan Seared Salmon with Tomatoes and Spinach', 'href':'./recipe_template.html?recipe=Creamy%20Pan%20Seared%20Salmon%20with%20Tomatoes%20and%20Spinach','img':'./images/salmon-tomato-spinach.jpg'},
];
// Push to localStorage
localStorage.setItem('allrecipes',JSON.stringify(recipes_all));

// Each recipe array may contain recipes from other recipe arrays 
// (For example. 'Chicken and Kale Soup' falls into both recipes_kale and recipes_chicken)
var recipes_kale = [
    // Kale
    {'name': 'Chicken and Kale Soup'},
    {'name': 'Cranberry Kale Salad'},
    {'name': 'Chinese Style Kale'},
    {'name': 'Kale Chips'},
    {'name': 'Kale Pesto'},
];

var recipes_broccoli = [
    // Broccoli
    {'name': 'Broccoli Cheddar Soup'},
    {'name': 'Mediterranean Broccoli & Cheese Omelet'}
];

var recipes_chicken = [
    // Chicken
    {'name': 'Chicken and Kale Soup'},
    {'name': 'Creamy Chicken and Spinach Skillet'}
];

var recipes_egg = [
    // Egg
    {'name': 'Classic Deviled Eggs'},
    {'name': 'Chinese Tomato and Eggs Stir-fry'},
    {'name': 'Mediterranean Broccoli & Cheese Omelet'}
];

var recipes_salmon = [
    // Salmon
    {'name': 'Simple and Healthy Poached Salmon'},
    {'name': 'Creamy Pan Seared Salmon with Tomatoes and Spinach'}
];

var recipes_spinach = [
    // Spinach
    {'name': 'Creamy Pan Seared Salmon with Tomatoes and Spinach'},
    {'name': 'Creamy Chicken and Spinach Skillet'}
];

var recipes_tomato = [
    // Tomato
    {'name': 'Chinese Tomato and Eggs Stir-fry'},
    {'name': 'Creamy Pan Seared Salmon with Tomatoes and Spinach'}

];


// $('#ingredientslist').click(function() {
//     window.location = "./kitchen.html"; // Go to kitchen page
// });
// CHANGE TO BELOW FORMAT (REMOVE INGREDIENTS DIRECTLY)

$('#ingredientslist').on("click",'.ingredient-item',function() {
    console.log('go to kitchen...');
    window.location.href="./kitchen.html"

    // console.log("click delete!");
    // var localitemref = JSON.parse(localStorage.getItem("kitchen"));
    // var kitchenobjects = [];
    // if (localitemref != null) {
    //     for (i=0; i < localitemref.length; i++) {
    //         kitchenobjects.push(localitemref[i]);
    //     }
    //     for (i=0; i < kitchenobjects.length; i++) {
    //         console.log(kitchenobjects[i]);
    //         if (kitchenobjects[i].inv == $(this).text().trim())
    //         {
    //             kitchenobjects.splice(i,1);
    //             break;
    //         }
    //     }
    // }
    // console.log($(this).text().trim());
    
    // // remove button from kitchen
    // $(this).hide();

    // if (kitchenobjects.length <1) {
    //     kitchenobjects = null;
    //     $('#empty-message').show();
    //     $('#recipelist').hide();
    //     $('#recipelist2').hide();
    // }
        
    // // push data to local storage
    // console.log(kitchenobjects);
    // localStorage.setItem('kitchen',JSON.stringify(kitchenobjects));

})