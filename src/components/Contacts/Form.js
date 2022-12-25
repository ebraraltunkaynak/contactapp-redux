import {useState} from 'react';
import {useDispatch} from "react-redux";
import {addContact, addContacts} from "../../redux/contactSlice";
import {nanoid} from "@reduxjs/toolkit";

function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
      e.preventDefault(); //native davranışı engelliyoruz, submit olunca sayfanın yenilenmesini engellemek icin.
    //   console.log("saASa") ; //submit olduğunu console'dan kontrol ettim.

    if(!name ||  !number) return false; //name ve number  yoksa çalışma.

   
    dispatch(addContact({id: nanoid(), name, phone_number: number}));
    setName("");//input boşaltmak için
    setNumber("");//input boşaltmak için
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input placeholder='name' value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="number" placeholder='phone number' value={number} onChange={(e) => setNumber(e.target.value)}/>
           <div className='btn'>
           <button type='submit'>Add</button>
            </div>
        </form>
    </div>
  )
}

export default Form;