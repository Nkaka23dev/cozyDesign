import React from 'react'

export default function Button(props) {
  return (
    <div className={`text-[1.2rem] tracking-widest bg-[#b55730] text-center text-[#e4ded5] py-5 rounded-xl uppercase max-w-lg ${props.className} font-geomanist font-bold`}>
      {props.name}
      </div>
  )
}
