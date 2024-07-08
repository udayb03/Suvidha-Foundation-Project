import React, { useState, useEffect } from 'react';
import './navbar.css';
import { FaPhone } from "react-icons/fa";
import { IoIosSearch, IoIosArrowDown, IoIosArrowUp, IoIosMail } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineXMark } from "react-icons/hi2";
import logo from '../assets/SuvidhaLogo.png';
// import Modal2 from './Modal2';
import Modal1 from './Modal1';
// import {Link} from 'react-router-dom';


const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [industryDropdown, setIndustryDropdown] = useState(false);

    const [isSticky, setIsSticky] = useState(false);

    const handleOnClick = () => {
        setNavbarOpen(!navbarOpen);
    };
    const servicesDropdown = [
        {}
    ];
    const industriesDropdown = [
        {}
    ];

    const handleDropdown = () => {
        setDropdown(!dropdown);
    };
    const handleIndustryDropdown = () => {
        setIndustryDropdown(!industryDropdown);
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    

    return (
        <>
            <div className='nav bg-[#bf2229] w-full text-white p-3 flex flex-col sm:gap-2 max-[395px]:gap-3 lg:flex-row lg:justify-between lg:px-48 gap-2 items-center justify-center text-sm'>
                <div className='flex flex-col sm:flex-row sm:gap-2 gap-1 items-center justify-center '>
                    <div className='hidden min-[395px]:block'><p>Have any questions?</p></div>
                    <div className='flex sm:flex-row items-center gap-1'><FaPhone size={'12px'} /> <p className='text-sm'>+91-9176966446</p></div>
                    <div className='flex items-center gap-1'><IoIosMail size={'17px'} /> <p>info@phdassistance.com</p></div>
                </div>
                <div className='flex gap-1 items-center justify-center'>
                    <p className='px-2 border-white border-r-2'>Research</p>
                    <p className='px-2 border-white border-r-2'>Insights</p>
                    <p className='px-2'>FAQ</p>
                </div>
            </div>
            <header className={`${isSticky ? 'bg-white shadow-md fixed top-0 left-0' : ''} bg-white w-full flex md:justify-around justify-between z-50 items-center p-3 px-10 md:gap-2 md:px-2 lg:px-20 md:text-sm lg:text-md `}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={logo} alt="logo" className='w-[4.7vw] h-[4.7vw] rounded-full' />
                </a>
                <nav>
                    <button onClick={handleOnClick} className='md:hidden z-50'>{!navbarOpen ? <RxHamburgerMenu className='w-14 h-10 text-[#bf2229]' /> : <HiOutlineXMark className='w-14 h-10 text-[#bf2229]' />}</button>
                    {navbarOpen &&
                        <ul className={`nav absolute left-0 w-full min-h-screen space-y-3 p-2 py-7 z-50 mt-3 tracking-wide md:hidden text-white text-md bg-[#bf2229] transform translate-x-0 md:relative md:items-center md:justify-between md:space-y-0 md:mt-0 md:p-0 md:translate-x-0 md:text-sm  ${navbarOpen ? 'translate-x-0' : 'translate-x-full'} transition-all duration-500`}>
                            <li className='p-2 hover:bg-black'><a href="">ABOUT US</a></li>
                            <li className='p-2 hover:bg-black relative group' onClick={handleDropdown}>
                                <a href="#" className='flex justify-between items-center md:gap-1'>SERVICES {!dropdown ? <IoIosArrowDown /> : <IoIosArrowUp />}</a>
                            </li>
                            {dropdown &&
                                <div className='bg-[#bf2229] p-2 mt-3 w-full left-0 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 '>
                                    <ul>
                                        <h1 className='font-bold'><a>PHD DISSERTATION</a></h1>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>PhD Topic Selection</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Problem Identification</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Research Proposal</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Pilot Study</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>PhD. Dissertation (Full)</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>PhD-Consultaiton</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Viva Voce</a></li>
                                    </ul>
                                    <ul >
                                        <h1 className='font-bold'><a>COURSEWORK</a></h1>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>PhD Coursework Abstract Writing Help</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Assignment</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Interim-Report</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Exam Notes</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Synopsis Preparation</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Power Point</a></li>
                                    </ul>
                                    <ul>
                                        <h1 className=' font-bold'><a>LITERATURE REVIEW</a></h1>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Reference Collection</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Conceptual Framework</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>TheorEtical Framework</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Annotated Bibliography</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Theorem Development</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Gap Identification</a></li>
                                    </ul>
                                    <ul>
                                        <li className='p-1 list-none font-bold'><a>PHD RESEARCH METHODOLOGY</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Research Design</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Sampling</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Sample Size</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Power Clculation</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Qualitative Methodology</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Quantitative Methodology</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Primary Data Collection</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Secondary Data Collection</a></li>
                                    </ul>
                                    <ul>
                                        <li className='p-1 list-none font-bold'><a>DATA ANALYTICS</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Quantitative Statistics</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Textual / Content Analysis</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Biostatistics</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Econometrics</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Big Data Analytics</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Software Programming</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Computer Programming</a></li>
                                    </ul>
                                    <ul>
                                        <h1 className='font-bold'><a>EDITING SERVICES</a></h1>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Translation</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Transcription</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Plagiarism Correction</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Formatting & Referencing</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Redrawing</a></li>
                                    </ul>
                                    <ul>
                                        <h1 className='font-bold'><a>MANUSCRIPT</a></h1>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Manuscript Rewriting</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Manuscript Copyediting</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Manuscript Peer Reviewing</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Manuscript Statistics</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Manuscript Plagiarism Correction</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Conference & Seminar Paper</a></li>
                                    </ul>
                                    <ul>
                                        <h1 className='font-bold'><a>COURSES</a></h1>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Writing for a journal</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Academic Statistics</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Journal Manuscript Writing</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Research Methodology</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Animation</a></li>
                                        <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>PhD Animation Services</a></li>
                                    </ul>
                                </div>
                            }

                            <li className='p-2 hover:bg-black relative group' onClick={handleIndustryDropdown}>
                                <a href="#" className='flex justify-between items-center md:gap-1'>INDUSTRIES {!industryDropdown ? <IoIosArrowDown /> : <IoIosArrowUp />}</a>
                            </li>
                            {
                                industryDropdown &&
                                <div className='bg-[#bf2229] p-2 mt-3 left-0 grid sm:grid-cols-2'>
                                    <div className='w-full'>
                                        <li className='p-2 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-4 w-full'><a>ACADEMIC LAW WRITING</a></li>
                                        <li className='p-2 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-4'><a>ARTS AND HUMANITIES</a></li>
                                        <li className='p-2 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-4'><a>MEDICINE & HEALTHCARE</a></li>

                                        <li className='p-2 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-4'><a>BUSINESS & MANAGEMENT</a></li>
                                    </div>

                                    <div className='w-full'>
                                        <li className='p-2 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-4'><a>ECONOMIC & FINANCE ACADEMIC</a></li>
                                        <li className='p-2 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-4'><a>COMPUTER SCIENCE & INFORMATION</a></li>

                                        <li className='p-2 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-4'><a>ENGINEERING & TECHNOLOGY</a></li>
                                        <li className='p-2 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-4'><a>BIOLOGICAL & LIFE SCIENCE</a></li>
                                    </div>
                                </div>
                            }
                            <li className='p-2 hover:bg-black'><a href="">PRICING</a></li>
                            <li className='p-2 hover:bg-black'><a href="">HELP-GUIDE</a></li>
                            <li className='p-2 hover:bg-black'><a href="">CONTACT US</a></li>
                            <li className='p-2 hover:bg-black'><a href="">HIRE A RESEARCH ASSISTANT</a></li>
                        </ul>
                    }


                    {/* medium screens */}
                    <ul className={`nav fixed left-0 space-y-3 p-3 right-0 mt-7 tracking-wide text-white text-md bg-[#bf2229] transform translate-x-full md:relative md:flex md:items-center md:justify-between md:space-y-0 md:mt-0 md:p-0 md:translate-x-0 md:text-sm ${navbarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                        <li className='p-2 hover:bg-black'><a href="">ABOUT US</a></li>
                        <li className='p-2 hover:bg-black relative group'>
                            <a href="#" className='flex justify-between items-center md:gap-1'>SERVICES <IoIosArrowDown className='group-hover:hidden' /> <IoIosArrowUp className='hidden group-hover:block' /></a>
                            {
                                servicesDropdown && (
                                    <>
                                        <div className='py-2 absolute top-8 hidden group-hover:md:block hover:md:block'>
                                            <div className='w-4 h-4 left-3 bg-black absolute rotate-45'></div>
                                        </div>
                                        <div className='absolute z-50 hidden group-hover:md:block hover:md:block top-12 w-[52vw] flex-row bg-black text-white rounded-md' >
                                            <div className='w-full h-auto flex items-start p-3 text-xs '>
                                                <ul className='w-1/4'>
                                                    <li className='p-1 list-none font-bold'><a>PHD DISSERTATION</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>PhD Topic Selection</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Problem Identification</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Research Proposal</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Pilot Study</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>PhD. Dissertation (Full)</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>PhD-Consultaiton</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Viva Voce</a></li>
                                                </ul>

                                                <ul className='w-1/4'>
                                                    <li className='p-1 list-none font-bold'><a>COURSEWORK</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>PhD Coursework Abstract Writing Help</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Assignment</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Interim-Report</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Exam Notes</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Synopsis Preparation</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Power Point</a></li>
                                                </ul>
                                                <ul className='w-1/4'>
                                                    <li className='p-1 list-none font-bold'><a>LITERATURE REVIEW</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Reference Collection</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Conceptual Framework</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>TheorEtical Framework</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Annotated Bibliography</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Theorem Development</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Gap Identification</a></li>
                                                </ul>
                                                <ul className='w-1/4'>
                                                    <li className='p-1 list-none font-bold'><a>PHD RESEARCH METHODOLOGY</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Research Design</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Sampling</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Sample Size</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Power Clculation</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Qualitative Methodology</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Quantitative Methodology</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Primary Data Collection</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Secondary Data Collection</a></li>
                                                </ul>
                                            </div>
                                            <div className='w-full h-auto flex items-start p-3 text-xs'>
                                                <ul className='w-1/4 '>
                                                    <li className='p-1 list-none font-bold'><a>DATA ANALYTICS</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Quantitative Statistics</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Textual / Content Analysis</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Biostatistics</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Econometrics</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Big Data Analytics</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Software Programming</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Computer Programming</a></li>
                                                </ul>
                                                <ul className='w-1/4'>
                                                    <li className='p-1 list-none font-bold'><a>EDITING SERVICES</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Translation</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Transcription</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Plagiarism Correction</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Formatting & Referencing</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Redrawing</a></li>
                                                </ul>
                                                <ul className='w-1/4'>
                                                    <li className='p-1 list-none font-bold'><a>MANUSCRIPT</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Manuscript Rewriting</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Manuscript Copyediting</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Manuscript Peer Reviewing</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Manuscript Statistics</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Manuscript Plagiarism Correction</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Conference & Seminar Paper</a></li>
                                                </ul>
                                                <ul className='w-1/4'>
                                                    <li className='p-1 list-none font-bold'><a>COURSES</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Writing for a journal</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Academic Statistics</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Journal Manuscript Writing</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Research Methodology</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>Animation</a></li>
                                                    <li className='p-1 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-2'><a>PhD Animation Services</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </>)
                            }
                        </li>

                        <li className='p-2 hover:bg-black relative group'>
                            <a href="" className='flex justify-between items-center md:gap-1'>INDUSTRIES <IoIosArrowDown className='group-hover:hidden' /> <IoIosArrowUp className='hidden group-hover:block' /></a>
                            {
                                industriesDropdown && (
                                    <>
                                        <div className='py-2 absolute top-8 hidden group-hover:block hover:block '>
                                            <div className='w-4 h-4 left-3 bg-black absolute rotate-45'></div>
                                        </div>
                                        <div className='absolute hidden group-hover:block hover:block top-12 w-[52vw] flex-row bg-black z-50 rounded-md'>
                                            <div className='w-full text-white flex items-start p-3 text-xs font-bold'>
                                                <div className='w-1/3 basis-2/6'>
                                                    <li className='p-2 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-4'><a>ACADEMIC LAW WRITING</a></li>
                                                    <li className='p-2 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-4'><a>ARTS AND HUMANITIES</a></li>
                                                    <li className='p-2 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-4'><a>MEDICINE & HEALTHCARE</a></li>
                                                </div>
                                                <div className='w-1/3  basis-2/6'>
                                                    <li className='p-2 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-4'><a>BUSINESS & MANAGEMENT</a></li>
                                                    <li className='p-2 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-4'><a>ECONOMIC & FINANCE ACADEMIC</a></li>
                                                    <li className='p-2 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-4'><a>COMPUTER SCIENCE & INFORMATION</a></li>
                                                </div>
                                                <div className='w-1/3 basis-2/6'>
                                                    <li className='p-2 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-4'><a>ENGINEERING & TECHNOLOGY</a></li>
                                                    <li className='p-2 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-4'><a>BIOLOGICAL & LIFE SCIENCE</a></li>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        </li>
                        <li className='p-2 hover:bg-black'><a href="">PRICING</a></li>
                        <li className='p-2 hover:bg-black'><a href="">HELP-GUIDE</a></li>
                        <li className='p-2 hover:bg-black'><a href="">CONTACT US</a></li>
                        <li className='p-2 hover:bg-black'><a href="">HIRE A RESEARCH ASSISTANT</a></li>
                    </ul>
                </nav>
                <IoIosSearch className='h-8 w-8 hidden lg:block' />
            </header>
        </>
    )
}

export default Navbar