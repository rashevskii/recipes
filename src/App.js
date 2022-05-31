import { useState } from "react";
import Select from "react-select";
import './App.css';
import noImage from './assets/images/no-image.png';


const optionsDishes = [
  { value: 'firstDishes', label: 'Первые блюда' },
  { value: 'secondDishes', label: 'Вторые блюда' },
  { value: 'deserts', label: 'Десерты' },
];

const optionsProducts = [
  { value: 'fish', label: 'Рыба' },
  { value: 'mushrooms', label: 'Грибы' },
  { value: 'potato', label: 'Картофель' },
]

function App() {
  const [selectedOptionDishes, setSelectedOptionDishes] = useState(null);
  const [selectedOptionProdustc, setSelectedOptionProducts] = useState(null);

  return (
    <div className="App">
      <header className="header">
        <div className="container mainMenu">
          <Select
            defaultValue={selectedOptionDishes}
            onChange={setSelectedOptionDishes}
            options={optionsDishes}
            className='selectDishes'
          />
          <Select
            defaultValue={selectedOptionProdustc}
            onChange={setSelectedOptionProducts}
            options={optionsProducts}
            className='selectProducts'
          />
        </div>
      </header>
      <main className="main">
        <div className="container mainInner">
          <div className="recipeItem">
            <div className="recipeInfo">
              <div className="categoryDish">Первые блюда</div>
            </div>
            <div className="recipeIngredients">
              <div className="ingredientsWrapper">
                <div className="recipeTitle">Название рецепта</div>
                <ul className="ingredientsList">
                  <li>Fish</li>
                  <li>Carrot</li>
                  <li>Honey</li>
                  <li>Sugar</li>
                </ul>
              </div>
              <div className="resipeImageWrapper">
                <img className="resipeImage" src={noImage} alt="Блюдо" />
              </div>
            </div>
          </div>
          <div className="recipeItem">
            <div className="recipeTitle">Title</div>
            <div className="recipeIngredients">
              <ul className="ingredientsList">
                <li>Fish</li>
                <li>Carrot</li>
                <li>Honey</li>
                <li>Sugar</li>
              </ul>
              <div className="resipeImageWrapper">
                <img className="resipeImage" src={noImage} alt="Блюдо" />
              </div>
            </div>
          </div>
          <div className="recipeItem">
            <div className="recipeTitle">Title</div>
            <div className="recipeIngredients">
              <ul className="ingredientsList">
                <li>Fish</li>
                <li>Carrot</li>
                <li>Honey</li>
                <li>Sugar</li>
              </ul>
              <div className="resipeImageWrapper">
                <img className="resipeImage" src={noImage} alt="Блюдо" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
