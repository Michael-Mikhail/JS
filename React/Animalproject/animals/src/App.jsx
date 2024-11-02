import { useState } from 'react'
import './App.css'
import AnimalShow from './component/AnimalShow';


//! to create a random pick from animal list (array) so we create a function that return random number (animal)
function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
  //we used math.floor()so can give back around number  
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);
  // using state to change and update on browser for animals that shows 
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };
// here is a big trick first he used .map to create a new array and he connect that with component animalshow
// by prop (type) he called the array {animal} and inside the component he import photos and create a object 
// and he connect type {prop} with the image {object imageMap}line 24   
    const renderedAnimals = animals.map((animal, index) => {
      return <AnimalShow type={animal} key={index} />;
    });
  return (
    <div className='app'>
      <button onClick={handleClick}>Add Animal </button>
      <div className='animal-list'>{renderedAnimals}</div>
    </div>
  );
};



export default App
