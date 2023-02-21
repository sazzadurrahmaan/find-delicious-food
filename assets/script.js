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
        <div onclick="loadDetails(${meal.idMeal})"class="card h-100">
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
loadMeals('');

    const loadDetails = (idMeal)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`

    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data.meals[0]) )
}

    const displayDetails =(meal)=>{
        const detailsofMeal = document.getElementById("detailsofMeal");

        const divDetails = document.createElement("div");
        divDetails.classList.add('card')
        detailsofMeal.innerHTML = " ";
        divDetails.innerHTML = `
        
        <div class="card text-center" style="width: 18rem;">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <h2 class="card-title">Food Name: ${meal.strMeal}</h2>
        <h3>Food Category :${meal.strCategory}</h3>
        <h4>id of Meal: ${meal.idMeal}</h4>
        <h5>Area :${meal.strArea}</h5>     
         <p>Instruction:${meal.strInstructions.slice(0,500)}</p>
         
        
      </div>

        `                                                                                                                                   
detailsofMeal.appendChild(divDetails)

    }