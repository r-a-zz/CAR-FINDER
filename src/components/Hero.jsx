// src/components/Hero.jsx

const Hero = () => {
    return (
      <section className="h-[60vh] bg-gradient-to-r from-indigo-600 to-purple-700 text-white flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-bounce">
          🚘 Welcome to Car Finder
        </h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Find your perfect car by filtering based on brand, fuel type, seating capacity, and price.
        </p>
      </section>
    );
  };
  
  export default Hero;
  