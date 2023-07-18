import React from "react";
import "../styles/Input.css";

export default function ShowError(props) {
    return (
        <div className="error-label">
            {props.text}
        </div>
    );
}