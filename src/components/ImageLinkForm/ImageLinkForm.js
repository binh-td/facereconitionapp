import React from 'react'
import './ImageLinkForm.css'
const ImageLinkForm = ({ onInputChange, onButtonChange }) => {
    return (
        <div>
            <p className="f3">
                {'This magic Brain will detect faces in your picture'}
            </p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input onChange={onInputChange} type="text" className="f4 pa2 w-70 center"/>
                    <button onClick={onButtonChange} className="w-30 grow f4 link ph3 pv2 dib white bg-light-red">Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm