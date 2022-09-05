import React from 'react'

const SelectsCard = (props) => {
  return (
    <div><div className="relative">
    <img className='w-full h-[280px] object-cover' src={props.image} alt="/" />
    <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
        <p className="absolute text-white font-bold left-4 bottom-4">{props.text}</p>
    </div>
  </div></div>
  )
}

export default SelectsCard