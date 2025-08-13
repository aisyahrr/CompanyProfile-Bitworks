import React from 'react'
import Content from '../Components/Content';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const services = [
  {
    icon: '/Image/code.png',
    title: 'Web Development',
  },
  {
    icon: '/Image/user-interface.png',
    title: 'Mobile App Development',
  },
  {
    icon: '/Image/tool.png',
    title: 'UI/UX Design',
  },
  {
    icon: '/Image/light-bulb.png',
    title: 'Konsultan IT',
  },
];

const teamMembers = [
  {
    name: "Aisyah Rahmawati",
    role: "Front-end Developer",
    bio: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    img: "/Image/hero.jpeg",
  },
  {
    name: "M. Adha Alfaridzi",
    role: "Back-end Developer",
    bio: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    img: "/Image/hero.jpeg",
  },
  {
    name: "M. Arul Andriansyah",
    role: "Front-end Developer",
    bio: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    img: "/Image/hero.jpeg",
  },
];

const Home = () => {
  return (
    <div className="relative  mx-12 my-5 pb-10">
      <div className="relative mb-12">
        <img src="/Image/hero.jpeg" alt="" className="w-full h-[536px] object-cover rounded-md" />
        <div className="absolute inset-0 bg-black/33"></div>

        {/* Card Section */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex gap-6 px-6 py-4 z-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg p-4 bg-white shadow-md hover:shadow-lg hover:cursor-pointer transition"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-10 h-10 mb-2 object-contain"
              />
              <p className="font-Primary text-sm text-center font-semibold">{service.title}</p>
            </div>
          ))}
        </div>
      </div>
      <Content/>
      {/* About */}
       <div className="mt-10">
            <div className='justify-center text-center'>
              <button className="bg-indigo-300 hover:bg-blue-400 text-blue-900 px-10 py-3 rounded-full font-medium mt-15 mb-7">
                About Bitworks
              </button>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, rem!</p>
            </div>
           <div className="flex justify-center items-start gap-10 mt-10">
            <div className="w-[500px] h-[350px] rounded-lg shadow-md hover:shadow-lg hover:cursor-pointer overflow-hidden">
              <img
                src="/Image/hero.jpeg"
                alt=""
                className="w-full h-full object-cover   bg-white shadow-md hover:shadow-lg hover:cursor-pointer rounded-lg p-8 "
              />
            </div>

            <div className="text-justify max-w-[500px] ">
              <p>
                Bitworks adalah perusahaan teknologi yang berbasis di Indonesia, berdedikasi
                dalam menciptakan solusi digital inovatif dan efektif untuk berbagai jenis bisnis.
                Kami percaya bahwa teknologi bukan hanya tentang alat — tetapi tentang bagaimana
                alat tersebut bisa menciptakan dampak yang nyata.
              </p>
              <p className="mt-3">
                Dengan tim yang terdiri dari engineer, desainer, dan konsultan digital yang
                berpengalaman, Bitworks telah membantu berbagai perusahaan — dari startup hingga
                korporasi besar — untuk melakukan transformasi digital, meningkatkan efisiensi
                operasional, dan menghadirkan pengalaman pengguna yang unggul.
              </p>
              <p className="mt-3">
                Kami berkomitmen untuk terus berinovasi dan memberikan solusi yang relevan,
                fungsional, dan scalable.
              </p>
              <button className="w-[180px] mt-5 py-2 bg-gradient-to-r from-Primary to-SecondPrimary text-white hover:cursor-pointer rounded-lg font-semibold text-xl">
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      {/* Team */}\
      <div className='mt-10 '>
        <div className='justify-center text-center'>
          <button className="bg-indigo-300 hover:bg-blue-400 text-blue-900 px-10 py-3 rounded-full font-medium mt-15 mb-7">
            Our Team
          </button>
          <p>Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
        </div>
          <div className="flex justify-center font-Primary gap-6 flex-wrap mt-7">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg w-[300px] overflow-hidden"
              >
                {/* Gambar */}
                <div className="w-full h-[210px] p-3 ">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                {/* Info */}
                <div className="p-5 text-left">
                  <h3 className="font-semibold text-lg text-gray-800">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                  <p className="mt-3 text-sm text-gray-600">{member.bio}</p>

                  {/* Icons */}
                  <div className="flex justify-start gap-4 mt-4 text-gray-500">
                    <FaInstagram className="hover:text-pink-600 cursor-pointer" />
                    <FaLinkedin className="hover:text-sky-600 cursor-pointer" />
                    <FaGithub className="hover:text-gray-800 cursor-pointer" />
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};


export default Home