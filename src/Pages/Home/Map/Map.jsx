import React from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';


const Map = () => {

    const position = [23.881301120315925, 90.52330690040196]

    return (
        <div className=' bg-[url("https://i.ibb.co/h7hc3jr/2148975295.jpg")] h-[750px] bg-cover'>

            <div className=' pb-2 bg-gradient-to-r from-[#151515bc] to-[#99999900] gap-3 w-full h-full text-white flex md:flex-col lg:flex-row flex-col items-center justify-around'>
                <div className=' w-[300px] lg:w-[600px] '>
                    <h1 className=' font-semibold text-5xl pt-3 pb-6'>Find Us Quick</h1>
                    <p> Whether you're a local resident or a traveler from afar, we've made finding our location effortless.Navigate through our interactive map to pinpoint our exact whereabouts with precision. With just a few clicks or taps, you'll unveil the path to your destination, ensuring a seamless journey to our doorstep.</p>
                </div>
                <MapContainer
                    center={position}
                    zoom={7}
                    scrollWheelZoom={true}
                    className=' w-full h-full lg:w-[40%] lg:h-[86%]  rounded-md bg-gradient-to-b from-[#1515159b] to-[#99999900]'
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