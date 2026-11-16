import React from 'react'

function InputField({ type, label, name, value, onChange }) {
  return (
    <div className="mb-3 row">
      <label className="col-sm-2 col-form-label" htmlFor={name}>{label} :</label>
      <div className="col-sm-10">
        <input id={name} className="form-control" type={type} name={name}
          value={value}
          onChange={onChange} />
      </div>
    </div>
  )
}

export default InputField
