import React from 'react';
import styles from '../main.css'

import Legend from './legend'

export default class Map extends React.Component {

    constructor(coords, initialClick) {
        super();
               
        this.state = { 
            all_coords: coords
         }
    }
    
    componentDidMount() {
        let styledMapType = new google.maps.StyledMapType(
            [
                {
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "visibility": "off"
                    }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                    {
                        "visibility": "off"
                    }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "visibility": "off"
                    }
                    ]
                },
                {
                    "featureType": "administrative.country",
                    "elementType": "geometry.stroke",
                    "stylers": [
                    {
                        "color": "#4b6878"
                    }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "stylers": [
                    {
                        "visibility": "off"
                    }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#64779e"
                    }
                    ]
                },
                {
                    "featureType": "administrative.neighborhood",
                    "stylers": [
                    {
                        "visibility": "off"
                    }
                    ]
                },
                {
                    "featureType": "administrative.province",
                    "elementType": "geometry.stroke",
                    "stylers": [
                    {
                        "color": "#099484"
                    }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.stroke",
                    "stylers": [
                    {
                        "color": "#436787"
                    }
                    ]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#2c3655"
                    }
                    ]
                },
                {
                    "featureType": "poi",
                    "stylers": [
                    {
                        "visibility": "off"
                    }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#283d6a"
                    }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text",
                    "stylers": [
                    {
                        "visibility": "off"
                    }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#6f9ba5"
                    }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [
                    {
                        "color": "#023e58"
                    },
                    {
                        "visibility": "off"
                    }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#3C7680"
                    }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#304a7d"
                    }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [
                    {
                        "visibility": "off"
                    }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                    {
                        "visibility": "off"
                    }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#98a5be"
                    }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#2c6675"
                    }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                    {
                        "color": "#255763"
                    }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#b0d5ce"
                    }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                    {
                        "color": "#023e58"
                    }
                    ]
                },
                {
                    "featureType": "transit",
                    "stylers": [
                    {
                        "visibility": "off"
                    }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#98a5be"
                    }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry.fill",
                    "stylers": [
                    {
                        "color": "#283d6a"
                    }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#3a4762"
                    }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#0e1626"
                    }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text",
                    "stylers": [
                    {
                        "visibility": "off"
                    }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#4e6d70"
                    }
                    ]
                }
                ],
                {name: 'Styled Map'}
        )

        let map = new google.maps.Map(this.refs.map, {
            center: {
                    lat: this.state.all_coords.coords.src_loc.point.lat,
                    lng: this.state.all_coords.coords.src_loc.point.lon
            },
            zoom: 14,
            disableDefaultUI: true
        });

        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
        
        this.showTrace(map);
    };
    
    showTrace(map) {
        let elm = this.state.all_coords.coords;
        const icon = {
            start : {
                path: "M242.606,60.651c50.166,0,90.979,40.812,90.979,90.978c0,50.171-40.813,90.978-90.979,90.978   c-50.167,0-90.978-40.806-90.978-90.978C151.628,101.462,192.44,60.651,242.606,60.651 M242.606,0   C158.855,0,90.978,67.878,90.978,151.628c0,83.753,67.878,333.584,151.629,333.584s151.629-249.831,151.629-333.584   C394.235,67.878,326.357,0,242.606,0L242.606,0z",
                fillColor: '#23D2AA',
                fillOpacity: 1,
                scale: 0.07,
                strokeColor: 'transparent',
                strokeWeight: 0,
                offset: 0
            },
            end : {
                path: "M242.606,60.651c50.166,0,90.979,40.812,90.979,90.978c0,50.171-40.813,90.978-90.979,90.978   c-50.167,0-90.978-40.806-90.978-90.978C151.628,101.462,192.44,60.651,242.606,60.651 M242.606,0   C158.855,0,90.978,67.878,90.978,151.628c0,83.753,67.878,333.584,151.629,333.584s151.629-249.831,151.629-333.584   C394.235,67.878,326.357,0,242.606,0L242.606,0z",
                fillColor: '#ee5a23',
                fillOpacity: 1,
                scale: 0.07,
                strokeColor: 'transparent',
                strokeWeight: 0,
                offset: '50%'
            }
        }
        
        let startInfo = this.showInfoWindow(elm.src_loc.address.address, elm.passenger.fname, elm.passenger.lname, elm.receipt.total.amount);
        let endInfo = this.showInfoWindow(elm.dst_loc.address.address, elm.passenger.fname, elm.passenger.lname, elm.receipt.total.amount);
        
        let directionsService = new google.maps.DirectionsService();
        let directionsDisplay = new google.maps.DirectionsRenderer({ polylineOptions: { strokeColor: '#ee5a23', strokeOpacity: '0.7'}, suppressMarkers: true });
        directionsDisplay.setMap(map);

        let request = {
            origin: {lat: this.state.all_coords.coords.src_loc.point.lat, lng: this.state.all_coords.coords.src_loc.point.lon},
            destination: {lat: this.state.all_coords.coords.dst_loc.point.lat, lng: this.state.all_coords.coords.dst_loc.point.lon},
            travelMode: 'DRIVING'
        };
       
        directionsService.route(request, (result, status) => {

            if (status == 'OK') {
                directionsDisplay.setDirections(result);
                var path = result.routes[0].overview_path;

                // console.debug(path[0].lat(), request.origin.lat);
                // console.debug(path.slice(-1)[0].lat(), request.destination.lat);

                // console.debug(path[0].lng(), request.origin.lng);
                // console.debug(path.slice(-1)[0].lng(), request.destination.lng);

                this.createMarker(path[0], map, icon.start).addListener('click', function() {
                    startInfo.open(map, this);
                    console.log(this.position.lat());
                });
                
                this.createMarker(path.slice(-1)[0], map, icon.end).addListener('click', function() {
                    startInfo.open(map, this);
                });

             } else { 'sth happened' }
        });
    }

    createMarker(position, map, icon) {
        return (
            new google.maps.Marker({
                position: position,
                map: map,
                icon: icon                      
            })
        )
    }

    showInfoWindow(address, passFname, passLname, total) {
        return  new google.maps.InfoWindow({
                content:    `<div id="address">
                                <span class="bold">Address: </span>
                                <span>${address}</span>
                            </div>
                            <div id="passenger">
                                <span class="bold">Passenger: </span>
                                <span>${passFname} ${passLname}</span>
                            </div>
                            <div id="total">
                                <span class="bold">Total: </span>S/ 
                                <span> ${total}</span>
                            </div>`
                });
    }

    render() {

        return ( 
            <div>
                <div className={styles.mapContainer}>
                    <a href="#" className={styles.close} onClick={(e) => this.props.parentState(false, e)}>✕</a>
                    <div ref = "map" className={styles.map}> Recharge your browser! </div> 
                <Legend />
                </div>
                <div className={styles.overlay} onClick={(e) => this.props.parentState(false, e)}></div>
            </div>
        );
        
    }

}
