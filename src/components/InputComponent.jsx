import React from "react";
import ShowError from "./ShowError";
import "../styles/Input.css";

export default function InputComponent(props) {

    const validatorsAndEvents = {};

    if (props.required && props.type === 'file') validatorsAndEvents.required = "Se requiere un archivo.";
    else if (props.required) validatorsAndEvents.required = "Campo requerido.";

    if (props.pattern) validatorsAndEvents.pattern = props.pattern.pattern;
    if (props.maxLength) validatorsAndEvents.maxLength = props.maxLength.maxLength;
    if (props.minLength) validatorsAndEvents.minLength = props.minLength.minLength;
    if (props.handleChange) validatorsAndEvents.onChange = props.handleChange;
    //Custom validation.
    if (props.validGuestNumbers) validatorsAndEvents.validate = {
        min1Guest: (value) => value > 0,
        max10Guests: (value) => value < 11
    };

    return (
        <div className="input-container">
            <label htmlFor={props.name} className="input-label">{props.label}</label>
            <input onChange={props.handleChange} disabled={props.disabled ? props.disabled : false} type={props.type ? props.type : "text"} min={props.type === 'number' ? props.min : ''} max={props.type === 'number' ? props.maxLength : ''} id={props.name} className={!props.errors[props.name] ? "" : "invalid-input"} placeholder={props.placeholder}
                {...(props.register(props.name, validatorsAndEvents))}
            />
            {props.errors[props.name] && props.errors[props.name].type === 'required' && <ShowError text={props.errors[props.name].message} />}
            {props.errors[props.name] && props.errors[props.name].type === 'pattern' && <ShowError text={props.errors[props.name].message} />}
            {props.errors[props.name] && props.errors[props.name].type === 'maxLength' && <ShowError text={props.errors[props.name].message} />}
            {props.errors[props.name] && props.errors[props.name].type === 'minLength' && <ShowError text={props.errors[props.name].message} />}
            {props.errors[props.name] && props.errors[props.name].type === 'min1Guest' && <ShowError text='At least 1 guest.' />}
            {props.errors[props.name] && props.errors[props.name].type === 'max10Guests' && <ShowError text='Maximum 10 guests.' />}
        </div>
    );
}