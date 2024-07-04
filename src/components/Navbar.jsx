import React, { useState } from 'react'

const Navbar = () => {

  const [dropdown, setDropdown] = useState(false)

  const showDropdown = () => {
    setDropdown(!dropdown)
  }

  return (
    <nav>
      <div>
        <div>
          <div>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar