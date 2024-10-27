"use client"
import React from 'react'
import NavbarDash from '../components/NavbarDash';
import { myapi } from '../../../lib/axios';


function Profilepage() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Access form values directly using `event.target`
    
    const abdomen = event.target.abdomen.vale; 
    const ankle = event.target.ankle.vale; 
    const biceps = event.target.biceps.vale; 
    const bodyFat = event.target.bodyFat.vale; 
    const chest = event.target.chest.vale; 
    const density = event.target.density.vale; 
    const forearm = event.target.forearm.vale; 
    const hip = event.target.hip.vale; 
    const knee = event.target.knee.vale; 
    const neck = event.target.neck.vale; 
    const thigh = event.target.thigh.vale; 
    const wrist = event.target.wrist.vale; 
    const weight = event.target.weight.vale; 
    const height = event.target.height.vale; 

    // You can process or send the form data here
    try {
      // Make an Axios POST request to the registration endpoint
      const response = await myapi.post('/usersFake', {
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
        height 
      });
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  const [formData, setFormData] = useState({
    abdomen: '',
    ankle: '',
    biceps: '',
    bodyFat: '',
    chest: '',
    density: '',
    forearm: '',
    hip: '',
    knee: '',
    neck: '',
    thigh: '',
    wrist: '',
    weight: '',
    height: ''
  });

  const handleChange = (e) => {
    const { abdomen,
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
      height } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


  return (
    <div className="">
      <NavbarDash />
      {/* <div className="max-w-md mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-6">Body Measurements</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {Object.keys(formData).map((key) => (
            
          ))}
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
            Save Measurements
          </button>
        </form>
      </div> */}
    </div>
  );

}

export default Profilepage




