import { useState } from 'react';
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
      >
        {darkMode ? '🌞' : '🌙'}
      </button>
      <Button variant="primary">Click Me</Button>
    </div>
  );
}