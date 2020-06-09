import React from 'react'
import { useRouteData } from 'react-static'
//
import { Link } from 'components/Router'

export default function Properties() {
	const { props } = useRouteData()
	
  return (
    <div>
      <ul className="properties--list">
        {props.map(property => (
					<li key={property.id} className="property">
						<p><img className='property--image' src={`${property.property_images[0].image}`} alt=""/></p>
						<div className="property--block">
							<Link to={`/properties/property/${property.id}/`}>{property.title}</Link>
							<p>price :	&euro;{property.price}</p>
							<p>city : {property.city}</p>
							<p>description : {property.description}</p>
						</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
