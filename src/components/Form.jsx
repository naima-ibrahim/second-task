import React from 'react'
import InputField from './InputField';
import SelectField from './SelectField';
import { useState } from 'react';
function Form() {
    const fields = [
        {
            id: 1,
            name: 'email',
            input: 'input',
            type: 'email',
            label: 'email',
            required: true,
        },
        {
            id: 2,
            name: 'password',
            input: 'input',
            type: 'password',
            label: 'password',
            required: true,
            minLength: 8,
        },
        {
            id: 3,
            name: 'name',
            input: 'input',
            type: 'text',
            label: 'name',
            required: true,
            maxLength: 50
        },
        {
            id: 4,
            name: 'country',
            input: 'select',
            label: 'Country',
            options: ['Syria', 'Lebanon', 'Jordan'],
            required: true,
        }
    ];
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        country: ""
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        country: ""
    });

    function validateForm(values) {
        const errors = {};

        fields.forEach((field) => {
            const value = values[field.name];
            if (field.required && !value.trim()) {
                errors[field.name] = field.name + " is required";
            }
            else if (field.minLength && field.minLength > value.length) {
                errors[field.name] = field.name + " should be at least 8 characters";
            }
            else if (field.maxLength && field.maxLength < value.length) {
                errors[field.name] = field.name + " should be at most 50 characters";
            }
        });
        return errors;
    }
    const handleOnChange = (event) => {
        setForm(
            {
                ...form,
                [event.target.name]: event.target.value
            });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = validateForm(form);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("تم الإرسال:", form);
        }
    }
    return (
        <div className="container min-vh-100 d-flex justify-content-center align-items-center">
            <form className="row g-3 w-100"
                style={{ maxWidth: '650px' }}
                onSubmit={handleSubmit}>
                {fields.map(field =>
                    <div className="col-12" key={field.id}>
                        {field.input === 'input'
                            ?
                            (<InputField type={field.type} label={field.label} name={field.name} value={form[field.name]} onChange={handleOnChange} />)
                            : field.input === 'select' ?
                                (<SelectField label={field.label} options={field.options} name={field.name} value={form[field.name]} onChange={handleOnChange} />)
                                : null}
                        {errors[field.name] && <p style={{ color: "red" }}>{errors[field.name]}</p>}

                    </div>
                )}
                <div className="col-sm-12 text-center">
                    <button type="submit" className="btn btn-outline-success mb-3 px-3">Submit</button>

                </div>
            </form>
        </div>
    )
}

export default Form
