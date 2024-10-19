import React, { useState } from 'react';
import Card from "./components/Card";

function App() {
  const [language, setLanguage] = useState('sv'); // Default är svenska

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'sv' ? 'en' : 'sv'));
  };

  return (
    <div className="bg-zinc-900 w-full h-screen flex justify-center items-center flex-col">
      <button
        onClick={toggleLanguage}
        className="mb-4 p-2 bg-gray-700 text-white rounded"
      >
        {language === 'sv' ? 'Switch to English' : 'Byt till svenska'}
      </button>
      <Card language={language} />
    </div>
  );
}

export default App;
