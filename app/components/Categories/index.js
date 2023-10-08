import Image from "next/image";
import React from "react";

const Categories = () => {
  const categories = [
    {
      id: 1,
      image: "/assets/categories1.png",
      title: "College & Universities",
    },
    {
      id: 2,
      image: "/assets/categories2.png",
      title: "Courses & Classes",
    },
    {
      id: 3,
      image: "/assets/categories3.png",
      title: "Educational Services",
    },
    {
      id: 4,
      image: "/assets/categories4.png",
      title: "Language Learning",
    },
    {
      id: 5,
      image: "/assets/categories5.png",
      title: "Music & Theater Classes",
    },
    {
      id: 6,
      image: "/assets/categories6.png",
      title: "Vocational Training Center",
    },
    {
      id: 7,
      image: "/assets/categories7.png",
      title: "College & Universities",
    },
    {
      id: 8,
      image: "/assets/categories8.png",
      title: "College & Universities",
    },
  ];

  return (
    <div className="max-w-widthmax w-full mx-auto my-16 md:px-4 px-2">
      <h1 className="text-center font-extrabold text-2xl md:text-4xl text-black mb-12">
        Explore Categories
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
        {categories.map((item) => (
          <div
            key={item.id}
            className="border border-border_color rounded-lg bg-white p-6 flex flex-col justify-center items-center gap-4 "
          >
           <div className="bg-[#4E1D9A16] rounded-full w-24 h-24 flex justify-center items-center">
           <Image
              src={item.image}
              width={46}
              height={46}
              alt={item.title}
            />
           </div>
            <h3 className="text-lg font-semibold text-black text-center">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
