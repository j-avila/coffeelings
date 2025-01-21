import React, { useState } from 'react';

const DateSelector = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div>
      <label htmlFor="date-selector">Select a date:</label>
      <input
        type="date"
        id="date-selector"
        value={selectedDate}
        onChange={handleDateChange}
      />
      {selectedDate && <div>Selected date: {selectedDate}</div>}
    </div>
  );
};

export default DateSelector;
