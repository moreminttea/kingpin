
import React, { useRef } from 'react'
import './/Home.css';
import koranin_temp from './img/koranin_temp.jpg';
import castorix_temp from './img/castorix_temp.jpg';
import icon_temp from './img/icon_temp.png';
import down_arrow from './img/down_arrow.png';
import up_arrow from './img/up_arrow.png';
/*import CastorixGallery from './components/Castorix_slideshow';*/


function Home(){
  const sectorSection = useRef(null);
    const toSectorSection = () => 
    window.scrollTo({
        top: sectorSection.current.offsetTop,
        behavior: "smooth"
    });
  const rankSection = useRef(null);
    const toRankSection = () => 
    window.scrollTo({
        top: rankSection.current.offsetTop,
        behavior: "smooth"
    });
  const homeSection = useRef(null);
    const toHomeSection = () => 
    window.scrollTo({
        top: homeSection.current.offsetTop,
        behavior: "smooth"
    });

    return (
        <div className="body">
{/* SECTION 1: KORANIN ----------------------------------------------------------------------------------------- */}
          <div className="koranin">
            <img src={koranin_temp} ref={homeSection} className="image"/>
            <div className="details">
                <div className="section">
                    <br></br>
                    <h className="title_intro">THE WORLD OF</h>
                    <br></br>
                    <h className="title">Koranin</h>
                </div>
                <div className="icon_section">
                    <img src={icon_temp} className="icon"/>
                    <img src={icon_temp} className="icon"/>
                    <img src={icon_temp} className="icon"/>
                    <img src={icon_temp} className="icon"/>
                    <img src={icon_temp} className="icon"/>
                </div>
                <p className="excerpt">
                    <b>S</b>plit into five respective sectors, Koranin is a diverse world populated by humans
                    and mythical beings alike—some of which who are gifted with a constellation-blessed 
                    affinity for magic. Governed by a council of High Mages, Koranin continues through its
                    age of peace and prosperity. But when evil lurks within its roots, perhaps it is time 
                    for others to step forward and take matters into their own hands...
                </p>
                <img src={down_arrow} className="down_arrow" onClick={toSectorSection}/>
                <p className="arrow_instruct">continue to sectors</p>
            </div>
          </div>
          <br></br>
{/* SECTION 2: SECTORS ----------------------------------------------------------------------------------------- */}
{/* CASTORIX */}
          <div className="sector">
          <img src={castorix_temp} ref={sectorSection} className="image"/>
            <div className="details">
                <p className="arrow_instruct">return to home</p>
                <img src={up_arrow} className="up_arrow" onClick={toHomeSection}/>
                <div className="section">
                    <br></br>
                    <h className="title">Castorix</h>
                </div>
                <div className="icon_section">
                    <img src={icon_temp} className="icon"/>
                    <img src={icon_temp} className="icon"/>
                    <img src={icon_temp} className="icon"/>
                    <img src={icon_temp} className="icon"/>
                    <img src={icon_temp} className="icon"/>
                </div>
                <p className="excerpt">
                    <b>A</b>lso known as the winter sector, Castorix is a snowy mountain region where most 
                    of humanity is structured underground or deep within the mountains. This is where Koranin’s 
                    flashiest infrastructure and technology is located, occupied heavily by creatures whose abilities 
                    resonate with the dark or light. Deeper underground lies the sector’s mines, where Koranin’s most 
                    precious minerals are procured. Stationed aboveground in the mountain ranges are military camps, 
                    crawling with shapeshifters and those of enhanced natural abilities to aid in hunt.
                </p>
                <img src={down_arrow} className="down_arrow" onClick={toRankSection}/>
                <p className="arrow_instruct">continue to mage ranks</p>
            </div>
          </div>
          <br></br>
{/* SECTION 3: MAGE RANKS ----------------------------------------------------------------------------------------- */}
        <div className="sector">
          <img src={castorix_temp} ref={rankSection} className="image"/>
            <div className="details">
                <p className="arrow_instruct">return to sectors</p>
                <img src={up_arrow} className="up_arrow" onClick={toSectorSection}/>
                <div className="section">
                    <br></br>
                    <h className="title">Mage Ranks</h>
                </div>
                <p className="excerpt">
                    The world of Koranin judges a mage's rank based on the highest level card unlocked from their deck, 
                    using the following tiers:
                    <br></br>
                    <li>2-4: scholar</li>
                    <li>5-7: archmage</li>
                    <li>8-10: regent</li>
                    <li>J-K: high mage</li>

                </p>
            </div>
          </div>
          <br></br>
        </div>
    );
}

export default Home;