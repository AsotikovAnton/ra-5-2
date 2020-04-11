import React from 'react';

export default function Weather() {
  const weather = {
    pic: 'rain',
    now: '+8',
    evening: '+3',
    night: '0',
  };

  return (
    <>
      <div className='temperature'>
        <div>
          <img src='' alt={weather.pic} />
          {weather.now}
        </div>
        <div className='weather-future'>
          <span>Вечером {weather.evening}</span>
          <span>Ночью {weather.night}</span>
        </div>
      </div>
    </>
  );
}
