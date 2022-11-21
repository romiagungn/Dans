import React from 'react'

const Header: React.FC<any> = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <a className="navbar-brand" href="https://efishery.com/" target="_blank" rel="noreferrer">
          <img src='https://efishery.com/wp-content/uploads/2021/10/logo-retina-colored.png' alt="Logo" width="100%" height="40" className="d-inline-block align-text-top" />
        </a>
        <div>
          <a href="https://github.com/Eko-prasetyo15" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className="medsos" width="30" height="30" />
          </a>
          <a href="https://www.linkedin.com/in/ekoprasetyopermadi/" target="_blank" rel="noreferrer">
            <img src="https://www.pikpng.com/pngl/m/57-572097_linkedin-transparent-icon-linked-in-logo-with-white.png" className="medsos" width="30" height="30" />
          </a>
          <a href="https://www.facebook.com/prasetyoeko15" target="_blank" rel="noreferrer" >
            <img src="https://www.freeiconspng.com/thumbs/logo-facebook-png/logo-facebook-png-transparent-image-28.png" className="medsos" width="30" height="30" />
          </a>
        </div>
      </div>
    </nav>
  )
}
export default Header
