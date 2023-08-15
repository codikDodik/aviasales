import React from 'react'

import LogoImage from '../../assets/img/Logo.svg'

import classes from './Logo.module.scss'

const Logo = () => <img src={LogoImage} alt="Logo" className={classes.logo}></img>

export default Logo
