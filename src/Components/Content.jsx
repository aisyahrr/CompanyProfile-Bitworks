// import { ProfileCards } from "./profileCard";

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

const Content = () => {
  return (
    <div className="max-w-4xl mx-auto my-10">
      
      {/* Client */}
      <div className="text-center mb-12 ">
        <button className="bg-indigo-300 hover:bg-blue-400 text-blue-900 px-10 py-3 rounded-full font-medium mt-15 mb-5">
          Client
        </button>
        <div className="relative grid grid-cols-4 gap-6 px-6 py-6 z-10">
          {clients.map((clients, index) => (
            <div
              key={index}
              className="flex justify-center items-center rounded-lg p-4 bg-white shadow-md hover:shadow-lg hover:cursor-pointer transition"
            >
              <img
                src={clients.icon}
                className="w-20 h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Visi Misi */}
      <div className="text-center mb-12 font-Primary">
        <button className="bg-indigo-300 hover:bg-blue-400 text-blue-900 px-10 py-3 rounded-full font-medium mt-15 mb-20">
          Visi & Misi
        </button>

        {/* Visi */}
          <div className="grid grid-cols-2">
            <div className="relative left-40 bg-blue-600 h-10 w-35 flex items-center justify-center rounded-xl shadow-xl  hover:shadow-lg/30">
              <p className="text-white font-sans">Visi</p>
            </div>
            <div className="relative right-25 text-justify  text-lg leading-relaxed">Menjadi perusahaan digital terdepan di Asia Tenggara yang menghadirkan solusi teknologi tepat guna dan berdampak.</div>
          </div>

          {/*Misi */}
          <div className="grid grid-cols-2 mt-10">
            <ul className="relative list-disc left-40 text-justify text-lg leading-relaxed">
              <li>
                Membangun solusi digital inovatif dan berkualitas tinggi.
              </li>
              <li>
                Memberikan layanan profesional dan transparan kepada klien.
              </li>
              <li>
                Menjadi mitra strategis dalam pertumbuhan bisnis digital.
              </li>
              <li>
                Menumbuhkan budaya kerja yang adaptif dan kolaboratif.
              </li>
            </ul>
            <div className="relative left-52 bg-blue-600 h-10 w-35 flex items-center justify-center rounded-xl shadow-xl  hover:shadow-lg/30">
              <p className="text-white font-sans">Misi</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Content;