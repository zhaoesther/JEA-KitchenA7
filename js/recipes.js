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

    localStorage.setItem('allrecipes',JSON.stringify(recipes));

    var source2 = document.getElementById("recipetemplatecard").innerHTML;
    var template2 = Handlebars.compile(source2);
    var parent2 = $("#recipedeposit2");

    var listed = [];
    if (localitemref) {
        for (var j = 0; j<localitemref.length; j++) {
            var ingredients = localitemref[j];
            if (ingredients.inv == "Kale") {
                console.log('Kale!');
                for (var i = 0; i<kale.length; i++) {
                    if (!listed.includes(kale[i])) {
                        var curdata = recipes[kale[i]];
                        var curhtml = template2(curdata);
                        parent2.append(curhtml);
                        listed.push(kale[i]);
                    }
                    
                }
            }
            if (ingredients.inv == "Broccoli") {
                console.log('Broccoli!');
                for (var i = 0; i<broccoli.length; i++) {
                    if (!listed.includes(broccoli[i])) {
                        var curdata = recipes[broccoli[i]];
                        var curhtml = template2(curdata);
                        parent2.append(curhtml);
                        listed.push(broccoli[i]);
                    }
                }
            }
            if (ingredients.inv == "Chicken") {
                console.log('Chicken!');
                for (var i = 0; i<chicken.length; i++) {
                    if (!listed.includes(chicken[i])) {
                        var curdata = recipes[chicken[i]];
                        var curhtml = template2(curdata);
                        parent2.append(curhtml);
                        listed.push(chicken[i]);
                    }
                }
            }
            if (ingredients.inv == "Egg") {
                console.log('Egg!');
                for (var i = 0; i<egg.length; i++) {
                    if (!listed.includes(egg[i])) {
                        var curdata = recipes[egg[i]];
                        var curhtml = template2(curdata);
                        parent2.append(curhtml);
                        listed.push(egg[i]);
                    }
                }
            }
            if (ingredients.inv == "Salmon") {
                console.log('Salmon!');
                for (var i = 0; i<salmon.length; i++) {
                    if (!listed.includes(salmon[i])) {
                        var curdata = recipes[salmon[i]];
                        var curhtml = template2(curdata);
                        parent2.append(curhtml);
                        listed.push(salmon[i]);
                    }
                }
            }
            if (ingredients.inv == "Spinach") {
                console.log('Spinach!');
                for (var i = 0; i<spinach.length; i++) {
                    if (!listed.includes(spinach[i])) {
                        var curdata = recipes[spinach[i]];
                        var curhtml = template2(curdata);
                        parent2.append(curhtml);
                        listed.push(spinach[i]);
                    }
                }
            }
            if (ingredients.inv == "Tomato") {
                console.log('Tomato!');
                for (var i = 0; i<tomato.length; i++) {
                    if (!listed.includes(tomato[i])) {
                        var curdata = recipes[tomato[i]];
                        var curhtml = template2(curdata);
                        parent2.append(curhtml);
                        listed.push(tomato[i]);
                    }
                }
            }
            if (ingredients.inv == 'All') {
                console.log('All!');
                for (var i = 0; i<recipes.length; i++) {
                    if (!listed.includes(recipes[i])) {
                        var curdata = recipes[i];
                        var curhtml = template2(curdata);
                        parent2.append(curhtml);
                        listed.push(i);
                    }
                }
            } 
            console.log(listed);
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

//list of indices of matching recipes
kale=[0,1,2,3,4];
broccoli=[5];
chicken=[6];
egg=[7];
salmon=[8];
spinach=[9];
tomato=[7];     // NOTE THE EQUIVALENT INDEX WITH EGG

var recipes = [
    // Kale
    {'name': 'Chicken and Kale Soup', 'href':'./recipe_template.html?recipe=Chicken%20and%20Kale%20Soup', 'img':'./images/Chicken-Kale-Detox-Soup.jpg'},
    {'name': 'Cranberry Kale Salad', 'href':'./recipe_template.html?recipe=Cranberry%20Kale%20Salad','img':'./images/Cranberry-Kale-Salad.jpg'},
    {'name': 'Chinese Style Kale', 'href':'./recipe_template.html?recipe=Chinese%20Style%20Kale','img':'./images/Chinese-Style-Kale.jpg'},
    {'name': 'Kale Chips', 'href':'./recipe_template.html?recipe=Kale%20Chips','img':'./images/kale-chips.jpg'},
    {'name': 'Kale Pesto', 'href':'./recipe_template.html?recipe=Kale%20Pesto','img':'./images/kale-pesto.jpg'},

    // Broccoli
    {'name': 'Broccoli', 'href':'./recipe_template.html?recipe=Chicken%20and%20Kale%20Soup', 'img':' '},
    // Chicken
    {'name': 'Chicken', 'href':'./recipe_template.html?recipe=Chicken%20and%20Kale%20Soup', 'img':' '},
    // Egg
    {'name': 'Chinese Tomato and Eggs Stir-fry', 'href':'./recipe_template.html?recipe=Chinese&Tomato&and&Eggs&Stir-fry','img':'./images/tomato-egg.jpg'},
    // Salmon
    {'name': 'Simple and Healthy Poached Salmon', 'href':'./recipe_template.html?recipe=Simple&and&Healthy&Poached&Salmon','img':'./images/simple-salmon.jpg'},
    // Spinach
    {'name': 'Spinach', 'href':'./recipe_template.html?recipe=Chicken%20and%20Kale%20Soup','img':' '},
    // Tomato
    // ONE OF TOMATO'S RECIPES IS IN EGG
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