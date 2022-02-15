import React, {useState} from 'react'
import styled from 'styled-components'
// import CloseIcon from '@mui/icons-material/Close';


export default function Header(){

	// const [menuStatus, setMenuStatus] = useState(false);

	return(
		<Menu>
			<LeftMenu>
				<img src="images/logo.svg" alt="logo"  width="120" height="20" />
			</LeftMenu>
			<CenterMenu>
				<ul>
					<li><a href="">Model S</a></li>
					<li><a href="">Model 3</a></li>
					<li><a href="">Model X</a></li>
					<li><a href="">Model Y</a></li>
					<li><a href="">Solar Roof</a></li>
					<li><a href="">Solar Panels</a></li>
				</ul>
			</CenterMenu>
			<RightMenu>
				<ul>
					<li><a href="">Shop</a></li>
					<li><a href="">Account</a></li>
				</ul>
			</RightMenu>
			
		</Menu>
	)
}
const Menu = styled.div`
	position: fixed;
	width: 100%;
	padding-left: 2rem;
	padding-right: 2rem;
	display: flex;
	justify-content:space-between;
	align-items: center;
	ul{
		display: flex;
	}
	li{
		list-style: none;
		padding-left: 0.75rem;
		padding-right: 0.75rem;
	}
	a{
		color: #000;
		font-size:15px;
		text-decoration:none;
		font-weight: 500;
	}
`
const LeftMenu = styled.div``
const CenterMenu = styled.div``
const RightMenu = styled.div``


const CloseWrapper = styled.div`
	display: flex;
`