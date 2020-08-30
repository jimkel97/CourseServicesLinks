import React from 'react';
import './App.css';
import Links from './Links'
import linkDataWD from './linkDataWD.js'

function WebDev() {
    const linkComponents = linkDataWD.map(link => <Links key={link.id} site={link.site} url={link.url} />)
  return (

    <div>
      <h1>Useful Links</h1>
      {linkComponents}
      <Links />
    </div>
  );
}

export default WebDev;