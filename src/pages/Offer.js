import React from "react";
import "./Offer.css";

export default function Offer() {
    
    return (
        <div className="Offer">
            <h1>Masaż</h1>
            <p className="Offer__title">W naszym salonie oferujemy różnorodne rodzaje masażu.</p>

            <p className="Offer__group-title">Przeciwbólowe, medyczne:</p>
            <ul>
                <li><span>Klasyczny przeciwbólowy</span> - masaż wybranej części ciała, którego podstawą są klasyczne techniki masażu, takie jak: głaskanie, rozcieranie, ugniatanie, uciski punktowe, wibracja czy wstrząsanie, wykonane w sposób rozluźniający. Pobudzają krążenie krwi, dzięki czemu poprawia się odżywienie i dotlenienie tkanek, co wspomaga regenerację. Wykonany w serii kilku zabiegów ma działanie lecznicze. Wskazaniem do masażu są dolegliwości bólowe układu ruchu, z wyjątkiem ostrych stanów zapalnych.</li>
                <li><span>tkanek głębokich (MTG)</span> - jest jedną ze skuteczniejszych form leczenia bólu mięśniowo- powięziowego. Działanie masażu głębokiego w terapii punktów spustowych można podzielić na pośrednie i bezpośrednie. Techniki bezpośrednie polegają na działaniu na okolicę punktu spustowego i tym samym na jego likwidację, natomiast działanie pośrednie polega na usuwaniu zaburzeń w obrębie układu mięśniowo- powięziowego, przez co zmniejsza się aktywność bolesnych punktów spustowych. Masaż wykonuje się „na sucho”, praktycznie bez środka poślizgowego. Praca na punktach spustowych jest bolesna, ale przynosi szybką ulgę.</li>
                <li><span>drenaż limfatyczny (MDL)</span> - manualny drenaż limfatyczny (MDL)- powolny i delikatny masaż , który wspomaga odpływ limfy w kierunku kątów żylnych, przez co przyczynia się do redukcji obrzęków. Wskazaniami są m.in. obrzęki pourazowe i pooperacyjne, zaburzenia odpływu limfy. Przeciwwskazaniem są m.in. obrzęki pochodzenia nerkowego, wątrobowego i jelitowego. Stosowany na twarz jest zabiegiem oczyszczającym i stymulującym.</li>
                <li><span>Leczniczy</span> - według zaleceń lekarza.</li>
            </ul>

            <p className="Offer__group-title">Profilaktyczne:</p>
            <ul>
                <li><span>profilaktyczny</span> - dostosowany do indywidualnych wskazań i potrzeb, ręczny masaż o charakterze rozluźniającym, bazujący na spokojnych, głębokich technikach różnych masaży. Opracowaniu podlegają główne części ciała (plecy, kończyny górne i dolne, brzuch, ew. klatka piersiowa). W zależności od potrzeb, może zawierać elementy stretchingu. Działa rozluźniająco i odprężająco dlatego polecany jest osobom przemęczonym, obarczonym negatywnymi skutkami stresu.</li> 
                <li><span>gorącymi kamieniami</span> - masaż kamieniami bazaltowymi, odgrzanymi w gorącej kąpieli wodnej lub podgrzewaczu. Kamienie stopniowo uwalniają ciepło i skutecznie rozluźniają napięte mięśnie przez co działają przeciwbólowo. Ciepło, spokojna muzyka i aromat olejku niezawodnie wyciszą ciało i umysł, dając przyjemne odprężenie. Masaż ten ma również działanie profilaktyczne- przeciwdziała negatywnym skutkom stresu i przemęczenia.</li> 
                <li><span>balijski</span> - spokojny, głęboki masaż o charakterze rozluźniającym z elementami stretchingu. Jego działanie rozluźniające i profilaktyczne będzie zbawienne dla osób zapracowanych i zestresowanych.</li> 
            </ul>

            <p className="Offer__group-title">Dla sportowców:</p>
            <ul>
                <li><span>sportowy</span> - masaż w oparciu o techniki masażu sportowego, który, w zależności od potrzeb, może być wykonany w sposób pobudzający, energiczny lub powolny, rozluźniający. Przeznaczony dla osób aktywnych, trenujących, sportowców, osób preferujących intensywniejsze bodźce.</li> 
                <li><span>kreolski (bambusami)</span>  - masaż pałeczkami bambusowymi, polegający na głaskaniu, pocieraniu, wibrowaniu, rolowaniu, uciskach gładką powierzchnią okrągłego kawałka drzewa bambusowego. Intensywność i siła technik dostosowana jest do typu budowy ciała. Masaż z użyciem pałeczek bambusowych o różnych średnicach umożliwia dotarcie silnymi bodźcami do głębokich tkanek ciała. Dedykowany jest osobom aktywnym, umięśnionym, preferującym mocniejsze bodźce.</li> 
            </ul>

            <p className="Offer__group-title">Odprężające, pielęgnacyjne:</p>
            <ul>
                <li><span>bańką chińską</span> - to jedna z niezawodnych metod walki z cellulitem. Składa się z różnych sekwencji ruchowych, wykonywanych ślizgającą się po naoliwionej skórze gumową bańką chińską. Odpowiednie natłuszczenie skóry oraz wstępny masaż ręczny o charakterze liftingującym i pobudzającym, zapobiegają przykrym odczuciom bólowym i powstaniu krwawych wybroczyn. Techniki wykonuje się według potrzeb, głównie na brzuchu, udach i pośladkach.</li> 
                <li><span>gorącą świecą</span> - masaż gorącą, aromatyczną świecą o charakterze relaksacyjnym, dedykowany dla płci pięknej na bazie pielęgnacyjnego ciepłego masła shea.</li> 
                <li><span>Kobido face</span> - japoński masaż twarzy, tzw. lifting bez skalpela, który ma na celu wymodelowanie owalu twarzy, zniwelowanie drugiego podbródka, wygładzenie zmarszczek i bruzd nosowo-wargowych, pozbycie się sztywności mięśni. Przynosi ulgę w przypadku bruksizmu oraz pełni funkcję holistycznego rytuału dla zdrowia i piękna.</li>
                <li><span>Lomi Lomi Nui</span> - hawajski masaż relaksacyjny, poprawiający formę psycho-fizyczną. W atmosferze intymności, ciepła i spokoju zapewnionej przez muzykę hawajską, kompozycję zapachową, podgrzany olej i osobę masażystki ciało doznaje głębokiej relaksacji. Całe ciało jest poddane dotykowi: najpierw tył,  potem przód ( z pominięciem stref intymnych). Masażystka masuje głównie przedramionami a jej ruchy są długie, płynne i delikatne.</li>
                <li><span>Aloha i Mahalo</span> - relaksacyjny rytuał. Autorski masaż wykonywany przez Asię,  który wprawi Cię w błogi nastrój odprężenia i euforii.Masowany jest tył ciała od paluszków palców stóp aż po płatki uszu. Rozpieść swoje zmysły poprzez przyjemny dotyk masażystki ciepłą oliwą, muzyką uspokajającą i zapachem.</li>
                <li><span>Pieczęć Mocy</span> - masaż stemplami ziołowymi Asia.Ciało masowane jest ciepłymi stemplami ziołowymi. Stemple zanurzone są w podgrzanym oleju,  wydzielają piękny zapach ( pomarańczy, kawy, rozmarynu, mandarynki, róży, cynamonu,  wanilii). To bogaty w doznania masaż podczas którego ciało niemal  "rozpływa się" z przyjemności.</li>
                <li><span>Masaż  miodem</span> - masaż ujędrniający Asia. Bardzo popularny masaż wśród Rosjanek.Ujędrnia, pobudza, usuwa toksyny, oczyszcza.Ciepły, płynny miód rozprowadza się po częściach ciała i masuje  energicznymi ruchami.  Następnie zmywa się preparat gazą zanurzoną w chłodnej wodzie. Zabieg  troszeczkę boli, ale czego się nie robi dla urody :) Czas zabiegu ustala się w zależności od obszarów ciała, które  chcemy ujędrnić.</li>
            </ul>

            <p>Chętnie doradzę w kwestii doboru odpowiedniej metody.</p>
        </div>
    )
}