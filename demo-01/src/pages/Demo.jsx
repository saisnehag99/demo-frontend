import React, { useState } from 'react';

const Demo = () => {
  const [text, setText] = useState('');
  const [numPoints, setNumPoints] = useState(0);
  const [agentActivated, setAgentActivated] = useState(false);
  const [showConnection, setShowConnection] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [moveToTop, setMoveToTop] = useState(false);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleNumPointsChange = (e) => {
    setNumPoints(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Text:', text);
    console.log('Number of Points:', numPoints);
    
    // First, activate the agent with points
    setAgentActivated(true);
    
    // Then after a delay, show the connection
    setTimeout(() => {
      setShowConnection(true);
    }, 1500); // 1.5 second delay after agent gets points
    
    // Then after another delay, move to top and show message
    setTimeout(() => {
      setMoveToTop(true);
      setShowMessage(true);
    }, 3000); // 3 seconds total - move to top and show message
  };

  return (
    <div className="demo-container">
      <div className="demo-content">
        <div className="text-input-container">
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            placeholder="Enter text here..."
            className="text-input"
          />
          <input
            type="text"
            value={numPoints}
            onChange={handleNumPointsChange}
            placeholder="Enter number of points here..."
            className="text-input"
          />
          
          <button 
            onClick={handleSubmit}
            className="submit-button"
          >
            Submit
          </button>
        </div>
        
        <div className="main-content-area">
          <div className={`agent-bot-container ${moveToTop ? 'moved-to-top' : ''}`}>
            <div className={`agent-bot ${showConnection ? 'agent-moved' : ''} ${moveToTop ? 'minimized' : ''}`}>
              <div className="bot-glow"></div>
              <div className="bot-body">👔</div>
              <div className="bot-title">Project Manager Agent</div>
              
              {agentActivated && (
                <div className="wallet-container">
                  {/* <div className="wallet">💰</div> */}
                  <div className="points-display">
                    <span className="points-label">Points:</span>
                    <span className="points-value">{numPoints || 0}</span>
                  </div>
                </div>
              )}
            </div>
            
            {showConnection && (
              <>
                <div className="connection-line"></div>
                <div className={`database-agent ${moveToTop ? 'minimized' : ''}`}>
                  <div className="db-glow"></div>
                  <div className="db-body">🗄️</div>
                  <div className="db-title">NANDA Index</div>
                </div>
              </>
            )}
          </div>
          
          {showMessage && (
            <div className="query-box">
              <div className="query-content">
                <h3>Project Manager Agent Querying NANDA Index</h3>
                <p>Processing your request with {numPoints || 0} points...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Demo;
