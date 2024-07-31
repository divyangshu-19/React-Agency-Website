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

    const { name, value, checked } = event.target;
    if (name === 'services') {
      let updatedServices;
      if (value === 'All') {
        // If "All" is selected, select/deselect all services
        updatedServices = checked ? ['Marketing', 'SEO', 'Development', 'Design'] : [];
      } else {
        // Update specific service selection
        updatedServices = checked 
          ? [...formData.services, value] 
          : formData.services.filter(service => service !== value);
      }
      setFormData({ ...formData, services: updatedServices });
    } else {
      setFormData({ ...formData, [name]: value });
    }


  };

  

  return (
    <div className="startForm">
      <div className="heading"><h1>Just</h1><span><h1>Three</h1></span><h1>Steps</h1></div>
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
          {/* <h2 className="formHeading">Form first section</h2> */}
          <input className='inputBoxes'
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <input className='inputBoxes'
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
          <h2 className='formHeading'>What services do you require ?</h2>
          <label>
            <input
              type="checkbox"
              name="services"
              value="All"
              checked={formData.services.length === 4} // Assuming there are 4 services total
              onChange={handleChange}
            />
            All
          </label>
          <label>
            <input
              type="checkbox"
              name="services"
              value="Marketing"
              checked={formData.services.includes('Marketing')}
              onChange={handleChange}
            />
            Marketing
          </label>
          <label>
            <input
              type="checkbox"
              name="services"
              value="SEO"
              checked={formData.services.includes('SEO')}
              onChange={handleChange}
            />
            SEO
          </label>
          <label>
            <input
              type="checkbox"
              name="services"
              value="Development"
              checked={formData.services.includes('Development')}
              onChange={handleChange}
            />
            Development
          </label>
          <label>
            <input
              type="checkbox"
              name="services"
              value="Design"
              checked={formData.services.includes('Design')}
              onChange={handleChange}
            />
            Design
          </label>
        </div>
      )}

      {/* Step 3: Description */}
      {currentStep === 3 && (
        <div className="formSection">
          <h2 className='formHeading'>Describe what you need.</h2>
          <textarea className='inputBoxes'
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your needs..."
          />
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="navigationButtons">
        {currentStep > 1 && <button className='formButton backButton' onClick={handleBack}>Back</button>}
        {currentStep < 3 ? (
          <button className='formButton nextButton' onClick={handleNext}>Next  </button>
        ) : (
          <button className='formButton  nextButton' onClick={() => alert('Submit form')}>Submit</button>
        )}
      </div>
    </div>
  );
}

export default Start;
