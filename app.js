// Variables
var filter = document.querySelector('#filter');
var recipeList = document.getElementById('recipe-list');
var recipeLinks = document.getElementsByClassName('recipe-links');
var logo = document.getElementById('logo');
var recipeArea = document.getElementById('recipe-display-area');
var amountList = document.getElementById('amount-list');
var header = document.getElementById('header');
var batchConverter = document.getElementById('batch-converter');
var ingredientList = document.getElementById('ingredient-list');
var measurementList = document.getElementById('measurement-list');
var paragraph = document.getElementById('paragraph');

// Event Listeners
filter.addEventListener('keyup', filterRecipes);


// Search Function
function filterRecipes(e) {
  var text = e.target.value.toLowerCase();

  document.querySelectorAll('.recipe-links').forEach(function(recipe) {
    var item = recipe.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1) {
      recipe.style.display = 'block';
    } else {
      recipe.style.display = 'none';
    }
  });

  if (header.textContent != '') {
    clearRecipe();
  }
}

// Clearing Previous Recipe When New One is Selected
  function clearRecipe() {
    header.textContent = '';
    amountList.textContent = '';
    ingredientList.textContent = '';
    measurementList.textContent = '';
    paragraph.textContent = '';
  }

// Display Recipe List
function myFunction(e) {
  recipeList.style.display = 'block';
}

// Removing logo and title
function removeHome() {
  logo.style.display='none';
  recipeList.style.display = 'none';
  filter.value = '';
}

// Clearing amount list
function clearList() {
  amountList.innerHTML = '';
}

// Generating and Displaying the Recipes
for (let i = 0; i < recipeLinks.length; i++) {
  recipeLinks[i].addEventListener('click', (e) => {
    removeHome();

    const buttonName = e.target.textContent;
    const x = allRecipes.find(food => food.name === buttonName);
    var recipeTitle = x.name;

    var h = document.createElement('h3');
    var t = document.createTextNode(recipeTitle);
    h.appendChild(t);
    header.appendChild(h);

    let amount = x.amount;
    amount.forEach(function (am) {
      var li = document.createElement('li');
      var text = document.createTextNode(am);
      li.appendChild(text);
      amountList.appendChild(li);
    })

      // Batch Converter
      batchConverter.addEventListener('change', batchConverterFunction);
      function batchConverterFunction(e) {
        if (this.options[this.selectedIndex].value === '0') {
          clearList();
          let amount = x.amount;
          amount.forEach(function (am) {
            var li = document.createElement('li');
            var text = document.createTextNode(am);
            li.appendChild(text);
            amountList.appendChild(li);
          })
        }
        else if (this.options[this.selectedIndex].value === '1') {
          clearList();
          const map1 = amount.map(x => x * .5);
          map1.forEach(function (am) {
            var li = document.createElement('li');
            var text = document.createTextNode(am);
            li.appendChild(text);
            amountList.appendChild(li);
          })
        }

        else if (this.options[this.selectedIndex].value === '2') {
          clearList();
          const map1 = amount.map(x => x * .25);
          map1.forEach(function (am) {
            var li = document.createElement('li');
            var text = document.createTextNode(am);
            li.appendChild(text);
            amountList.appendChild(li);
          })
        }

        else if (this.options[this.selectedIndex].value === '3') {
          clearList();
          const map1 = amount.map(x => x * 2);
          map1.forEach(function (am) {
            var li = document.createElement('li');
            var text = document.createTextNode(am);
            li.appendChild(text);
            amountList.appendChild(li);
          })
        }

      }

    const ingredients = x.ingredients;
    ingredients.forEach(function (food) {
      var li = document.createElement('li');
      var text = document.createTextNode(food);
      li.appendChild(text);
      ingredientList.appendChild(li);
    })

    const measurement = x.measurement;
    measurement.forEach(function (food) {
      var li = document.createElement('li');
      var text = document.createTextNode(food);
      li.appendChild(text);
      measurementList.appendChild(li);
    })

    const instructions = x.instructions;
    paragraph.textContent = instructions;

    batchConverter.style.display = 'block';
  });
}



