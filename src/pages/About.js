import React, { useState, useEffect } from "react";
import "./About.css";

export default function About() {
    const [slide, setSlide] = useState("1");
    const [ifShow, setIfShow] = useState(false);
    const certsQuantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    const displayCert = (e) => {
        let newSlide = e.target.getAttribute('data-number');
        setSlide(newSlide);
        setIfShow(true);
    }

    const nextSlide = () => {
        if (slide === '13') {
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
            setSlide('14')
        } else {
            let currentNumber = slide;
            // console.log(currentNumber)
            // console.log(typeof currentNumber)
            currentNumber--; // Subtraction automaticaly converts string into number
            currentNumber = String(currentNumber);
            // console.log(typeof currentNumber)
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

            <p id="About__biogram">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida ligula eget tincidunt euismod. Sed pulvinar orci justo, vitae sagittis nisi blandit ut. Morbi ut mi blandit, pretium arcu lacinia, ornare urna. Integer gravida ex in magna imperdiet, eget elementum nulla finibus. Aliquam convallis velit magna, ac hendrerit nibh lobortis sit amet. Proin quis dictum velit. Nunc odio dui, pellentesque ut diam at, dignissim malesuada neque. Nunc sed pulvinar turpis, a tempus nunc. Morbi fringilla dapibus nibh, a bibendum libero ornare in. Ut dictum nec leo nec accumsan. Aliquam cursus tempor urna, et pharetra purus. In quis luctus libero. Nam arcu velit, accumsan ac ante vitae, ullamcorper vestibulum tellus. Suspendisse dictum consequat nulla, sit amet mollis leo vehicula eget.</p>

            <h1 id="About__secondTitle">Certyfikaty</h1>

            <div id="About__grid">
                {certsQuantity.map((number) => (
                    <img 
                        src={require(`../assets/thumbs/cert${number}.jpg`)} 
                        onClick={displayCert} 
                        key={number} 
                        data-number={number} 
                    />)
                )}
            </div>

            <div 
                id="About__slider" 
                style={ifShow ? {display: 'flex'} : {display: "none"}}
                onClick={closeSlider}
            >
                <img 
                    src={require(`../assets/arrow.png`)} 
                    className='arrow left' 
                    onClick={prevSlide}
                />
                <img src={require(`../assets/certificates/cert${slide}.jpg`)} />
                <img 
                    src={require(`../assets/arrow.png`)} 
                    className='arrow right' 
                    onClick={nextSlide}
                />
            </div>
        </div>
    )
}