import React from 'react';
import './card-styles.css';

export default function Card(props) {
    return (
        <div className="card-container">
            <div className="card-title">
                {props.title}
            </div>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}
