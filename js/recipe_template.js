// Calls this while document not ready
var ready = false;
if (!ready) {
	loading();
}
function loading() {
	console.log('loading...');
	$('#loading-icon').show();
}

const recipePageData = [
	/////////// KALE, CHICKEN /////////////
 	{  'title': 'Chicken and Kale Soup',
 	   'image':'./images/Chicken-Kale-Detox-Soup.jpg',
 	   'href':'./recipe_template.html?recipe=Chicken%20and%20Kale%20Soup',
	   'ingredients': ['1 tablespoon extra virgin olive oil',
                       '1 large white onion, diced',
	                   '4 cloves garlic, crushed',
	                   '2 medium carrots, diced',
	                   '2 stalks celery, diced',
	                   '1 lb. organic boneless chicken breast, cubed',
	                   '5 cups organic chicken stock',
	                   '3-4 handfuls fresh kale, ribs',
	                   '1/2 teaspoon sea salt',
	                   '1/2 teaspoon ground pepper',
	                   '1 tablespoon parsley, roughly chopped'
	                  ],
	    'keyIngredients': ['Chicken', 'Kale', 'Onion', 'Carrot', 'Garlic', 'Celery', 'Parsley'],
	    'instock': new Set(),
	    'instockArr':[],

		'steps': ['In a large pot over medium-low heat, heat oil.',
				  'Add in onion and garlic and pan fry for one minute.',
				  'Add in carrots and celery. pan fry for five minutes, until onion is translucent.',
				  'Pat chicken dry and season generously with salt and pepper.',
				  'Once onion is translucent, add in chicken and pan fry until chicken is opaque and fully cooked through. Should take about 8-10 minutes. Stir occasionally.',
				  'Pour in chicken stock and season with salt, pepper, ginger and lemon juice if using.',
				  'Add in kale.',
				  'Bring to a boil over high heat. Turn heat down to low and let simmer for 15 minutes. Taste and adjust seasoning as desired.'
				 ],

		'relatedTitle': ['Kale Pesto',
		                 'Chinese Style Kale',
		                 'Cranberry Kale Salad'],
		    'relatedIMG1':'./images/kale-pesto.jpg',
		    'relatedIMG2':'./images/Chinese-Style-Kale.jpg',
		    'relatedIMG3':'./images/Cranberry-Kale-Salad.jpg',
		    'relatedREF1':'./recipe_template.html?recipe=Kale%20Pesto',
		    'relatedREF2':'./recipe_template.html?recipe=Chinese%20Style%20Kale',
		    'relatedREF3':'./recipe_template.html?recipe=Cranberry%20Kale%20Salad',

	    'index': 0
    },
 	{'title': 'Kale Pesto',
 	   'image':'./images/kale-pesto.jpg',
 	   'href':'./recipe_template.html?recipe=Kale%20Pesto',
	   'ingredients': ['2 to 3 cloves garlic',
	                   '3 cups packed kale',
	                   '3/4 cup hemp seeds or toasted walnuts or pecans',
	                   '2 tablespoons lemon juice',
	                   '3/4 teaspoon fine-grain sea salt',
	                   '3/4 teaspoon ground pepper',
					  ],
		'keyIngredients': ['Kale', 'Garlic', 'Lemon'],
		'instock': new Set(),
		'instockArr':[],
		'steps': ['Make the pesto: In a food processor, add the peeled garlic cloves and process until the garlic is minced. Add the kale, hemp seeds, lemon juice, salt and pepper. Turn on the food processor and drizzle in the oil. Process until the pesto reaches your desired consistency, stopping to scrape down the sides as necessary. Taste and add more lemon, salt or pepper if necessary. (You can thin out the pesto with more oil, but if you’re serving with pasta, keep in mind that you can also thin it out with reserved pasta cooking water.)',
				  'Cook the pasta (optional): Bring a large pot of salted water to boil. Add the pasta and cook until al dente, according to package directions. Reserve one cup cooking liquid before draining the pasta. Let the pasta and pasta water cool for a minute to make sure the high heat doesn’t damage the flax oil pesto.',
				  'If you intend to have leftovers, transfer the amount of pasta you think you’ll be eating immediately to a serving bowl and mix in pesto with splashes of cooking water. Otherwise, you can mix the pasta and pesto together in your cooking pot, adding splashes of cooking water as necessary. Keep in mind that you have diluted the flavor a bit with the cooking water, so taste and add more lemon, salt or a drizzle of olive oil as necessary.'
				 ],

		'relatedTitle': ['Chicken Kale Soup',
		                 'Chinese Style Kale',
		                 'Cranberry Kale Salad'],
		    'relatedIMG1':'./images/Chicken-Kale-Detox-Soup.jpg',
		    'relatedIMG2':'./images/Chinese-Style-Kale.jpg',
		    'relatedIMG3':'./images/Cranberry-Kale-Salad.jpg',
		    'relatedREF1':'./recipe_template.html?recipe=Chicken%20and%20Kale%20Soup',
		    'relatedREF2':'./recipe_template.html?recipe=Chinese%20Style%20Kale',
		    'relatedREF3':'./recipe_template.html?recipe=Cranberry%20Kale%20Salad',
	    'index': 1
    },
 	{'title': 'Chinese Style Kale',
 	   'image':'./images/Chinese-Style-Kale.jpg',
 	   'href':'./recipe_template.html?recipe=Chinese%20Style%20Kale',
	   'ingredients': ['1 tbsp vegetable oil',
	                   '1 large garlic clove, sliced',
	                   '200g bag kale',
	                   '1 tbsp soy sauce',
	                   '1 tbsp oyster sauce'
					  ],
		'keyIngredients': ['Kale', 'Garlic', 'Oyster Sauce'],
		'instock': new Set(),
		'instockArr':[],
		'steps': ['Heat the oil in a large wok or frying pan, then tip in the garlic and cook for a few secs. Throw in the kale and toss around the pan to coat in the garlicky oil.',
				  'Pour over 100ml boiling water and cook for 7 mins more until the kale has wilted and is cooked through.',
				  'Stir in the soy and oyster sauces and heat through to serve.'
				 ],

		'relatedTitle': ['Chicken Kale Soup',
		                 'Kale Pesto',
		                 'Cranberry Kale Salad'],
		    'relatedIMG1':'./images/Chicken-Kale-Detox-Soup.jpg',
		    'relatedIMG2':'./images/kale-pesto.jpg',
		    'relatedIMG3':'./images/Cranberry-Kale-Salad.jpg',
		    'relatedREF1':'./recipe_template.html?recipe=Chicken%20and%20Kale%20Soup',
		    'relatedREF2':'./recipe_template.html?recipe=Kale%20Pesto',
		    'relatedREF3':'./recipe_template.html?recipe=Cranberry%20Kale%20Salad',
	    'index': 2
    },
 	{'title': 'Cranberry Kale Salad',
 	    'image':'./images/Cranberry-Kale-Salad.jpg',
 	    'href':'./recipe_template.html?recipe=Cranberry%20Kale%20Salad',
		'ingredients': ['3 tbsp olive oil, divided',
				  '1 shallot, peeled and thinly sliced',
				  '3 cloves garlic, coarsely chopped',
				  '1 cup dried cranberries',
				  '2 tbsp red wine vinegar',
				  '2 teaspoons honey',
				  'juice and zest of half a lemon',
				  '1/8 tsp salt',
				  '1/8 tsp ground pepper',
				  '1 bunch kale, very thinly sliced',
				  'cup sliced almonds',
				  '1/4 cup crumbled blue cheese or goat cheese'
				 ],
		'keyIngredients': ['Kale', 'Garlic', 'Cranberry', 'Honey'],
		'instock': new Set(),
		'instockArr':[],
	   'steps': ['Heat 2 Tbsp. oil in a large saute pan over medium-high heat. Add shallot and saute for at least 5 minutes or until tender. Add garlic and saute for 1 minute. Then add cranberries, red wine vinegar, honey and lemon juice and zest, and stir to combine. Season with salt and pepper.',
	             'With a knife or kitchen shears carefully remove the leaves from the thick stems and tear into bite size pieces. Wash and thoroughly dry kale with a salad spinner. Drizzle kale with olive oil and sprinkle with seasoning salt.'
	                  ],

		'relatedTitle': ['Chicken Kale Soup',
		                 'Kale Pesto',
		                 'Chinese Style Kale'],
		    'relatedIMG1':'./images/Chicken-Kale-Detox-Soup.jpg',
		    'relatedIMG2':'./images/kale-pesto.jpg',
		    'relatedIMG3':'./images/Chinese-Style-Kale.jpg',
		    'relatedREF1':'./recipe_template.html?recipe=Chicken%20and%20Kale%20Soup',
		    'relatedREF2':'./recipe_template.html?recipe=Kale%20Pesto',
		    'relatedREF3':'./recipe_template.html?recipe=Chinese%20Style%20Kale',
	    'index': 3
    },
 	{'title': 'Kale Chips',
 	   'image':'./images/kale-chips.jpg',
 	   'href':'./recipe_template.html?recipe=Kale%20Chips',
	   'ingredients': ['1 tbsp olive oil',
	                   '1 tsp seasoned salt',
	                   '200g bag kale'
					  ],
		'keyIngredients': ['Kale'],
		'instock': new Set(),
		'instockArr':[],
		'steps': ['Preheat an oven to 350 degrees F (175 degrees C). Line a non insulated cookie sheet with parchment paper.',
				  'With a knife or kitchen shears carefully remove the leaves from the thick stems and tear into bite size pieces. Wash and thoroughly dry kale with a salad spinner. Drizzle kale with olive oil and sprinkle with seasoning salt.',
				  'Bake until the edges brown but are not burnt, 10 to 15 minutes.'
				 ],
		'relatedTitle': ['Chicken Kale Soup',
		                 'Kale Pesto',
		                 'Cranberry Kale Salad'],
		    'relatedIMG1':'./images/Chicken-Kale-Detox-Soup.jpg',
		    'relatedIMG2':'./images/kale-pesto.jpg',
		    'relatedIMG3':'./images/Cranberry-Kale-Salad.jpg',
		    'relatedREF1':'./recipe_template.html?recipe=Chicken%20and%20Kale%20Soup',
		    'relatedREF2':'./recipe_template.html?recipe=Kale%20Pesto',
		    'relatedREF3':'./recipe_template.html?recipe=Cranberry%20Kale%20Salad',
	    'index': 4
    },
    ////////////// TOMATO /////////////////

    {'title': 'Chinese Tomato and Eggs Stir-fry',
 	   'image':'./images/tomato-egg.jpg',
 	   'href':'./recipe_template.html?recipe=Chinese%20Tomato%20and%20Eggs%20Stir-fry',
	   'ingredients': ['2 tomatoes',
	                   '3 large eggs',
	                   '1/2 tsp salt',
	                   '1/2 tsp ground white pepper',
	                   '1/2 tsp sugar',
	                   '1 tbsp oil',
	                   'chopped spring onion and coriander for garnish'
					  ],
		'keyIngredients': ['Tomato', 'Egg'],
		'instock': new Set(),
		'instockArr':[],
		'steps': ['Bring a small pot of water to a boil. Prepare another bowl of ice water.',
				  'Cut a shallow, small "X" at the base of each tomato and blanch in the hot water for 30 seconds. Remove the tomatoes when you see the tomato skin begins to peel away from the fruit. Submerge the tomatoes into ice water until cool enough to handle.',
				  'Peel off the tomato skin and cut each tomato into 6 or 8 wedges, depending on how big the tomato is. Discard the skin and set the tomato wedges aside.',
				  'Whisk eggs and season with ½ teaspoon salt and a few dashes of ground white pepper.',
				  'Heat a non-stick pan over medium-high heat and coat with a thin layer of oil. (If you are not using a non-stick pan, you will need to add a lot more oil to prevent the eggs from sticking.)',
				  'Add in the eggs, stirring frequently until it forms curds but still moist-looking. Transfer the eggs into a bowl and set aside.',
				  'Add in 1 tablespoon of oil and add in the tomato wedges and sprinkle in a pinch of salt. Cook over medium heat, stirring occasionally and squashing the tomatoes, until the tomatoes the tomatoes are really soft and the tomato juice has reduced.',
				  'Add in the eggs and season with sugar and additional salt to taste. Toss well to combine them altogether.',
				  'Transfer to a serving plate, garnish with spring onion and coriander and serve with rice and other dishes.'
				 ],

		'relatedRecipesIndex': [],
		'relatedTitle': [],
		    'relatedIMG1':'./images/Chicken-Kale-Detox-Soup.jpg',
		    'relatedIMG2':'./images/kale-pesto.jpg',
		    'relatedIMG3':'./images/Cranberry-Kale-Salad.jpg',
		    'relatedREF1':'./recipe_template.html?recipe=Chicken%20and%20Kale%20Soup',
		    'relatedREF2':'./recipe_template.html?recipe=Kale%20Pesto',
		    'relatedREF3':'./recipe_template.html?recipe=Cranberry%20Kale%20Salad',
	    'index': 5
	},
	
	/////////// SALMON /////////////
	{'title': 'Simple and Healthy Poached Salmon',
 	   'image':'./images/simple-salmon.jpg',
 	   'href':'./recipe_template.html?recipe=Simple%20and%20Healthy%20Poached%20Salmon',
	   'ingredients': ['4 salmon filets, skin on',
	                   '4 pinches of salt',
	                   '4 pinches fresh ground black pepper'
					  ],
		'keyIngredients': ['Salmon'],
		'instock': new Set(),
		'instockArr':[],
		'steps': ['Lay each salmon fillet onto a piece of aluminum foil skin-side down.',
				  'Add salt and freshly ground black pepper.',
				  'Wrap each fillet tightly in the foil. Be sure to make an airtight seal. I recommend to fold the foil lengthwise and continue to fold along the seam until the fish is firmly wrapped. Fold/roll in each remaining end until the fish is fully enclosed.',
				  'Place the wrapped salmon fillets into a large saucepan and cover completely with cold water. Bring to the boil over a medium heat. Reduce heat and simmer gently for 3 minutes.',
				  'Remove the parcels from the saucepan. Carefully open each parcel and remove the skin from the fish.',
				  'Serve the salmon topped with your choice of toppings such as salsa, pesto, mango salsa, chunky tomato. Serve with a salad or steamed veggies.'
				 ],

		'relatedRecipesIndex': [],
		'relatedTitle': [],
		    'relatedIMG1':'./images/Chicken-Kale-Detox-Soup.jpg',
		    'relatedIMG2':'./images/kale-pesto.jpg',
		    'relatedIMG3':'./images/Cranberry-Kale-Salad.jpg',
		    'relatedREF1':'./recipe_template.html?recipe=Chicken%20and%20Kale%20Soup',
		    'relatedREF2':'./recipe_template.html?recipe=Kale%20Pesto',
		    'relatedREF3':'./recipe_template.html?recipe=Cranberry%20Kale%20Salad',
	    'index': 6
	},
	/////////// BROCCOLI /////////////
	{'title': 'Broccoli Cheddar Soup',
 	   'image':'./images/broccoli-cheddar.jpg',
 	   'href':'./recipe_template.html?recipe=Broccoli%20Cheddar%20Soup',
	   'ingredients': ['3 tbsp unsalted butter',
	                   '1 onion, chopped',
	                   '2 garlic cloves, minced',
	                   '1/4 cup all-purpose flour',
	                   '3 cups chicken broth',
	                   '1 cup whole milk',
	                   '1 cup heavy cream',
	                   '1/4 tsp white pepper',
	                   '1/4 tsp black pepper',
	                   '1/4 tsp ground nutmeg',
	                   '1/4 teaspoon ground turmeric',
	                   '4 cups broccoli florets (about 1 large head)',
	                   '1/2 cup shredded carrots',
	                   '8 ounces shredded sharp cheddar cheese (about 2 cups)'
					  ],
		'keyIngredients': ['Broccoli', 'Carrot', 'Milk', 'Flour', 'Garlic', 'Cheese'],
		'instock': new Set(),
		'instockArr':[],
		'steps': ['Melt butter in a large saucepan over medium heat. Add onions and garlic to pan; sauté until  fragrant and slightly translucent, but not brown, about 3-4 minutes. Stir in the flour to form a paste; cook 1 minute, stirring constantly.',
				  'Whisk in the chicken broth, milk, heavy cream, white pepper, black pepper, ground nutmeg, and turmeric powder. Simmer on low for 15 minutes or until the mixture has thickened slightly. ',
				  'Stir in the broccoli florets, carrots, and cheese; cover pan. Simmer for 5-6 minutes, or until the broccoli is tender; add salt to taste. Serve Immediately . '
				 ],

		'relatedRecipesIndex': [],
		'relatedTitle': [],
		    'relatedIMG1':'./images/Chicken-Kale-Detox-Soup.jpg',
		    'relatedIMG2':'./images/kale-pesto.jpg',
		    'relatedIMG3':'./images/Cranberry-Kale-Salad.jpg',
		    'relatedREF1':'./recipe_template.html?recipe=Chicken%20and%20Kale%20Soup',
		    'relatedREF2':'./recipe_template.html?recipe=Kale%20Pesto',
		    'relatedREF3':'./recipe_template.html?recipe=Cranberry%20Kale%20Salad',
	    'index': 7
	},
		{'title': 'Mediterranean Broccoli and Cheese Omelet',
 	   'image':'./images/broccoli-cheese-omelete.jpg',
 	   'href':'./recipe_template.html?recipe=Mediterranean%20Broccoli%20and%20Cheese%20Omelet',
	   'ingredients': ['2-1/2 cups fresh broccoli florets',
	                   '6 large eggs',
	                   '1/4 cup 2% milk',
	                   '1/2 teaspoon salt',
	                   '3 cups chicken broth',
	                   '1/4 teaspoon pepper',
	                   '1/3 cup grated Romano cheese',
	                   '1/3 cup sliced pitted Greek olives',
	                   '1 tablespoon olive oil',
	                   'Shaved Romano cheese and minced fresh parsley'
					  ],
		'keyIngredients': ['Broccoli', 'Egg', 'Cheese'],
		'instock': new Set(),
		'instockArr':[],
		'steps': ['Preheat broiler. In a large saucepan, place steamer basket over 1 in. of water. Place broccoli in basket. Bring water to a boil. Reduce heat to a simmer; steam, covered, 4-6 minutes or until crisp-tender.',
				  'In a large bowl, whisk eggs, milk, salt and pepper. Stir in cooked broccoli, grated cheese and olives. In a 10-in. ovenproof skillet, heat oil over medium heat; pour in egg mixture. Cook, uncovered, 4-6 minutes or until nearly set.',
				  'Broil 3-4 in. from heat 2-4 minutes or until eggs are completely set. Let stand 5 minutes. Cut into wedges. Sprinkle with shaved cheese and parsley.'
				 ],

		'relatedRecipesIndex': [],
		'relatedTitle': [],
		    'relatedIMG1':'./images/Chicken-Kale-Detox-Soup.jpg',
		    'relatedIMG2':'./images/kale-pesto.jpg',
		    'relatedIMG3':'./images/Cranberry-Kale-Salad.jpg',
		    'relatedREF1':'./recipe_template.html?recipe=Chicken%20and%20Kale%20Soup',
		    'relatedREF2':'./recipe_template.html?recipe=Kale%20Pesto',
		    'relatedREF3':'./recipe_template.html?recipe=Cranberry%20Kale%20Salad',
	    'index': 8
	},
	///////////// CHICKEN //////////////
	{'title': 'Creamy Chicken and Spinach Skillet',
 	   'image':'./images/chicken-spinach.jpg',
 	   'href':'./recipe_template.html?recipe=Creamy%20Chicken20and%20Spinach%20Skillet',
	   'ingredients': ['2 boneless, skinless chicken breasts, cut in cubes',
	                   '1 onion, chopped',
	                   '3 garlic cloves, minced',
	                   '1 small knob fresh ginger, minced',
	                   '1+1 tablespoon olive oil',
	                   '1 coffee spoon Cajun seasoning',
	                   '1 1/4 cups chicken broth (or 1 bouilon cube + water)',
	                   '1 cup heavy cream (or coconut milk)',
	                   '2 cups spinach, rinsed and chopped'
					  ],
		'keyIngredients': ['Chicken', 'Spinach', 'Cream', 'Garlic'],
		'instock': new Set(),
		'instockArr':[],
		'steps': ['Heat oil in a large skillet over medium-high heat. Add in the chicken and stir fry for 3-5 minutes, then add chopped onion and cook about 3-4 minutes. Season with salt, pepper, and Cajun spices. Add in the garlic and ginger and stir fry for another 5 to 10 minutes, stirring constantly.',
				  'Gradually whisk in chicken broth, then the cream and mix until the mixture is smooth. Reduce heat and allow the sauce to thicken, about 5 minutes. Finally add in chopped spinach, stir well and cook for 1 to 2 minutes, until spinach is slightly wilted. Adjust seasoning if necessary.',
				  'Remove from the heat, top with additional salt, pepper, and Cajun seasoning if desired. Enjoy immediately on top of rice or pasta.'
				 ],

		'relatedRecipesIndex': [],
		'relatedTitle': [],
		    'relatedIMG1':'./images/Chicken-Kale-Detox-Soup.jpg',
		    'relatedIMG2':'./images/kale-pesto.jpg',
		    'relatedIMG3':'./images/Cranberry-Kale-Salad.jpg',
		    'relatedREF1':'./recipe_template.html?recipe=Chicken%20and%20Kale%20Soup',
		    'relatedREF2':'./recipe_template.html?recipe=Kale%20Pesto',
		    'relatedREF3':'./recipe_template.html?recipe=Cranberry%20Kale%20Salad',
	    'index': 9
	},
	{'title': 'Creamy Pan Seared Salmon with Tomatoes and Spinach',
 	   'image':'./images/salmon-tomato-spinach.jpg',
 	   'href':'./recipe_template.html?recipe=Creamy%20Pan%20Seared%20Salmon%20with%20Tomatoes%20and%20Spinach',
	   'ingredients': ['2 tablespoons garlic-flavored olive oil',
	                   '4 (4-ounces each) skin-on salmon fillets',
	                   'salt and fresh ground black pepper to taste',
	                   '1 small knob fresh ginger, minced',
	                   '1 tablespoon butter',
	                   '3 cloves garlic minced',
	                   '2 cups halved cherry tomatoes',
	                   '1 bag (6 ounces) baby spinach',
	                   '1/2 cup low fat evaporated milk (you can also use half & half or heavy cream)',
	                   '1/4 cup grated parmesan cheese',
	                   '2 tablespoons chopped fresh basil',
	                   '1 tablespoon chopped fresh parsley'
					  ],
		'keyIngredients': ['Salmon', 'Spinach', 'Tomato', 'Cheese', 'Butter', 'Ginger'],
		'instock': new Set(),
		'instockArr':[],
		'steps': ['Heat olive oil in a large skillet over medium-high heat.',
				  'Season salmon fillets with salt and pepper and transfer to the skillet, skin-side up.',
				  'Cook for about 7 to 8 minutes, or until browned and cooked about three quarters of the way through.',
				  'Flip over and cook for 2 more minutes more; remove from skillet and set aside.',
				  'Add butter to skillet and melt over medium heat.',
				  'Stir in garlic and cook for 1 minute.',
				  'Add cherry tomatoes and season with salt and pepper.',
				  'Continue to cook for 1 to 2 minutes, or until tomatoes begin to soften.',
				  'Stir in spinach and cook for 1 minute, or until spinach is beginning to wilt.',
				  'Stir in evaporated milk, parmesan cheese, basil, and parsley; bring to a simmer.',
				  'Reduce heat to low and cook for 2 minutes.',
				  'Add salmon back to skillet and continue to cook for 3 minutes, or until salmon is heated through.',
				  'Remove from heat.',
				  'Spoon sauce over each fillet and serve.'
				 ],

		'relatedRecipesIndex': [],
		'relatedTitle': [],
		    'relatedIMG1':'./images/Chicken-Kale-Detox-Soup.jpg',
		    'relatedIMG2':'./images/kale-pesto.jpg',
		    'relatedIMG3':'./images/Cranberry-Kale-Salad.jpg',
		    'relatedREF1':'./recipe_template.html?recipe=Chicken%20and%20Kale%20Soup',
		    'relatedREF2':'./recipe_template.html?recipe=Kale%20Pesto',
		    'relatedREF3':'./recipe_template.html?recipe=Cranberry%20Kale%20Salad',
	    'index': 10
	},
	{'title': 'Classic Deviled Eggs',
 	   'image':'./images/devil-eggs.jpg',
 	   'href':'./recipe_template.html?recipe=Classic%20Deviled%20Eggs',
	   'ingredients': ['6 eggs',
	                   '1/4 cup mayonnaise',
	                   'salt and fresh ground black pepper to taste',
	                   '1 teaspoon yellow mustard',
	                   '1 tablespoon butter',
	                   '1/8 teaspoon salt',
	                   'Freshly ground black pepper to taste',
	                   'Smoked paprika and fresh dill weed for garnish'
					  ],
		'keyIngredients': ['Egg', 'Mayonnaise', 'Butter', 'Mustard', 'Paprika'],
		'instock': new Set(),
		'instockArr':[],
		'steps': ['Hard boil eggs in an instant pot, or using your favorite method.',
				  'Peel eggs gently so the whites remain intact.',
				  'Slice the eggs in half lengthwise',
				  'Remove the yolks to a medium bowl, and placing the whites on a serving platter.',
				  'With a fork, mash the yolks into a fine crumble.',
				  'Add mayonnaise, vinegar, mustard, salt, and pepper, and mix well.',
				  'Just before serving, evenly disperse the yolk mixture into the cavities of the egg whites.',
				  'Garnish with a sprinkle of paprika and fresh dill weed.'
				 ],

		'relatedRecipesIndex': [],
		'relatedTitle': [],
		    'relatedIMG1':'./images/Chicken-Kale-Detox-Soup.jpg',
		    'relatedIMG2':'./images/kale-pesto.jpg',
		    'relatedIMG3':'./images/Cranberry-Kale-Salad.jpg',
		    'relatedREF1':'./recipe_template.html?recipe=Chicken%20and%20Kale%20Soup',
		    'relatedREF2':'./recipe_template.html?recipe=Kale%20Pesto',
		    'relatedREF3':'./recipe_template.html?recipe=Cranberry%20Kale%20Salad',
	    'index': 11
	}


]


var queryParams = new URLSearchParams(window.location.search);
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	$('#loading-icon').hide();
	ready = true;
  console.log('recipe loaded');

	// Show name of page at #main header bar
	var showpagename = function() {
		if ($("#main").offset().top > 100) {
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


  // compile the template
  var pagenamesource = $("#mainName").html();
  var pagenametemplate = Handlebars.compile(pagenamesource);
  var pagenamedeposit = $("#pageNameDeposit");

  var source   = $("#recipe-template").html();
  var template = Handlebars.compile(source);
  var parentDiv = $("#templatedRecipe");

  // Use the URLSearchParams API to make fake-database queries using a URL
  // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
  var recipeTitle = queryParams.get('recipe');
  console.log('query for', recipeTitle);

  // Load the recipe page according to the recipe queried for
  for (var i = 0; i < recipePageData.length; i++) {
    var curData = recipePageData[i];
    if (curData.title == recipeTitle) {
    	// Get the items that the user has in their kitchen
    	var localitemref = JSON.parse(localStorage.getItem("kitchen"));
    	var keyIng = curData.keyIngredients;
    	if( localitemref != null ) {
    		// Compare what the user has versus the key inredients needed for the recipe
    		for( var k = 0; k < localitemref.length; k++) {
    			for(var j = 0; j < keyIng.length; j++ ) {
    				if( localitemref[k].inv === keyIng[j] ) {
    					// Populate the instock list for this current recipe
    					(curData.instock).add(keyIng[j]);
    				}
    			}
    		}
    		for( let item of curData.instock ) {
    			(curData.instockArr).push(item);
    		}
    	}
		var curHtml = template(curData);
		parentDiv.append(curHtml);
		var curinfo = pagenametemplate(curData)
		pagenamedeposit.append(curinfo);
		// console.log(curData.title.length);
		if (curData.title.length > 39) {
			var fontadjust = (Math.fround((window.innerWidth/9.8-curData.title.length)/15)).toString();
			fontadjust = fontadjust.concat('vw');
			// console.log(fontadjust);
			$("#pagename").css('font-size',fontadjust);
			console.log('Main Name font size adjusted');
		}
    }
  }


  /******** ACCESSING KITCHEN ITEMS ********/
  	var localitemref = JSON.parse(localStorage.getItem("kitchen"));
	var kitchenitems = [];
	if (localitemref != null) {
		for (i=0; i < localitemref.length; i++) {
			kitchenitems.push(localitemref[i].inv);
		}
	}
	console.log(kitchenitems);
  /*** ****************************** ***/

    // Check if favorites button is supposed to be addin or addout
	var checkfav = JSON.parse(localStorage.getItem('favoritedrecipes'));
	var recipeTitle = queryParams.get('recipe');
	if (checkfav) {
		for (i=0; i < checkfav.length; i++) {
			if (checkfav[i].name == recipeTitle) {
				$('#addin').hide();
				$('#addout').show();
				console.log('its favorited');
				break;
			}
		}
	}

	window.onclick = function(event) {
        if (event.target != document.getElementById('mainnav') && event.target !=document.getElementById('opensidebar') 
        	&& event.target !=document.getElementById('closesidebar')) {
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

	function store() {
		var allrecipes = JSON.parse(localStorage.getItem("allrecipes"));
		var favoritestuff = JSON.parse(localStorage.getItem('favoritedrecipes'));
        var newfav = [];
        if (favoritestuff) {
            for (i=0; i < favoritestuff.length; i++) {
				newfav.push(favoritestuff[i]);
				console.log(favoritestuff[i]);
            }
        }
        console.log(newfav);

		var recipeTitle = queryParams.get('recipe');
		console.log(recipeTitle);
		if (allrecipes) {
            for (i=0; i < allrecipes.length; i++) {
				if (allrecipes[i].name==recipeTitle) {
					var push=allrecipes[i];
					newfav.push(push);
					console.log('found matching recipe to favorite');
				}
            }
        }

        // push data to local storage
        console.log(newfav);
        localStorage.setItem('favoritedrecipes',JSON.stringify(newfav));
	}

	function remove() {
		var favoritestuff = JSON.parse(localStorage.getItem('favoritedrecipes'));
		var newfav = [];
        if (favoritestuff) {
            for (i=0; i < favoritestuff.length; i++) {
				if (favoritestuff[i].name !='Chicken and Kale Soup') {
					newfav.push(favoritestuff[i]);
					console.log(favoritestuff[i]);
				}
            }
		}
		if (newfav.length<1)
			newfav = null;
		console.log(newfav);
        localStorage.setItem('favoritedrecipes',JSON.stringify(newfav));
	}

	function toggleadd() {
	    $("#addin").toggle();
	    $("#addout").toggle().css("background", "#a6d31d");
	}

