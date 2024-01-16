// import React, { useState, useRef, useEffect } from 'react';
// import logo from '../assets/logo.svg'

// export default function Navbar() {
//   const [isMenuOpen, setMenuOpen] = useState(false);
//   const menuRef = useRef(null);

//   const toggleMenu = () => {
//     setMenuOpen((prev) => !prev);
//   };

//   useEffect(() => {
//     if (menuRef.current) {
//       menuRef.current.style.transition = 'height 0.3s ease-in-out';
//       menuRef.current.style.height = isMenuOpen ? `${menuRef.current.scrollHeight}px` : '0';
//     }
//   }, [isMenuOpen]);
  
//   useEffect(() => {
//     const handleResize = () => {
//       // Set the height to 'auto' when the menu is open on resize
//       if (isMenuOpen && menuRef.current) {
//         menuRef.current.style.height = 'auto';
//       }
//     };
  
//     // Add a resize event listener
//     window.addEventListener('resize', handleResize);
  
//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [isMenuOpen]);
  

//   return (
//     <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between relative">
//       <div className="flex justify-between items-center">
//         <span className="text-2xl ml-12 p-4 font-[Poppins] cursor-pointer">
//           <img className="h-5 mr-1 inline" src={logo} alt="Logo" />
          
//         </span>

//         <span className="text-3xl cursor-pointer mx-2 md:hidden block" onClick={toggleMenu}>
//           <ion-icon name={isMenuOpen ? 'close' : 'menu'}></ion-icon>
//         </span>
//       </div>

//       <ul
//         className="crossing md:flex md:items-center md:static overflow-hidden bg-white w-full md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100"
//         ref={menuRef}
//       >
//       <li className="mx-4 my-6 md:my-0">
//           <a href="#" className="text-xl hover:text-cyan-500 duration-500">
//             HOME
//           </a>
//         </li>
//         <li className="mx-4 my-6 md:my-0">
//           <a href="#" className="text-xl hover:text-cyan-500 duration-500">
//             SERVICE
//           </a>
//         </li>
//         <li className="mx-4 my-6 md:my-0">
//           <a href="#" className="text-xl hover:text-cyan-500 duration-500">
//             ABOUT
//           </a>
//         </li>
//         <li className="mx-4 my-6 md:my-0">
//           <a href="#" className="text-xl hover:text-cyan-500 duration-500">
//             CONTACT
//           </a>
//         </li>
//         <li className="mx-4 my-6 md:my-0">
//           <a href="#" className="text-xl hover:text-cyan-500 duration-500">
//             BLOG'S
//           </a>
//         </li>

//         <button className="bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded">
//           Get started
//         </button>
//       </ul>
//     </nav>
//   );
// }





import React, { useState, useRef, useEffect } from 'react';
import logo from '../assets/logo.svg';

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (menuRef.current) {
      menuRef.current.style.transition = 'max-height 0.3s ease-in-out';
      menuRef.current.style.maxHeight = isMenuOpen ? `${menuRef.current.scrollHeight}px` : '0';
    }
  }, [isMenuOpen]);

  return (
    <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between relative">
      <div className="flex justify-between items-center">
        <span className="text-2xl ml-12 p-4 font-[Poppins] cursor-pointer">
          <img className="h-5 mr-1 inline" src={logo} alt="Logo" />
        </span>

        <span className="text-3xl cursor-pointer mx-2 md:hidden block" onClick={toggleMenu}>
          <ion-icon name={isMenuOpen ? 'close' : 'menu'}></ion-icon>
        </span>
      </div>

      <ul
        className="crossing md:flex md:items-center md:static overflow-hidden bg-white w-full md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100"
        ref={menuRef}
      >
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl hover:text-cyan-500 duration-500">
            HOME
          </a>
        </li>
        {/* Add other list items */}
      </ul>
    </nav>
  );
}
