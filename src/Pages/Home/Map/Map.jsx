import React from 'react';

import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';


const Map = () => {

    const position = [23.881301120315925, 90.52330690040196]

    return (
        <div className=' bg-[url("https://i.ibb.co/h7hc3jr/2148975295.jpg")] h-[700px] bg-cover'>

            <div className=' bg-gradient-to-r from-[#151515bc] to-[#99999900] w-full h-full text-white flex items-center justify-around'>
                <div className=' w-[300px] lg:w-[600px] '>
                    <h1 className=' font-semibold text-5xl pb-6'>Find Us Quick</h1>
                    <p> Whether you're a local resident or a traveler from afar, we've made finding our location effortless.Navigate through our interactive map to pinpoint our exact whereabouts with precision. With just a few clicks or taps, you'll unveil the path to your destination, ensuring a seamless journey to our doorstep.</p>
                </div>
                <MapContainer
                    center={position}
                    zoom={7}
                    scrollWheelZoom={true}
                    className=' w-[40%] h-[86%]  rounded-md bg-gradient-to-b from-[#1515159b] to-[#99999900]'
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};

export default Map;