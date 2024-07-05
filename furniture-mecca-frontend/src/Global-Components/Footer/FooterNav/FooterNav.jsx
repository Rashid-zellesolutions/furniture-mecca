import React from 'react'

const FooterNav = ({link, linkName}) => {
  return (
        <p className='footer-nav-items'>
            <a href={link}>{linkName}</a>
        </p>
  )
}

export default FooterNav
