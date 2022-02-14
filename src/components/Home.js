import React from 'react'
import Header from './Header'
import Section from './Section'
import Footer from './Footer'

export default function Home(){
	return(
		<>
			<Header></Header>
			<Section 
				title="Model 3"
				tagline="Order Online for Touchless Delivery"
				leftBtn="Custom Order"
				rightBtn="Existing Inventory"
				arrow = {true}
				bgImage = "model-3.jpg"
			/>
			<Section 
				title="Model Y"
				tagline="Order Online for Touchless Delivery"
				leftBtn="Custom Order"
				rightBtn="Existing Inventory"
				bgImage = "model-y.jpg"
			/>
			<Section 
				title="Model S"
				tagline="Order Online for Touchless Delivery"
				leftBtn="Custom Order"
				rightBtn="Existing Inventory"
				bgImage = "model-s.jpg"
			/>
			<Section 
				title="Model X"
				tagline="Order Online for Touchless Delivery"
				leftBtn="Custom Order"
				rightBtn="Existing Inventory"
				bgImage = "model-x.jpg"
			/>
			<Section 
				title="Solar Panels"
				tagline="Lower Cost Solar Panels in India"
				leftBtn="Order Now"
				rightBtn="Learn More"
				bgImage = "solar-panel.jpg"
			/>
			<Section 
				title="Solar Roof"
				tagline="Produce Clean Energy from your roof"
				leftBtn="Order Now"
				rightBtn="Learn More"
				bgImage = "solar-roof.jpg"
			/>
			<Section 
				title="Accessories"
				leftBtn="Order Now"
				bgImage = "accessories.jpg"
			/>
			<Footer></Footer>			
		</>
	)
}