import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../../../components/common'
import { Links } from './styles'

const NavbarLinks = ({ desktop, logout }) => (
	<Links desktop={desktop}>
		<NavLink
			to="/feed"
			activeStyle={{ color: '#FF6347' }}
		>Feed</NavLink>
		<NavLink
			to="/add-post"
			activeStyle={{ color: '#FF6347' }}
		>New Post</NavLink>
		<NavLink
			to="/profile"
			exact
			activeStyle={{ color: '#FF6347' }}
		>Profile</NavLink>
		<Button type="button" onClick={logout}>
			Logout
		</Button>
	</Links>
)

export default NavbarLinks
