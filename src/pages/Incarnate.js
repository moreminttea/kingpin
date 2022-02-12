import React from "react";
import './/Incarnate.css';
import card_temp from './img/card_temp.png';

function Incarnate(){
    return (
        <div className="incarnate_body">
            <div className="incarnate_details">
                <div className="incarnate_section">
                    <h className="incarnate_title">Incarnate</h>
                    <p className="incarnate_excerpt">
                        coming soon...
                    </p>
                </div>
                <div className="incarnate_selection">
                    <img src={card_temp} className="icard"/>
                    <img src={card_temp} className="icard"/>
                    <img src={card_temp} className="icard"/>
                    <img src={card_temp} className="icard"/>
                    <img src={card_temp} className="icard"/>
                    <img src={card_temp} className="icard"/>
                    <img src={card_temp} className="icard"/>
                    <img src={card_temp} className="icard"/>
                </div>
            </div>
        </div>
    );
}

export default Incarnate;