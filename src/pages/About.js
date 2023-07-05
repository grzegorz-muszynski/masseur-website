import React, { useState } from "react";
import "./About.css";

export default function About() {
    const [slide, setSlide] = useState("1");
    const [ifShow, setIfShow] = useState(false);
    const certsQuantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    const displayCert = (e) => {
        let newSlide = e.target.getAttribute('data-number');
        setSlide(newSlide);
        setIfShow(true);
    }

    const nextSlide = () => {
        if (slide === '15') {
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
            setSlide('15')
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

    return (
        <div id='About'>
            <h1>Nasz zespół</h1>

            <p id="About__biogram"><span>Aneta Kubik</span> - założycielka i właścicielka <span>firmy Odnowa,</span> świadczącej usługi masażu, nauki pływania. Absolwentka krakowskiej AWF oraz Małopolskiej  Policealnej  Szkoły Masażu Nr 2 z Oddziałami Integracyjnymi w Krakowie (zwanej Krakowską Szkołą Masażu lub Szkołą na Królewskiej).</p>

            <h1 id="About__secondTitle">Certyfikaty</h1>

            <div id="About__grid">
                {certsQuantity.map((number) => (
                    <img 
                        src={require(`../assets/thumbs/cert${number}.jpg`)} 
                        onClick={displayCert} 
                        key={number} 
                        data-number={number} 
                        alt='Certyfikowani masażyści'
                    />)
                )}
            </div>

            <div 
                id="About__slider" 
                style={ifShow ? {display: 'flex'} : {display: "none"}}
                onClick={closeSlider}
            >
                <img 
                    src={require(`../assets/arrowWhite.png`)} 
                    className='arrow left' 
                    onClick={prevSlide}
                    alt='Gabinet masażu Miechów'
                />
                <img src={require(`../assets/certificates/cert${slide}.jpg`)} alt='Certyfikowany gabinet masażu' />
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