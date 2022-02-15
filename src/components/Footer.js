import React from 'react'
import styled from 'styled-components'

export default function Footer(){
	return(
		<>
		<FooterMenu>
			<ul>
				<li><a href="">Tesla 2022</a></li>
				<li><a href="">Privacy & Legal</a></li>
				<li><a href="">Contact</a></li>
				<li><a href="">Careers</a></li>
				<li><a href="">News</a></li>
				<li><a href="">Engage</a></li>
				<li><a href="">Locations</a></li>
			</ul>
		</FooterMenu>
		</>
	)
}

const FooterMenu = styled.section`
	margin-bottom:30px;
	ul{
		display:flex;
		justify-content: center;
		list-style:none;
		align-item:center;
	}
	li{
		padding:2px 8px;
	}
	a{
		color:grey;
		font-weight:500;
		font-size:14px;
		text-decoration:none;
	}
`