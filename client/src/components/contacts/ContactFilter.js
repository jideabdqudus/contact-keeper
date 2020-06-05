import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/ContactContext";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);

  const text = useRef("")

  useEffect(()=>{
      if(contactContext.filtered===null){
          text.current.value=""
      }else{

      }
  })
  const onChange=e=>{
    if (text.current.value !== ""){
        contactContext.filterContacts(e.target.value)
    }else{
        contactContext.clearFilter()
    }
  }

  return (
    <form>
      <input type="text" ref={text} placeholder="Filter Contacts.." onChange={onChange} />
    </form>
  );
};

export default ContactFilter;
