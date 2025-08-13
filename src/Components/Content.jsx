// import { ProfileCards } from "./profileCard";

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

const Content = () => {
  return (
    <div className="max-w-4xl mx-auto">

      {/* Client */}
      <div className="text-center mb-12">
        <button className="bg-indigo-300 hover:bg-blue-400 text-blue-900 px-10 py-3 rounded-full font-medium mt-15 mb-5">
          Client
        </button>
        <div className="relative grid grid-cols-4 gap-6 px-6 py-6 z-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg p-4 bg-white shadow-md hover:shadow-lg hover:cursor-pointer transition"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-10 h-10 mb-10 object-contain"
              />
              <p className="font-Primary text-sm text-center font-semibold">{service.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Visi Misi */}
      <div className="text-center mb-12">
        <button className="bg-indigo-300 hover:bg-blue-400 text-blue-900 px-10 py-3 rounded-full font-medium mt-15 mb-20">
          Visi & Misi
        </button>

        {/* Visi */}
        <div className="grid grid-cols-2">
          <div className="relative left-40 bg-blue-600 h-10 w-35 flex items-center justify-center rounded-xl shadow-xl  hover:shadow-lg/30">
            <p className="text-white font-sans">Visi</p>
          </div>
          <div className="relative right-25 text-lg leading-relaxed">Menjadi perusahaan digital terdepan di Asia Tenggara yang menghadirkan solusi teknologi tepat guna dan berdampak.</div>
        </div>

        {/*Misi */}
        <div className="flex items-start gap-6 max-w-4xl w-full px-4 mt-15">
          <ul className="relative ist-disc pl-6 space-y-2 text-gray-800 left-30 text-lg">
            <li>Membangun solusi digital inovatif dan berkualitas tinggi.</li>
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
          <div className="relative left-35 bg-blue-600 h-10 w-35 flex items-center justify-center rounded-xl shadow-xl  hover:shadow-lg/30">
            <p className="text-white font-sans">Misi</p>
          </div>
        </div>
      </div>

      {/* About Bitworks */}
      <div className="text-center mb-12">
        <button className="bg-indigo-300 hover:bg-blue-400 text-blue-900 px-10 py-3 rounded-full font-medium mt-15 mb-7">
          About Bitworks
        </button>
        <div className="flex flex-row mb-10">
          <div className="basis-1/2 bg-white h-50 w-50 shadow-md bg-[url(../public/image/hero.jpeg)] m-10">
          </div>
          <div className="basis-1/2">Bitworks adalah perusahaan teknologi yang berbasis di Indonesia, berdedikasi dalam menciptakan solusi digital inovatif dan efektif untuk berbagai jenis bisnis. Kami percaya bahwa teknologi bukan hanya tentang alat — tetapi tentang bagaimana alat tersebut bisa menciptakan dampak yang nyata.
            Dengan tim yang terdiri dari engineer, desainer, dan konsultan digital yang berpengalaman, Bitworks telah membantu berbagai perusahaan — dari startup hingga korporasi besar — untuk melakukan transformasi digital, meningkatkan efisiensi operasional, dan menghadirkan pengalaman pengguna yang unggul.
            Kami berkomitmen untuk terus berinovasi dan memberikan solusi yang relevan, fungsional, dan scalable.</div>
        </div>
      </div>
    </div>
  );
};

export default Content;