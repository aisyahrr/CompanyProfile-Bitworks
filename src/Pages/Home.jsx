import React from 'react'

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

const clients = [
  {
    icon: '/Image/KAI.png'
  },
  {
    icon: '/Image/mandiri.png'
  },
  {
    icon: '/Image/Gojek.png'
  },
  {
    icon: '/Image/BCA.png'
  }
]

const Home = () => {
  return (
    <div className="relative mx-12 my-5 pb-10">
      <div className="relative">
        <img src="/Image/hero.jpeg" alt="" className="w-full h-[536px] object-cover" />
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
      <div className='relative'>
        <div className=' text-center mt-[150px] '>
          <span className='text-3xl font-semibold'>Trusted by several top companies</span>
        </div>
        {/* {Card Clients} */}
        <div className='relative flex justify-center py-10 gap-6 '>
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg py-[10px] px-10  bg-white shadow-md hover:shadow-lg hover:cursor-pointer transition"
            >
              <img src={client.icon} className="w-27 h-27 mb-2 object-contain" />
            </div>
          ))}
        </div>
      </div>
      <div>
        <div>
          <div className='mt-[120px]'>
            <div className='translate-x-10'>
              <span className='text-5xl'>Get To Know Us</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, rem!</p>
            </div>
            <div className='flex justify-around'>
              <div>
                <img src="/Image/hero.jpeg" alt="" className='w-lg mt-5  bg-white shadow-md hover:shadow-lg hover:cursor-pointer rounded-lg bg-Second p-8' />
              </div>
              <div className='text-justify'>
                <span className='w-xl p-5 flex flex-col'>Bitworks adalah perusahaan teknologi yang berbasis di Indonesia, berdedikasi dalam menciptakan solusi digital inovatif dan efektif untuk berbagai jenis bisnis. Kami percaya bahwa teknologi bukan hanya tentang alat — tetapi tentang bagaimana alat tersebut bisa menciptakan dampak yang nyata.
                  Dengan tim yang terdiri dari engineer, desainer, dan konsultan digital yang berpengalaman, Bitworks telah membantu berbagai perusahaan — dari startup hingga korporasi besar — untuk melakukan transformasi digital, meningkatkan efisiensi operasional, dan menghadirkan pengalaman pengguna yang unggul.
                  Kami berkomitmen untuk terus berinovasi dan memberikan solusi yang relevan, fungsional, dan scalable.
                  <button className='w-[180px] mt-5 py-2 bg-gradient-to-r from-Primary to-SecondPrimary text-white hover:cursor-pointer rounded-lg font-semibold text-xl'>Let's Talk</button>
                </span>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Home