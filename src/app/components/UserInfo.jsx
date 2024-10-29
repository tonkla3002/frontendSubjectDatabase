"use client";
import React, { useEffect, useState } from 'react';
import { myapi } from '../../../lib/axios';

function ProfilePage() {
  const [userNameLocal, setUserNameLocal] = useState('');
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const userName = localStorage.getItem('userName');
      setUserNameLocal(userName);
      console.log('User Name Local:', userName);

      const fetchUserData = async () => {
        if (userName) {
          try {
            const response = await myapi.get(`/userProfile?userNameLocal=${userName}`);
            setUserData(response.data);
            console.log(response.data);
          } catch (error) {
            console.error('Error fetching user data:', error);
          } finally {
            setLoading(false);
          }
        } else {
          // ถ้าไม่มี userName ให้ redirect ไปยังหน้าเข้าสู่ระบบ
          window.location.href = '/login';
        }
      };

      fetchUserData();
    } catch (error) {
      console.error('Error accessing localStorage:', error);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className=" bg-gray-100 flex items-center justify-center">
        <p className="text-gray-800 text-xl">กำลังโหลดข้อมูล...</p>
      </div>
    );
  }

  return (
    <div className=" bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 w-full rounded-lg">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">
          ข้อมูลส่วนตัว
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-gray-600">ชื่อผู้ใช้:</p>
            <p className="text-gray-800 font-medium">
              {userNameLocal || 'N/A'}
            </p>
          </div>
          <div>
            <p className="text-gray-600">Abdomen:</p>
            <p className="text-gray-800 font-medium">
              {userData.abdomen || 'N/A'}
            </p>
          </div>
          <div>
            <p className="text-gray-600">Ankle:</p>
            <p className="text-gray-800 font-medium">
              {userData.ankle || 'N/A'}
            </p>
          </div>
          <div>
            <p className="text-gray-600">Biceps:</p>
            <p className="text-gray-800 font-medium">
              {userData.biceps || 'N/A'}
            </p>
          </div>
          <div>
            <p className="text-gray-600">Bodyfat:</p>
            <p className="text-gray-800 font-medium">
              {userData.bodyfat || 'N/A'}
            </p>
          </div>
          <div>
            <p className="text-gray-600">Chest:</p>
            <p className="text-gray-800 font-medium">
              {userData.chest || 'N/A'}
            </p>
          </div>
          <div>
            <p className="text-gray-600">Density:</p>
            <p className="text-gray-800 font-medium">
              {userData.density || 'N/A'}
            </p>
          </div>
          <div>
            <p className="text-gray-600">Forearm:</p>
            <p className="text-gray-800 font-medium">
              {userData.forearm || 'N/A'}
            </p>
          </div>
          <div>
            <p className="text-gray-600">Hip:</p>
            <p className="text-gray-800 font-medium">
              {userData.hip || 'N/A'}
            </p>
          </div>
          <div>
            <p className="text-gray-600">Knee:</p>
            <p className="text-gray-800 font-medium">
              {userData.knee || 'N/A'}
            </p>
          </div>
          <div>
            <p className="text-gray-600">Neck:</p>
            <p className="text-gray-800 font-medium">
              {userData.neck || 'N/A'}
            </p>
          </div>
          <div>
            <p className="text-gray-600">Thigh:</p>
            <p className="text-gray-800 font-medium">
              {userData.thigh || 'N/A'}
            </p>
          </div>
          <div>
            <p className="text-gray-600">Wrist:</p>
            <p className="text-gray-800 font-medium">
              {userData.wrist || 'N/A'}
            </p>
          </div>
          <div>
            <p className="text-gray-600">Weight:</p>
            <p className="text-gray-800 font-medium">
              {userData.weight || 'N/A'}
            </p>
          </div>
          <div>
            <p className="text-gray-600">Height:</p>
            <p className="text-gray-800 font-medium">
              {userData.height || 'N/A'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;