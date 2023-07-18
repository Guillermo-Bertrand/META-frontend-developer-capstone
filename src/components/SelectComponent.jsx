import React from "react";
import ShowError from "./ShowError";
import "../styles/Input.css";

export default function InputComponent(props) {

    const validators = {};

    if (props.required) validators.required = "Campo requerido.";
    if (props.pattern) validators.pattern = props.pattern.pattern;

    return (
        <div className="input-container">
            <label htmlFor={props.name} className="input-label">{props.label}</label>
            <select id={props.name} className={!props.errors[props.name] ? "" : "invalid-input"} {...(props.register(props.name, validators))} >
                <option selected disabled value="">Select a value</option>
                {
                    props.options.map((option, index) => {
                        return <option key={index} value={option.value}>{option.text}</option>
                    })
                }
            </select>
            {props.errors[props.name] && props.errors[props.name].type === 'required' && <ShowError text={props.errors[props.name].message} />}
            {props.errors[props.name] && props.errors[props.name].type === 'pattern' && <ShowError text={props.errors[props.name].message} />}
        </div>
    );
}