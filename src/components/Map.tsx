import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { motion } from 'framer-motion';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;


const Map = () => {
    const position: [number, number] = [6.9543, 80.2046];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full h-[400px] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl relative z-0"
        >
            <MapContainer 
                center={position} 
                zoom={13} 
                scrollWheelZoom={false}
                className="w-full h-full"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={position}>
                    <Popup>
                        <div className="text-center">
                            <h3 className="font-bold text-slate-900">Pamindu Rashmitha</h3>
                            <p className="text-slate-600">Based in Avissawella, Sri Lanka.</p>
                        </div>
                    </Popup>
                </Marker>
            </MapContainer>
        </motion.div>
    );
};

export default Map;