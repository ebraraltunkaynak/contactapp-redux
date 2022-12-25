import React from 'react'; 
import { useSelector ,useDispatch} from 'react-redux';
import {contactSelector, removeAllContacts} from "../../redux/contactSlice";
import Item from "./Item"; 

function List() {
const dispatch = useDispatch();

    const contacts = useSelector(contactSelector.selectAll); //selectAll array olarak tutar 
    const handleDeleteAll = () =>{
      if(window.confirm("Are you sure?")){
        dispatch(removeAllContacts());
      }
    }
  

    // const total = useSelector(contactSelector.selectTotal); //kaç tane var o sayıyı döndürür  
    // console.log('total :>> ', total);
  return (
    <div>
      <div className='deleteAllBtn'  onClick={handleDeleteAll}    > Delete All</div>
  
    <ul className='list'>
        {
            contacts.map(contact => <Item key={contact.id}  item={contact}/>)
        }
    </ul>
    </div>
  )
}

export default List;