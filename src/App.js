import React, { useState, useRef } from 'react';
import Card from "./components/Card";
import sound from './assets/halloween.mp3'
import Toggle from './components/Toggle';

function App() {
  const [language, setLanguage] = useState('sv');
  const audioRef = useRef(null);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'sv' ? 'en' : 'sv'));
  };

  const startSound = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error("Failed to play sound:", error);
      });
    }
  };

  return (
    <div className="bg-zinc-900 w-full h-screen flex justify-center items-center flex-col relative"
    onClick={startSound}
    >
      <Toggle language={language} setLanguage={setLanguage} />
      <Card language={language} />
      <audio ref={audioRef} src={sound} loop />
    </div>
  );
}

export default App;
