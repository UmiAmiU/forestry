import React from "react";
import {
  YMaps,
  Map,
  ZoomControl,
  GeolocationControl,
  FullscreenControl,
  RulerControl,
} from "react-yandex-maps";

const BaseMap = () => {
  const getGeoLocation = (ymaps) => {
    return ymaps.geolocation
      .get({ provider: "yandex", mapStateAutoApply: true })
      .then((result) => setCenter(result.geoObjects.position));
  };

  const [zoom, setZoom] = React.useState(10);
  const [center, setCenter] = React.useState([53.8999964, 27.5666644]);
  const mapState = React.useMemo(() => ({ center, zoom }), [center, zoom]);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <YMaps
        query={{
          ns: "use-load-option",
          apikey: "c1a592c0-5ad3-41bb-b5d5-8d5ca1de979c",
        }}
      >
        <Map
          state={{
            ...mapState,
            type: "yandex#hybrid",
          }}
          modules={["geolocation", "geocode"]}
          onLoad={(ymaps) => getGeoLocation(ymaps)}
          width={"100%"}
          height={"100%"}
        >
          <RulerControl />
          <FullscreenControl />
          <GeolocationControl />
          <ZoomControl />
        </Map>
      </YMaps>
    </div>
  );
};

export default BaseMap;
