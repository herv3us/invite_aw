import React, { useState } from 'react';
import '../App.css';

const Kort = () => {
  const [isFlipped, setIsFlipped] = useState(false);
     // #region classes
    const header = "text-[20px] sm:text-[40px] text-white font-HalloweenMorning -mb-4 sm:-mb-6"
    const halloweenText = "text-[40px] sm:text-[60px] text-white font-HALLOWEEN -mb-10 sm:-mb-20"
    const timeText = "text-[13px] sm:text-[18px] text-white"
    const titleText = "text-[18px] sm:text-[20px] text-orange-400"
    const infoText = "text-[12px] text-white"
    const textDiv = "flex items-start justify-start gap-x-3 w-full mb-3 sm:mb-5 h-[54px]"
    const infoDiv = "w-[70%]"
    // #endregion

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
    <div className="flip-card-inner">
    <div className="flip-card-front">
    <div className='h-full w-full pt-10 pb-5 px-8 sm:px-12 text-white flex justify-center items-center flex-col'>
          {/* Framsida */}
        <div className='w-[90%] mb-6 sm:mb-12'>
            <p className={header}>Happy</p>
            <p className={halloweenText}>HALLOWEEN</p>
            <p className={header + ' text-red-900 text-[60px] sm:text-[110px]'}>AW</p>
        </div>
        <div className={textDiv}>
            <p className={timeText}>16.00-17.00</p>
            <div className={infoDiv}>
                <p className={titleText}>THE WITCHES BREW</p>
                <p className={infoText}>På kontoret bjuds det på snacks och en förhäxad drink</p>
            </div>
        </div>
        <div className={textDiv}>
            <p className={timeText}>17.00-17.30</p>
            <div className={infoDiv}>
                <p className={titleText}>TILL LISEBERG</p>
                <p className={infoText}>Kollektivtrafik till kvällens huvudevent avgår kl 17.14 ifrån Järntorget</p>
            </div>
        </div>
        <div className={textDiv}>
            <p className={timeText}>17.30-19.15</p>
            <div className={infoDiv}>
                <p className={titleText}>EN DÖDLIG KAMP</p>
                <p className={infoText}>Väl inne på Liseberg ger vi oss in i en farlig strid</p>
            </div>
        </div>
        <div className={textDiv}>
            <p className={timeText}>19.30-21.20</p>
            <div className={infoDiv}>
                <p className={titleText}>KÄK PÅ GASTBAREN</p>
                <p className={infoText}>Vi mättar magarna med rysliga burgare</p>
            </div>
        </div>
        <div className={textDiv}>
            <p className={timeText}>21.30-23.00</p>
            <div className={infoDiv}>
                <p className={titleText}>STRIDEN FORTSÄTTER</p>
                <p className={infoText}>Kvällen är inte slut än - </p>
                <p className={infoText}>Vem ska ta hem segern och stå som ensam överlevare?</p>
            </div>
        </div>
        </div>
        </div>
        <div className="flip-card-back">
          {/* Baksida */}
          <div className='w-full h-full py-10 px-12 text-white flex justify-center items-center flex-col'>

             <div className='w-[90%] mb-6 sm:mb-12'>
            <p className={header}>En</p>
            <p className={halloweenText}>FARLIG</p>
            <p className={header + ' text-red-900 text-[60px] sm:text-[110px]'}>kamp</p>
        </div>


              <div className={textDiv}>
            <p className={timeText}>21.30-23.00</p>
            <div className={infoDiv}>
                <p className={titleText}>STRIDEN FORTSÄTTER</p>
                <p className={infoText}>Kvällen är inte slut än - </p>
                <p className={infoText}>Vem ska ta hem segern och stå som ensam överlevare?</p>
            </div>
        </div>
          </div>
        </div>
    </div>

    </div>
  );
};

export default Kort;
