import Link from 'next/link'
import React, { useState,useEffect} from 'react'

function Navbar() {
  // const [isLoggedIn, setIsLoggedIn] = useState(true);  // ตั้งค่าผู้ใช้ล็อกอินหรือไม่
  // const username = "JohnDoe"; // ตัวอย่างชื่อผู้ใช้

  // const handleLogout = () => {
  //   // ฟังก์ชันที่จะจัดการการ log out (อาจเชื่อมต่อกับ NextAuth หรือระบบอื่น)
  //   setIsLoggedIn(false);
  // };
  const [profile, setProfile] = useState('');
  
  
  useEffect(()=>{
    try{
      setProfile(
        localStorage.getItem('userName')
      )
       console.log(profile,typeof profile)
    }
    catch{
  
    }

  },[])

  return (
    <nav className='bg-[#333] text-white p-5'>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* โลโก้ */}
          <div>
            <Link href="/mainPage">BodyFat</Link>
          </div>
          
          {/* เมนูทางด้านขวา */}
          <ul className='flex'>
            <li className='mx-3 hover:underline'><Link href="/profilePage">{profile}</Link></li>
            <li className='mx-3 hover:underline'><Link href="/mainPage">Sign Out</Link></li>
        </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;