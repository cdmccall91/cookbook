class Recipe {
  constructor(name, amount, ingredients, measurement, instructions) {
    this.name = name;
    this.amount = amount;
    this.ingredients = ingredients;
    this.measurement = measurement;
    this.instructions = instructions;
  }

  showRecipe() {
    this.recipeInfo.innerHTML = `
    <h1>${this.name}</h1>
    `

  }
}

let allRecipes = [];
const frenchOnion = new Recipe('French Onion Soup', [10, .50, 8, 1, 3,1,2,2,.50, 4, .50], ['Onions', 'Butter', 'Cabernet', 'Beef Base', 'Bay Leaves', 'B. Pepper', 'Garlic', 'Gran Onion', 'Paprika', 'Water', 'Kitchen B',], ['lb', 'lb', 'oz', 'lb', 'each', 'Tblsp', 'Tblsp', 'Tblsp', 'Tblsp', 'Gallons', 'Cup'], 'Peel onions. Julienne cut onions thinly. If you do not know which direction to cut onions, ask for help. Place onions in a large pot. Add beef base and all other spices. Cook onions down. Add water and bring to boil. Infuse bay through a china cap. When done REMOVE BAY LEAVES!!!!')
allRecipes.push(frenchOnion);
const auJus = new Recipe('Au Jus', [4, 1, 2, 1, .5, 1, 5, .50, 1], ['Water', 'Beef Base', 'Fresh Garlic', 'Gran Onion', 'B. Pepper', 'Lawry\'s', 'Cabernet', 'Kitchen B.', 'Onion',],['Gallons', 'lb', 'Tblsp', 'Tblsp', 'Tblsp', 'Tblsp', 'Ounces', 'Tblsp', 'Each'],'Add all ingredients to water and mix well. Bring to a boil and then reduce heat. Simmer 15-20 minutes over medium heat. Remove from heat and cool. Do not cover until completely cool.')
allRecipes.push(auJus);
const spinachDip = new Recipe('Spinach Dip', [4, 12, 12, 2, 4, 1, 6, 5.5, 1, 6], ['1/2', 'Grated Parm', 'Fresh Garlic', 'Onions', 'Tabasco', 'Butter', 'Spinach', 'Artichokes', 'Milk',],['qt', 'Cups', 'Tblsp', 'Each', 'Dashes', 'lb', 'lb', 'lb', 'Cup', 'tsp'],'In a double boiler, melt butter and sweat onions and garlic for 15 minutes over medium heat. Drain spinach and artichokes in collender. You will need to press ALL water out of these products. Chop artichoke hearts fine and add to butter mixture. Add spinach also. Add 1/2 & 1/2, parm and tabasco. Simmer over medium high heat until mixture is hot and cooked together. Wisk the milk and corn starch together to make the thickening agent and stir into complete dip. Let simmer a while longer. Remove from heat and cool. Do not cover until cool. 8 oz portions')
allRecipes.push(spinachDip);
const beerCheese = new Recipe('Killian\'s Beer Cheese Soup', [12, 2, 1, 1, 2, .25, 1, .50, 6, 36, 5, 2, 1.25, 2, .75, .75], ['Mirepoix', '1/2 & 1/2', 'Milk', 'Garlic', 'Tabasco', 'Cayenne Pepper', 'Salt', 'White Pepper', 'Chx Broth', 'Killian\'s', 'American Cheese', 'Dijon', 'Worc. Sauce', 'Dry Mustard', 'Butter', 'Flour'],[ 'Cups', 'qt', 'qt', 'Tblsp', 'tsp', 'tsp', 'tsp', 'tsp', 'Cups', 'oz', 'lb', 'Tblsp', 'Tblsp', 'tsp', 'Cups', 'Cups'],'In a large saucepan pour in all ingredients stir and bring to a boil. Then reduce heat to simmer until veggies are soft. During this time make roux in double boiler with flour and butter. Then add 2qt 1/2 & 1/2 & 1qt milk and american cheese. Cutting cheese into 2" squares will help melt cheese faster. Once mixture is smooth add other ingredients and simmer for one hour. Add corn starch to thicken if needed.')
allRecipes.push(beerCheese);
const tartar = new Recipe('Tartar Sauce', [.50, 1, .5, 1, 1], ['Mayo', 'Relish', 'Onion', 'Lemon Juice', 'Salt & Pepper'],['Gallons', 'Cups', 'Cups', 'Each', 'tsp'],'Mix it up')
allRecipes.push(tartar);
const alfredo = new Recipe('Alfredo Sauce', [2.25, 2, 4, 4, 4, 4], ['1/2 & 1/2', 'Butter', 'Grated Parm', 'Garlic', 'Basil', 'Tabasco'],['qt', 'lb', 'lb', 'Tblsp', 'Tblsp', 'Dashes'],'Place 1/2 & 1/2 in double boiler with the butter, basil and tabasco. When the butter is melted, slightly thicken with corn starch roux. Add parm and heat until melted')
allRecipes.push(alfredo);
const bbq = new Recipe('BBQ Sauce', [1, 2, 3, 2, 1, 1.5, .75, 2, .25, 16, 5, 8], ['#10 Ketchup', 'Tomato Juice', 'Molasses', 'White Vinegar', 'Brown Sugar', 'Worcestershire', 'Liquid Smoke', 'Cayenne', 'Salt', 'Water', 'Gran Onion', 'Gran Garlic'],['Can', 'Cup', 'Cup', 'Cup', 'lb', 'Cup', 'Cup', 'Tblsp', 'Cup', 'oz', 'Tblsp', 'Tblsp'],'Mix all ingredients together in large double boiler and bring to low boil for half hour then simmer for 1hr')
allRecipes.push(bbq);
const buffaloChickenDip = new Recipe('Buffalo Chicken Dip', [2, 2, 2, 1, 2], ['Cream Cheese', 'B. Cheese Dress.', 'Franks', 'B. Cheese Crumb', 'Celery'],['lb', 'Cup', 'Cup', 'Cup', 'Cups'],'Dice celery and mix all ingredients togeher. Portion 6oz. Mix 2 oz of chicken per order and melt mozzarella over top')
allRecipes.push(buffaloChickenDip);
const blueCheese = new Recipe('Blue Cheese Dressing', [1, 1.5, 1, 2, 2, 2], ['Mayo', 'Blue Cheese', 'Tarragon Vinegar', 'Garlic', 'W. Pepper', 'Pickel Juice'],['Gallons', 'lb', 'Cup', 'Tblsp', 'tsp', 'Cups'],'Mix it up')
allRecipes.push(blueCheese);
const caeser = new Recipe('Caeser Dressing', [1, 1, 1, 1.5, 4, 1, .50, 2], ['Caeser Packet', 'Oil', 'Water', 'Red wine Vin.', 'Grated Parm.', 'Egg Sub.', 'Sugar', 'oil'],['Cups', 'Cups', 'Cups', 'Cups', 'Cups', 'qt', 'Cups', 'qt'],'Place dressing mix, 1 cup oil, water, viegar, egg sub and sugar in mixing bowl. Mix very slowsly in mixer. Add parm and mix until smooth. Add remaining oil very slowly (about 2 cups at a time). Mix very slowly until all oil is added and combined to a somewhat thick consistency.')
allRecipes.push(caeser);
const chickenNoodle = new Recipe('Chicken Noodle Soup', [5, 32, 32, 32, 1.50, 1, 2, 1, 4], ['Chicken', 'Onions', 'Celery', 'Carrots', 'Chicken Base', 'Egg Noodles', 'Garlic', 'Basil', 'Water'],['lb', 'oz', 'oz', 'oz', 'lb', 'Bag', 'Tblsp', 'Tblsp', 'Gallons'],'Dice chicken, onions, carrots and celery. In large pot, sweat veggies and chicken in base and spices. Add water. In separate pot, boil off egg noodles and rinse under cold water. Add noodles to soup and simmer 20-30 minutes. Remove from heat and cool. Be sure soup is completely cooled off before covering')
allRecipes.push(chickenNoodle);
const chickenSalad = new Recipe('Chicken Salad', [1, .50, 1, .50, 2, 2, 3, 2, 2, .50, .25], ['Chicken', 'Turkey', 'Onion', 'Celery', 'Carrot', 'Dijon', 'Mayo', 'Basil', 'Dill', 'Salt', 'Worchestire'],['Each', 'Each', 'Each', 'Bunch', 'Each', 'Tblsp', 'Cups', 'Tblsp', 'Tblsp', 'tsp', 'Cups'],'Cut chicken and turkey in to 1" cubes. But through chopper to slice. Dice onion and celery fine and shred carrots. Combine everything except chicken and turkey into large mixing bownl and blend. Add chicken and turkey')
allRecipes.push(chickenSalad);
const chowder = new Recipe('Clam Chowder', [6, 2, 1, .50, 1, 2], ['Chowder', '1/2 & 1/2', 'Milk', 'Clam Juice', 'W. Pepper', 'Bacon Bits'],['Cans', 'qt', 'qt', 'Cans', 'Tblsp', 'oz'],'Add all ingredients to mixing bowl. Use wire whip and stir by hand until thoroughly mixed')
allRecipes.push(chowder);
const mushroomSoup = new Recipe('Cream of Mushroom Soup', [1.5, 3, 1, 2, 1, 2, 2, 2, 1, .75, 1], ['Mushrooms', 'Red Wine', 'Butter', '1/2 & 1/2', 'Milk', 'B. Pepper', 'Garlic', 'Gran Onion', 'Salt', 'Flour', 'Cayenne'],['lb', 'Cups', 'lb', 'qt', 'qt', 'Tblsp', 'Tblsp', 'Tblsp', 'Tblsp', 'Cups', 'tsp'],'In double boiler melt haf of butter and wisk in flour. Wisk in milk and add 1/2 & 1/2 slowly. In large sauce pan add all other ingredients over medium high heat and reduce by half. Add this mixture to double boiler and simmer 45 minutes')
allRecipes.push(mushroomSoup);
const mashed = new Recipe('Mashed Potatoes', [12, 1, 1, 2, 1], ['Potatoes', 'Butter', 'Salt', 'Milk', 'B. Pepper'],['Each', 'lb', 'Tblsp', 'Cups', 'tsp'],'Steam potatoes for approximately 45 minutes until potatoes are tender through. Place in mixing bowl and add other ingredients. Mix well')
allRecipes.push(mashed);
const pie = new Recipe('Shepherd\'s Pie', [6, 8, 1, .75, 2, 1, 1, 2, .50, .50, 1, 1, .25, .50], ['Blade Meat', 'Mushrooms', 'Onion', 'Beef Base', 'Cabernet', 'Garlic', 'Kitchen B.', 'B. Pepper', 'Pastry Dough', 'Margarine', 'Garn. Garlic', 'Gran. Onion', 'Butter', 'Flour'],['lb', 'oz', 'Each', 'lb', 'oz', 'Tblsp', 'Cups', 'Tblsp', 'lb', 'lb', 'Tblsp', 'lb', 'lb', 'Cups'],'Boil meat until med-well. Slice into .5 inch chunks. Place in pot along with beef base, mushrooms, onions, cabernet, garlic, Kitchen B. black pepper, and 1 gallons of water. Brint to a slow boil and cook until well. In seperate pan, make roux. Mix roux into meat. Grease bottom of hotel pan with margarine and fit pastry dough to pan. Lay meat evenly and bake for 20 minutes on 375')
allRecipes.push(pie);
const steakSauce = new Recipe('Steak Sauce', [20, .25, .25, 2, 2, 1, 1], ['Ketchup', 'Mustard', 'Worchestire', 'Cider Vinegar', 'Tabasco', 'Salt', 'B. Pepper'],['oz', 'Cups', 'Cups', 'Tblsp', 'Dash', 'Tblsp', 'Tblsp'],'Mix it up')
allRecipes.push(steakSauce);
const mildSauce = new Recipe('Mild Wing Sauce', [1, 1, 1.5, 1, 1, 10, 6], ['Frank\'s', 'Margarine', 'Fresh Garlic', 'Ranch', 'Chicken Base', 'Sour Cream', 'Honey'],['Gallons', 'lb', 'Tblsp', 'Packet', 'lb', 'lb', 'lb'],'Combine ingredients in mixer, blend well')
allRecipes.push(mildSauce);
const hotSauce = new Recipe('Hot Wing Sauce', [1, 1.5, 1, 1, .75, 1], ['Frank\'s', 'Fresh Garlic', 'Margarine', 'Chicken Base', 'Chili Powder', 'Brown Sugar'],['Gallons', 'Tblsp', 'lb', 'lb', 'Cups', 'lb'],'Combine ingredients in a saucepan and simmer over low heat for 1-1.5 hours stirring occasionally. Should be thick and dark of color')
allRecipes.push(hotSauce);
const cherryButter = new Recipe('Cherry Butter', [3, 3, .25, 1, 3], ['Dried Cherries', 'Sugar ', 'Grenadine', 'Butter', 'Honey'],['Cups', 'Packets', 'Cups', 'lb', 'oz'],'Boil cherries for 2 minutes. Strain and put in blender with cubed butter, honey, sugar and grenadine')
allRecipes.push(cherryButter);
const croutons = new Recipe('Croutons', [1, .50, 2, 1, 1, 1], ['Bread', 'Margarine', 'Gran. Garlic', 'Parsley', 'Paprika', 'Gran. Onion'],['Loave', 'lb', 'Tblsp', 'Tblsp', 'Tblsp', 'Tblsp'],'Cut scrap bread into .25 inch chunks. Mix other ingredients in a mixing bowl. Place onto sheet pan and bake at 350 for approximately 15 minutes Do NOT BURN!!!')
allRecipes.push(croutons);
const fajita = new Recipe('Fajita', [10, 1, 2], ['Chicken', 'Mesquite Seas. ', 'Oil'],['lb', 'Cups', 'Cups'],'Marinate chicken over night. Bake. Cut into strips and place on sheet tray to freeze. Portion into 6oz bags')
allRecipes.push(fajita);





