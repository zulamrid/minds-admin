import React from 'react';
import './input-styles.css';

export default function Input(props) {
    return (
        <div className="input-container">
            <div className="label">
                {props.label}
            </div>
           <input type="text" placeholder={props.placeholder} />
        </div>
    )
}
