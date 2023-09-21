import React from 'react'

const Footer = () => {
  return (
    <footer className="text-center text-text py-8 bg-background/90">
      <p>
        &copy; {new Date().getFullYear()} Benkhelifa Ilyes. All Rights Reserved.
      </p>
      <p>
        Made with
        <span className="text-red-700 text-base"> &#9829;</span>
      </p>
    </footer>
  )
}

export default Footer
