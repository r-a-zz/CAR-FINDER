import { useState } from "react";
import Filters from "./components/Filters";
import CarList from "./components/CarList";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  const [filters, setFilters] = useState({
    brand: "",
    fuel: "",
    seating: "",
    price: "",
    sort: "",
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <>
      <Navbar />
      <Hero /> {/* 🔥 Added here */}
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <header className="bg-white shadow p-4">
          <h1 className="text-2xl font-bold text-center">🚗 Car Finder</h1>
        </header>

        <main className="p-4 space-y-6">
          <Filters filters={filters} setFilters={setFilters} />
          <CarList filters={filters} />
        </main>
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition"
      >
        ⬆️
      </button>
    </>
  );
}

export default App;
