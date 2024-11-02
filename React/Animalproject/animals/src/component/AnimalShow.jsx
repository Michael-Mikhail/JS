
// here we import image and connect image with the string 
import { useState } from 'react'
import bird from './svg/bird.svg'
import cat from './svg/cat.svg'
import cow from './svg/cow.svg'
import dog from './svg/dog.svg'
import gator from './svg/gator.svg'
import horse from './svg/horse.svg'
import heart from './svg/heart.svg'
import './AnimalShow.css';
// first we build a object 
const imageMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse,
};
// what we will do here when user click on animal we want heart be large and large so we need event handler and 

function AnimalShow({ type }) {
    // the useState will track the number of time that the user has clicked on this animal
    const [click, setClicks] = useState(0);


    // create a function for handler inside the main function
    const handlerClick = () => {
        setClicks(click + 1);
    };
    return (
        // add the return to be imageMap that we create and add the type to find the match (string) with the image
        // add heart and inline style to control how big first 10 the size wills show in browser and with every click will add 10 
        <div className='animal-show' onClick={handlerClick}>
            <img className='animal' alt="animal" src={imageMap[type]} />
            <img
                className='heart'
                alt="heart"
                src={heart}
                style={{ width: 10 + 10 * click + "px" }}
            />
        </div>
    )

}

export default AnimalShow;
