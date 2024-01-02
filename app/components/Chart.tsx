'use client'
import React from "react";
// import { TEChart } from "tw-elements-react";


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';


  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: '',
      },
    },
  };


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// const data = [2112, 2343, 2545, 3423, 2365, 1985, 987];


export const data = {
    labels,
    datasets: [
      {
        label: '',
        data: labels.map(() => Number(Math.random()*1000)),
        backgroundColor: `rgba(${Number(Math.random()*255)}, ${Number(Math.random()*255)}, ${Number(Math.random()*255)}, 0.5)`,
      },
    ],
  };


const ChartBar = ():JSX.Element=> {

  return <Bar width={300} height={300} className="p-5" options={options} data={data} />;
}

export default ChartBar;



