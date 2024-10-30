"use client";
import React from 'react';
import NavbarDash from '../components/NavbarDash';
import { myapi } from '../../../lib/axios';

function Profilepage() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Access form values directly using `event.target`
    const abdomen = event.target.abdomen.value;
    const ankle = event.target.ankle.value;
    const biceps = event.target.biceps.value;
    const bodyFat = event.target.bodyFat.value;
    const chest = event.target.chest.value;
    const density = event.target.density.value;
    const forearm = event.target.forearm.value;
    const hip = event.target.hip.value;
    const knee = event.target.knee.value;
    const neck = event.target.neck.value;
    const thigh = event.target.thigh.value;
    const wrist = event.target.wrist.value;
    const weight = event.target.weight.value;
    const height = event.target.height.value;
    const age = event.target.age.value;
    let userNameLocal = localStorage.getItem('userName')

    // Process or send the form data here
    try {
      const response = await myapi.post('/userProfile', {
        userNameLocal,
        abdomen,
        ankle,
        biceps,
        bodyFat,
        chest,
        density,
        forearm,
        hip,
        knee,
        neck,
        thigh,
        wrist,
        weight,
        height,
        age
      });
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="">

      <NavbarDash />
      <div className="bg-gray-100 min-h-screen p-4">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-6">
          <h1 className="text-2xl font-bold mb-4">Body Measurements</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Abdomen:</label>
                <input type="text" name="abdomen" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Ankle:</label>
                <input type="text" name="ankle" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Biceps:</label>
                <input type="text" name="biceps" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Body Fat:</label>
                <input type="text" name="bodyFat" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Chest:</label>
                <input type="text" name="chest" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Density:</label>
                <input type="text" name="density" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Forearm:</label>
                <input type="text" name="forearm" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Hip:</label>
                <input type="text" name="hip" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Knee:</label>
                <input type="text" name="knee" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Neck:</label>
                <input type="text" name="neck" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Thigh:</label>
                <input type="text" name="thigh" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Wrist:</label>
                <input type="text" name="wrist" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Weight (lbs):</label>
                <input type="text" name="weight" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Height (inches):</label>
                <input type="text" name="height" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Age:</label>
                <input type="text" name="age" className="w-full px-3 py-2 border rounded-md" />
              </div>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">
              Save Measurements
            </button>
          </form>
        </div>
      </div>
    </div>

  );
}

export default Profilepage;