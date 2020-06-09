import React from 'react'
import { useRouteData } from 'react-static'
//
import { Link } from 'components/Router'

export default function Prop() {
  const { property } = useRouteData()
  return (
    <div>
      <Link to="/properties/">{'<'} Back</Link>
      <br />
      <h3>{property.title}</h3>
			<h5>housing type : {property.housing_type}</h5>
			<h5>price (&euro;) : {property.price}</h5>
			<h5>area (m<sup><small>2</small></sup>): {property.area}</h5>
			<h5>available_from : {property.available_from.split('T')[0].split('-').reverse().join('-')}</h5>
			<h5>street : {property.street_address}</h5>
			<h5>city : {property.city}</h5>
			<h5> country : {property.country}</h5>
			<h5>description : {property.description}</h5>
			<br />
			<ul className='images_block'>
			{
				property.property_images.map(image=>(
					<li><img className='images_block--image' src={`${image.image}`} alt=""/></li>
					// console.log(image);
				))
			}
			<br />
			</ul>
    </div>
  )
}