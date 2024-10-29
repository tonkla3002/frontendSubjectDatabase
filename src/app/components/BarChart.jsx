"use client";
import React, { useState, useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";
import { myapi } from "../../../lib/axios";

function BarChart() {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState([]);
  const [dataHistory, setDataHistory] = useState([]);
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
    height: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await myapi.get("/BodyMeasurements");
        setChartData(response.data);
        setDataHistory([response.data]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!chartRef.current) return;

    const currentData = dataHistory[dataHistory.length - 1];

    if (!currentData || currentData.length === 0) return;

    if (chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }

    const context = chartRef.current.getContext("2d");

    const labels = currentData.map((item) => item.age_analys);

    const datasets = [];

    if (visibleDatasets.abdomen) {
      datasets.push({
        label: "Abdomen",
        data: currentData.map((item) => item.avg_abdomen),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      });
    }

    if (visibleDatasets.ankle) {
      datasets.push({
        label: "Ankle",
        data: currentData.map((item) => item.avg_ankle),
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      });
    }

    // เพิ่ม datasets อื่น ๆ ตามเดิมโดยไม่แก้ไขข้อมูล
    if (visibleDatasets.biceps) {
      datasets.push({
        label: "Biceps",
        data: currentData.map((item) => item.avg_biceps),
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      });
    }

    if (visibleDatasets.bodyfat) {
      datasets.push({
        label: "Bodyfat",
        data: currentData.map((item) => item.avg_bodyfat),
        backgroundColor: "rgba(153, 102, 255, 0.5)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      });
    }

    if (visibleDatasets.chest) {
      datasets.push({
        label: "Chest",
        data: currentData.map((item) => item.avg_chest),
        backgroundColor: "rgba(255, 159, 64, 0.5)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      });
    }

    if (visibleDatasets.density) {
      datasets.push({
        label: "Density",
        data: currentData.map((item) => item.avg_density),
        backgroundColor: "rgba(255, 206, 86, 0.5)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      });
    }

    if (visibleDatasets.forearm) {
      datasets.push({
        label: "Forearm",
        data: currentData.map((item) => item.avg_forearm),
        backgroundColor: "rgba(231, 233, 237, 0.5)",
        borderColor: "rgba(231, 233, 237, 1)",
        borderWidth: 1,
      });
    }

    if (visibleDatasets.hip) {
      datasets.push({
        label: "Hip",
        data: currentData.map((item) => item.avg_hip),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
      });
    }

    if (visibleDatasets.knee) {
      datasets.push({
        label: "Knee",
        data: currentData.map((item) => item.avg_knee),
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54,162,235,1)",
        borderWidth: 1,
      });
    }

    if (visibleDatasets.neck) {
      datasets.push({
        label: "Neck",
        data: currentData.map((item) => item.avg_neck),
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      });
    }

    if (visibleDatasets.thigh) {
      datasets.push({
        label: "Thigh",
        data: currentData.map((item) => item.avg_thigh),
        backgroundColor: "rgba(153, 102, 255, 0.5)",
        borderColor: "rgba(153,102,255,1)",
        borderWidth: 1,
      });
    }

    if (visibleDatasets.wrist) {
      datasets.push({
        label: "Wrist",
        data: currentData.map((item) => item.avg_wrist),
        backgroundColor: "rgba(255, 159, 64, 0.5)",
        borderColor: "rgba(255,159,64,1)",
        borderWidth: 1,
      });
    }

    if (visibleDatasets.weight) {
      datasets.push({
        label: "Weight",
        data: currentData.map((item) => item.weight),
        backgroundColor: "rgba(255, 206, 86, 0.5)",
        borderColor: "rgba(255,206,86,1)",
        borderWidth: 1,
      });
    }

    if (visibleDatasets.height) {
      datasets.push({
        label: "Height",
        data: currentData.map((item) => item.height),
        backgroundColor: "rgba(231, 233, 237, 0.5)",
        borderColor: "rgba(231,233,237,1)",
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
            font: {
              size: 18,
            },
          },
          legend: {
            labels: {
              font: {
                size: 12,
              },
            },
          },
        },
        scales: {
          x: {
            type: "category",
            title: {
              display: true,
              text: "Age",
              font: {
                size: 14,
              },
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Measurements",
              font: {
                size: 14,
              },
            },
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        onClick: (event) => {
          const points = chartRef.current.chart.getElementsAtEventForMode(
            event,
            "nearest",
            { intersect: true },
            false
          );
          if (points.length) {
            const firstPoint = points[0];
            const index = firstPoint.index;
            const clickedData = currentData[index];
            setDataHistory((prevHistory) => [...prevHistory, [clickedData]]);
          }
        },
      },
    });

    chartRef.current.chart = newChart;
  }, [chartData, visibleDatasets, dataHistory]);

  const handleToggle = (dataset) => {
    setVisibleDatasets((prev) => ({
      ...prev,
      [dataset]: !prev[dataset],
    }));
  };

  if (dataHistory.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center">
        <p className="text-lg font-semibold mb-2">
          Density, Bodyfat: ไม่มีหน่วยวัด
        </p>
        <p className="text-lg font-semibold mb-4">อื่น ๆ: เซนติเมตร (cm)</p>
      </div>

      <div className="flex justify-center space-x-4 mb-6">
        {dataHistory.length > 1 && (
          <>
            {/* <button
              onClick={() =>
                setDataHistory((prevHistory) => prevHistory.slice(0, -1))
              }
              className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
            >
              ย้อนกลับ
            </button> */}
            <button
              onClick={() => setDataHistory([chartData])}
              className="px-4 py-2 bg-red-600 text-white rounded-md shadow hover:bg-red-700"
            >
              รีเซ็ต
            </button>
          </>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
        {Object.keys(visibleDatasets).map((key) => (
          <label key={key} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={visibleDatasets[key]}
              onChange={() => handleToggle(key)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <span className="capitalize text-gray-700">
              {key.replace(/_/g, " ")}
            </span>
          </label>
        ))}
      </div>

      <div className="relative h-[60vh]">
        <canvas ref={chartRef} />
      </div>

      <p className="text-center mt-4 text-gray-600">x-axis: อายุ (age)</p>
    </div>
  );
}

export default BarChart;