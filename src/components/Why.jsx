import work1 from "../assets/why01.jpg";
import work2 from "../assets/why02.jpg";
import work3 from "../assets/why03.png";
import work4 from "../assets/why04.png";

const whydata = [
  {
    title: "Community-first",
    desc: "Built around trust and shared goals",
    img: work1,
  },
  {
    title: "Flexible roles",
    desc: "Be a seller, buyer, or just someone who wants to split costs",
    img: work2,
  },
  {
    title: "Secure Payment",
    desc: "Your money is held safely until the split is complete",
    img: work3,
  },
  {
    title: "Smart Management",
    desc: "Easily track and manage your shared expenses",
    img: work4,
  },
];

export default function Why() {
  return (
    <section className="flex justify-center items-center w-full py-20 bg-white px-6 md:px-20">
      <div className="max-w-7xl flex flex-col w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-black underline  underline-offset-8 mb-12">
          Why Choose CoSplitz
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {whydata.map((data, index) => (
            <div
              key={index}
              className="flex flex-col p-2 rounded-2xl bg-[#DEF8D1] shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="w-full h-fit mb-4">
                <img
                  src={data.img}
                  alt={data.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <div className="flex flex-col space-y-2 p-2">
                <span className="text-2xl font-semibold text-gray-900">
                  {data.title}
                </span>
                <span className="text-lg text-gray-700">{data.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
