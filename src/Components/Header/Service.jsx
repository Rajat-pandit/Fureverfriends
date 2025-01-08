import React from 'react'
import './Service.css'


export const Service = () => {
    const services=[{
        title:"Service 1",
        description: "This is a brief description of service 1.",
    },
    {
        title:"Service 2",
        description: "This is a brief description of service 2.",
    },
    {
        title:"Service 3",
        description: "This is a brief description of service 3.",
    },

    ];

    return (
    <div className="service-section">
      <h2>Our Services</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
