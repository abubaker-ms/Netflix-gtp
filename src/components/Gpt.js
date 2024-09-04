import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Gpt() {
    const [gpt,setGpt]=useState(false);
 const navigate=useNavigate();

 useEffect(() => {
  handleGptPage();
}, [])

    const handleGptPage=()=>{
        setGpt(!gpt);
        if(gpt){
            navigate("/GptSearch")
          
        }
        else{
            navigate("/browse")

        }
    }

  return (
    <div>
        <button onClick={handleGptPage} className="px-6 my-2" id="gpt-button">{gpt?"GPT":"Movies"}</button>
    </div>
  )
}

export default Gpt