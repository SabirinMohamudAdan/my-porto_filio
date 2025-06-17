// import React from 'react';
// import { FaFacebook, FaLinkedin, FaEnvelope,FaGithub } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer id="contact" className="bg-gray-900 py-20">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center text-white">Contact
//            <span className="text-yellow-500">Me!</span></h2>
//         <p className="text-gray-200 text-center mt-2">If you have
//              any project in your mind</p>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
//           <div>
//             <p className="text-gray-200">
//               You can reach me through the contact form provided on this
//               website. Simply fill out the form with your name, email address,
//               and message, and I will get back to you as soon as possible.
//             </p>
          
//             <p className="text-gray-200">Wadjir,</p>
//             <p className="text-gray-200">Somalia-Mogadishu</p>
//             <div className="flex space-x-4 mt-4">
//               {/* Facebook Icon */}
//               <a href="#" className="text-yellow-500 hover:text-[#624d1d]
//                transition
//                duration-300  text-2xl">
//                 <FaFacebook />
//               </a>
//               {/* Email Icon */}
//               <a href="#" className="text-yellow-500 hover:text-[#624d1d] transition
//                duration-300 text-2xl">
//                 <FaEnvelope />
//               </a>
//               {/* guthub Icon */}
           
//               <a href="https://github.com/SabirinMohamudAdan" className="
//                  text-yellow-500 hover:text-[#624d1d] transition duration-300 text-2xl">
//             <FaGithub/>
//              </a>
//               {/* LinkedIn Icon */}
//               <a href="#" className="text-yellow-500 hover:text-[#624d1d] transition
//                duration-300 text-2xl">
//                 <FaLinkedin />
//               </a>
//             </div>
//           </div>
//           <form className="space-y-4">
//             <input type="text" placeholder="Your Name" className="w-full p-2 bg-gray-800 text-white rounded" />
//             <input type="email" placeholder="Your Email Address" className="w-full p-2 bg-gray-800 text-white rounded" />
//             <input type="tel" placeholder="Your Phone Number" className="w-full p-2 bg-gray-800 text-white rounded" />
//             <textarea placeholder="Your Idea" className="w-full p-2 bg-gray-800 text-white rounded" rows="4"></textarea>
//             <button type="submit" className="bg-yellow-500 text-white px-6 py-2 rounded
//              hover:bg-[#624d1d] transition duration-300">Send Message</button>
//           </form>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// ---------------------
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/SabirinMohamudAdan" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/yourprofile" },
    { icon: <FaTwitter />, url: "https://twitter.com/yourhandle" },
    { icon: <FaEnvelope />, url: "mailto:sabrinmohamud247@gmail.com" }
  ];

  return (
    <footer id="contact" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Contact <span className="text-yellow-500">Me</span>
          </h2>
          <p className="text-gray-400">Get in touch</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Let's talk about your project</h3>
            <p className="text-gray-300 mb-6">
              I'm available for freelance work and would love to discuss your project. 
              Feel free to reach out via email or the contact form.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-yellow-500 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-white" />
                </div>
                <div>
                  <h4 className="text-gray-400">Email me at</h4>
                  <a 
                    href="sabrinmohamud247@gmail.com" 
                    className="text-white hover:text-yellow-500 transition duration-300"
                  >
                    sabrinmohamud247@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-white mb-4">Follow me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-yellow-500 text-white hover:text-gray-900 p-3 rounded-full transition duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Sabirin Mohamud. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;