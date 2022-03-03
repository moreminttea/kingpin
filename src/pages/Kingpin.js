import React from "react";
import ReactCardFlip from 'react-card-flip';
import './/Kingpin.css';
import card_temp from './img/card_temp.png';
import sumina_cardTemp from './img/sumina_cardTemp.png';

function Kingpin(){
    return (
        <div className="kingpin_body">
            <div className="kingpin_details">
                <div className="kingpin_section">
                    <h className="kingpin_title">Kingpin</h>
                    <p className="kingpin_excerpt">
                        Six students, five sectors, four pieces of a card spell powerful
                        enough to save Koranin from the clutches of evil, or bring it closer
                        and closer to the brink of humanity's destruction. They say not to bite
                        the hand that feeds you, but what happens when you discover the hand has
                        been poisoning you all along?
                    </p>
                    <br></br>
                    <p><b>hover over a card and see its owner</b></p>
                </div>
                <div className="kingpin_selection">
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="suminaCard"></div>
                </div>
            </div>
            <br></br>
        </div>
    );
}

export default Kingpin;