
import { useEffect, useRef } from 'react';

const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // In a real implementation, you would use the Google Maps API
    // Since we're creating a mock, we'll add an iframe with OpenStreetMap
    
    if (mapRef.current) {
      const iframe = document.createElement('iframe');
      iframe.src = "https://www.openstreetmap.org/export/embed.html?bbox=30.0371,1.9387,30.0991,1.9787&layer=mapnik&marker=1.9587,30.0681";
      iframe.width = "100%";
      iframe.height = "100%";
      iframe.style.border = "0";
      iframe.allowFullscreen = true;
      iframe.loading = "lazy";
      iframe.referrerPolicy = "no-referrer-when-downgrade";
      
      mapRef.current.innerHTML = '';
      mapRef.current.appendChild(iframe);
    }
    
    // In a production site, you would include the Google Maps API and use something like:
    /*
    if (mapRef.current && typeof google !== 'undefined') {
      const location = { lat: -1.9587, lng: 30.0681 }; // Kigali coordinates
      const map = new google.maps.Map(mapRef.current, {
        center: location,
        zoom: 15,
      });
      
      new google.maps.Marker({
        position: location,
        map: map,
        title: "TechTrends Ltd"
      });
    }
    */
  }, []);
  
  return (
    <div ref={mapRef} className="w-full h-[400px] rounded-lg shadow-md"></div>
  );
};

export default GoogleMap;
