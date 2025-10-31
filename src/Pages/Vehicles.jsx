import React, { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";



const Vehicles = () => {
    const [ProductsData, setProductsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/products/category/vehicle`);

                const jsonData = await res.json();
                const data = jsonData.products;

                setProductsData(data)

                // console.log(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchData();

    }, []);

    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
        }
    };

    return (
        <div className="mt-10 relative bg-white">
            {
                ProductsData.length == 0 ? <div>Loading...</div> :

                    <div className="container">
                        {/* Section Title */}
                        <div className=" mb-10 max-w-[600px] mx-4 my-1">
                            <h3 className="text-3xl font-semibold">No cost EMI up to 24 months | Starting ₹4,433 INR/month</h3>
                        </div>
                        <div className="relative">
                            {/* Products Carousel */}
                            <div
                                ref={scrollRef}
                                className="flex overflow-x-scroll scrollbar-hide space-x-6 p-4"
                                style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
                            >
                                {ProductsData.map((data) => (
                                    <Link to={'/products/' + data.id} key={data.id}>
                                        <div className="inline-block w-140">
                                            <img
                                                src={data.thumbnail}
                                                alt={data.title}
                                                className="h-[120px] w-[400px] object-cover rounded-md"
                                            />
                                            <h3 className="font-semibold text-center">{data.title}</h3>
                                            {/* <p className="text-sm text-gray-600 text-center">{data.color}</p>
                                            <div className="flex items-center justify-center gap-1">
                                                <FaStar className="text-yellow-400" />
                                                <span>{data.rating}</span>
                                            </div> */}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            {/* Scroll Buttons */}
                            <button
                                onClick={scrollLeft}
                                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
                            >
                                <FaChevronLeft size={20} />
                            </button>
                            <button
                                onClick={scrollRight}
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
                            >
                                <FaChevronRight size={20} />
                            </button>
                        </div>
                    </div>

            }
        </div>
    );
}

export default Vehicles



