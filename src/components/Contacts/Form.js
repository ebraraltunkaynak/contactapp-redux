
import { useState } from 'react'

import { nanoid } from '@reduxjs/toolkit'

import { useDispatch } from 'react-redux'

import { addContact,addContacts} from '../../redux/contactSlice'



function Form() {
    const [name, setName] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(!name) return false;

        const names = name.split(' ,');

        const data = names.map((name) => ({ id: nanoid(), name }))

        dispatch(addContacts(data))

        //  dispatch(addContacts(names.map((name => ({id: nanoid(), name})))))
         setName('');

    };
  return (
    <>
    <form 
    onSubmit={handleSubmit} >
        <input
        value= {name}
        placeholder="Enter Name"
        onChange={(e) => 
       setName(e.target.value)}
        />
    </form>
    </>
  )
}

export default Form