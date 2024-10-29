import Link from 'next/link';
import React, { useState, useEffect } from 'react';

function Navbar() {
  const [profile, setProfile] = useState('');

  useEffect(() => {
    try {
      setProfile(localStorage.getItem('userName'));
      console.log(profile, typeof profile);
    } catch {}
  }, []);

  return (
    <nav className="bg-gray-800 text-white p-5">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* โลโก้ */}
          <div className="text-xl font-bold">
            <Link href="/mainPage">BodyFat</Link>
          </div>

          {/* เมนูทางด้านขวา */}
          <ul className="flex space-x-6">
            <li className="hover:underline hover:text-gray-300 transition duration-200">
              <Link href="/dashBoard">Dash Board</Link>
            </li>
            <li className="hover:underline hover:text-gray-300 transition duration-200">
              <Link href="/profilePage">{profile}</Link>
            </li>
            <li className="hover:underline hover:text-gray-300 transition duration-200">
              <Link href="/mainPage">Sign Out</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;