import React from 'react'
import openai from '../utils/openAi'
import { checkActionCode } from 'firebase/auth';

function GptSearch() {

    const handleGptSearchClick=()=>{
        async function main() {
            const chatCompletion = await openai.chat.completions.create({
              messages: [{ role: 'user', content: 'top 10 hindi movies' }],
              model: 'gpt-3.5-turbo',
            });
            console.log(chatCompletion.choices,"chatCompletion");
          }

        
          
          main();
    }
  return (
    <div className='absolute my-20 mx-80'>
        <h1 className="text-2xl text-center  ">GPT Search</h1>
        <div className="flex justify-center mx-40">
            <input type="text" className="border border-gray-500 p-2 " placeholder="Search for movies"/>
            <button onSubmit={(e)=>{e.preventDefault()}} onClick={handleGptSearchClick} className="bg-blue-500 text-white p-2 ml-4">Search</button>
        </div>
    </div>
  )
}

export default GptSearch