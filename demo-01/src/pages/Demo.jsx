import React, { useState } from 'react';

const Demo = () => {
  const [text, setText] = useState('');
  const [numPoints, setNumPoints] = useState(0);
  const [agentActivated, setAgentActivated] = useState(false);
  const [showConnection, setShowConnection] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [moveToTop, setMoveToTop] = useState(false);
  const [showBots, setShowBots] = useState(false);
  const [showCandidates, setShowCandidates] = useState(false);

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
    
    // Then show the 20 bots
    setTimeout(() => {
      setShowBots(true);
    }, 4000); // 4 seconds total - show bots
    
    // Then show candidates from NANDA Index
    setTimeout(() => {
      setShowCandidates(true);
    }, 5000); // 5 seconds total - show candidates
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
                  
                  {showCandidates && (
                    <>
                      <div className="candidates-arrow"></div>
                      <div className="candidates-group">
                        <div className="candidates-caption">Found Candidates</div>
                        <div className="candidates-bots">
                          {Array.from({ length: 6 }, (_, index) => (
                            <div 
                              key={index} 
                              className="candidate-bot"
                              style={{ animationDelay: `${index * 0.1}s` }}
                            >
                              <div className="candidate-bot-body">🤖</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
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
          
          {showBots && (
            <div className="bots-section">
              <div className="bots-title">
                Finding engineers, designers, and astronomer agents
              </div>
              <div className="bots-grid">
                {Array.from({ length: 20 }, (_, index) => (
                  <div 
                    key={index} 
                    className="mini-bot"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="mini-bot-body">🤖</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Demo;
