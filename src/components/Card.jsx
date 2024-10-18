import React from 'react'

function Card() {
    // #region classes
    const header = "text-[60px] text-white font-HalloweenMorning -mb-7"
    const halloweenText = "text-[70px] text-white font-HALLOWEEN -mb-24"
    const timeText = "text-[20px] text-white"
    const titleText = "text-[25px] text-orange-400"
    const infoText = "text-[16px] text-white"
    const textDiv = "flex gap-x-10 w-full mb-5"
    const infoDiv = "w-[70%]"
    // #endregion

  return (
    <div className='bg-black py-10 px-12 rounded text-white flex justify-center items-center flex-col'>
        <div className='w-[60%] mb-16'>
            <p className={header}>Happy</p>
            <p className={halloweenText}>HALLOWEEN</p>
            <p className={header + ' text-red-900 text-[140px] '}>AW</p>
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
                <p className={titleText}>6-KAMP</p>
                <p className={infoText}>Vi tar oss in på Liseberg och ger oss in i en farlig strid</p>
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
                <p className={infoText}>Kvällen är inte slut än - Vem ska ta hem segern...</p>
            </div>
        </div>
    </div>
  )
}

export default Card