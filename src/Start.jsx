import React, { useState } from 'react';
import "./Start.css"

function Start() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    services: '',
    description: ''
  });

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="startForm">
      {/* Step Indicator */}
      <div className="stepIndicator">
        <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
          <span className="stepNumber">{currentStep > 1 ? '✓' : '1'}</span>
          <span className="stepLabel">Start</span>
        </div>
        <div className={`line ${currentStep >= 2 ? 'active' : ''}`}></div>
        <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
          <span className="stepNumber">{currentStep > 2 ? '✓' : '2'}</span>
          <span className="stepLabel">Select Service</span>
        </div>
        <div className={`line ${currentStep >= 3 ? 'active' : ''}`}></div>
        <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
          <span className="stepNumber">{currentStep === 3 ? '3' : '3'}</span>
          <span className="stepLabel">Description</span>
        </div>
      </div>

      {/* Step 1: Basic Information */}
      {currentStep === 1 && (
        <div  className="formSection">
          <h2 className="formHeading">Form first section</h2>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
      )}

      {/* Step 2: Services Selection */}
      {currentStep === 2 && (
        <div className="formSection">
          <h2 className='formHeading'>Form second section</h2>
          <label>
            <input
              type="radio"
              name="services"
              value="Marketing"
              checked={formData.services === 'Marketing'}
              onChange={handleChange}
            />
            Marketing
          </label>
          <label>
            <input
              type="radio"
              name="services"
              value="SEO"
              checked={formData.services === 'SEO'}
              onChange={handleChange}
            />
            SEO
          </label>
        </div>
      )}

      {/* Step 3: Description */}
      {currentStep === 3 && (
        <div className="formSection">
          <h2 className='formHeading'>Form third section</h2>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your needs..."
          />
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="navigationButtons">
        {currentStep > 1 && <button className='formButton' onClick={handleBack}>Back</button>}
        {currentStep < 3 ? (
          <button className='formButton' onClick={handleNext}>Next</button>
        ) : (
          <button className='formButton' onClick={() => alert('Submit form')}>Submit</button>
        )}
      </div>
    </div>
  );
}

export default Start;
