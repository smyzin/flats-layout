'use strict';

var _this = this;

const data = {
	show: true,
	checkedAttr: [],
	location: false,
	offersNum: 7,
	offsetPop: 5,
	offsetKit: 5,
	flats: [{ id: 1, title: 'Stylish apartment in el born', price: '85', style: "background-image: url('public/img/stylish.jpg')", location: { lat: 41.393592, lng: 2.162570 }, facilities: ['Guarded parking', 'Balcony', 'Dishwasher', 'Freezer'], show: true }, { id: 2, title: 'A cozy flat near Las Ramblas', price: '70', style: "background-image: url('public/img/cozy.jpg')", location: { lat: 41.394195, lng: 2.164844 }, facilities: ['Free wireless internet', 'Fireplace'], show: true }, { id: 3, title: 'Apartment in the classic Barcelona center', price: '60', style: "background-image: url('public/img/center.jpg')", location: { lat: 41.393732, lng: 2.165551 }, facilities: ['Air conditioner', 'Elevator', 'Terrace', 'Blender', 'Fridge'], show: true }, { id: 4, title: 'Classic Eixample place for rent', price: '75', style: "background-image: url('public/img/classic.jpg')", location: { lat: 41.392794, lng: 2.164888 }, facilities: ['Free Transportation', 'Guarded parking', 'Game room'], show: true }, { id: 5, title: 'Atlantida Beach', price: '90', style: "background-image: url('public/img/atlantida.jpg')", location: { lat: 41.392876, lng: 2.163260 }, facilities: ['Cooking hob'], show: true }, { id: 6, title: 'Elegant place in Eixample', price: '150 ', style: "background-image: url('public/img/elegant.jpg')", location: { lat: 41.394479, lng: 2.163797 }, facilities: ['Air conditioner', 'Computer', 'Free wireless internet', 'Game room', 'Terrace', 'Fridge'], show: true }, { id: 7, title: 'Elegant2 place in Eixample', price: '110 ', style: "background-image: url('public/img/elegant.jpg')", location: { lat: 41.393752, lng: 2.164522 }, facilities: ['Game room', 'Air conditioner', 'Balcony'], show: true }],
	popular: [{ id: 'airConditioner', facilitie: 'Air conditioner' }, { id: 'freeTransport', facilitie: 'Free Transportation' }, { id: 'computer', facilitie: 'Computer' }, { id: 'freeWiFi', facilitie: 'Free wireless internet' }, { id: 'elevator', facilitie: 'Elevator' }, { id: 'guardedParking', facilitie: 'Guarded parking' }, { id: 'hairDryer', facilitie: 'Hair dryer' }, { id: 'wirelessInternet', facilitie: 'Wireless internet' }, { id: 'washingMachine', facilitie: 'Washing machine' }, { id: 'freeWiFi2', facilitie: 'Free wireless interne' }, { id: 'vacuumCleaner', facilitie: 'Vacuum cleaner' }, { id: 'tv', facilitie: 'TV (local channels only)' }],
	apartment: [{ id: 'balcony', facilitie: 'Balcony' }, { id: 'gameRoom', facilitie: 'Game room' }, { id: 'fireplace', facilitie: 'Fireplace' }, { id: 'terrace', facilitie: 'Terrace' }, { id: 'floorHeating', facilitie: 'Floor heating' }],
	kitchen: [{ id: 'blender', facilitie: 'Blender' }, { id: 'dishwasher', facilitie: 'Dishwasher' }, { id: 'coffeMaker', facilitie: 'Coffee maker' }, { id: 'freezer', facilitie: 'Freezer' }, { id: 'cookingHob', facilitie: 'Cooking hob' }, { id: 'fridge', facilitie: 'Fridge' }, { id: 'blender', facilitie: 'Blender' }, { id: 'dishwasher', facilitie: 'Dishwasher' }, { id: 'coffeMaker', facilitie: 'Coffee maker' }, { id: 'freezer', facilitie: 'Freezer' }, { id: 'cookingHob', facilitie: 'Cooking hob' }, { id: 'fridge', facilitie: 'Fridge' }]
};

const markersLocation = [{ latitude: '41.394195', longitude: '2.164844' }, { latitude: '41.393732', longitude: '2.165551' }, { latitude: '41.392794', longitude: '2.164888' }, { latitude: '41.392876', longitude: '2.163260' }, { latitude: '41.394479', longitude: '2.163797' }];

const styleArr = [{
	"elementType": "geometry",
	"stylers": [{
		"color": "#f5f5f5"
	}]
}, {
	"elementType": "labels.icon",
	"stylers": [{
		"visibility": "off"
	}]
}, {
	"elementType": "labels.text.fill",
	"stylers": [{
		"color": "#bdbdbd"
	}]
}, {
	"elementType": "labels.text.stroke",
	"stylers": [{
		"color": "#FFFFFF"
	}]
}, {
	"featureType": "administrative.land_parcel",
	"elementType": "labels.text.fill",
	"stylers": [{
		"color": "#bdbdbd"
	}]
}, {
	"featureType": "administrative.locality",
	"elementType": "labels.icon",
	"stylers": [{
		"color": "#ffffff"
	}]
}, {
	"featureType": "poi",
	"elementType": "geometry",
	"stylers": [{
		"color": "#eeeeee"
	}]
}, {
	"featureType": "poi",
	"elementType": "labels.text.fill",
	"stylers": [{
		"color": "#757575"
	}]
}, {
	"featureType": "poi.park",
	"elementType": "geometry",
	"stylers": [{
		"color": "#e5e5e5"
	}]
}, {
	"featureType": "poi.park",
	"elementType": "labels.text.fill",
	"stylers": [{
		"color": "#9e9e9e"
	}]
}, {
	"featureType": "road",
	"elementType": "geometry",
	"stylers": [{
		"color": "#ffffff"
	}]
}, {
	"featureType": "road.arterial",
	"elementType": "labels.text.fill",
	"stylers": [{
		"color": "#757575"
	}]
}, {
	"featureType": "road.highway",
	"elementType": "geometry",
	"stylers": [{
		"color": "#dadada"
	}]
}, {
	"featureType": "road.highway",
	"elementType": "labels.text.fill",
	"stylers": [{
		"color": "#616161"
	}]
}, {
	"featureType": "road.local",
	"elementType": "labels.text.fill",
	"stylers": [{
		"color": "#9e9e9e"
	}]
}, {
	"featureType": "transit.line",
	"elementType": "geometry",
	"stylers": [{
		"color": "#e5e5e5"
	}]
}, {
	"featureType": "transit.station",
	"elementType": "geometry",
	"stylers": [{
		"color": "#eeeeee"
	}]
}, {
	"featureType": "water",
	"elementType": "geometry",
	"stylers": [{
		"color": "#c9c9c9"
	}]
}, {
	"featureType": "water",
	"elementType": "labels.text.fill",
	"stylers": [{
		"color": "#9e9e9e"
	}]
}];

function containsAll(needles, haystack) {
	for (var i = 0, len = needles.length; i < len; i++) {
		if ($.inArray(needles[i], haystack) == -1) return false;
	}
	return true;
}

new Vue({
	el: '.vueApp',
	data: data,
	methods: {
		checkCheckbox: event => {
			var checkedArr = data.checkedAttr,
			    checkedEl = 0;
			if ($(_this.event.target).is(":checked")) {
				$(_this.event.target).addClass('checked');
				data.flats.map(function (flat, i) {
					if (containsAll(checkedArr, flat.facilities) == true) {
						flat.show = true;
						checkedEl++;
					} else {
						flat.show = false;
					}
				});
			} else {
				$(_this.event.target).removeClass('checked');
				data.flats.map(function (flat, i) {
					if (containsAll(checkedArr, flat.facilities) == true) {
						flat.show = true;
						checkedEl++;
					} else {
						flat.show = false;
					}
				});
			}
			data.offersNum = checkedEl;
		},

		slideContent: event => {
			if ($(_this.event.target).hasClass('clicked')) {
				_this.event.target.children[0].src = 'public/img/plus.png';
				$(_this.event.target).removeClass('clicked');
				if (_this.event.target.title == "Popular") {
					data.offsetPop = 5;
				} else {
					data.offsetKit = 5;
				}
			} else {
				$(_this.event.target).addClass('clicked');
				_this.event.target.children[0].src = 'public/img/minus.png';
			}
		},

		openMap: event => {

			let lat = parseFloat(_this.event.target.getAttribute("location-lat")),
			    lng = parseFloat(_this.event.target.getAttribute("location-lng")),
			    price = _this.event.target.getAttribute("price"),
			    image = 'public/img/pin.png',
			    title = _this.event.target.title,
			    map,
			    marker,
			    label,
			    markerCluster,
			    mapTab;

			function initMap() {
				map = new google.maps.Map(document.getElementById('map'), {
					center: { lat: lat, lng: lng },
					zoom: 16,
					disableDefaultUI: true
				});

				marker = new google.maps.Marker({
					position: { lat: lat, lng: lng },
					map: map,
					icon: image,
					label: { text: price + '€', color: "white" },
					title: title
				});

				map.setOptions({ styles: styleArr });
			};

			data.location = true;
			setTimeout(function () {
				initMap();
				console.log('Initilize Single Map');
			}, 500);
		},

		showTab: event => {
			let tabButton = _this.event.target,
			    tabName = _this.event.target.text,
			    tab = $('.tabsBlock__tab').find(tabButton),

			// lat = parseFloat(41.393752),
			// lng = parseFloat(2.164522),
			marker,
			    map,
			    markerCluster,
			    zoomG;

			function initMap2() {
				map = new google.maps.Map(document.getElementById('map'), {
					center: { lat: 41.393752, lng: 2.164522 },
					zoom: 14,
					disableDefaultUI: true,
					zoom_changed: function () {
						zoomG = map.getZoom();
						setMarker(map, zoomG);
					}
				});

				marker = new google.maps.Marker({
					position: { lat: 41.393752, lng: 2.164522 },
					label: { text: '' + data.flats.length + '', color: "white" },
					icon: 'public/img/cluster.png',
					map: map
				});

				map.setOptions({ styles: styleArr });
			}
			function setMarker(map, zoom) {
				if (zoom < 15 || zoom == 15) {
					console.log(zoom);
					for (var i = 0; i < marker.length; i++) {
						marker[i].setMap(null);
						marker[i] = [];
					}

					marker = new google.maps.Marker({
						position: { lat: 41.393752, lng: 2.164522 },
						label: { text: '' + data.flats.length + '', color: "white" },
						icon: 'public/img/cluster.png',
						map: map
					});
				} else {
					console.log(zoom);
					console.log(marker.length);
					for (var i = 0; i < marker.length; i++) {
						marker[i].setMap(null);
						marker[i] = [];
					}

					marker = data.flats.map(function (flat, i) {
						return new google.maps.Marker({
							position: { lat: parseFloat(flat.location.lat), lng: parseFloat(flat.location.lng) },
							label: { text: flat.price + '€', color: "white" },
							map: map,
							icon: 'public/img/pin.png',
							title: flat.title,
							zIndex: flat.id
						});
					});
				}
			}

			$('.tabsBlock__tab').removeClass('active');
			tab.parent('li').addClass('active');

			if (tabName == "Map") {
				setTimeout(function () {
					initMap2();
					console.log('Initilize');
				}, 100);
			}
		}
	}
});