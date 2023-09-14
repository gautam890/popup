import './App.css';
import ReactDOM from 'react-dom';
import { useState } from 'react';

const iframeUrl = 'https://pfw-test-ukwest-safespace.azurewebsites.net/';

function App() {
 const [isVisible, setVisible] = useState(false);


const showiframe= (e) => {
  setVisible(true);
}

  return (
    <div className="App">
      <header className="App-header">
       <div>
        <button onClick={showiframe}>click me!</button>

        {isVisible ? ReactDOM.createPortal(
      <div className="iframe-safe-space-popup" data-testid="iframe-safe-space" id="iframe-safe-space">
        <iframe
          src={iframeUrl}
          className="safespace-iframe"
          id="safe-space-iframe"
          title="Safe Space"
          width="100%"
          height="100%" />
      </div>,
      document.body
    ) : ''}

       </div>
      </header>
    </div>
  );
}

export default App;
