// import React from 'react';

// const Service = () => {
//   return (
//     <section id="service" className="bg-gray-900 py-20">
//       <div className="container mx-auto px-4 ">
//         <p className="text-gray-400 text-center">What I Offer!</p>
//         <h2 className="text-3xl font-bold text-center text-white mt-2">
//           <span className="text-yellow-500">My</span> Services</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8     animate-pulse ">
//           <div className="bg-gray-800 p-6 rounded-lg">
//             <i className="ri-smartphone-line text-yellow-500 text-2xl"></i>
//             <h4 className="text-white text-xl font-bold mt-4">Web Design</h4>
//             <p className="text-gray-200 mt-2">
//               We are dedicated to providing high-quality web design services
//               that are tailored to meet the specific needs of our clients.
//             </p>
//             <a href="#" className="text-yellow-500 mt-4 inline-block">Read more...</a>
//           </div>
//           <div className="bg-gray-800 p-6 rounded-lg">
//             <i className="ri-code-s-slash-line text-yellow-500 text-2xl"></i>
//             <h4 className="text-white text-xl font-bold mt-4">Web Development</h4>
//             <p className="text-gray-200 mt-2">
//               We use the latest web technologies and development tools to create
//               websites that are fast, secure, and scalable.
//             </p>
//             <a href="#" className="text-yellow-500 mt-4 inline-block">Read more...</a>
//           </div>
//           <div className="bg-gray-800 p-6 rounded-lg">
//             <i className="ri-edit-2-line text-yellow-500 text-2xl"></i>
//             <h4 className="text-white text-xl font-bold mt-4">Creative Design</h4>
//             <p className="text-gray-200 mt-2">
//               Our approach is collaborative, and we encourage your feedback
//               throughout the design process to ensure that we are meeting your
//               expectations.
//             </p>
//             <a href="#" className="text-yellow-500 mt-4 inline-block">Read more...</a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Service;

// --------------------

import React from 'react';
import { FaCode, FaPaintBrush, FaMobile, FaDatabase, FaSearch, FaServer } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode className="text-3xl text-yellow-500" />,
    title: "Web Development",
    description: "Custom website development using modern technologies like React.js and Tailwind CSS."
  },
  // {
  //   icon: <FaMobile className="text-3xl text-yellow-500" />,
  //   title: "Mobile Development",
  //   description: "Cross-platform mobile app development with  for iOS and Android."
  // },
  {
    icon: <FaServer className="text-3xl text-yellow-500" />,
    title: "Backend Development",
    description: "Robust backend solutions with Node.js, Express, and MongoDB or mysql"
  },
  {
    icon: <FaPaintBrush className="text-3xl text-yellow-500" />,
    title: "UI/UX Design",
    description: "Beautiful, intuitive user interfaces designed with Figma and Adobe XD."
  },
  {
    icon: <FaDatabase className="text-3xl text-yellow-500" />,
    title: "Database Design",
    description: "Efficient database architecture and optimization for performance."
  },
  // {
  //   icon: <FaSearch className="text-3xl text-yellow-500" />,
  //   title: "SEO Optimization",
  //   description: "Improve your website's visibility and ranking on search engines."
  // }
];

const Service = () => {
  return (
    <section id="service" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            My <span className="text-yellow-500">Services</span>
          </h2>
          <p className="text-gray-400">What I offer</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition duration-300 hover:-translate-y-2 shadow-lg"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;