import React from "react";

const InputForm = ({ campo, tipo }) => {
    return (
        <label>
            <input required="" placeholder={campo} type={tipo} className="inputForm" />
        </label>
    )
}

export default InputForm;