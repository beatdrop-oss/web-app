import { Marker as LeafletMarker, Tooltip } from "react-leaflet";
import L from "leaflet";
import ReactDOMServer from "react-dom/server";
import marker from "@/public/pin.png";
import Image from "next/image";
import { Pin } from "@/types/pin";

interface MarkerProps {
  pin: Pin;
}

const Marker = ({ pin }: MarkerProps) => {
  const iconHtml = ReactDOMServer.renderToString(
    <Image src={marker} alt="Marker" width={64} />
  );

  const ICON = L.divIcon({
    html: iconHtml,
    iconSize: [64, 64],
    iconAnchor: new L.Point(32, 64),
    popupAnchor: new L.Point(64, 0),
    className: "border-none",
  });

  const { latitude, longitude, image, song, artist } = pin;

  return (
    <LeafletMarker position={[latitude, longitude]} icon={ICON}>
      {/* <Tooltip offset={[0, -64]} direction="top">
        <div className="flex gap-2 bg-blue-50">
          <Image src={image} alt="Beatdrop Image" width={80} height={80} />
          <div className="flex-col flex bg-red-500">
            <div className="font-outfit text-xl font-semibold">{song}</div>
            <div className="font-outfit text-lg">{artist}</div>
          </div>
        </div>
      </Tooltip> */}
    </LeafletMarker>
  );
};

export default Marker;
