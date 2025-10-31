import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Item from "../components/Item";

const SearchResultProducts = () => {
  // Get the search query from the URL parameters
  const { searchQuery } = useParams() || "";

  // State to store the search results
  const [searchProducts, setSearchProducts] = useState([]);
  // State to manage the loading state
  const [loading, setLoading] = useState(true);
  // State to manage any errors
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch search results from the API
    const getSearchResults = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products?limit=0&skip=0`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const jsonData = await response.json();
        const products = jsonData.products;
        const ansData = products.filter((data) => data.title.toLowerCase().includes(searchQuery.toLocaleLowerCase()));
        setSearchProducts(ansData || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery) {
      getSearchResults();
    }
  }, [searchQuery]);

  return (
    <div className="container mx-auto mt-10 p-4">
      {loading && <p className="text-center text-xl">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      {!loading && searchProducts.length === 0 && (
        <p className="m-5 p-5 text-4xl text-center w-full h-1/2">
          No result found for <span className="text-red-600">{searchQuery}</span>
        </p>
      )}

      {!loading && searchProducts.length > 0 && (
        <div className="md:mt-1 mt-1 max-w-7xl mx-auto">
          <div className="mx-auto max-w-2xl px-4 py-1 sm:pt-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center md:text-start">
              Top results for <span className="text-red-600">{searchQuery}</span>
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {searchProducts.map((product) => (
                <Item key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResultProducts;
