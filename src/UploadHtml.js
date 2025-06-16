import React from 'react';

function UploadHtml({ onFileLoaded }) {
  const handleChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      const html = e.target.result;
      onFileLoaded(html); // Send HTML content to parent
    };

    reader.readAsText(file);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <input type="file" accept=".html" onChange={handleChange} />
    </div>
  );
}

export default UploadHtml;