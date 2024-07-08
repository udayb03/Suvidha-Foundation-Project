
// import React from "react";


// const Footer = () => {
//   return (
//     <div className="bg-gray-400 text-white py-10">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
//         <div>
//           <img
//             src={"./src/assets/Phd-Asssistance.png"}
//             alt="PhD Assistance"
//             className="mb-4"
//           />
//           <h2 className="text-xl font-bold mb-2">About us</h2>
//           <p className="text-sm px-2 tracking-wider">
//             Ph.D. Assistance serves as an external mentor to brainstorm your
//             idea and translate that into research model. Hiring a mentor or
//             tutor is common and therefore let your research committee known
//             about the same. We do not offer any writing services without the
//             involvement of the researcher, and therefore we’re merely a
//             translator for non-native English speakers and our services are
//             merely restricted to research scholars to hasten their research
//             process. We offer following services to research scholars across the
//             globe: ideas to translating in writing, editing, proofreading,
//             plagiarism correction, statistical analysis, coding and algorithm,
//             illustration and formatting.
//           </p>
//         </div>
//         <div>
//           <h2 className="text-xl font-bold mb-2">Main Services</h2>
//           <ul className="space-y-4 text-sm px-2">
//             <li>PhD Dissertation</li>
//             <li>Coursework</li>
//             <li>Literature Review</li>
//             <li>Phd Research Methodology</li>
//             <li>Data Analysis</li>
//             <li>Manuscript</li>
//             <li>Editing Services</li>
//             <li>Animation</li>
//             <li>Courses</li>
//           </ul>
//         </div>
//         <div>
//           <h2 className="text-xl font-bold mb-2">Links</h2>
//           <ul className="space-y-4 text-sm px-2">
//             <li>Blog</li>
//             <li>Industries</li>
//             <li>Pricing Details</li>
//             <li>Insights</li>
//             <li>Help-Guide</li>
//             <li>Our Sample Work</li>
//             <li>FAQ</li>
//             <li>Career</li>
//             <li>Contact us</li>
//             <li>Terms and Conditions</li>
//             <li>Privacy policy</li>
//             <li>Customer Centre</li>
//             <li>XML Sitemap</li>
//           </ul>
//         </div>
//         <div>
//           <h2 className="text-xl font-bold mb-2">Contact us</h2>
//           <ul className="text-sm space-y-4 px-2">
//             <li>UK: +44-7537 144372</li>
//             <li>India: +91-9176966446</li>
//             <li>Landline: +91-44-42124284</li>
//             <li>(Between 9.00 am – 6.00 pm IST)</li>
//             <li>For existing clients: +91-8754446693</li>
//             <li>Customer Care: +91-9384672299</li>
//             <li>Email: info@phdassistance.com</li>
//           </ul>
//           <div className="mt-4">
//             <input
//               type="text"
//               placeholder="Enter your search"
//               className="w-full px-3 py-2 border border-red-500 rounded text-black"
//             />
//           </div>
//           <div className="mt-4 flex space-x-2">
//             <img
//               src="./src/assets/trusted-site-1-min.png"
//               alt="Trusted Site"
//               className="h-8"
//             />
//             <img
//               src="./src/assets/siteseal_gd_3_h_d_m.png"
//               alt="GoDaddy Secure"
//               className="h-8"
//             />
//             <img src="./src/assets/mcfee-min.jpg" alt="McAfee Secure" className="h-8" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;



// Responsive Code
import React from "react";
import {
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaHome,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className="bg-[rgb(50,50,50)] text-white py-10 overflow-x-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="px-4">
          <a href="https://www.phdassistance.com/">
            {" "}
            {/*Change to our web link */}
            <img
              src={"./src/assets/Phd-Asssistance.png"}
              alt="PhD Assistance"
              className="mb-4"
            />
          </a>
          <h2 className="text-xl font-bold mb-2">About us</h2>
          <p className="text-sm tracking-wider mx-2">
            Ph.D. Assistance serves as an external mentor to brainstorm your
            idea and translate that into research model. Hiring a mentor or
            tutor is common and therefore let your research committee known
            about the same. We do not offer any writing services without the
            involvement of the researcher, and therefore we’re merely a
            translator for non-native English speakers and our services are
            merely restricted to research scholars to hasten their research
            process. We offer following services to research scholars across the
            globe: ideas to translating in writing, editing, proofreading,
            plagiarism correction, statistical analysis, coding and algorithm,
            illustration and formatting.
          </p>
        </div>
        <div className="px-4">
          <h2 className="text-xl font-bold mb-2">Main Services</h2>
          <ul className="space-y-4 text-sm mx-6 list-disc ">
            <li className="hover:text-red-500 cursor-pointer">
              {/* changing part */}
              {/* <Link to="/phd-dissertation">PhD Dissertation</Link>
               */}
              <a
                href="/phd-dissertation"
                target="_blank"
                // rel="noopener noreferrer"
              >
                PhD Dissertation
              </a>
            </li>

            <li className="hover:text-red-500 cursor-pointer">Coursework</li>
            <li className="hover:text-red-500 cursor-pointer">
              Literature Review
            </li>
            <li className="hover:text-red-500 cursor-pointer">
              Phd Research Methodology
            </li>
            <li className="hover:text-red-500 cursor-pointer">Data Analysis</li>
            <li className="hover:text-red-500 cursor-pointer">Manuscript</li>
            <li className="hover:text-red-500 cursor-pointer">
              Editing Services
            </li>
            <li className="hover:text-red-500 cursor-pointer">Animation</li>
            <li className="hover:text-red-500 cursor-pointer">Courses</li>
          </ul>
        </div>
        <div className="px-4">
          <h2 className="text-xl font-bold mb-2">Links</h2>
          <ul className="space-y-4 text-sm mx-6 list-disc">
            <li className="hover:text-red-500 cursor-pointer">Blog</li>
            <li className="hover:text-red-500 cursor-pointer">Industries</li>
            <li className="hover:text-red-500 cursor-pointer">
              Pricing Details
            </li>
            <li className="hover:text-red-500 cursor-pointer">Insights</li>
            <li className="hover:text-red-500 cursor-pointer">Help-Guide</li>
            <li className="hover:text-red-500 cursor-pointer">
              Our Sample Work
            </li>
            <li className="hover:text-red-500 cursor-pointer">FAQ</li>
            <li className="hover:text-red-500 cursor-pointer">Career</li>
            <li className="hover:text-red-500 cursor-pointer">Contact us</li>
            <li className="hover:text-red-500 cursor-pointer">
              Terms and Conditions
            </li>
            <li className="hover:text-red-500 cursor-pointer">
              Privacy policy
            </li>
            <li className="hover:text-red-500 cursor-pointer">
              Customer Centre
            </li>
            <li className="hover:text-red-500 cursor-pointer">XML Sitemap</li>
          </ul>
        </div>
        <div className="px-4">
          <h2 className="text-xl font-bold mb-2">Contact us</h2>
          <ul className="text-sm space-y-4 mx-2">
            <li>UK: +44-7537 144372</li>
            <li>India: +91-9176966446</li>
            <li>Landline: +91-44-42124284</li>
            <li>(Between 9.00 am – 6.00 pm IST)</li>
            <li>For existing clients: +91-8754446693</li>
            <li>Customer Care: +91-9384672299</li>
            <li>Email: info@phdassistance.com</li>
          </ul>
          <div className="mt-12">
            <input
              type="text"
              placeholder="Enter your search"
              className="w-full px-3 py-2 border border-red-600 rounded text-black space-y-4"
            />
          </div>
          <div className="mt-4 flex space-x-2">
            <img
              src="./src/assets/trusted-site-1-min.png"
              alt="Trusted Site"
              className="h-8"
            />
            <img
              src="./src/assets/siteseal_gd_3_h_d_m.png"
              alt="GoDaddy Secure"
              className="h-8"
            />
            <img
              src="./src/assets/mcfee-min.jpg"
              alt="McAfee Secure"
              className="h-8"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600 mt-8 pt-4 text-center">
        <p className="flex justify-center">
          © 2024 PhDassistance. All Rights Reserved.
        </p>
        <div className="mt-5 flex justify-center space-x-4 text-gray-400  ">
          <FaFacebook className="hover:text-white duration-300 cursor-pointer" />
          <FaXTwitter className="hover:text-white duration-300 cursor-pointer" />
          <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
          <FaLinkedin className="hover:text-white duration-300 cursor-pointer" />
          <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
