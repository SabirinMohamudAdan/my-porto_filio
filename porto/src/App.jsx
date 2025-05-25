// import React from 'react';
// import Navbar from './component/Navbar';
// import Header from './component/Header';
// import About from './component/About';
// import Service from './component/Service';
// import Project from './component/Project';
// import Footer from './component/Footer';


// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Header/>
//       <About />
//       <Service />
//       <Project/>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Service from './components/Service';
import Project from './components/Project';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/react';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App bg-gray-900">
          
        <Header />
        <About />
        <Service />
        <Project />
        <Footer />
        <Analytics />
      </div>
    </Router>
  );
}

export default App;