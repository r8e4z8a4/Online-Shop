import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
const Map = () => {
    const position=[36.341421187856, 59.52931243218742]
    return (
        <MapContainer className="w-full h-100" center={position} zoom={13} scrollWheelZoom={true}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}>
                <Popup>
                    <p className="text-sm font-bold font-IRANSansX">دفتر کار</p>
                </Popup>
            </Marker>
        </MapContainer>
    );
};
export default Map;
