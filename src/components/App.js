import React from 'react';
import MarkdownPreviewer from './MarkdownPreviewer.js';
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      <div className="app-header">
        <h1>Markdown Previewer</h1>
      </div>
      <div className="app-content">
        <MarkdownPreviewer />
      </div>
    </div>
  );
}

export default App;
