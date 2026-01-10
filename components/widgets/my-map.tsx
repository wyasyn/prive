import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  MarkerTooltip,
} from "@/components/ui/map";
import { Card } from "@/components/ui/card";

export function MyMap() {
  const locations = [
    {
      id: 1,
      name: "Kireka, Kampala",
      lng: 32.6469,
      lat: 0.3375,
    },
    {
      id: 2,
      name: "Kyaliwajjala, Kampala",
      lng: 32.6426,
      lat: 0.3653,
    },
    {
      id: 3,
      name: "Namugongo, Kampala",
      lng: 32.645,
      lat: 0.3611,
    },
    {
      id: 4,
      name: "Bweyogerere, Kampala",
      lng: 32.6542,
      lat: 0.35,
    },
    {
      id: 5,
      name: "Namboole National Stadium, Kampala",
      lng: 32.6458,
      lat: 0.3417,
    },
  ];
  return (
    <section className="container py-8 md:py-12">
      <Card className="h-75 md:h-120 p-0 overflow-hidden">
        <Map center={[32.6469, 0.3375]} zoom={15}>
          {locations.map((location) => (
            <MapMarker
              key={location.id}
              longitude={location.lng}
              latitude={location.lat}
            >
              <MarkerContent>
                <div className="size-4 rounded-full bg-primary border-2 border-white shadow-lg" />
              </MarkerContent>
              <MarkerTooltip>{location.name}</MarkerTooltip>
              <MarkerPopup>
                <div className="space-y-1">
                  <p className="font-medium text-foreground">{location.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                  </p>
                </div>
              </MarkerPopup>
            </MapMarker>
          ))}
          <MapControls
            position="bottom-right"
            showZoom
            showCompass
            showLocate
            showFullscreen
          />
        </Map>
      </Card>
    </section>
  );
}
