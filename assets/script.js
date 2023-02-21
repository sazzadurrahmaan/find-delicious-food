const loadMeals = (search)=>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
        
}



const displayMeals = meals =>{
const mealContainer = document.getElementById("meal-container");
mealContainer.innerHTML =` `;
meals.forEach(meal => {
        const mealDiv = document.createElement("div");
        mealDiv.classList.add('col');
        mealDiv.innerHTML =`
        <div class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0,300)}</p>
        </div>
        </div>
    `
    mealContainer.appendChild(mealDiv);
  
});
}

document.getElementById('searchBtn').addEventListener('click',()=>{
    const searchInput = document.getElementById("serchInput");
    const inputSearch = (searchInput.value);
    loadMeals(inputSearch)
    searchInput.value = " ";
})
loadMeals('a');