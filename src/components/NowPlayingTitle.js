import React from 'react'

function NowPlayingTitle(movies) {
  let movieTitle=movies.movieInfo[0];
  let movieOverview=movies.movieInfo[1];
  return (
    <div className='pt-[20%] px-20 absolute text-white  bg-gradient-to-r from-black w-screen aspect-video'>
      <h1 className='text-4xl font-bold '>{movieTitle}</h1>
      <h1 className='text-mx p-2 font-medium w-1/4'>{movieOverview}</h1>
        
        <div className='flex space-x-4 p-2'>
        <button className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-opacity-50'>Play</button>
        <button className='bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-opacity-50'>More Info</button>
        </div>
    </div>
  )
}

export default NowPlayingTitle