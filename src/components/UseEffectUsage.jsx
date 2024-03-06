import React, { useState, useEffect } from 'react';

const UseEffectUsage = () => {
  // State to store data
  const [data, setData] = useState('');

  // useEffect with an empty dependency array
  useEffect(() => {
    // This code will run after the first render
    console.log('Component is mounted');

    // You can perform asynchronous operations, like fetching data
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Cleanup function (optional)
    return () => {
      console.log('Component will unmount');
      // You can clean up resources or subscriptions here
    };
  }, []); // Empty dependency array means the effect runs once after the initial render

  // JSX to render the component
  return (
    <div>
      <h1>Data from API:</h1>
      <p>{data}</p>
    </div>
  );
};

export default UseEffectUsage;
