import React, { useState } from 'react';

    const plateStyles = {
      standard: 'plate-preview',
      gel: 'plate-preview gel',
      fourD: 'plate-preview four-d',
      carbon: 'plate-preview carbon',
      ghost: 'plate-preview ghost',
    };

    function App() {
      const [registration, setRegistration] = useState('MW71 HYT');
      const [plateType, setPlateType] = useState('both');
      const [textStyle, setTextStyle] = useState('standard');
      const [price, setPrice] = useState(28.50);

      const handleRegistrationChange = (e) => {
        setRegistration(e.target.value.toUpperCase());
      };

      const handlePlateTypeChange = (type) => {
        setPlateType(type);
      };

      const handleTextStyleChange = (style) => {
        setTextStyle(style);
      };

      const handleReset = () => {
        setRegistration('MW71 HYT');
        setPlateType('both');
        setTextStyle('standard');
        setPrice(28.50);
      };

      return (
        <div className="container">
          <div className="left-panel">
            <h1>Design your perfect style number plates!</h1>
            <p>Standard, 3D Gel, 4D, custom sizes and more...</p>
            <div className="button-group">
              <button
                className={plateType === 'both' ? 'active' : ''}
                onClick={() => handlePlateTypeChange('both')}
              >
                BOTH PLATES
              </button>
              <button
                className={plateType === 'front' ? 'active' : ''}
                onClick={() => handlePlateTypeChange('front')}
              >
                FRONT ONLY
              </button>
              <button
                className={plateType === 'rear' ? 'active' : ''}
                onClick={() => handlePlateTypeChange('rear')}
              >
                REAR ONLY
              </button>
            </div>
            <div className="input-group">
              <label>Your Registration</label>
              <input
                type="text"
                value={registration}
                onChange={handleRegistrationChange}
              />
            </div>
            <div className="options-list">
              <h3>Plate Size</h3>
              <ul>
                <li>Standard</li>
                <li>Custom</li>
              </ul>
            </div>
            <div className="options-list">
              <h3>Text Style</h3>
              <ul>
                <li onClick={() => handleTextStyleChange('standard')}>Standard</li>
                <li onClick={() => handleTextStyleChange('gel')}>3D Gel</li>
                <li onClick={() => handleTextStyleChange('fourD')}>4D 6mm</li>
                <li onClick={() => handleTextStyleChange('carbon')}>Carbon</li>
                <li onClick={() => handleTextStyleChange('ghost')}>Ghost</li>
              </ul>
            </div>
            <button className="reset-button" onClick={handleReset}>
              Reset Design
            </button>
          </div>
          <div className="right-panel">
            {plateType === 'both' && (
              <>
                <div className={plateStyles[textStyle]}>
                  {registration}
                </div>
                <div className={`${plateStyles[textStyle]} rear`}>
                  {registration}
                </div>
              </>
            )}
            {plateType === 'front' && (
              <div className={plateStyles[textStyle]}>
                {registration}
              </div>
            )}
            {plateType === 'rear' && (
              <div className={`${plateStyles[textStyle]} rear`}>
                {registration}
              </div>
            )}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
              <p style={{ textAlign: 'right', marginRight: '10px' }}>Price: £{price.toFixed(2)}</p>
              <button className="buy-button">
                BUY NOW
                {textStyle === 'ghost' && <div className="ghost-preview"></div>}
              </button>
            </div>
          </div>
        </div>
      );
    }

    export default App;
