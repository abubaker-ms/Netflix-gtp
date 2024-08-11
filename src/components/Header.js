import React from 'react'

function Header() {
  return (
    <div className='flex justify-between  absolute z-10 w-full'>
      <div className='right-10'>
      <img className="" src="https://i1.wp.com/www.whatphone.net/wp-content/uploads/2019/05/Netflix-Logo.png?fit=2950%2C1554&ssl=1" height="150px" width="150px"/>

      </div>

      <div className='m-3'>
      <button className="px-4 py-2 font-bold text-white bg-red-600 rounded top-10 hover:bg-red-600">Sign In</button>

      </div>
    </div>
  )
}

export default Header