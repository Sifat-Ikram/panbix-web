import { useState, useEffect } from "react";

const Package = () => {
  const [packages, setPackages] = useState([]);

  // Simulate fetching data dynamically
  useEffect(() => {
    // Sample package data
    const packageData = [
      {
        id: 1,
        name: "Basic",
        price: "19.99",
        features: [
          "Access to basic content",
          "Monthly updates",
          "Community support",
        ],
      },
      {
        id: 2,
        name: "Premium",
        price: "49.99",
        features: [
          "All Basic features",
          "Exclusive content",
          "Weekly updates",
          "Priority support",
        ],
      },
      {
        id: 3,
        name: "VIP",
        price: "99.99",
        features: [
          "All Premium features",
          "One-on-one mentorship",
          "Daily updates",
          "24/7 support",
        ],
      },
    ];

    setPackages(packageData);
  }, []);

  return (
    <div className="p-10 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-10">
        Choose Your Package
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white p-6 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <h2 className="text-2xl font-semibold text-gray-800">{pkg.name}</h2>
            <p className="text-xl text-gray-500 mb-4">{pkg.price} BDT</p>
            <ul className="mb-6">
              {pkg.features.map((feature, index) => (
                <li key={index} className="text-gray-600 mb-2">
                  • {feature}
                </li>
              ))}
            </ul>
            <button className="py-2 px-5 rounded-md bg-[#0E9C7E] text-white font-bold text-base w-full">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Package;
