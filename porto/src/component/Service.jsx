import React from 'react';

const Service = () => {
  return (
    <section id="service" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4 ">
        <p className="text-gray-400 text-center">What I Offer!</p>
        <h2 className="text-3xl font-bold text-center text-white mt-2">
          <span className="text-yellow-500">My</span> Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8     animate-pulse ">
          <div className="bg-gray-800 p-6 rounded-lg">
            <i className="ri-smartphone-line text-yellow-500 text-2xl"></i>
            <h4 className="text-white text-xl font-bold mt-4">Web Design</h4>
            <p className="text-gray-200 mt-2">
              We are dedicated to providing high-quality web design services
              that are tailored to meet the specific needs of our clients.
            </p>
            <a href="#" className="text-yellow-500 mt-4 inline-block">Read more...</a>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <i className="ri-code-s-slash-line text-yellow-500 text-2xl"></i>
            <h4 className="text-white text-xl font-bold mt-4">Web Development</h4>
            <p className="text-gray-200 mt-2">
              We use the latest web technologies and development tools to create
              websites that are fast, secure, and scalable.
            </p>
            <a href="#" className="text-yellow-500 mt-4 inline-block">Read more...</a>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <i className="ri-edit-2-line text-yellow-500 text-2xl"></i>
            <h4 className="text-white text-xl font-bold mt-4">Creative Design</h4>
            <p className="text-gray-200 mt-2">
              Our approach is collaborative, and we encourage your feedback
              throughout the design process to ensure that we are meeting your
              expectations.
            </p>
            <a href="#" className="text-yellow-500 mt-4 inline-block">Read more...</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;