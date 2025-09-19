import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from '@vnedyalk0v/react19-simple-maps';

const geoUrl = 'https://unpkg.com/world-atlas@2/countries-110m.json';

const makeMarkers = (coordinates, color, type = 'default') => {
  const isNanda = type === 'nanda';
  const isExpert = type === 'expert';
  
  return (
    <Marker coordinates={coordinates}>
      <g>
        {/* Outer glow ring */}
        <circle
          r={isNanda ? 8 : 6}
          fill="none"
          stroke={color}
          strokeWidth={1}
          opacity={0.3}
          style={{
            filter: 'drop-shadow(0 0 8px ' + color + ')',
            animation: isNanda ? 'nanda-pulse 3s ease-in-out infinite' : 'expert-pulse 4s ease-in-out infinite',
          }}
        />
        {/* Main marker */}
        <circle
          r={isNanda ? 4 : 3}
          fill={color}
          stroke="#ffffff"
          strokeWidth={1}
          style={{
            filter: 'drop-shadow(0 0 6px ' + color + ')',
            animation: isNanda ? 'nanda-glow 2s ease-in-out infinite' : 'expert-glow 3s ease-in-out infinite',
          }}
        />
        {/* Inner highlight */}
        <circle
          r={isNanda ? 1.5 : 1}
          fill="#ffffff"
          opacity={0.8}
          style={{
            filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.8))',
          }}
        />
      </g>
    </Marker>
  );
};


const regions = {
  "East Asia": [
    [139.6917, 35.6895], // Tokyo
    [121.4737, 31.2304], // Shanghai
    [116.4074, 39.9042], // Beijing
    [135.5023, 34.6937], // Osaka
    [104.0668, 30.5728], // Chengdu
    [114.0579, 22.5431], // Shenzhen
    [113.2644, 23.1291], // Guangzhou
    [108.9398, 34.3416], // Xi'an
    [120.1551, 30.2741], // Hangzhou
    [118.7969, 32.0603]  // Nanjing
  ],
  "South Asia": [
    [77.2090, 28.6139],  // Delhi
    [72.8777, 19.0760],  // Mumbai
    [90.4125, 23.8103],  // Dhaka
    [67.0011, 24.8607],  // Karachi
    [80.2785, 13.0827],  // Chennai
    [85.3240, 27.7172],  // Kathmandu
    [88.3639, 22.5726],  // Kolkata
    [79.8612, 6.9271],   // Colombo
    [77.5946, 12.9716],  // Bangalore
    [68.3578, 25.3648]   // Hyderabad
  ],
  "Southeast Asia": [
    [106.8456, -6.2088], // Jakarta
    [101.4412, 3.1390],  // Kuala Lumpur
    [100.5018, 13.7563], // Bangkok
    [106.6336, 10.8231], // Ho Chi Minh City
    [108.2772, 16.0544], // Da Nang
    [120.9842, 14.5995], // Manila
    [121.0295, 14.6042], // Manila (slightly different coordinate)
    [113.9213, -0.7893], // Indonesia (Borneo)
    [114.7277, 4.2105],  // Sarawak
    [102.4955, 2.1896]   // Singapore
  ],
  "Europe": [
    [2.3522, 48.8566],   // Paris
    [12.4964, 41.9028],  // Rome
    [13.4050, 52.5200],  // Berlin
    [18.0686, 59.3293],  // Stockholm
    [8.6821, 50.1109],   // Frankfurt
    [2.1734, 41.3851],   // Barcelona
    [4.9041, 52.3676],   // Amsterdam
    [7.4474, 46.9479],   // Bern
    [24.7536, 59.4370],  // Tallinn
    [25.2797, 54.6872]   // Vilnius
  ],
  "Middle East": [
    [44.3661, 33.3152],  // Baghdad
    [51.3890, 35.6892],  // Tehran
    [55.2708, 25.2048],  // Dubai
    [50.5860, 26.8206],  // Riyadh
    [35.2433, 31.7683],  // Jerusalem
    [34.8516, 31.0461],  // Tel Aviv
    [36.8219, -1.2921],  // Nairobi (technically East Africa, but included in region grouping)
    [43.8563, 18.5196],  // Sana'a
    [44.5136, 33.3152],  // Basra
    [39.0742, 21.4858]   // Jeddah
  ],
  "North America": [
    [-74.0060, 40.7128],  // New York
    [-118.2437, 34.0522], // Los Angeles
    [-87.6298, 41.8781],  // Chicago
    [-80.1918, 25.7617],  // Miami
    [-95.3698, 29.7604],  // Houston
    [-84.3880, 33.7490],  // Atlanta
    [-112.0740, 33.4484], // Phoenix
    [-71.0589, 42.3601],  // Boston
    [-123.1207, 49.2827], // Vancouver
    [-79.3832, 43.6532]   // Toronto
  ],
  "South America": [
    [-46.6333, -23.5505], // São Paulo
    [-70.6693, -33.4489], // Santiago
    [-58.3816, -34.6037], // Buenos Aires
    [-99.1332, 19.4326],  // Mexico City
    [-77.0428, -12.0464], // Lima
    [-43.1729, -22.9068], // Rio de Janeiro
    [-64.1836, -31.4201], // Córdoba, Argentina
    [-68.1193, -16.4897], // La Paz
    [-79.0193, -8.1111],  // Trujillo
    [-58.4438, -34.6118]  // Rosario
  ],
  "Africa": [
    [31.2357, 30.0444],   // Cairo
    [28.0473, -26.2041],  // Johannesburg
    [18.4241, -33.9249],  // Cape Town
    [39.2083, -6.7924],   // Dar es Salaam
    [32.5599, 15.5007],   // Khartoum
    [35.6751, -0.0236],   // Kigali
    [32.2903, 0.3476],    // Kampala
    [36.8219, -1.2921],   // Nairobi
    [23.6186, -15.3875],  // Lusaka
    [25.7461, -17.8292]   // Harare
  ],
  "Oceania": [
    [151.2093, -33.8688], // Sydney
    [144.9631, -37.8136], // Melbourne
    [153.0251, -27.4698], // Brisbane
    [115.8575, -31.9505], // Perth
    [138.6007, -34.9285], // Adelaide
    [174.7633, -36.8485], // Auckland
    [168.6626, -45.0312], // Dunedin
    [166.4500, -23.6980], // Nouméa
    [173.0160, -41.2865], // Wellington
    [157.8583, 21.3069]   // Honolulu
  ]
};

// To get a flat list of all coordinates:
const agentCoordinates = Object.values(regions).flat();



const Map = () => {
  return (
    <div className="map-container" style={{ position: 'relative' }}>
      {/* Animated background grid */}
      <div className="map-background">
        <div className="grid-overlay"></div>
        <div className="particle-field">
          {Array.from({ length: 50 }, (_, i) => (
            <div 
              key={i} 
              className="particle" 
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{ center: [0, 0] }}
        style={{ width: '100%', height: '100%', position: 'relative', zIndex: 2 }}
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
        {makeMarkers([139.6917, 35.6895], '#fbbf24', 'nanda')}
        {makeMarkers([72.8777, 19.0760], '#fbbf24', 'nanda')}
        {makeMarkers([103.8198, 1.3521], '#fbbf24', 'nanda')}
        {makeMarkers([151.2093, -33.8688], '#fbbf24', 'nanda')}
        {makeMarkers([-73.5673, 45.5017], '#fbbf24', 'nanda')}
        {makeMarkers([8.6821, 50.1109], '#fbbf24', 'nanda')}
        {makeMarkers([18.0686, 59.3293], '#fbbf24', 'nanda')}
        {makeMarkers([-6.2603, 53.3498], '#fbbf24', 'nanda')}
        {makeMarkers([-0.1278, 51.5074], '#fbbf24', 'nanda')}
        {makeMarkers([2.3522, 48.8566], '#fbbf24', 'nanda')}
        {makeMarkers([-46.6333, -23.5505], '#fbbf24', 'nanda')}
        {makeMarkers([-77.4874, 39.0438], '#fbbf24', 'nanda')}
        {makeMarkers([-119.7006, 45.8399], '#fbbf24', 'nanda')}

        {/* EXPERT AGENT MARKERS */}
        {agentCoordinates.map((coord, i) => makeMarkers(coord, '#60a5fa', 'expert'))}

      </ComposableMap>

      <div className="map-legend">
        <div className="legend-title">Global Network</div>
        <div className="legend-items">
          <div className="legend-item">
            <div className="legend-marker nanda-marker"></div>
            <span>NANDA Index</span>
            <div className="legend-count">13</div>
          </div>
          <div className="legend-item">
            <div className="legend-marker expert-marker"></div>
            <span>Expert Agents</span>
            <div className="legend-count">100</div>
          </div>
        </div>
        <div className="legend-stats">
          <div className="stat-item">
            <div className="stat-value">113</div>
            <div className="stat-label">Total Nodes</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">8</div>
            <div className="stat-label">Regions</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
