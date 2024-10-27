"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto';
import { myapi } from '../../../lib/axios';

function BarChart() {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState([]);
  const [visibleDatasets, setVisibleDatasets] = useState({
    abdomen: true,
    ankle: true,
    biceps: true,
    bodyfat: true,
    chest: true,
    density: true,
    forearm: true,
    hip: true,
    knee: true,
    neck: true,
    thigh: true,
    wrist: true,
    weight: true,
    height: true
  });

  

  useEffect(() => {
    const fetchData = async () => {
      const response = await myapi.get('/BodyMeasurements');
      console.log(response)
      setChartData(response.data);  // ตั้งค่า chartData ด้วยข้อมูลจาก API
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy(); // ทำลายกราฟเดิมก่อนสร้างใหม่
      }

      const context = chartRef.current.getContext("2d");

      const labels = chartData.map((item) => item.age_analys);

      const datasets = [];

      if (visibleDatasets.abdomen) {
        datasets.push({
          label: "Abdomen",
          data: chartData.map((item) => item.avg_abdomen),
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        });
      }
      if (visibleDatasets.ankle) {
        datasets.push({
          label: "Ankle",
          data: chartData.map((item) => item.avg_ankle),
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        });
      }
      if (visibleDatasets.biceps) {
        datasets.push({
          label: "Biceps",
          data: chartData.map((item) => item.avg_biceps),
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        });
      }
      if (visibleDatasets.bodyfat) {
        datasets.push({
          label: "Bodyfat",
          data: chartData.map((item) => item.avg_bodyfat),
          backgroundColor: "rgba(153, 102, 255, 0.2)",
          borderColor: "rgba(153, 102, 255, 1)",
          borderWidth: 1,
        });
      }
      if (visibleDatasets.chest) {
        datasets.push({
          label: "Chest",
          data: chartData.map((item) => item.avg_chest),
          backgroundColor: "rgba(255, 205, 86, 0.2)",
          borderColor: "rgba(255, 205, 86, 1)",
          borderWidth: 1,
        });
      }
      if (visibleDatasets.density) {
        datasets.push({
          label: "Density",
          data: chartData.map((item) => item.avg_density),
          backgroundColor: "rgba(201, 203, 207, 0.2)",
          borderColor: "rgba(201, 203, 207, 1)",
          borderWidth: 1,
        });
      }
      if (visibleDatasets.forearm) {
        datasets.push({
          label: "Forearm",
          data: chartData.map((item) => item.avg_forearm),
          backgroundColor: "rgba(255, 159, 64, 0.2)",
          borderColor: "rgba(255, 159, 64, 1)",
          borderWidth: 1,
        });
      }
      if (visibleDatasets.hip) {
        datasets.push({
          label: "Hip",
          data: chartData.map((item) => item.avg_hip),
          backgroundColor: "rgba(99, 132, 255, 0.2)",
          borderColor: "rgba(99, 132, 255, 1)",
          borderWidth: 1,
        });
      }
      if (visibleDatasets.knee) {
        datasets.push({
          label: "Knee",
          data: chartData.map((item) => item.avg_knee),
          backgroundColor: "rgba(192, 75, 192, 0.2)",
          borderColor: "rgba(192, 75, 192, 1)",
          borderWidth: 1,
        });
      }
      if (visibleDatasets.neck) {
        datasets.push({
          label: "Neck",
          data: chartData.map((item) => item.avg_neck),
          backgroundColor: "rgba(86, 255, 205, 0.2)",
          borderColor: "rgba(86, 255, 205, 1)",
          borderWidth: 1,
        });
      }
      if (visibleDatasets.thigh) {
        datasets.push({
          label: "Thigh",
          data: chartData.map((item) => item.avg_thigh),
          backgroundColor: "rgba(205, 86, 255, 0.2)",
          borderColor: "rgba(205, 86, 255, 1)",
          borderWidth: 1,
        });
      }
      if (visibleDatasets.wrist) {
        datasets.push({
          label: "Wrist",
          data: chartData.map((item) => item.avg_wrist),
          backgroundColor: "rgba(235, 54, 162, 0.2)",
          borderColor: "rgba(235, 54, 162, 1)",
          borderWidth: 1,
        });
      }
      if (visibleDatasets.weight) {
        datasets.push({
          label: "Weight",
          data: chartData.map((item) => item.weight),
          backgroundColor: "rgba(64, 159, 255, 0.2)",
          borderColor: "rgba(64, 159, 255, 1)",
          borderWidth: 1,
        });
      }
      if (visibleDatasets.height) {
        datasets.push({
          label: "Height",
          data: chartData.map((item) => item.height),
          backgroundColor: "rgba(255, 132, 99, 0.2)",
          borderColor: "rgba(255, 132, 99, 1)",
          borderWidth: 1,
        });
      }

      const newChart = new Chart(context, {
        type: "bar",
        data: {
          labels: labels,
          datasets: datasets,
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: "Full Body Measurements Analysis",
            },
          },
          scales: {
            x: {
              type: "category",
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      chartRef.current.chart = newChart;
    }
  }, [chartData, visibleDatasets]);

  const handleToggle = (dataset) => {
    setVisibleDatasets((prev) => ({
      ...prev,
      [dataset]: !prev[dataset],
    }));
  };

  return (
    <div className="block justify-center items-center w-[90vw] h-[80vh] mx-auto">
        <p className='my-2'>Density,Body:No unit of measurement</p>
        <p className=''>Other: cm</p>
      <div className='flex m-10 border-solid border-2 border-black rounded-md p-5'>
        {/* ปุ่มเปิดปิดสำหรับแต่ละข้อมูล */}
        {Object.keys(visibleDatasets).map((key) => (
          <label key={key} className='inline-block m-3'>
            <input
              type="checkbox"
              checked={visibleDatasets[key]}
              onChange={() => handleToggle(key)}
            />
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </label>
        ))}
      </div>

      <canvas ref={chartRef} />
      <p className=''>x axis : age</p>
    </div>
  );
}

export default BarChart;