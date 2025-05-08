import React from "react";

const Home: React.FC = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/src/assets/homepic.avif')" }}
    ></div>
  );
};

export default Home;
