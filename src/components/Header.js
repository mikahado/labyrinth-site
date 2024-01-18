import React from 'react'
import { Link } from 'gatsby'
// import Logo from '../../images/logo.svg'
import useMenuQuery from '../hooks/useMenuQuery'


const Header = () => {

    const data = useMenuQuery()
    console.log(data)

  return (
    <div>Header</div>
  )
}

export default Header