import React from 'react';
import { BiHome, BiConversation } from 'react-icons/bi';
import { TbBriefcase2, TbSpeakerphone } from 'react-icons/tb';
import { PiChartLineUp } from "react-icons/pi";
import { LuUsersRound, LuSettings, LuLogOut, LuToggleRight } from 'react-icons/lu';
import { HiOutlineLightningBolt, HiPlus } from "react-icons/hi";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { IoFilter } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LabelList } from 'recharts';
import { FiArrowRight } from "react-icons/fi";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import { TbArrowsUpDown } from "react-icons/tb";
import { FiCalendar } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import { TiAttachment } from "react-icons/ti";
import { BsThreeDotsVertical } from "react-icons/bs";

function App() {
  const cards = [
    {
      title: "ByteBridge",
      desc: "Corporate and personal data protection on a turnkey basis",
      date: "18 Apr",
      comments: 2,
      views: 1,
    },
    {
      title: "SkillUp Hub",
      desc: "Platform for professional development of specialists",
      date: "09 Mar",
      comments: 4,
      views: 1,
    },
    {
      title: "FitLife Nutrition",
      desc: "Nutritious food and nutraceuticals for individuals",
      date: "10 Mar",
      comments: 1,
      views: 3,
    },
    {
      title: "CloudSphere",
      desc: "Cloud services for data storage and processing for le...",
      date: "24 Mar",
      comments: 2,
      views: 1,
      faded: true,
    },
  ];

  const stages = [
    { title: "Contacted", count: 12 },
    { title: "Negotiation", count: 17 },
    { title: "Offer Sent", count: 13 },
    { title: "Deal Closed", count: 12 },
  ];

  const cardsRow2 = [
    {
      title: "AI Synergy",
      desc: "Innovative solutions based on artificial intelligence",
      date: "21 Mar",
      comments: 1,
      views: 3,
    },
    {
      title: "Thera Well",
      desc: "Platform for psychological support and consultations",
      date: "No due date",
      comments: 7,
      views: 2,
      noDueDate: true,
    },
    {
      dark: true,
      title: "Prime Estate",
      desc: "Agency-developer of low-rise elite and commercial real estate",
      address: "540 Realty Blvd, Miami, FL 33132",
      email: "contact@primeestate.com",
      manager: {
        name: "Antony Cardenas",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      },
      date: "16 Apr",
      comments: 1,
      views: 1,
    },
    {
      title: "Advantage Medi",
      desc: "Full cycle of digital advertising and social media promotion",
      date: "06 Apr",
      comments: 1,
      views: 3,
    },
  ];

  return (
    <div className="flex h-screen w-screen">
      <aside className="w-1/6 bg-white text-black p-2 flex flex-col border-r border-gray-200 h-full">
        <div className="flex-1 flex flex-col justify-end">
          <div className="mb-4">
            <span className="text-base font-semibold tracking-tight ml-2">BizLink</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <nav className="flex flex-col gap-1">
            <a href="#" className="flex items-center gap-2 text-black hover:text-black font-normal text-[13px] p-1.5 rounded-lg transition ml-4 hover:bg-[#f5f5f5] hover:font-medium">
              <BiHome className="h-5 w-5" />
              Dashboard
            </a>
            <a href="#" className="flex items-center justify-between text-black hover:text-black font-normal text-[13px] p-1.5 rounded-lg transition ml-4 hover:bg-[#f5f5f5] hover:font-medium">
              <span className="flex items-center gap-2">
                <TbBriefcase2 className="h-5 w-5" />
                Tasks
              </span>
              <span className="ml-4 bg-gray-100 text-gray-700 text-xs font-medium rounded-full px-1.5 py-0.5">2</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-black hover:text-black font-normal text-[13px] p-1.5 rounded-lg transition ml-4 hover:bg-[#f5f5f5] hover:font-medium">
              <PiChartLineUp className="h-5 w-5 font-semibold" />
              Activity
            </a>
            <a href="#" className="flex items-center gap-2 text-black hover:text-black font-normal text-[13px] p-1.5 rounded-lg transition ml-4 hover:bg-[#f5f5f5] hover:font-medium">
              <LuUsersRound className="h-5 w-5" />
              Customers
            </a>
            <a href="#" className="flex items-center gap-2 text-black hover:text-black font-normal text-[13px] p-1.5 rounded-lg transition ml-4 hover:bg-[#f5f5f5] hover:font-medium">
              <LuSettings className="h-5 w-5" />
              Settings
            </a>
          </nav>
        </div>
        <div className="flex-1 flex flex-col justify-start mt-5">
          <span className="text-xs text-gray-400 font-semibold mb-2 ml-4 flex items-center gap-1">Projects</span>
          <nav className="flex flex-col gap-1">
            <a href="#" className="flex items-center justify-between text-black hover:text-black font-normal text-[13px] p-1.5 rounded-lg transition ml-4 hover:bg-[#f5f5f5] hover:font-medium">
              <span className="flex items-center gap-2">
                <HiOutlineLightningBolt className="h-5 w-5" />
                BizConnect
              </span>
              <span className="ml-4 bg-gray-100 text-gray-700 text-xs font-medium rounded-full px-1.5 py-0.5">7</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-black hover:text-black font-normal text-[13px] p-1.5 rounded-lg transition ml-4 hover:bg-[#f5f5f5] hover:font-medium">
              <HiMiniArrowTrendingUp className="h-5 w-5" />
              Growth Hub
            </a>
            <a href="#" className="flex items-center gap-2 text-black hover:text-black font-normal text-[13px] p-1.5 rounded-lg transition ml-4 hover:bg-[#f5f5f5] hover:font-medium">
              <BiConversation className="h-5 w-5" />
              Conversation Path
            </a>
            <a href="#" className="flex items-center gap-2 text-black hover:text-black font-normal text-[13px] p-1.5 rounded-lg transition ml-4 hover:bg-[#f5f5f5] hover:font-medium">
              <TbSpeakerphone className="h-5 w-5" />
              Marketing
            </a>
          </nav>
        </div>
        <div className="flex-1 flex flex-col justify-end mt-5">
          <span className="text-xs text-gray-400 font-semibold mb-2 ml-4 flex items-center justify-between">
            <span>Members</span>
            <HiPlus className="h-4 w-4 text-gray-700 font-semibold mr-2" />
          </span>
          <a href="#" className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-[#f5f5f5] transition ml-4">
            <div className="relative">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sandra Perry" className="w-8 h-8 rounded-full object-cover" />
              <span className="absolute bottom-0 right-0 block w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-normal text-gray-900">Sandra Perry</span>
              <span className="text-xs text-gray-400">Product Manager</span>
            </div>
          </a>
          <a href="#" className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-[#f5f5f5] transition ml-4">
            <div className="relative">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="James Smith" className="w-8 h-8 rounded-full object-cover" />
              <span className="absolute bottom-0 right-0 block w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-normal text-gray-900">James Smith</span>
              <span className="text-xs text-gray-400">UI Designer</span>
            </div>
          </a>
          <a href="#" className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-[#f5f5f5] transition ml-4">
            <div className="relative">
              <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Priya Patel" className="w-8 h-8 rounded-full object-cover" />
              <span className="absolute bottom-0 right-0 block w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-normal text-gray-900">Priya Patel</span>
              <span className="text-xs text-gray-400">QA Engineer</span>
            </div>
          </a>
          <a href="#" className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-[#f5f5f5] transition ml-4">
            <div className="relative">
              <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="Liam Chen" className="w-8 h-8 rounded-full object-cover" />
              <span className="absolute bottom-0 right-0 block w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-normal text-gray-900">Liam Chen</span>
              <span className="text-xs text-gray-400">Backend Dev</span>
            </div>
          </a>
        </div>
        <div className="flex-1 flex flex-col justify-end mt-4">
          <a href="#" className="flex items-center justify-between gap-2 p-1.5 rounded-lg hover:bg-[#f5f5f5] transition ml-4">
            <div className="flex items-center gap-2">
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Iona Rollins" className="w-8 h-8 rounded-full object-cover" />
              <span className="text-[13px] text-gray-900">Iona Rollins</span>
            </div>
            <LuLogOut className="h-4 w-4 text-black font-semibold mr-2" />
          </a>
        </div>
      </aside>
      <main className="w-5/6 bg-white overflow-auto flex flex-col">
        <section className="h-[46%] w-full border-b border-gray-200" style={{ background: '#f6f7ed' }}>
          <nav className="h-[30%] flex items-center px-6 mb-0 pb-0">
            <div className="flex flex-row items-center w-full gap-8">
              <div className="flex items-center max-w-md ml-10 flex-shrink-0">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <input
                  type="text"
                  placeholder="Search customer..."
                  className="ml-3 bg-transparent outline-none border-none text-gray-500 placeholder-gray-400 text-[16px] placeholder:text-[15px] w-full"
                />
              </div>
              <div className="flex flex-row items-center gap-7 ml-auto">
                <div className="flex items-center cursor-pointer select-none">
                  <IoFilter className="w-5 h-5 text-gray-700" />
                  <span className="ml-2 text-#f1f1f1 text-[13px]">Sort by</span>
                </div>
                <div className="flex items-center cursor-pointer select-none">
                  <LuToggleRight className="w-5 h-5 text-gray-700" />
                  <span className="ml-2 text-black text-[13px]">Filters</span>
                </div>
                <div className="flex items-center cursor-pointer select-none">
                  <FiUser className="w-5 h-5 text-gray-700" />
                  <span className="ml-2 text-black text-[13px]">Me</span>
                </div>
                <button className="flex items-center bg-black text-white font-normal rounded-lg px-2.5 py-2 text-[13px] focus:outline-none">
                  <AiOutlinePlus className="text-lg font-normal mr-1" />
                  Add customer
                </button>
              </div>
            </div>
          </nav>
          <div className="h-[78%] w-full flex items-center px-6 pt-0 -mt-10">
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full h-[180px] bg-transparent">
                <span className="block text-base font-medium text-gray-800 ml-11 mb-4" style={{ display: 'block' }}>New customers</span>
                <ResponsiveContainer width="100%" height="90%">
                  <BarChart data={[
                    { name: 'Mon', current: 7, previous: 3 },
                    { name: 'Tue', current: 10, previous: 5 },
                    { name: 'Wed', current: 8, previous: 2 },
                    { name: 'Thu', current: 4, previous: 1 },
                    { name: 'Fri', current: 10, previous: 6 },
                  ]} barCategoryGap={16}>
                    <defs>
                      <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="3" height="6" patternTransform="rotate(45)">
                        <rect x="0" y="0" width="1.2" height="6" fill="#fff" />
                        <rect x="1.2" y="0" width="0.6" height="6" fill="#222" />
                      </pattern>
                    </defs>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#222' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#222' }} domain={[0, 10]} />
                    <Tooltip />
                    <Bar dataKey="previous" fill="url(#diagonalHatch)" radius={[4, 4, 0, 0]} barSize={18} />
                    <Bar dataKey="current" fill="#222" radius={[4, 4, 0, 0]} barSize={18} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center mt-15">
              <svg width="260" height="140" viewBox="0 0 260 140">
                {Array.from({ length: 41 }).map((_, i) => {
                  const angle = (Math.PI * i) / 40;
                  const x1 = 130 + 110 * Math.cos(angle - Math.PI);
                  const y1 = 120 + 110 * Math.sin(angle - Math.PI);
                  const x2 = 130 + 100 * Math.cos(angle - Math.PI);
                  const y2 = 120 + 100 * Math.sin(angle - Math.PI);
                  const isActive = i <= 27;
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={isActive ? '#222' : '#e5e5d7'}
                      strokeWidth={1}
                      strokeLinecap="round"
                    />
                  );
                })}
                <text x="130" y="90" textAnchor="middle" fontSize="24" fontWeight="500" fill="#222">68%</text>
                <text x="130" y="120" textAnchor="middle" fontSize="15" fill="#222" opacity="1">Successful deals</text>
              </svg>
            </div>
            <div className="flex-1 flex flex-row gap-14 items-end justify-start">
              <div className="flex flex-col items-start min-w-[90px]">
                <span className="text-[24px] font-medium text-[#222] mt-10">53</span>
                <div className="flex flex-row items-end justify-start mt-15">
                  <span className="text-[15px] text-[#222] text-left leading-tight font-normal">Tasks<br />in progress</span>
                  <FiArrowRight className="ml-4 mb-1" size={20} color="#222" />
                </div>
              </div>
              <div className="flex flex-row items-end min-w-[120px] ml-8">
                <div className="flex flex-col items-start ml-2">
                  <span className="text-[24px] font-medium text-[#222] mt-10">$ 15.890</span>
                  <span className="text-[15px] text-[#222] text-left leading-tight mt-15 font-normal">Prepayments<br />from customers</span>
                </div>
                <FiArrowRight className="ml-4 mb-1" size={20} color="#222" />
              </div>
            </div>
          </div>
        </section>
        <section className="h-[40%] w-full p-2">

          <div className="w-full flex flex-row gap-6">
            {stages.map((stage, idx) => (
              <div
                key={idx}
                className="flex-1 flex flex-col items-stretch"
              >
                <div className="flex flex-row items-center justify-between bg-white rounded-xl border border-white px-5 py-3 mb-2 gap-6">
                  <span className="text-[20px] font-medium text-black">{stage.title}</span>
                  <span className="flex items-center justify-center bg-white border border-gray-200  text-black text-xs font-normal rounded px-3 py-1">
                    {stage.count}
                    <TbArrowsUpDown className="ml-1 text-xs" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full mt-1 grid grid-cols-4 gap-6" style={{ alignItems: 'stretch' }}>
            {cards.map((card, idx) => (
              <div
                key={idx}
                className={`flex-1 ${card.faded ? "bg-gray-100" : "bg-white"} rounded-xl border border-gray-200 shadow-sm p-5 flex flex-col ${idx === 0 ? 'ml-2' : ''} ${idx === cards.length - 1 ? 'mr-2' : ''}`}
              >
                <div className="flex flex-row justify-between items-center mb-2">
                  <span className="font-medium text-[15px] text-black">{card.title}</span>
                  <BsThreeDotsVertical className="text-black text-xl" />
                </div>
                <div className="text-[12px] text-black mb-6">{card.desc}</div>
                <div className="flex flex-row items-center justify-between mt-auto">
                  <span className="flex items-center text-xs text-black border border-gray-200 rounded px-2 py-1">
                    <FiCalendar className="mr-1" /> {card.date}
                  </span>
                  <div className="flex flex-row gap-4">
                    <span className="flex items-center text-xs text-black">
                      <BiMessageDetail className="mr-1" /> {card.comments}
                    </span>
                    <span className="flex items-center text-xs text-black mr-2">
                      <TiAttachment className="mr-1" /> {card.views}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {cardsRow2.map((card, idx) => {
              if (card.dark) {
                return (
                  <div
                    key={idx}
                    className="bg-[#18191b] rounded-xl border border-gray-800 shadow-sm p-5 flex flex-col text-white row-span-2 min-h-[340px]"
                  >
                    <div className="flex flex-row justify-between items-center mb-2">
                      <span className="font-medium text-[15px] text-white">{card.title}</span>
                      <BsThreeDotsVertical className="text-white text-xl" />
                    </div>
                    <div className="text-[12px] text-white mb-4">{card.desc}</div>
                    <div className="flex flex-col gap-1 mb-4 text-[13px]">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        <span>{card.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12v1a4 4 0 01-8 0v-1m8 0V8a4 4 0 00-8 0v4m8 0a4 4 0 01-8 0" /></svg>
                        <span>{card.email}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-6">
                      <img src={card.manager.avatar} alt="Manager" className="w-7 h-7 rounded-full object-cover border-2 border-white" />
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-300">Manager</span>
                        <span className="text-xs text-white">{card.manager.name}</span>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-auto">
                      <span className="flex items-center text-xs text-white border border-gray-700 rounded px-2 py-1">
                        <FiCalendar className="mr-1" /> {card.date}
                      </span>
                      <div className="flex flex-row gap-4">
                        <span className="flex items-center text-xs text-white">
                          <BiMessageDetail className="mr-1" /> {card.comments}
                        </span>
                        <span className="flex items-center text-xs text-white mr-2">
                          <TiAttachment className="mr-1" /> {card.views}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <div
                  key={idx}
                  className={`rounded-xl border border-gray-200 shadow-sm p-5 flex flex-col min-h-[160px]${idx === 0 ? ' ml-2' : ''}${idx === 3 ? ' mr-2 bg-gray-100' : ' bg-white'}`}
                >
                  <div className="flex flex-row justify-between items-center mb-2">
                    <span className="font-medium text-[15px] text-black">{card.title}</span>
                    <BsThreeDotsVertical className="text-black text-xl" />
                  </div>
                  <div className="text-[12px] text-black mb-6">{card.desc}</div>
                  <div className="flex flex-row items-center justify-between mt-auto">
                    <span className="flex items-center text-xs text-black border border-gray-200 rounded px-2 py-1">
                      <FiCalendar className="mr-1" /> {card.noDueDate ? <span>No due date</span> : card.date}
                    </span>
                    <div className="flex flex-row gap-4">
                      <span className="flex items-center text-xs text-black">
                        <BiMessageDetail className="mr-1" /> {card.comments}
                      </span>
                      <span className="flex items-center text-xs text-black mr-2">
                        <TiAttachment className="mr-1" /> {card.views}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
