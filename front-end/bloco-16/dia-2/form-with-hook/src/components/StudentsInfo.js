import React, { useContext } from 'react'
import FormContext from '../context/FormContext'

export default function StudentsInfo() {
  const { data } = useContext(FormContext);
  return (
    <ul>
    { data.map((student, index) => (
        <li key={index}>
          <p> {`Nome: ${student.name}`}</p>
          <p> {`Email: ${student.email}`}</p>
          <p> {`Módulo: ${student.module}`}</p>
        </li>
      ))}
    </ul>
  )
}
