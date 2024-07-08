import React from "react";

const Insights = () => {
  const insightsData = [
    {
      title: "WHO WE ARE ?",
      description: "Trust, Quality & Customer Care",
      imageUrl: "../src/assets/Who-we-are-2.jpg", // Replace with your image path
      link: "#",
    },
    {
      title: "BROCHURE",
      description: "Trust, Quality & Customer Care",
      imageUrl: "../src/assets/Brochuer-min-min.jpg", // Replace with your image path
      link: "#",
    },
    {
      title: "BLOG",
      description: "Improve your knowledge by reading blog.",
      imageUrl: "../src/assets/blog-min-min.jpg", // Replace with your image path
      link: "#",
    },
    {
      title: "HELP GUIDE",
      description: "Click here for PhD assistance Help Guide.",
      imageUrl: "../src/assets/Help-guide-image.jpg", // Replace with your image path
      link: "#",
    },
  ];

  return (
    <div className="bg-red-700 text-white p-8">
      <h2 className="text-center text-3xl mb-8">Insights</h2>
      <div className="flex flex-wrap justify-around">
        {insightsData.map((insight, index) => (
          <div
            key={index}
            className="relative w-full sm:w-45 md:w-1/4 lg:w-1/5 m-2 bg-white text-black rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={insight.imageUrl}
              alt={insight.title}
              className="w-full h-auto cursor-pointer"
            />
            <div className="absolute bottom-4 text-white p-4 transition duration-300 transform hover:-translate-y-5 cursor-pointer">
              <a
                href={insight.title}
                className="bg-red-500  text-white px-2 py-2 rounded-lg flex justify-center"
              >
                {insight.title}
              </a>

              <div className="mb-5 p-4 text-xl flex justify-center">
                {insight.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insights;






