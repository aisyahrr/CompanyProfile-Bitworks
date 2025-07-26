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
    </div>
  );
};


export default Home