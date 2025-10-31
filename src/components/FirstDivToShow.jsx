import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const FirstDivToShow = () => {
    const [dataFetced, setDataFetched] = useState(false);
    const [beautyProducts, setBeautyProducts] = useState([]);
    const [homeAppliances, setHomeAppliances] = useState([]);
    const [kitchenAccessory, setKitchenAccessory] = useState([]);
    const [mensCloths, setMensCloths] = useState([]);

    // Fetch data when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://dummyjson.com/products?limit=100&skip=0");
                const jsonData = await res.json();
                const data = jsonData.products;

                // Filter products by category
                setBeautyProducts(data.filter((product) => product.category === "beauty"));
                setHomeAppliances(data.filter((product) => product.category === "home-decoration"));
                setKitchenAccessory(data.filter((product) => product.category === "kitchen-accessories"));
                setMensCloths(data.filter((product) => product.category === "mens-shirts"));
                setDataFetched(true);

                // console.log(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchData();
    }, []);

    return (
        // i have divide it into 4 block and each block in again divided into 4 block
        <div className="flex  gap-3 mt-8 px-2 justify-evenly">
            {
                dataFetced &&
                <>
                    {/* // 1st di */}
                    <div className="max-w-[300px] maxh-h-[300px] border-2 bg-white p-1">
                        <h2 className="text-xl lg:text-2xl md:text-lg sm:text-sm sm:leading-tight">
                            Appliances for your home | Up to 55% off
                        </h2>
                        <div className="grid grid-cols-2 grid-rows-2 gap-2">
                            {homeAppliances.slice(0, 4).map((product) => (
                                <Link key={product.id} to={`/products/${product.id}`}>
                                    <div key={product.id} className="flex flex-col">
                                        <img src={product.thumbnail} alt={product.title} className="your-class-name" />
                                        <p className="text-sm lg:text-base sm:text-[9px] sm:leading-tight">{product.title.split(' ').slice(0, 2).join(' ')}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    {/* 2nd div */}
                    <div className="max-w-[300px] maxh-h-[300px]  border-2 bg-white p-1">
                        <h2 className="text-center text-xl lg:text-2xl md:text-lg sm:text-sm sm:leading-tight">
                            Beauty Products
                        </h2>
                        <div className="grid grid-cols-2 grid-rows-2 gap-2">
                            {beautyProducts.slice(0, 4).map((product) => (
                                <div key={product.id} className="flex flex-col">
                                    <Link to={`/products/${product.id}`}>
                                        <img src={product.thumbnail} alt={product.title} className="your-class-name" />
                                    </Link>
                                    <p className="text-sm lg:text-base sm:text-[9px] sm:leading-tight">{product.title.split(' ').slice(0, 2).join(' ')}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* 3rd div */}
                    <div className="max-w-[300px] maxh-h-[300px] border-2 bg-white p-1 sm:p-1 hidden sm:block">
                        <h2 className="text-xl lg:text-2xl md:text-lg sm:text-sm sm:leading-tight">
                            Revamp your Kitchen in style
                        </h2>
                        <div className="grid grid-cols-2 grid-rows-2 gap-2">
                            {kitchenAccessory.slice(0, 4).map((product) => (
                                <div key={product.id} className="flex flex-col">
                                    <Link to={`/products/${product.id}`}>
                                        <img src={product.thumbnail} alt={product.title} className="your-class-name" />
                                    </Link>
                                    <p className="text-sm lg:text-base sm:text-[9px] sm:leading-tight">{product.title.split(' ').slice(0, 2).join(' ')}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* 4th div */}
                    <div className=" last-box max-w-[300px] maxh-h-[300px]  border-2 bg-white p-1 sm:p-1 hidden md:hidden lg:block">
                        <h2 className="text-center text-xl lg:text-2xl md:text-lg sm:text-sm sm:leading-tight">
                            Mens Products
                        </h2>

                        <div className="grid grid-cols-2 grid-rows-2 gap-2">
                            {mensCloths.slice(0, 4).map((product) => (
                                <div key={product.id} className="flex flex-col">
                                    <Link to={`/products/${product.id}`}>
                                        <img src={product.thumbnail} alt={product.title} className="your-class-name" />
                                    </Link>
                                    <p className="text-sm lg:text-base sm:text-[9px] sm:leading-tight">{product.title.split(' ').slice(0, 2).join(' ')}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            }
        </div>
    )
};

export default FirstDivToShow;