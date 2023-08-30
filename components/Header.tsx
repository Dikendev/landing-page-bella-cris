import React from 'react'
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export const  Header = () => {
    return (
      <header className='fixed top-0 left-0 w-full h-[88px] flex items-center z-10 hover:bg-white transition-all duration-[.3s] ease-in-out group'>
        <div className='flex flex-1 items-center justify-between px-[36px] group-hover:text-black'>
          {/* {Header left} */}
          <div className='flex items-center gap-[30px]'>
            <button type='button' className='flex items-center gap-4'>
              <Bars3Icon className="h-6 w-6" />
              <span>Menu</span>
            </button>
          
          {/* {Search} */}
            <button type='button' className='flex items-center gap-4'>
              <MagnifyingGlassIcon className="h-5 w-5" />
              <span>Search</span>
            </button>
          </div>
          {/* {Header center} */}
          <div>Menu center</div>
          {/* {Header right} */}
          <div>Menu right</div>
        </div>
      </header>
    )
}