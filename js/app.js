const addButton = document.getElementById('add');
const foodName = document.querySelector('#item-name');
const foodCalories = document.querySelector('#item-calories');
const totalSpan = document.querySelector('.total-calories');
const list = document.querySelector('#item-list');
let total=0;

addButton.addEventListener('click', (event)=> {
    let mealName = foodName.value;
    let mealColories =  parseInt(foodCalories.value);
    console.log(typeof(mealColories));
    total +=mealColories;
    totalSpan.innerHTML = total;

    let listItem = document.createElement('li');
    listItem.classList.add('collection-item');
    let text = `Food: ${mealName}. Calories: ${mealCalories}`;
    listItem.appendChild(document.createTextNode(text));
    console.log(listItem);

    foodName.value = '';
    foodCalories.value = '';

    event.preventDefault();
});