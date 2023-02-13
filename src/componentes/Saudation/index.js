import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import './Saudation.css'

const Saudation = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    // return () => clearInterval(intervalId);
  });

  const formattedDate = format(currentTime, "dd 'de' MMMM 'de' yyyy, hh:mm:ss", {
    locale: pt
  });

  let greeting = '';
  const currentHour = currentTime.getHours();

  if (currentHour >= 5 && currentHour < 12) {
    greeting = 'Bom dia!';
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = 'Boa tarde!';
  } else if (currentHour >= 18 && currentHour < 24) {
    greeting = 'Boa noite!';
  } else {
    greeting = 'Boa madrugada!'
  }

  return (
    <div>
      <h2 className='saudacao__titulo'>{greeting} {formattedDate}</h2>
    </div>
  );
};

export default Saudation;
