import React from 'react'
import GoogleMapReact from 'google-map-react';  
import './map.css'
import "antd/dist/antd.css";
import { Space } from 'antd';
import { PushpinFilled } from '@ant-design/icons';


//import { Icon } from '@iconify/react'
// import locationIcon from '@iconify/icons-mdi/map-marker'

const LocationPin = ({ text }) => (
    <div className="pin">
      <Space>
      <PushpinFilled></PushpinFilled>

      </Space> 
      <p className="pin-text">{text}</p>
    </div>
  )
  

  const GoogleMaps = ({ location, zoomLevel }) => (
    <div className="map">
      {/* <h2 className="map-h2">Come Visit Us At Our Offices</h2> */}
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )

  



export default GoogleMaps