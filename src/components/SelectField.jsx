import React from 'react'

function SelectField({ options, label, name, value, onChange }) {
    return (
        <div className="mb-3 row">
            <label className="col-sm-2 col-form-label" htmlFor={name}>Choose a {label} :</label>
            <div className="col-sm-10">
                <select className="form-select" id={name} name={name}
                    value={value}
                    onChange={onChange}>
                    <option value="">Choose a country</option>
                    {options.map((option, index) =>
                        <option key={index} value={option}>{option}</option>
                    )}
                </select>
            </div>
        </div >
    )
}

export default SelectField
