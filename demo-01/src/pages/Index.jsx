import React, { useState } from 'react';

const Index = () => {
  const [text, setText] = useState('');
  const [numPoints, setNumPoints] = useState(0);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleNumPointsChange = (e) => {
    setNumPoints(e.target.value);
  };

  return (
    <div className="demo-container">
      <div className="demo-content">
        <div className="main-content-area">
          <h2>Main Content</h2>
          <p>This is the main content area.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
