import React, { useState } from 'react';
import Card from "./components/Card";

function App() {
  const [language, setLanguage] = useState('sv'); // Default är svenska

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'sv' ? 'en' : 'sv'));
  };

  return (
    <div className="bg-zinc-900 w-full h-screen flex justify-center items-center flex-col relative">
       <div className="absolute top-5 right-5">
        {/* Toggle switch */}
        <div className="flex flex-col items-center">
          <div
            className={`w-10 h-6 sm:w-14 sm:h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
              language === 'sv' ? 'bg-gray-700' : 'bg-red-900'
            }`}
            onClick={toggleLanguage}
          >
            {/* Switch circle */}
            <div
              className={`h-4 w-4 sm:h-6 sm:w-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                language === 'sv' ? '' : 'translate-x-4 sm:translate-x-6'
              }`}
            />
          </div>
          {/* Labels under the toggle */}
          <div className="flex gap-x-2 justify-between w-full mt-1 text-white text-[9px]">
            <span className={`${language === 'sv' ? 'text-red-800' : ''}`}>Svenska</span>
            <span className={`${language === 'en' ? 'text-red-800' : ''}`}>English</span>
          </div>
        </div>
      </div>
      <Card language={language} />
    </div>
  );
}

export default App;
