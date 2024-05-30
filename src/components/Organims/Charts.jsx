import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto';

const lineData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset 1',
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: 'rgba(75,192,192,1)',
      pointBorderColor: '#fff',
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const barData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: 'Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const Charts = () => {
  const lineChartRef = useRef(null);
  const barChartRef = useRef(null);
  const lineChartInstanceRef = useRef(null);
  const barChartInstanceRef = useRef(null);

  useEffect(() => {
    if (lineChartRef.current) {
      lineChartInstanceRef.current = new Chart(lineChartRef.current, {
        type: 'line',
        data: lineData,
      });
    }

    if (barChartRef.current) {
      barChartInstanceRef.current = new Chart(barChartRef.current, {
        type: 'bar',
        data: barData,
      });
    }

    return () => {
      if (lineChartInstanceRef.current) {
        lineChartInstanceRef.current.destroy();
      }
      if (barChartInstanceRef.current) {
        barChartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Charts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Line Chart</h2>
          <canvas ref={lineChartRef} />
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Bar Chart</h2>
          <canvas ref={barChartRef} />
        </div>
      </div>
    </div>
  );
};

export default Charts;
