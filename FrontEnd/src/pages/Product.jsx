import React, { useEffect, useState } from "react"
import { AiOutlineRight } from 'react-icons/ai'
import { IoClose } from 'react-icons/io5'

const Product = () => {
  const [categories, setCategories] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [subOptions, setSubOptions] = useState([]);
  
  const [filter, setFilter] = useState(false)
  useEffect(() => {
    const screenSize = window.innerWidth;

    if (screenSize >= 1024) {
      setFilter(true);
    }
    const handleResize = () => {
      const updatedScreenSize = window.innerWidth;
      if (updatedScreenSize >= 1024) {
        setFilter(true);
      } else {
        setFilter(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setCategories(selectedValue);
    setSelectedOption(""); // Reset selectedOption when a category is selected

    // Set sub-options based on the selected parent option
    switch (selectedValue) {
      case "Shirt":
        setSubOptions(["T-shirt", "Shirts", "jacket", "Polo", "Hoodie"]);
        break;
      case "Trousers":
        setSubOptions(["Jean", "Kaki", "Shorts", "Jogger", "Underwear"]);
        break;
      case "Shoe":
        setSubOptions([
          "Sneaker",
          "Sandal",
          "High heel",
          "Leather shoes",
          "Boot",
        ]);
        break;
      case "Equipment":
        setSubOptions(["Necklace", "hat", "Bracelet", "Sock"]);
        break;
      default:
        setSubOptions([]);
    }
  };

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  return (
    <section className="relative w-full px-20 mt-20 font-Josefin">
      <button
        onClick={() => setFilter(!filter)}
        className="lg:hidden absolute left-0 -top-10 bg-pink-50 p-3"
      >
        {filter ? <IoClose /> : <AiOutlineRight />}
      </button>
      <div className="w-full lg:grid grid-cols-[300px_auto]">
        <div
          className={`absolute lg:relative lg:bg-white w-[250px] duration-500 bg-pink-50 h-[100vh] lg:h-auto ${
            filter ? "left-0 pl-10" : "-left-[300px]"
          }`}
        >
          <h3 className="uppercase text-lg underline font-semibold">
            Filter Products
          </h3>
          <div className="w-[200px]">
            <div className="pt-3">
              <label>Price</label>
              <select name="filter-price" id="" className="w-full border">
                <option value="" disabled className="text-center">
                  --- Choose Option ---
                </option>
                <option value="all">All Price</option>
                <option value="100">From 0$ - 100$</option>
                <option value="100">From 100$ - 200$</option>
                <option value="100">From 200$ - 500$</option>
                <option value="100">From 500$ - 1000$</option>
              </select>
            </div>
            <div className="mt-3">
              <label>Categories</label>
              <select
                value={categories}
                onChange={handleCategoryChange}
                className="w-full border my-2"
              >
                <option value="" disabled className="text-center">
                  --- Choose option ---
                </option>
                <option value="all">All</option>
                <option value="Shirt">Shirt</option>
                <option value="Trousers">Trousers</option>
                <option value="Shoe">Shoe</option>
                <option value="Equipment">Equipment</option>
              </select>
            </div>

            {categories && (
              <div>
                {subOptions.map((subOption) => (
                  <label key={subOption}>
                    <input
                      type="checkbox"
                      value={subOption}
                      checked={selectedOption === subOption}
                      onChange={handleOptionChange}
                      className="m-2"
                    />
                    {subOption} <br />
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="">
          <div className="w-full bg-pink-50 lg:px-10 py-3 grid gap-4 grid-cols-2 lg:grid-cols-[100px_auto_auto] text-lg">
            <h3 className="text-lg hidden lg:inline-block">Sorted by</h3>
            <div className="flex justify-center">
              <label className="hidden lg:inline-block">Date</label>
              <select name="create-at" id="" className="w-[100px] md:w-[200px] lg:ml-5 border">
                <option value="new">Newest First</option>
                <option value="old">Oldest First</option>
              </select>
            </div>
            <div className="flex justify-center">
              <label className="hidden lg:inline-block">Price</label>
              <select name="price" id="" className="w-[100px] md:w-[200px] lg:ml-5 border">
                <option value="high">From High To Low</option>
                <option value="low">From Low To High</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
