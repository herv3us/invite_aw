import React from 'react'

function Card() {
    // #region classes
    const header = "text-[60px] text-white font-HalloweenMorning -mb-7"
    const halloweenText = "text-[70px] text-white font-HALLOWEEN -mb-24"
    const timeText = "text-[20px] text-white"
    const titleText = "text-[25px] text-orange-400"
    const infoText = "text-[16px] text-white"
    // #endregion

    // region return
  return (
    <div className='bg-black py-14 px-12 rounded text-white flex justify-center items-center flex-col'>
        <div className='w-[60%] mb-16'>
            <p className={header}>Happy</p>
            <p className={halloweenText}>HALLOWEEN</p>
            <p className={header + ' text-red-800 text-[150px] '}>AW</p>
        </div>
        <div className='flex gap-x-16 w-full mb-4'>
            <p className={timeText}>16.00-17.00</p>
            <div>
                <p className={titleText}>KONTORSHÄNG</p>
                <p className={infoText}>Det bjuds på snacks och The Witches brew drink</p>
            </div>
        </div>
        <div className='flex gap-x-16 w-full mb-4'>
            <p className={timeText}>17.00-17.30</p>
            <div>
                <p className={titleText}>TILL LISEBERG</p>
                <p className={infoText}>Kollektivtrafik till kvällens huvudevent</p>
            </div>
        </div>
        <div className='flex gap-x-16 w-full mb-4'>
            <p className={timeText}>17.30-19.15</p>
            <div>
                <p className={titleText}>6-KAMP</p>
                <p className={infoText}>Vi tar oss in på Liseberg och ger oss in i en farlig strid</p>
            </div>
        </div>
        <div className='flex gap-x-16 w-full mb-4'>
            <p className={timeText}>19.30-21.20</p>
            <div>
                <p className={titleText}>KÄK PÅ GASTBAREN</p>
                <p className={infoText}>Vi mättar magarna med rysliga burgare</p>
            </div>
        </div>
        <div className='flex gap-x-16 w-full mb-4'>
            <p className={timeText}>21.30-23.00</p>
            <div>
                <p className={titleText}>STRIDEN FORTSÄTTER</p>
                <p className={infoText}>Kvällen är inte slut än - Vi fortsätter den svåra fighten om seger</p>
            </div>
        </div>
    </div>
  )
  // endregion
}

export default Card