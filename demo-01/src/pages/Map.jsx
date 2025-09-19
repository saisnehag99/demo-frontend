import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from '@vnedyalk0v/react19-simple-maps';

const geoUrl = 'https://unpkg.com/world-atlas@2/countries-110m.json';

const makeMarkers = (coordinates, color) => {
  return (
    <Marker coordinates={coordinates}>
      <circle
        r={3}
        fill={color}
        stroke={color}
        strokeWidth={1}
        style={{
          filter: 'drop-shadow(0 0 4px ' + color + ')',
        }}
      />
    </Marker>
  );
};

const Map = () => {
  return (
    <div className="map-container" style={{ position: 'relative' }}>
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{ center: [0, 0] }}
        style={{ width: '100%', height: '100%' }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: { fill: '#1f2937', outline: 'none' },
                  hover: { fill: '#6366f1', outline: 'none' },
                  pressed: { fill: '#4f46e5', outline: 'none' },
                }}
              />
            ))
          }
        </Geographies>

        {/* NANDA INDEX MARKERS */}
        {makeMarkers([139.6917, 35.6895], '#fbbf24')}
        {makeMarkers([72.8777, 19.0760], '#fbbf24')}
        {makeMarkers([103.8198, 1.3521], '#fbbf24')}
        {makeMarkers([151.2093, -33.8688], '#fbbf24')}
        {makeMarkers([-73.5673, 45.5017], '#fbbf24')}
        {makeMarkers([8.6821, 50.1109], '#fbbf24')}
        {makeMarkers([18.0686, 59.3293], '#fbbf24')}
        {makeMarkers([-6.2603, 53.3498], '#fbbf24')}
        {makeMarkers([-0.1278, 51.5074], '#fbbf24')}
        {makeMarkers([2.3522, 48.8566], '#fbbf24')}
        {makeMarkers([-46.6333, -23.5505], '#fbbf24')}
        {makeMarkers([-77.4874, 39.0438], '#fbbf24')}
        {makeMarkers([-119.7006, 45.8399], '#fbbf24')}

        {/* EXPERT AGENT MARKERS */}

      </ComposableMap>

      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        backgroundColor: 'rgba(30, 41, 59, 0.9)',
        border: '1px solid #334155',
        padding: '12px',
        borderRadius: '6px',
        color: '#e2e8f0',
        fontSize: '14px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#fbbf24',
            border: '1px solid #f59e0b',
            filter: 'drop-shadow(0 0 4px rgba(251, 191, 36, 0.6))'
          }}></div>
          <span>NANDA Index</span>
        </div>
      </div>
    </div>
  );
};

export default Map;
