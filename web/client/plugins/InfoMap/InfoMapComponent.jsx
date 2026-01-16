
import React from 'react';
import { Glyphicon, Button } from 'react-bootstrap';
import { CONTROL_NAME } from './constants';

const InfoMapComponent = ({ isEnable, toggleControl }) => {

    if (!isEnable) {
        return null;
    }

    const handleClick = () =>  {
        toggleControl(CONTROL_NAME, !isEnable); // or null to toggle
    };

    return (

        <div className="info-map">
            <div className="header">
                <div>
                    InfoMap
                </div>
                <div className="close-button">
                    <Button variant="link" onClick={handleClick}><Glyphicon glyph="remove" /></Button>
                </div>

            </div>

            <div>
                Faux texte
            </div>

        </div>
    );
};
export default InfoMapComponent;
