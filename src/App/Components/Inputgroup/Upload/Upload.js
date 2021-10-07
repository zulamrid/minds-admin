import React from 'react';
import './upload-styles.css';

export default function Upload(props) {
    return (
        <div className="upload-container">
            <div className="label">
                {props.label}
            </div>
            <div class="file-input">
                <input type="file" id="file" class="file" />
                <label for="file">찾아보기</label>
            </div>
        </div>
    )
}
