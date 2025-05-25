// import React, { useState } from 'react';

// const CVModal = ({ isOpen, onClose }) => {
//   const [activeTab, setActiveTab] = useState('preview');
  
//   // Replace with your actual Word file URL
//   const wordFileUrl = 'https://docs.google.com/document/d/YOUR_FILE_ID/export?format=docx';
//   const pdfFileUrl = 'https://docs.google.com/document/d/YOUR_FILE_ID/export?format=pdf';

//   return (
//     <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col mx-4">
//         <div className="flex justify-between items-center border-b p-4">
//           <h2 className="text-xl font-bold">Sabirin Mohamud Adan - Curriculum Vitae</h2>
//           <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//             ✕
//           </button>
//         </div>
        
//         <div className="flex border-b">
//           <button
//             className={`px-4 py-2 font-medium ${activeTab === 'preview' ? 'border-b-2 border-orange-500 text-orange-600' : 'text-gray-500 hover:text-gray-700'}`}
//             onClick={() => setActiveTab('preview')}
//           >
//             Preview
//           </button>
//           <button
//             className={`px-4 py-2 font-medium ${activeTab === 'download' ? 'border-b-2 border-orange-500 text-orange-600' : 'text-gray-500 hover:text-gray-700'}`}
//             onClick={() => setActiveTab('download')}
//           >
//             Download
//           </button>
//         </div>

//         <div className="flex-grow overflow-auto">
//           {activeTab === 'preview' ? (
//             <div className="h-[60vh] p-4">
//               <p className="text-center text-gray-500">
//                 Preview not available. Please download the CV to view it.
//               </p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
//               <DownloadOption
//                 icon="📄"
//                 title="Download Word (DOCX)"
//                 description="Original editable format"
//                 url={wordFileUrl}
//                 fileName="Sabirin_Mohamud_CV.docx"
//               />
//               <DownloadOption
//                 icon="📑"
//                 title="Download PDF"
//                 description="Best for printing"
//                 url={pdfFileUrl}
//                 fileName="Sabirin_Mohamud_CV.pdf"
//               />
//               <div className="md:col-span-2 bg-blue-50 p-4 rounded-lg">
//                 <h4 className="font-medium mb-2">Alternative Options</h4>
//                 <ul className="space-y-2">
//                   <li>
//                     Email: <a 
//                       href="mailto:sabrinmohamud247@gmail.com" 
//                       className="text-blue-600 hover:underline"
//                     >
//                       sabrinmohamud247@gmail.com
//                     </a> to request the CV
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Download Option Component
// const DownloadOption = ({ icon, title, description, url, fileName }) => (
//   <a
//     href={url}
//     download={fileName}
//     className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors text-center"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <span className="text-2xl mb-2">{icon}</span>
//     <h3 className="font-medium">{title}</h3>
//     <p className="text-sm text-gray-500 mt-1">{description}</p>
//   </a>
// );

// export default CVModal;