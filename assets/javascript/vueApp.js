function containsAll(needles, haystack){
	for(var i = 0 , len = needles.length; i < len; i++){
		if($.inArray(needles[i], haystack) == -1) return false;
	}
	return true;
}

new Vue({
	el: '.vueApp',
	data: data,
	methods: {
		checkCheckbox: (event) => {
			var checkedArr = data.checkedAttr,
				checkedEl = 0;
			if($(this.event.target).is(":checked")){
				$(this.event.target).addClass('checked');
				data.flats.map(function(flat, i) {
					if(containsAll(checkedArr, flat.facilities) == true){
						flat.show = true;
						checkedEl ++;
					}else{flat.show = false;}
				});
			}else{
				$(this.event.target).removeClass('checked');
				data.flats.map(function(flat, i) {
					if(containsAll(checkedArr, flat.facilities) == true){
						flat.show = true;
						checkedEl ++;
					}else{flat.show = false;}
				});
			}
			data.offersNum = checkedEl;
		},

		slideContent: (event) => {
			if($(this.event.target).hasClass('clicked')){
				this.event.target.children[0].src = 'public/img/plus.png';
				$(this.event.target).removeClass('clicked');
				if (this.event.target.title == "Popular") {
					data.offsetPop = 5;
				}else{
					data.offsetKit = 5;
				}
			}else{
				$(this.event.target).addClass('clicked');
				this.event.target.children[0].src = 'public/img/minus.png';
			}
		},

		openMap: (event) => {

			let lat = parseFloat(this.event.target.getAttribute("location-lat")),
				lng = parseFloat(this.event.target.getAttribute("location-lng")),
				price = this.event.target.getAttribute("price"),
				image = 'public/img/pin.png',
				title = this.event.target.title,
				map, marker, label, markerCluster, mapTab;

			function initMap() {
				map = new google.maps.Map(document.getElementById('map'), {
					center: {lat: lat, lng: lng},
					zoom: 16,
					disableDefaultUI: true
				});

				marker = new google.maps.Marker({
					position: {lat: lat, lng: lng},
					map: map,
					icon: image,
					label: {text: price + '€', color: "white"},
					title: title
				});

				map.setOptions({styles: styleArr});
			};

			data.location = true;
			setTimeout(function(){
				initMap();
				console.log('Initilize Single Map');
			}, 500);


		},

		showTab: (event) => {
			let tabButton = this.event.target,
				tabName = this.event.target.text,
				tab = $('.tabsBlock__tab').find(tabButton),
				// lat = parseFloat(41.393752),
				// lng = parseFloat(2.164522),
				marker, map, markerCluster, zoomG;

			function initMap2() {
				map = new google.maps.Map(document.getElementById('map'), {
					center: {lat: 41.393752, lng: 2.164522},
					zoom: 14,
					disableDefaultUI: true,
					zoom_changed: function(){
						zoomG = map.getZoom();
						setMarker(map, zoomG);
					}
				});

				marker = new google.maps.Marker({
					position: {lat: 41.393752, lng: 2.164522},
					label: {text: '' + data.flats.length + '', color: "white"},
					icon: 'public/img/cluster.png',
					map: map
				});

				map.setOptions({styles: styleArr});
			}
			function setMarker(map, zoom){
				if(zoom < 15 || zoom == 15){
					console.log(zoom);
					for(var i=0; i<marker.length; i++){
						marker[i].setMap(null);
						marker[i] = [];
					}

					marker = new google.maps.Marker({
						position: {lat: 41.393752, lng: 2.164522},
						label: {text: '' + data.flats.length + '', color: "white"},
						icon: 'public/img/cluster.png',
						map: map
					});
				}else{
					console.log(zoom);
					console.log(marker.length);
					for(var i=0; i<marker.length; i++){
						marker[i].setMap(null);
						marker[i] = [];

					}

					marker = data.flats.map(function(flat, i) {
						return new google.maps.Marker({
							position: {lat: parseFloat(flat.location.lat), lng: parseFloat(flat.location.lng)},
							label: {text: flat.price + '€', color: "white"},
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
				setTimeout(function(){
					initMap2();
					console.log('Initilize');
				}, 100);
			}
		}
	}
});