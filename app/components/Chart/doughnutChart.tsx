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
    ArcElement,
  } from 'chart.js';
  import { Doughnut } from 'react-chartjs-2';


  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );


export const d = {
    responsive:true,
    labels: ['Success', 'Waiting', 'Failed', 'Updating'],
    datasets: [
      {
        // labels: ['Success', 'Waiting', 'Failed', 'Updating'],
        data: [5,4,1,4].map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value),
        backgroundColor: [
          'rgb(103, 177, 249)',
          'rgb(247, 222, 88)',
          'rgb(0, 0, 0, 0)',
          'rgb(125, 88, 247)',
        ],
        borderColor: [
          'white'
        ],
        borderWidth: 2,
        // circumference: 180,
        cutout:'80%',
        borderRadius: 20,
        padding: 10
      },
    ],
  };
  
  
  
  
  const DoughnutChart = ():JSX.Element=>{
    return <Doughnut data={d} className="p-5"/>;
  }

  export default DoughnutChart;