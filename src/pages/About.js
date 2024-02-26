import React, { useState } from "react";
import "./About.css";

export default function About() {
    const [slide, setSlide] = useState("1");
    const [ifShow, setIfShow] = useState(false);
    const certsQuantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

    const displayCert = (e) => {
        let newSlide = e.target.getAttribute('data-number');
        setSlide(newSlide);
        setIfShow(true);
    }

    const nextSlide = () => {
        if (slide === '17') {
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
            setSlide('17')
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
            <p  className="About__biogram About__biogram-wider">Podchodzę indywidualnie do każdego pacjenta/klienta. Patrzę całościowo na obraz dolegliwości w&nbsp;kontekście trybu życia i pracy zawodowej. Szukam skutecznych rozwiązań doraźnych oraz profilaktycznych. Każdego zachęcam, aby codziennie OD NOWA starał się dbać o swoje zdrowie i&nbsp;kondycję psychofizyczną. Ta myśl przyświeca mi od początku mojej prywatnej praktyki.</p>

            <p className="About__biogram"><span>Aneta Kubik</span> - założycielka i właścicielka firmy Odnowa, świadczącej usługi masażu oraz nauki pływania. Absolwentka krakowskiej AWF oraz Małopolskiej Policealnej Szkoły Masażu Nr 2 z Oddziałami Integracyjnymi w Krakowie, zwanej Krakowską Szkołą Masażu (mgr wychowania fizycznego, technika masażysta). Praktykę zawodową odbywała m.in. w Małopolskim Szpitalu Ortopedyczno-Rehabilitacyjnym w Krakowie (dawna nazwa to KCR - Krakowskie Centrum Rehabilitacji, ul. Modrzewiowa), w pracowniach szkolnych i na basenie AGH. Uczestniczyła m.in. jako masażysta w międzynarodowej XIX konferencji REHA FOR THE BLIND IN POLAND 2021 (Centrum Nauki Kopernik w Warszawie) oraz reprezentowała szkołę na Festiwalu Zawodów 2022 w Tauron Arenie w Krakowie, wykonując pokazy różnych rodzajów masaży. Uczestniczka wielu kursów doskonalących w dziedzinie masażu, stale poszerzająca swój warsztat pracy. Pasjonatka pracy z ciałem, całościowo spoglądająca na pacjenta. Ponadto: instruktorka pływania, rekreacji ruchowej ze specjalnością kulturystyka, uczestniczka wielu warsztatów i szkoleń z dziedziny fitness i gimnastyki Pilates (m.in. „Zdrowy kręgosłup”, 2023).</p>
            
            <p className="About__biogram"><span>Dmytro Kuznets</span> - towarzyski i przyjazny masażysta z Ukrainy. W swojej pracy kieruje się indywidualnym podejściem do każdego klienta. Ukończył pełny cykl studiów w Instytucie Medycyny Alternatywnej (Ukraina, Kijów). Posiada wieloletnie doświadczenie jako masażysta, kontynuując tradycje rodzinne w tym obszarze. Wykonuje różne rodzaje masaży: klasyczny masaż leczniczy, masaż relaksacyjny, profilaktyczny, sportowy, masaż antycellulitowy, masaż dziecka oraz specjalny masaż brzucha. Zajmuje się różnymi problematycznymi obszarami ciała. Po masażu wzmożone napięcie mięśni ustępuje, dając uczucie lekkości i zrelaksowania.</p>
            
            <p className="About__biogram"><span>Joanna Kałwa</span> - dyplomowany technik masażu (egzamin państwowy) z doświadczeniem. Masuje z pasją i zaangażowaniem. Ukończyła wiele kursów masażu m.in.: Terapeuta Spa w Medical School oraz Lomi Lomi Nui w Psychologia Dobrego Dotyku. Interesuje się także naturoterapią ;  robi olej dziurawcowy, kadzidła. Jej dewizą jest "słuchaj swojego ciała i zatroszcz się o siebie".</p>

            <h1 id="About__secondTitle">Certyfikaty</h1>

            <div id="About__grid">
                {certsQuantity.map((number) => (
                    <img 
                        src={require(`../assets/certificatesThumbs/cert${number}.jpg`)} 
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
                    src={require(`../assets/arrows/arrowWhite.png`)} 
                    className='arrow left' 
                    onClick={prevSlide}
                    alt='Gabinet masażu Miechów'
                />
                <img src={require(`../assets/certificates/cert${slide}.jpg`)} alt='Certyfikowany gabinet masażu' />
                <img 
                    src={require(`../assets/arrows/arrowWhite.png`)} 
                    className='arrow right' 
                    onClick={nextSlide}
                    alt='Gabinet masażu Bibice'
                />
            </div>
        </div>
    )
}