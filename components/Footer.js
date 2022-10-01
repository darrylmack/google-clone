import React from 'react'

const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-[50%] translate-x-[-50%]  whitespace-nowrap p-6 text-sm text-gray-600">
      <p>
        Copyright &copy; {new Date().getFullYear()} Darryl Mack - Google Clone
      </p>
    </footer>
  )
}

export default Footer
