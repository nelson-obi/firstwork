import React from 'react'
import { IoSearchSharp } from "react-icons/io5";


export default function SearchBar() {
  return (
        <div className=" border-2 m-4 w-60 h-12 rounded-full px-4 flex justify-between items-center ">
            <input type="text" name='' placeholder='Search' className='outline-none' />
            <IoSearchSharp className='text-xl' />
        </div>
  )
}

git add . 
git commit -m "New Commit"
git push -u origin main