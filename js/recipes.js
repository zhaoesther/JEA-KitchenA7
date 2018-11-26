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

    var ingredsource = document.getElementById("ingredientstemplate").innerHTML;
    var ingredtemplate = Handlebars.compile(ingredsource);
    var ingredientslist = $("#ingredientslist");
    var localitemref = JSON.parse(localStorage.getItem("kitchen"));
    if (localitemref) {
        for (var i = 0; i<localitemref.length; i++) {
            var ingredients = localitemref[i];
            var stuff = ingredtemplate(ingredients);
            ingredientslist.append(stuff);
        }
    }
    // console.log(ingredientslist);

    localStorage.setItem('allrecipes',JSON.stringify(recipes));

    var source2 = document.getElementById("recipetemplatecard").innerHTML;
    var template2 = Handlebars.compile(source2);
    var parent2 = $("#recipedeposit2");

    var listed = [];
    if (localitemref) {
        for (var j = 0; j<localitemref.length; j++) {
            var ingredients = localitemref[j];
            console.log(ingredients);
            if (ingredients.inv == "Kale") {
                console.log('Kale!');
                for (var i = kalestart; i<kaleend; i++) {
                    if (!listed.includes()) {
                        var curdata = recipes[i];
                        var curhtml = template2(curdata);
                        parent2.append(curhtml);
                        listed.append(i);
                    }
                    
                }
            }
            if (ingredients.inv == "Broccoli") {
                console.log('Broccoli!');
                for (var i = broccolistart; i<broccoliend; i++) {
                    if (!listed.includes()) {
                        var curdata = recipes[i];
                        var curhtml = template2(curdata);
                        parent2.append(curhtml);
                    }
                }
            }
            if (ingredients.inv == "Chicken") {
                console.log('Chicken!');
                for (var i = chickenstart; i<chickenend; i++) {
                    if (!listed.includes()) {
                        var curdata = recipes[i];
                        var curhtml = template2(curdata);
                        parent2.append(curhtml);
                    }
                }
            }
            if (ingredients.inv == "Egg") {
                console.log('Egg!');
                for (var i = eggstart; i<eggend; i++) {
                    if (!listed.includes()) {
                        var curdata = recipes[i];
                        var curhtml = template2(curdata);
                        parent2.append(curhtml);
                    }
                }
            }
            if (ingredients.inv == "Salmon") {
                console.log('Salmon!');
                for (var i = salmonstart; i<salmonend; i++) {
                    if (!listed.includes()) {
                        var curdata = recipes[i];
                        var curhtml = template2(curdata);
                        parent2.append(curhtml);
                    }
                }
            }
            if (ingredients.inv == "Spinach") {
                console.log('Spinach!');
                for (var i = spinachstart; i<spinachend; i++) {
                    if (!listed.includes()) {
                        var curdata = recipes[i];
                        var curhtml = template2(curdata);
                        parent2.append(curhtml);
                    }
                }
            }
            if (ingredients.inv == "Tomato") {
                console.log('Tomato!');
                for (var i = tomatostart; i<tomatoend; i++) {
                    if (!listed.includes()) {
                        var curdata = recipes[i];
                        var curhtml = template2(curdata);
                        parent2.append(curhtml);
                    }
                }
            }
            if (ingredients.inv == 'All') {
                console.log('All!');
                for (var i = 0; i<recipes.length; i++) {
                    if (!listed.includes()) {
                        var curdata = recipes[i];
                        var curhtml = template2(curdata);
                        parent2.append(curhtml);
                    }
                }
            } 
        }
    }
    else
        $('#empty-message').show();

});


// * Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mainnav").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
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

// kale: 0-5
kalestart = 0; kaleend=5;
// broccoli: 6
broccolistart=6; broccoliend=7;
// chicken: 7
chickenstart=7; chickenend=8;
// egg: 8
eggstart=8; eggend=9;
// salmon: 9
salmonstart=9; salmonend=10;
// spinach: 10
spinachstart=10; spinachend=11;
// tomato: 11
tomatostart=11; tomatoend=12;

var recipes = [
    // Kale
    {'name': 'Chicken and Kale Soup', 'href':'./recipe_template.html?recipe=Chicken%20and%20Kale%20Soup', 'img':'./images/Chicken-Kale-Detox-Soup.jpg'},
    {'name': 'Cranberry Kale Salad', 'href':'./recipe_template.html?recipe=Cranberry%20Kale%20Salad','img':'./images/Cranberry-Kale-Salad.jpg'},
    {'name': 'Chinese Style Kale', 'href':'./recipe_template.html?recipe=Chinese%20Style%20Kale','img':'./images/Chinese-Style-Kale.jpg'},
    {'name': 'Kale Chips', 'href':'./recipe_template.html?recipe=Kale%20Chips','img':'./images/kale-chips.jpg'},
    {'name': 'Kale Pesto', 'href':'./recipe_template.html?recipe=Kale%20Pesto','img':'./images/kale-pesto.jpg'},

    // Broccoli

    // Chicken

    // Egg
    {'name': 'Chinese Tomato and Eggs Stir-fry', 'href':'./recipe_template.html?recipe=Chinese&Tomato&and&Eggs&Stir-fry','img':'./images/tomato-egg.jpg'},
    // Salmon
    {'name': 'Simple and Healthy Poached Salmon', 'href':'./recipe_template.html?recipe=Simple&and&Healthy&Poached&Salmon','img':'./images/simple-salmon.jpg'},
    // Spinach

    // Tomato
    {'name': 'Chinese Tomato and Eggs Stir-fry', 'href':'./recipe_template.html?recipe=Chinese&Tomato&and&Eggs&Stir-fry','img':'./images/tomato-egg.jpg'},
]

// $('#ingredientslist').click(function() {
//     window.location = "./kitchen.html"; // Go to kitchen page
// });
// CHANGE TO BELOW FORMAT (REMOVE INGREDIENTS DIRECTLY)

$('#ingredientslist').on("click",'.ingredient-item',function() {
    console.log("click delete!");
    var localitemref = JSON.parse(localStorage.getItem("kitchen"));
    var kitchenobjects = [];
    if (localitemref != null) {
        for (i=0; i < localitemref.length; i++) {
            kitchenobjects.push(localitemref[i]);
        }
        for (i=0; i < kitchenobjects.length; i++) {
            console.log(kitchenobjects[i]);
            if (kitchenobjects[i].inv == $(this).text().trim())
            {
                kitchenobjects.splice(i,1);
                break;
            }
        }
    }
    console.log($(this).text().trim());
    
    // remove button from kitchen
    $(this).hide();

    if (kitchenobjects.length <1) {
        kitchenobjects = null;
        $('#empty-message').show();
        $('#recipelist').hide();
        $('#recipelist2').hide();
    }
        
    // push data to local storage
    console.log(kitchenobjects);
    localStorage.setItem('kitchen',JSON.stringify(kitchenobjects));

})