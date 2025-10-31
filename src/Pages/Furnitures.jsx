import React, { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Furnitures = () => {
    const [ProductsData, setProductsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/products/category/furniture`);

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

                        <div className="relative">
                            {/* Section Title */}
                            <div className=" mb-2 max-w-[600px] mx-4 my-1">
                                <h1 className="text-3xl font-semibold">Up to 60% off | Best offers on furniture from stores near you</h1>
                            </div>
                            {/* Products Carousel */}
                            <div
                                ref={scrollRef}
                                className="flex overflow-x-scroll scrollbar-hide space-x-6 p-4"
                                style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
                            >

                                {ProductsData.map((data) => (
                                    <Link to={'/products/' + data.id} key={data.id}>
                                        <div className="inline-block w-120">
                                            <img
                                                src={data.thumbnail}
                                                alt={data.title}
                                                className="h-[280px] w-[360px] object-cover rounded-md"
                                            />
                                            <h3 className="font-semibold text-center">{data.title}</h3>

                                        </div>
                                    </Link>
                                ))}
                            </div>
                            {/* Scroll Buttons */}
                            <button
                                onClick={scrollLeft}
                                className="block sm:hidden absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-300 text-white px-1 py-4 shadow-md hover:bg-gray-300"
                            >
                                <FaChevronLeft size={20} />
                            </button>

                            <button
                                onClick={scrollRight}
                                className="block sm:hidden absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-300 text-white px-1 py-4  shadow-md hover:bg-gray-300"
                            >
                                <FaChevronRight size={20} />
                            </button>

                        </div>
                    </div>

            }
        </div>
    );
}

export default Furnitures

