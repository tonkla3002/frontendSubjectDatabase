import Link from 'next/link';
import React from 'react';

function Navbar() {
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
              <Link href="/login">Sign In</Link>
            </li>
            <li className="hover:underline hover:text-gray-300 transition duration-200">
              <Link href="/register">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;