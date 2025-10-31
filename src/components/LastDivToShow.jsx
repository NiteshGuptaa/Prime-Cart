import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const LastDivToShow = () => {
    const [dataFetced, setDataFetched] = useState(false);
    const [mobileAccessories, setMbileAccessories] = useState([]);
    const [homeAppliances, setHomeAppliances] = useState([]);
    const [kitchenAccessory, setKitchenAccessory] = useState([]);
    const [fragrance, setFragrance] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://dummyjson.com/products?limit=120&skip=0");
                const jsonData = await res.json();
                const data = jsonData.products;

                setMbileAccessories(data.filter((product) => product.category === "mobile-accessories"));
                setHomeAppliances(data.filter((product) => product.category === "home-decoration"));
                setKitchenAccessory(data.filter((product) => product.category === "kitchen-accessories"));
                setFragrance(data.filter((product) => product.category === "fragrances"));
                setDataFetched(true);
                

                // console.log(data);
                // console.log(fragrance);
        console.log(mobileAccessories);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        

        fetchData();

        // console.log(fragrance);
        // console.log(mobileAccessories);
    }, []);

    return (
        <div className="flex  gap-3 mt-8 px-2 justify-evenly">
            {
                dataFetced &&
                <>
                    
                    <div className="max-w-[300px] maxh-h-[300px]  border-2 bg-white p-1">
                        <h2 className="text-center text-xl lg:text-2xl md:text-lg sm:text-sm sm:leading-tight">
                            Mobile accessories
                        </h2>
                        <div className="grid grid-cols-2 grid-rows-2 gap-2">
                            {mobileAccessories.slice(0, 4).map((product) => (
                                < div key={product.id} className="flex flex-col">
                                    <Link to={`/products/${product.id}`}>
                                        <img src={product.thumbnail} alt={product.title} className="your-class-name" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="max-w-[300px] maxh-h-[300px] border-2 bg-white p-1">
                        <h2 className="text-xl lg:text-2xl md:text-lg sm:text-sm sm:leading-tight">
                            Appliances for your home | Up to 55% off
                        </h2>
                        <div className="">
                            {/* {homeAppliances.slice(0, 4).map((product) => ( */}
                                <Link key={homeAppliances[0].id} to={`/products/${homeAppliances[0].id}`}>
                                    < div  className="flex flex-col">
                                        <img src={homeAppliances[0].thumbnail} alt={homeAppliances[0].title} className="your-class-name" />
                                    </div>
                                </Link>
                            {/* ))} */}
                        </div>
                    </div>
                    <div className="max-w-[300px] maxh-h-[300px] border-2 bg-white p-1 sm:p-1 hidden sm:block">
                        <h2 className="text-xl lg:text-2xl md:text-lg sm:text-sm sm:leading-tight">
                            Revamp your Kitchen in style
                        </h2>
                        <div className="grid grid-cols-2 grid-rows-2 gap-2">
                            {kitchenAccessory.slice(0, 4).map((product) => (
                                < div key={product.id} className="flex flex-col">
                                    <Link to={`/products/${product.id}`}>
                                        <img src={product.thumbnail} alt={product.title} className="your-class-name" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className=" last-box max-w-[300px] maxh-h-[300px]  border-2 bg-white p-1 sm:p-1 hidden md:hidden lg:block">
                        <h2 className="text-center text-xl lg:text-2xl md:text-lg sm:text-sm sm:leading-tight">
                            Best Perfumes for you 
                        </h2>

                        <div className="grid grid-cols-2 grid-rows-2 gap-2">
                            {fragrance.slice(0, 4).map((product) => (
                                < div key={product.id} className="flex flex-col">
                                    <Link to={`/products/${product.id}`}>
                                        <img src={product.thumbnail} alt={product.title} className="your-class-name" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            }
        </div>
    )
};

export default LastDivToShow;


