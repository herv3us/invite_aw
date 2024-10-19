import React, { useState } from 'react';
import { texts } from '../assets/translations';
import '../App.css';

const Card = ({ language }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="flip-card-inner">
        {/* Framsidan */}
        <div className="flip-card-front">
          <div className='h-full w-full pt-10 pb-5 px-8 sm:px-12 text-white flex justify-center items-center flex-col'>
            <div className='w-[95%] sm:w-[90%] mb-6 sm:mb-12'>
              <p className="text-[20px] sm:text-[40px] text-white font-HalloweenMorning -mb-4 sm:-mb-6">{texts[language].front.header}</p>
              <p className="text-[40px] sm:text-[60px] text-white font-HALLOWEEN -mb-10 sm:-mb-20">{texts[language].front.halloween}</p>
              <p className='font-HalloweenMorning -mb-4 sm:-mb-6 text-red-900 text-[50px] sm:text-[110px]'>{texts[language].front.aw}</p>
            </div>
            {texts[language].front.events.map((event, index) => (
              <div key={index} className="flex items-start justify-start gap-x-3 w-full mb-3 sm:mb-5 h-[54px]">
                <p className="text-[13px] sm:text-[18px] text-white">{event.time}</p>
                <div className="w-[70%]">
                  <p className="text-[18px] sm:text-[20px] text-orange-400">{event.title}</p>
                  <p className="text-[12px] text-white">{event.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Baksidan */}
        <div className="flip-card-back">
          <div className='w-full h-full py-10 px-6 sm:px-12 text-white flex justify-center items-center flex-col'>
            <div className='w-[90%] mb-6 sm:mb-10'>
              <p className="text-[20px] sm:text-[40px] text-white font-HalloweenMorning -mb-4 sm:-mb-6">{texts[language].back.header}</p>
              <p className="text-[40px] sm:text-[60px] text-white font-HALLOWEEN -mb-12 sm:-mb-[66px]">{texts[language].back.halloween}</p>
              <p className='font-HalloweenMorning -mb-4 sm:-mb-6 text-red-900 text-[60px] sm:text-[80px]'>{texts[language].back.aw}</p>
            </div>
            {texts[language].back.challenges.map((challenge, index) => (
              <div key={index} className="flex items-start justify-start gap-x-3 w-full mb-3 sm:mb-5 h-[54px]">
                <p className="text-[12px] sm:text-[18px] text-white">{challenge.time}</p>
                <div className="w-[80%]">
                  <p className="text-[15px] sm:text-[28px] text-orange-400">{challenge.title}</p>
                  <p className="text-[12px] text-white">{challenge.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
