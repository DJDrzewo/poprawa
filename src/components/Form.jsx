import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './styles/Form.css'



function Form({ addUser, id }) {
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target
        const formData = new FormData(form)
        const user = Object.fromEntries(formData.entries());
        addUser(user);
        navigate("/");
    }

    return (
        <form className='Form' method="post" onSubmit={handleSubmit}>
            <input type="text" name='firstName' placeholder="Imie" />
            <input type="text" name='lastName' placeholder="Nazwisko" />
            <input type="text" name='dateOfBirth' placeholder="Data urodzenia" />
            <input type="text" name='address' placeholder="Adres" />
            <input type="text" name='phone' placeholder="Telefon" />
            <input type="text" name='email' placeholder="E-mail" />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form