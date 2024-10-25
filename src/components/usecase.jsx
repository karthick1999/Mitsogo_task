import React, { useState } from 'react';

import "../assets/css/usecase.css";

function Usecase(props) {
  const [activeTab, setActiveTab] = useState('singleApp');

  const handleTab = (tabName) => {
    if (tabName === activeTab) return;
    setActiveTab(tabName);
  };

  return (
    <div className='usecase-parent'>
      <div className="usecase-heading">Specific kiosk modes for unique use cases</div>
      
      <div className='usecase-header-tabs'>
        <div
          className={`usecase-tab ${activeTab === 'singleApp' ? 'usecase-tab-active' : ''}`}
          onClick={() => handleTab('singleApp')}
        >
          Single App Kiosk
        </div>
        <div
          className={`usecase-tab ${activeTab === 'MultipleApp' ? 'usecase-tab-active' : ''}`}
          onClick={() => handleTab('MultipleApp')}
        >
          Multiple App Kiosk
        </div>
        <div
          className={`usecase-tab ${activeTab === 'WebApp' ? 'usecase-tab-active' : ''}`}
          onClick={() => handleTab('WebApp')}
        >
          Web based Kiosk
        </div>
        <div
          className={`usecase-tab ${activeTab === 'DigitalApp' ? 'usecase-tab-active' : ''}`}
          onClick={() => handleTab('DigitalApp')}
        >
          Digital
        </div>
        <div
          className={`usecase-tab ${activeTab === 'AsamApp' ? 'usecase-tab-active' : ''}`}
          onClick={() => handleTab('AsamApp')}
        >
          Asam Kiosk
        </div>
      </div>
      
      <div className='usecase-detial-view'>
        <div className="usecase-description">
          <div className="usecase-view-head">
            Powerful {activeTab} solutions for enhanced control
          </div>
          <div className="usecase-list">
            <ul>
              <li>Provision the devices to run one specialized application, with limited functionality.</li>
              <li>Customize the device settings to cater to a specific use case.</li>
              <li>Use Advanced Kiosk settings for additional restrictions or expanded functionalities.</li>
              <li>Empower administrators with full control over kiosk devices.</li>
            </ul>
          </div>
        </div>
        
        <div className="usecase-image">
          <img 
            src='https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fhexnode-kiosk%2Fweb-based-kiosk-image.jpg&w=1200&q=100'
            alt="Usecase" 
          />
        </div>
      </div>
    </div>
  );
}

export default Usecase;
