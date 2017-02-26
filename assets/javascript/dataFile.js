'use strict';

const data = {
	show: true,
	checkedAttr: [],
	location: false,
	offersNum: 7,
	offsetPop: 5,
	offsetKit: 5,
	flats: [
		{id: 1, title: 'Stylish apartment in el born', price: '85', style: "background-image: url('public/img/stylish.jpg')", location: {lat: 41.393592, lng: 2.162570}, facilities: ['Guarded parking', 'Balcony', 'Dishwasher', 'Freezer'], show: true},
		{id: 2, title: 'A cozy flat near Las Ramblas', price: '70', style: "background-image: url('public/img/cozy.jpg')", location: {lat: 41.394195, lng: 2.164844}, facilities: ['Free wireless internet', 'Fireplace'], show: true},
		{id: 3, title: 'Apartment in the classic Barcelona center', price: '60', style: "background-image: url('public/img/center.jpg')", location: {lat: 41.393732, lng: 2.165551}, facilities: ['Air conditioner', 'Elevator', 'Terrace', 'Blender', 'Fridge'], show: true},
		{id: 4, title: 'Classic Eixample place for rent', price: '75', style: "background-image: url('public/img/classic.jpg')", location: {lat: 41.392794, lng: 2.164888}, facilities: ['Free Transportation', 'Guarded parking', 'Game room'], show: true},
		{id: 5, title: 'Atlantida Beach', price: '90', style: "background-image: url('public/img/atlantida.jpg')", location: {lat: 41.392876, lng: 2.163260}, facilities: ['Cooking hob'], show: true},
		{id: 6, title: 'Elegant place in Eixample', price: '150 ', style: "background-image: url('public/img/elegant.jpg')", location: {lat: 41.394479, lng: 2.163797}, facilities: ['Air conditioner', 'Computer', 'Free wireless internet', 'Game room', 'Terrace', 'Fridge'], show: true},
		{id: 7, title: 'Elegant2 place in Eixample', price: '110 ', style: "background-image: url('public/img/elegant.jpg')", location: {lat: 41.393752, lng: 2.164522}, facilities: ['Game room', 'Air conditioner', 'Balcony'], show: true}
	],
	popular: [
		{id: 'airConditioner', 	facilitie: 'Air conditioner'},
		{id: 'freeTransport', 	facilitie: 'Free Transportation'},
		{id: 'computer', 		facilitie: 'Computer'},
		{id: 'freeWiFi', 		facilitie: 'Free wireless internet'},
		{id: 'elevator', 		facilitie: 'Elevator'},
		{id: 'guardedParking', 	facilitie: 'Guarded parking'},
		{id: 'hairDryer', 		facilitie: 'Hair dryer'},
		{id: 'wirelessInternet', 		facilitie: 'Wireless internet'},
		{id: 'washingMachine', 		facilitie: 'Washing machine'},
		{id: 'freeWiFi2', 		facilitie: 'Free wireless interne'},
		{id: 'vacuumCleaner', 		facilitie: 'Vacuum cleaner'},
		{id: 'tv', 		facilitie: 'TV (local channels only)'}
	],
	apartment: [
		{id: 'balcony', 	facilitie: 'Balcony'},
		{id: 'gameRoom', 	facilitie: 'Game room'},
		{id: 'fireplace', 	facilitie: 'Fireplace'},
		{id: 'terrace', 	facilitie: 'Terrace'},
		{id: 'floorHeating',facilitie: 'Floor heating'}
	],
	kitchen: [
		{id: 'blender', 	facilitie: 'Blender'},
		{id: 'dishwasher',	facilitie: 'Dishwasher'},
		{id: 'coffeMaker',	facilitie: 'Coffee maker'},
		{id: 'freezer',		facilitie: 'Freezer'},
		{id: 'cookingHob', 	facilitie: 'Cooking hob'},
		{id: 'fridge', 		facilitie: 'Fridge'},
		{id: 'blender', 	facilitie: 'Blender'},
		{id: 'dishwasher',	facilitie: 'Dishwasher'},
		{id: 'coffeMaker',	facilitie: 'Coffee maker'},
		{id: 'freezer',		facilitie: 'Freezer'},
		{id: 'cookingHob', 	facilitie: 'Cooking hob'},
		{id: 'fridge', 		facilitie: 'Fridge'}
	]
};

const markersLocation = [
	{latitude: '41.394195', longitude: '2.164844'},
	{latitude: '41.393732', longitude: '2.165551'},
	{latitude: '41.392794', longitude: '2.164888'},
	{latitude: '41.392876', longitude: '2.163260'},
	{latitude: '41.394479', longitude: '2.163797'}
];

const styleArr = [
	{
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#f5f5f5"
			}
		]
	},
	{
		"elementType": "labels.icon",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#bdbdbd"
			}
		]
	},
	{
		"elementType": "labels.text.stroke",
		"stylers": [
			{
				"color": "#FFFFFF"
			}
		]
	},
	{
		"featureType": "administrative.land_parcel",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#bdbdbd"
			}
		]
	},
	{
		"featureType": "administrative.locality",
		"elementType": "labels.icon",
		"stylers": [
			{
				"color": "#ffffff"
			}
		]
	},
	{
		"featureType": "poi",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#eeeeee"
			}
		]
	},
	{
		"featureType": "poi",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#757575"
			}
		]
	},
	{
		"featureType": "poi.park",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#e5e5e5"
			}
		]
	},
	{
		"featureType": "poi.park",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#9e9e9e"
			}
		]
	},
	{
		"featureType": "road",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#ffffff"
			}
		]
	},
	{
		"featureType": "road.arterial",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#757575"
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#dadada"
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#616161"
			}
		]
	},
	{
		"featureType": "road.local",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#9e9e9e"
			}
		]
	},
	{
		"featureType": "transit.line",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#e5e5e5"
			}
		]
	},
	{
		"featureType": "transit.station",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#eeeeee"
			}
		]
	},
	{
		"featureType": "water",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#c9c9c9"
			}
		]
	},
	{
		"featureType": "water",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#9e9e9e"
			}
		]
	}
];