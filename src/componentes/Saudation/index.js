import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

const Saudation = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
   // return () => clearInterval(intervalId);
  });

  const formattedDate = format(currentTime, "dd 'de' MMMM 'de' yyyy, HH:mm:ss", {
    locale: pt
  });

  let greeting = '';
  const currentHour = currentTime.getHours();

  if (currentHour >= 5 && currentHour < 12) {
    greeting = 'Bom dia!';
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = 'Boa tarde!';
  } else {
    greeting = 'Boa noite!';
  }

  return (
    <div className="saudacao">
      <h1>{greeting} {formattedDate}</h1>
    </div>
  );
};

export default Saudation;
