import React from 'react'
import { redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './styles/Home.css'



function Home({ people, deleteUser }) {
  return (
    <div className='Home'>
      <Link to="form">Form</Link>
      <table>
        <thead>
          <tr>
            <td>Imię</td>
            <td>Nazwisko</td>
            <td>Data urodzenia</td>
            <td>Adres</td>
            <td>Telefon</td>
            <td>E-mail</td>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) =>
            <tr key={index}>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.dateOfBirth}</td>
              <td>{person.address}</td>
              <td>{person.phone}</td>
              <td>{person.email}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Home