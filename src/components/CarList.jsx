import { useState } from "react";
import cars from "../data/cars";
import useWishlist from "../hooks/useWishlist";
import { Heart, HeartOff } from "lucide-react";

const CARS_PER_PAGE = 6;

const CarList = ({ filters }) => {
  const { toggleWishlist, isWishlisted } = useWishlist();
  const [currentPage, setCurrentPage] = useState(1);

  const filterCars = () => {
    return cars.filter((car) => {
      const matchBrand = !filters.brand || car.brand === filters.brand;
      const matchFuel = !filters.fuel || car.fuel === filters.fuel;
      const matchSeating =
        !filters.seating || car.seating === parseInt(filters.seating);
      const matchPrice =
        !filters.price ||
        (() => {
          const [min, max] = filters.price.split("-").map(Number);
          return car.price >= min && car.price <= max;
        })();
      return matchBrand && matchFuel && matchSeating && matchPrice;
    });
  };

  const results = filterCars().sort((a, b) => {
    if (filters.sort === "asc") return a.price - b.price;
    if (filters.sort === "desc") return b.price - a.price;
    return 0;
  });

  const totalPages = Math.ceil(results.length / CARS_PER_PAGE);

  const paginatedCars = results.slice(
    (currentPage - 1) * CARS_PER_PAGE,
    currentPage * CARS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {paginatedCars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-2xl p-4 shadow-lg relative transition-transform transform hover:scale-105 hover:shadow-xl border-t-4 border-indigo-500"
          >
            {/* Wishlist Button */}
            <button
              onClick={() => toggleWishlist(car)}
              className="absolute top-3 right-3 text-red-500 bg-white rounded-full p-1 shadow-md hover:scale-110 transition"
            >
              {isWishlisted(car.id) ? (
                <HeartOff size={22} />
              ) : (
                <Heart size={22} />
              )}
            </button>

            {/* Car Image */}
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-44 object-cover rounded-xl mb-4"
            />

            {/* Car Info */}
            <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-pink-500 text-transparent bg-clip-text">
              {car.name}
            </h2>
            <p className="text-gray-600">
              Brand: <span className="font-medium">{car.brand}</span>
            </p>
            <p className="text-gray-600">
              Fuel: <span className="font-medium">{car.fuel}</span>
            </p>
            <p className="text-gray-600">
              Seating: <span className="font-medium">{car.seating}</span>
            </p>
            <p className="text-lg font-bold text-indigo-600 mt-2">
              ₹{car.price.toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      {/* Stylish Pagination */}
      {results.length > CARS_PER_PAGE && (
        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-4 py-2 rounded-full transition duration-300 font-semibold ${
                currentPage === i + 1
                  ? "bg-gradient-to-r from-indigo-600 to-pink-500 text-white shadow-lg scale-105"
                  : "bg-gray-200 text-gray-700 hover:bg-indigo-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default CarList;
