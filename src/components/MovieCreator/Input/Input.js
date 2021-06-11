import React from 'react';

const Input = ({ id, value, changeField, label }) => {
    const handleChange = (e) => {
        changeField({ [id]: e.target.value })
    }

   return (
        <div className="manage-movies-block">
            <label for={id}>{label}</label>
            <input name={id} value={value} onChange={handleChange}/>
        </div>
    )
}
export default Input