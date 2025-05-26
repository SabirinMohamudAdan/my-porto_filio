// import React, { useState } from 'react';
// import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';


// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false); 
 

//   const toggleMenu = () => {
//     setIsOpen(!isOpen); 
//   };

//   return (
//     <nav className="bg-gray-900 p-4 fixed w-full top-0 z-50">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-white text-2xl font-bold">
//           <a href="#" className="hover:text-yellow-500"><span className='
//           text-yellow-500'>Sabirin</span>Mohamud.</a>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-4 text-xl ">
//           <a href="#home" className="text-yellow-500   hover:underline ">Home</a>
//           <a href="#about" className="text-white hover:text-yellow-500  hover:underline">About</a>
//           <a href="#service" className="text-white hover:text-yellow-500 hover:underline">Service</a>
//           <a href="#contact" className="text-white hover:text-yellow-500 hover:underline">Contact</a>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-white hover:text-yellow-500 focus:outline-none">
//             {isOpen ? <RiCloseLine className="w-6 h-6" /> : <RiMenu3Line className="w-6 h-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-gray-900 mt-4 text-xl  `}>
//         <a href="#about" className="block text-white hover:text-yellow-500 p-2  ">Home</a>
//         <a href="#home" className="block text-white hover:text-yellow-500 p-2">About</a>
//         <a href="#service" className="block text-white hover:text-yellow-500 p-2">Service</a>
//         <a href="#contact" className="block text-white hover:text-yellow-500 p-2">Contact</a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from 'react';
// import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import { motion } from 'framer-motion';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { id: 'home', label: 'Home' },
//     { id: 'about', label: 'About' },
//     { id: 'services', label: 'Services' },
//     { id: 'projects', label: 'Projects' },
//     { id: 'contact', label: 'Contact' }
//   ];

//   return (
//     <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900 shadow-lg py-2' : 'bg-transparent py-4'}`}>
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <motion.a 
//             href="#home" 
//             className="text-2xl font-bold text-white"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <span className="text-yellow-500">S</span>abirin.
//           </motion.a>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-8">
//             {navItems.map((item) => (
//               <motion.a
//                 key={item.id}
//                 href={`#${item.id}`}
//                 className="relative text-white hover:text-yellow-500 transition-colors duration-300 px-1 py-2 text-lg font-medium"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 {item.label}
//                 {item.id === 'home' && (
//                   <motion.span 
//                     className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500"
//                     layoutId="activeNav"
//                   />
//                 )}
//               </motion.a>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button 
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden text-white focus:outline-none z-50"
//             aria-label="Toggle menu"
//           >
//             {isOpen ? (
//               <RiCloseLine className="w-6 h-6" />
//             ) : (
//               <RiMenu3Line className="w-6 h-6" />
//             )}
//           </button>

//           {/* Mobile Menu */}
//           {isOpen && (
//             <motion.div 
//               initial={{ opacity: 0, x: '100%' }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: '100%' }}
//               transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//               className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center space-y-8"
//             >
//               {navItems.map((item) => (
//                 <motion.a
//                   key={item.id}
//                   href={`#${item.id}`}
//                   className="text-2xl text-white hover:text-yellow-500 transition-colors duration-300"
//                   onClick={() => setIsOpen(false)}
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   {item.label}
//                 </motion.a>
//               ))}
//             </motion.div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// import React, { useState, useEffect } from 'react';
// import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import { motion } from 'framer-motion';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { id: 'home', label: 'Home' },
//     { id: 'about', label: 'About' },
//     { id: 'services', label: 'Services' },
//     { id: 'projects', label: 'Projects' },
//     { id: 'contact', label: 'Contact' }
//   ];

//   return (
//     <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900 shadow-lg py-2' : 'bg-transparent py-4'}`}>
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <motion.a 
//             href="#home" 
//             className="text-2xl font-bold text-white"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <span className="text-yellow-500">S</span>abirin.
//           </motion.a>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-8">
//             {navItems.map((item) => (
//               <motion.a
//                 key={item.id}
//                 href={`#${item.id}`}
//                 className="relative text-white hover:text-yellow-500 transition-colors duration-300 px-1 py-2 text-lg font-medium"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 {item.label}
//               </motion.a>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button 
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden text-white focus:outline-none z-50"
//             aria-label="Toggle menu"
//           >
//             {isOpen ? (
//               <RiCloseLine className="w-6 h-6" />
//             ) : (
//               <RiMenu3Line className="w-6 h-6" />
//             )}
//           </button>

//           {/* Mobile Menu */}
//           {isOpen && (
//             <motion.div 
//               initial={{ opacity: 0, x: '100%' }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: '100%' }}
//               transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//               className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center space-y-8"
//             >
//               {navItems.map((item) => (
//                 <motion.a
//                   key={item.id}
//                   href={`#${item.id}`}
//                   className="text-2xl text-white hover:text-yellow-500 transition-colors duration-300"
//                   onClick={() => setIsOpen(false)}
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   {item.label}
//                 </motion.a>
//               ))}
//             </motion.div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


