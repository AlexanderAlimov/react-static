import React  from 'react';

const markerStyle = {
    width: '30px',
    height: '30px',
    borderRadius: '50% 50% 50% 0',
    background: '#1396e2',
    position: 'absolute',
    left: '50%',
    top: '50%',
    margin: '-20px 0 0 -20px',
    transform: 'rotate(-45deg)'
};

const innerMarkerStyle = {
    width: '14px',
    height: '14px',
    margin: '8px 0 0 8px',
    background: '#ffffff',
    position: 'absolute',
    borderRadius: '50%'
};

export default function PropertyMap({text}){
  return <div style={markerStyle}><span style={innerMarkerStyle} /></div>;
}
