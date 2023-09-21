import { useState } from 'react'

import BurgerButton from './burgerButton'
import MobileMenu from './mobileMenu'

const BurgerMenu = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <BurgerButton open={open} setOpen={setOpen} aria-controls="menu" />
      <div
        className="fixed w-screen h-screen top-0 right-0 z-40 bg-opacity-100 opacity-25 bg-gray-400 dark:opacity-60 dark:bg-slate-900 transition-opacity duration-300"
        style={!open ? { display: 'none' } : {}}
        onClick={() => setOpen(false)}
      ></div>
      <MobileMenu {...{ open }} />
    </>
  )
}

export default BurgerMenu
