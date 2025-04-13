import { useEffect, useState } from 'react';

const useWishlist = () => {
  const [wishlist, setWishlist] = useState(() => {
    const stored = localStorage.getItem('wishlist');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (car) => {
    setWishlist(prev =>
      prev.find(c => c.id === car.id)
        ? prev.filter(c => c.id !== car.id)
        : [...prev, car]
    );
  };

  const isWishlisted = (id) => wishlist.some(car => car.id === id);

  return { wishlist, toggleWishlist, isWishlisted };
};

export default useWishlist;
