import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

const CurrentDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p className=''>{format(currentDate, 'MMMM dd, yyyy')}</p>
    </div>
  );
};

export default CurrentDate;
