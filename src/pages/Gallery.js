import React, { useState } from "react";
import "./Gallery.css";

export default function Gallery() {
    const [slide, setSlide] = useState("1");
    const [ifShow, setIfShow] = useState(false);
    let thumbnailsMain = [];
    let thumbnailsMiechow = [];
    let thumbnailsBibice = [];

    const displaySlides = (e) => {
        let newSlide = e.target.getAttribute('data-number');
        setSlide(newSlide);
        setIfShow(true);
    }

    const nextSlide = () => {
        if (slide === '27') {
            setSlide('1')
        } else {
            let currentNumber = slide;
            currentNumber++; // Addition automaticaly converts string into number
            currentNumber = String(currentNumber);
            setSlide(currentNumber);
        }
    }

    const prevSlide = () => {
        if (slide === '1') {
            setSlide('27')
        } else {
            let currentNumber = slide;

            currentNumber--; // Subtraction automaticaly converts string into number
            currentNumber = String(currentNumber);
            setSlide(currentNumber);
        }
    }

    const closeSlider = (e) => {
        if (e.target.className === "arrow right" || e.target.className === "arrow left") return;

        setIfShow(false)
    }

    for (let i = 1; i < 11; i++) {
        thumbnailsMain.push(
            <img 
                src={require(`../assets/galleryThumbnails/mini${i}.jpg`)} 
                onClick={displaySlides} 
                key={'Gallery thumbnail no.: ' + i} 
                data-number={i} 
                alt='Masaż leczniczy i relaksacyjny'
            />
        )
    }

    for (let i = 11; i < 21; i++) {
        thumbnailsMiechow.push(
            <img 
                src={require(`../assets/galleryThumbnails/mini${i}.jpg`)} 
                onClick={displaySlides} 
                key={'Gallery thumbnail no.: ' + i} 
                data-number={i} 
                alt='Masaż leczniczy i relaksacyjny'
            />
        )
    }

    return (
        <div id='Gallery'>
            <h1>Galeria</h1>
            {/* Grid no. 1 */}
            <div id="Gallery__grid-main">
                {thumbnailsMain}
            </div>

            <h1>Salon w Miechowie</h1>
            {/* Grid no. 1 */}
            <div id="Gallery__grid-miechow">
                {thumbnailsMiechow}
            </div>

            {/* Slider */}
            <div 
                id="Gallery__slider" 
                style={ifShow ? {display: 'flex'} : {display: "none"}}
                onClick={closeSlider}
            >
                <img 
                    src={require(`../assets/arrowWhite.png`)} 
                    className='arrow left' 
                    onClick={prevSlide}
                    alt='Gabinet masażu Miechów'
                />
                <img src={require(`../assets/gallery/big${slide}.jpg`)} alt='Certyfikowany gabinet masażu' />
                <img 
                    src={require(`../assets/arrowWhite.png`)} 
                    className='arrow right' 
                    onClick={nextSlide}
                    alt='Gabinet masażu Bibice'
                />
            </div>    
        </div>
    )
}