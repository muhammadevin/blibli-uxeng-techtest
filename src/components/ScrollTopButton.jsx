import React from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md'
import { useState } from 'react'

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100){
      setVisible(true)
    } 
    else if (scrolled <= 100){
      setVisible(false)
    }
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div onClick={scrollToTop} className={`top-7/8 transform rounded-full w-10 h-10 z-30
    fixed bottom-8 right-8 flex ${ visible ? '' : 'hidden'} items-center justify-center drop-shadow-md bg-primary text-white text-3xl font-bold hover:cursor-pointer`}>
      <MdKeyboardArrowUp />
    </div>
  )
}

export default ScrollTopButton