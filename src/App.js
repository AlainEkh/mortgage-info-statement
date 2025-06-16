import React, { useState } from 'react';
import UploadHtml from './UploadHtml';

function App() {
  const [htmlContent, setHtmlContent] = useState('');

  return (
    <div style={{ padding: '20px' }}>
      <h1>Mortgage Info Statement Generator</h1>
      <p>Upload your HTML file below:</p>

      <UploadHtml onFileLoaded={setHtmlContent} />

      <h3>Raw HTML Preview</h3>
      <pre style={{ backgroundColor: '#f0f0f0', padding: '10px', maxHeight: '300px', overflow: 'auto' }}>
        {htmlContent}
      </pre>
    </div>
  );
}

export default App;