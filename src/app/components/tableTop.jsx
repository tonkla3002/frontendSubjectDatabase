'use client';  // ระบุว่าเป็น Client Component

import { useState, useEffect } from 'react';
import { myapi } from '../../../lib/axios';

let state = 1
export default function TopPage() {


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [orderby, setOrderby] = useState('');
  const [category, setCategory] = useState('all'); // ใช้เพื่อจัดเก็บค่าประเภทที่เลือก

  // Fetch data from API using axios
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await myapi.get(`/searchTop?search=${search}&category=${category}&orderby=${orderby}`);
        setData(response.data);  // ตั้งค่าข้อมูลในตาราง
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [search, category, orderby]); // เมื่อ search หรือ category เปลี่ยน จะเรียก API ใหม่

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);  // เปลี่ยนค่าประเภทที่เลือก
  };


  const handleSubmit = (e) => {
    try {
      console.log("State on if = ", state)
      if (state === 0) {
        state = 1
        setOrderby('ASC');
        console.log("State in if = ", state)
      }
      else {
        state = 0
        setOrderby('DESC');
        console.log("State in else = ", state)
      }
      console.log("State out condition= ", state)

    } catch (error) {
      console.error("Error during registration:", error);

    }

  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4">Top 10 Data</h1>
      <button onClick={handleSubmit} type='' className='bg-green-500 p-2 rounded-md text-white'>Sort</button>


      {/* ช่องค้นหา */}
      <div className="flex space-x-4 mb-6">
        <input
          type="text"
          placeholder="Search.."
          value={search}
          onChange={handleSearch}
          className="border p-2 rounded w-full"
        />

        {/* Dropdown สำหรับเลือกประเภทการค้นหา */}
        <select
          value={category}
          onChange={handleCategoryChange}
          className="border p-2 rounded"
        >
          <option value="all">All Categories</option>
          <option value="abdomen">Abdomen</option>
          <option value="ankle">Ankle</option>
          <option value="biceps">Biceps</option>
          <option value="bodyFat">Bodyfat</option>
          <option value="chest">Chest</option>
          <option value="density">Density</option>
          <option value="forearm">Forearm</option>
          <option value="hip">Hip</option>
          <option value="knee">Knee</option>
          <option value="neck">Neck</option>
          <option value="thigh">Thigh</option>
          <option value="wrist">Wrist</option>
        </select>
      </div>

      {/* แสดงผลข้อมูลเป็น Table */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-3 border">Order</th>
              <th className="py-2 px-3 border">Age</th>
              <th className="py-2 px-3 border">Abdomen</th>
              <th className="py-2 px-3 border">Ankle</th>
              <th className="py-2 px-3 border">Biceps</th>
              <th className="py-2 px-3 border">Bodyfat</th>
              <th className="py-2 px-3 border">Chest</th>
              <th className="py-2 px-3 border">Density</th>
              <th className="py-2 px-3 border">Forearm</th>
              <th className="py-2 px-3 border">Hip</th>
              <th className="py-2 px-3 border">Knee</th>
              <th className="py-2 px-3 border">Neck</th>
              <th className="py-2 px-3 border">Thigh</th>
              <th className="py-2 px-3 border">Wrist</th>
              <th className="py-2 px-3 border">Weight</th>
              <th className="py-2 px-3 border">Height</th>
            </tr>
          </thead>
          {category == 'all' ?
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="py-2 px-3 border">{index + 1}</td>
                  <td className="py-2 px-13 border">{item.age_analys}</td>
                  <td className="py-2 px-3 border">{item.avg_abdomen}</td>
                  <td className="py-2 px-3 border">{item.avg_ankle}</td>
                  <td className="py-2 px-3 border">{item.avg_biceps}</td>
                  <td className="py-2 px-3 border">{item.avg_bodyfat}</td>
                  <td className="py-2 px-3 border">{item.avg_chest}</td>
                  <td className="py-2 px-3 border">{item.avg_density}</td>
                  <td className="py-2 px-3 border">{item.avg_forearm}</td>
                  <td className="py-2 px-3 border">{item.avg_hip}</td>
                  <td className="py-2 px-3 border">{item.avg_knee}</td>
                  <td className="py-2 px-3 border">{item.avg_neck}</td>
                  <td className="py-2 px-3 border">{item.avg_thigh}</td>
                  <td className="py-2 px-3 border">{item.avg_wrist}</td>
                  <td className="py-2 px-3 border">{item.avg_weight}</td>
                  <td className="py-2 px-3 border">{item.avg_height}</td>
                </tr>
              ))}
            </tbody>
            :
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="py-2 px-3 border">{index + 1}</td>
                  <td className="py-2 px-13 border">{item.age}</td>
                  <td className="py-2 px-3 border">{item.abdomen}</td>
                  <td className="py-2 px-3 border">{item.ankle}</td>
                  <td className="py-2 px-3 border">{item.biceps}</td>
                  <td className="py-2 px-3 border">{item.bodyFat}</td>
                  <td className="py-2 px-3 border">{item.chest}</td>
                  <td className="py-2 px-3 border">{item.density}</td>
                  <td className="py-2 px-3 border">{item.forearm}</td>
                  <td className="py-2 px-3 border">{item.hip}</td>
                  <td className="py-2 px-3 border">{item.knee}</td>
                  <td className="py-2 px-3 border">{item.neck}</td>
                  <td className="py-2 px-3 border">{item.thigh}</td>
                  <td className="py-2 px-3 border">{item.wrist}</td>
                  <td className="py-2 px-3 border">{item.weight}</td>
                  <td className="py-2 px-3 border">{item.height}</td>
                </tr>
              ))}
            </tbody>
          }
        </table>
      )}
    </div>
  );
}