import React from 'react';
import PropertyMap from './PropertyMap';
import { useRouteData } from 'react-static'

import GoogleMapReact from 'google-map-react';
import ImageGallery   from 'react-image-gallery';

export default function PropertyDetails() {

	const { property } = useRouteData()

	const renderInterior = () => {
		const interior = property.interior;
		let text;

		if (interior) {
				text = 'Furnished';
				return <span>{text}</span>;
		} else {
				text = 'Unfurnished'
				return <span>{text}</span>;
		}
  }

	const renderImages = () => {
		const images = property.property_images;
		const mappedImages = images.map(function(item){
			return { original: item.image, thumbnail: item.image };
		});
		return mappedImages;
	}

	const renderEditRemoveButtons = () => {
		console.log(222222)
		console.log(property.belongs_to)
		const belongsTo = property.belongs_to;
		if (belongsTo) {
				return (
						<div className="col-sm-7 r-edit-remove-block">
								<button className="btn btn-default hidden-xs remove">Remove</button>
								<button className="btn btn-default edit">Edit</button>
								<button className="btn btn-default hidden-sm hidden-md hidden-lg remove">Remove</button>
						</div>
				);
		}
	}

	const renderParkingPlace = () => {
		const parkingPlace = property.parking_place;
		let text;

		if (parkingPlace) {
				text = 'Yes';
				return <span>{text}</span>;
		} else {
				text = 'No';
				return <span>{text}</span>;
		}
}

	const renderPrice = () => {
		const price = property.price;
		const utilities = property.utilities;
		let text;

		if (utilities) {
				text = 'incl';
				const value = `${price} (${text})`;
				return <h4 className="pull-right">&euro; {value}</h4>;
		} else {
				text = 'excl';
				const value = `${price} (${text})`;
				return <h4 className="pull-right">&euro; {value}</h4>;
		}
	}

	const renderRequestMoreDetails = () => {
		return (
				<div className="col-sm-12 r-request-more-details property__div-margin-bottom">
						<button className="btn btn-default"><span>Request more details</span></button>
				</div>
		);
	}

	const images = renderImages();
	const lat = parseFloat(property.latitude);
	const lng = parseFloat(property.longitude);
	const center =  { lat, lng };
	
	return (
			<div id="page-content">
					<div className="container">
							<div className="col-sm-8 col-sm-offset-2">
									<section id="property-details">
											<div className="row property__row-padding-top">
													<div className="col-sm-12 r-title-wrapper property__div-margin-bottom">
															<h1>{property.title}</h1>
															{renderPrice()}
													</div>
													<div className="col-sm-5 r-subtitle-wrapper property__div-margin-bottom">
															<p>{`${property.street_address}${property.street_address ? ',' : ''} ${property.city}`}</p>
													</div>
													{renderEditRemoveButtons()}
													<div className="col-sm-12 r-gallery-block property__div-margin-bottom">
														{ images.length ? 
															<ImageGallery
																	items={images}
																	showPlayButton={false}
																	sizes={700}
																	showFullscreenButton={false}
																	showIndex={true} /> : ""
															
														}
													</div>
													<div className="col-sm-6 r-feat-left-block">
															<p>Housing Type: <span>{property.housing_type}</span></p>
															{property.area && <p><span>Area</span>: <span>{property.area} {property.area ? "m2" : ""}</span></p>}
															<p><span>Interior</span>: {renderInterior()}</p>
													</div>
													<div className="col-sm-6 r-feat-right-block">
															<p><span>Bedrooms</span>: <span>{property.bedrooms}</span></p>
															<p><span>Bathrooms</span>: <span>{property.bathrooms}</span></p>
															<p><span>Parking Place</span>: <span>{renderParkingPlace()}</span></p>
													</div>
													{
															property.description &&
															<div className="col-sm-12 r-description-block property__div-margin-bottom">
																	<h1><span>Description</span></h1>
																	<p>{property.description}</p>
															</div>
													}
													{ renderRequestMoreDetails() }
													{
															lat && lng &&
															<div className="col-sm-12 r-property-map-block">
																	<GoogleMapReact
																			bootstrapURLKeys={{
																					key: 'AIzaSyACXh16vPT6tGEZANdBnZWKXx6YnuBlrhI', 
																					language: 'en'
																			}}
																			defaultCenter={center}
																			defaultZoom = {11}
																	>
																			<PropertyMap
																					lat={lat}
																					lng={lng}
																					text={'My Marker'}
																			/>
																	</GoogleMapReact>
															</div>
													}
											</div>
									</section>
							</div>
					</div>
			</div>
			
	)
}