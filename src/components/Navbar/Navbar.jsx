import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { FaRegHeart, FaUserCircle } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { useSelector } from "react-redux";
import { IoMdNotifications } from "react-icons/io";

// List of categories for the navigation menu
const categoryList = [
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  // "home-decoration",
  // "kitchen-accessories",
  "laptops",
  // "mens-shirts",
  // "mobile-accessories",
  // "skin-care",
  // "womens-jewellery",
  "tops",
  "smartphones",
  // "mens-shoes",
  // "mens-watches",
  "motorcycle",
  // "sports-accessories",
  "sunglasses",
  "tablets",
  "vehicle",
  // "womens-bags",
  // "womens-dresses",
  // "womens-shoes",
  // "womens-watches"
]

const Navbar = () => {
  // State variables to handle UI and data layer
  const [showMenu, setShowMenu] = useState(false);
  const [textValue, setTextValue] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  // Get cart items from the Redux store
  const cartItems = useSelector((store) => store.cartSlice.items);
  const totalCartItems = cartItems.reduce((val, item) => val + item.quantity, 0);

  // Get wishlist items from the Redux store
  const wishlistItems = useSelector((store) => store.wishlistSlice.items);
  const totalWishlistItems = wishlistItems.reduce(
    (val, item) => val + item.quantity,
    0
  );

  // Toggle the responsive menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Handle search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (textValue.trim()) {
      navigate(`/searchResultsProducs/${textValue}`);
      setTextValue(""); // Clear input after navigating
    }
  };

  return (
    <div className="bg-white px-4 mb-12 fixed w-full z-50 shadow-sm top-0 shadow-gray-400">
      <div className="max-w-7xl mx-auto  px-5 flex justify-between items-center">
        <Link to="/">
          <div className="flex  px-3 justify-center items-center ">


            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAB/lBMVEX///////37///s0hsobLXJxiv///tsaqvrf1vzpxb1wxTvTULxoCuQRpv5zQqCw13gaoTzsgCOQZq2kryAwVWRynDjQJTkMlaFwV3mkrnlRJIAiYD70wCPvVrudyXp9PgAW4A1i7TiK2kAUoPvfF8AgaZBMYmko8QAdJAAZphUsWH59dDyrAD7+d7iLn81L3lCjaKEs74Ag4Pu10Dj8Nzq1uUSOlsAa4kAUHfg6un068/uujl5LYBsL4xFRZSJnMnji5nkXqPdW3nxnQBEXnjP1dkjgZeuAHxtAHe0RJXaG1RRVJntRUfB1+P35OCGm6kAK1MAHUz0wr3qRCbPzEmDr8b02XffVDDu6K42kIlVn6AAeYGKvsHAxxb57/bSvdS2eq+2YaTSXqLierHinrzqusqBQ4mVHIipGIzWKZHZGoHYPWXzz9aumr2QYpvcAEWefLd+T59cHIbVqMjnaJ3HyNnpEHKDf6RTH3mttMZ/eKssEoDjQ3vkfJhVUYMnHm8XC2pBOm8gQ4EAM3hchZ5kmcDBPoWhx+QvWqq6W4fndHZgZI+YU43sn4w5fLCUsmWuqV2ZnHaKhY3sYVY5n26Pvz2zrHSYmYnGxl7rwKbspq97vpOz15uw273Qyn/ws1vtYB7qjU7opnrtzowvqUTpjTVuu3u0zEHv6JN4pGdxj/0bAAAR/0lEQVR4nO2ci18TZ7rH531DXi6NSCqsyMVY7hJGCQmXJC3rAWEVN9hKCAMmoV2htSuttafIgeLWZfVo2aV2q5wFBVGzlpz/8jzP884kw83jJQn085kfGpIQ4P3mub8zg6JYsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsmTJkiVLliy9Uoxz/Q6IG3eYonDjC78xCabgyuPtuuJxHeW3xgNGiMfbx7/69LPz5/9g6PyfrkxMItNvRkwoZI2vvvn8w3Pnvrj6xRdfXAURzZdf/nlg4NqtialBRXe9A2wjzikw+saPfH7u3LkPQZLk6h8Q5irAfHlqYGDg+sC1M5OD+A0HGQbNEh//6usPJQmxnDd09eqXOgzgXB/oOTMVP9DBw1h8/Jsb335EIOfOff6PT4/85/i4kQDGJycmrvxpHkAkz7Vbk3GgOYhAApKXMv71R99+BAIn+/rIePv2YIes0D41eaZngHhqbp76bpKMgzn7IImBh01LlG+/Pff5kfb4HuHNOaS5x/PXAeXUqRTOgRIGy0yDRPmvb9qZEHu9kmOx4bz9yk2kAZ4r7QfLMgzS0mx3QwOyfHREuha43e7Vnsml8/jEKV0THBFzueBXSQj/3PcN3YByYxzRXktciU9UoKfdvHklfnBYGJ++8H13d8NHN8AqYJHXo0FnIxwAmp86IJED+bixoQFYuufaoR/Dj9f+Xs6nrgBMTU3NxEFociDy/TPgYg0N+Y3kYW8SzFRlwDgAM3Asvv8lR7C+uQZkmesT4s0XQ4ntVg3SlLTvLwtkMaV9Dlysu7sx/ibuteWHQOQgTU1P+77aBpvKOQqX8bevFfiNk0RTMrWvMEJn6VPe0iyG2onmu/bXzevZUDwfU3JDH3tbH0vJP0A0+5TTwDsYlMrTwBIXyjs2i1BlOMLc3CcatAXkZMhkmfn9PA4wp04d258kIJRZZLnQt2dP+WbiU/M10NpM7EsOYNO3kWUaG+QM8HCkgUb6z5P7QeO/gIaZ6fMzOZhlQNRHV8T3YW+NAqbhQv7MrH/v6eWNxJVjOOPcyjULU2YbpL7/viF/VmSmPvD4d9hDT+Y0B4Bjxf/ScPr0aZ2nu9H1uo3/KwVNNIwENfPxnMIIpfEHYPnh9u3bEqnxnaumIifqiZuQoW/l1s+mLwDM7b82Ns6cBgstLNyfzYCjYemM9wDM/FQGlvi6YnwGWH5ohDSmzC4s1Hbl5c31vTsM45zxKexrbuVujmbK9OkfTt+eoVlMuVhbW5uXlzebmZ/NOU438zkrNky4yDB+DBMuXGcJ5q4/Mz+du2rINDmiYWz6AgRMI9Z93DcaRpa8vFBGtr8gbI4NYNTkCoY3Qg77m0vfAFNcEubeu840huIDAzUDOdrgYKzvL39bWBjmqR2yDwhmmGcIhp+5fnQAZ+hciM8uQMz7UyziHsH83kVNDWP60Uvj3m6i3YOdL1D0rdvrR49en8zN0Om6Cyx3XGkY//08mQEyNQzcApiSeIZ+2qvlB5baUPp9Y5wsk3cX9HtDjWkd2U2fHttNZ3QdPXp0IDeHomaB5eyWRCyDRur+BVJ+/t/zdd14fzf9d8Xvtqvi2tG0rl/KPgxnyp3a2oVhV/o3cXHvvommu/v+/e58s268f2ib3j//4+LifMXvKioAqYIEn04NpFn++N5i1scaBkWyCywza3JorvjNMGSb/G0023B+LOlZLKh72GOwkF0q5tMof3zvvSGR7ZaGcSUEuexknynXiG0wQJO/TTfMVjn0WUkJwoDqeiSNhLmWNgtoKOt+Bj8eerGFO35uhhF5W/X3uT1p3j/0jx9LUIt1dQV1BQWL19DBCOZU2iqkJZ7lfAZudhK8zGN+0+C5n7awtD74+Z///GVmZi4/5W8XZBY4dOgziQKmqSPTFNQt6tapqElb5eFDvMl2AmDchYl5lnFzahZ3JcVPpKZHy2HQzz//z7/+9csMoeTPzX39GX5IlFuouoIlhClAnP9AzaesMrT4GGmyXWi46Pu4q/ZESDG7Gdd7gOEQabS5VHNLaSsrgPTLL9N9fdPt7e3Tx0p60ChTcH9qcHBwlTyt7sUgnScw9dhwsPcuTQHM0GC2Y0ZMf9JVe2dLlQHLhGSrSW+l/8nh6jV9Gb4Ve8xuD68E9JeekR6m6Oc2rZJlClY5HXXiqwbLw6nBRYBZzXoCuPhJR8dF11YY5sJ0dnI4DSNSMKiwG5MfV+I6jHGCwAsDBn+KEEsGzGJcLGIGyC4L6GxHx8cXuXl0EQAD8dLZ2UpvuFg7XF2tw4g9YPSvLukw9IgH6oZ0mMecL+UAhkkYRe9vSRAzrg9ONjU19bsIZh1gfLIO6TB2DR8KJX7LDMN1mCU9NgaPHx+RMIOKgjAPswwjlK6Ojo5ZPBlLGIKnXWP9ANPpoiMbZpinBgw+4PGSLTCD0jAvBjnNA6vHdZpF+Npj+DySZRjm6kAYbhbw8JDH09rUGSIYX1l1dZm+x6kRS0xahomlHoLRnfCShFmK01fFBsAcf4aGgWRwCamyPW0SzJ2LUo3DII8H/nnuhUKtnfdYGkbOnQYMIzdTN+qIRo9/I5nJfXe113GccB7iO3QJC02WWRTXxwDz8SeohQXIYJ2GTkSjTR5YliCYatVsGXtSHlsTjpeLWDPlHKqsEose/4q7t5dgjq9iB4gwQzmBOSt1526rSSFPUyvHLWffWnV1qVtuqmnhNAx4UtDxHGDO6Oc+LOkw8nzNjd7ClwTjwwEa3SwnMGdn+0h+k0IhD+QAaA3h/UeYNVqg4g7HEGZFlTCFDkdBSY+E4XEJQ8mMKaKwsJBM80LBdyQ3luno6oJuRh/3oXQLmqGEpxVYLmMSM2CoFJlhOAv0OhyOup4zVCT54BJ1mkuDtBPv7gUaNA3ltpzEDHN1AQxuxc4Op+Rp9biGOyE1N69TpABM9QOZziRMjPoZLgjm5aIBI9vmJdyXEUqiUJrmufziKua1rMOcABqEuVOv6yTeREMA0/bvNAxUGny5T1pmwwTjeHmG0gEkM1JCbj1toGUgn8neRlnFLJ1tGKUTYIbhnuek1IkTcFMfApj+R81PqIVcB5ZSAwYN43UEeBqmMKHIZEYszxN4XyjIgqaRwzLHClqQZRiwCMB4dj4dqm8abW5uptEAc/PyGqUzQdksWOjGBSoSxpHglKclTIvsDgI6zCqX50blAga6ZoDBrpkzvystv8/v9/l+bWYGTPUaOpxQVsgwvVhLDMsQjCLjv8BBRlNkyIACclASLwAm242mhKHtzNAHZvXXj46u+5opyakPZAbAJIXNWVDCKDpMbwqmruB5ywb5owgiSUvhhn7SGsI8W8r6PBOqBRg/rDNqZIB66gAut7WN+v7tI8ukM4CyFgPDwPrZDpgpGDOfF8Ly8WUB3TCaNAwPPD/+bOhStmFYqKPrRH0IYEKpzOzB9iwKWpfpDAtNdbkOswmGAc/CJQvNDHMJSqYDYGjFmoyYoKr/GoAZyfrYDDWyq7O+nqomF+be2Q8wlZDOFB2GegCurJWGC3H9BJPYBgMshfRA2ZAwCWMPA8rMyFCmNuL3Eu7OgmPdk+1U6mm4FxodbeuXMFRoytdwQ01xL9udTmcLrlLwhCMNwx7XvUQAiibVQTCOgCJ7ULEKLAXZ3jeDZQwDzHCInCslSAh9o21tbZWYARgVmvIygeXDbbd7i4qKIirCRFqcREbrXyLDOAK4Yj1kNoQc07h4MTQytJRty6AJKOh/qq9vSqk/qij+MYBpalYNmOoyFY+sA4xdh2E8UkSiyhIIOoucLS2OANpCT8yr+jUbfLAOYC5l+3ATNB4uZGk6YVLn5ShOzm1oGp8Bs7ypAQz32YnGC/ONMMFAP22zFYO8eFkXo16mcCNAEx08szoyMjLEcnDsjHuAxePaInA/VxRZ2qJoAXVlGVqyp7gsQfNMkddthuHwQNNhoOHnarDI6SwE95N+JdgSGKYu6yQIcw96ylb/lncNO68oBg3BKGoY9/5WBC6aYLxFboQMmmCSNqKJoC9qiFUFwPIQLx98CIbJwcEmkB+iBEYa82iGnQ0MaGOVbWM0aK0YQwxT5Khpo+YsBcNSMBoHX4wQTEQ/Mwoms6GRkWeDOYGB2aW/aRi8rV9qFDSGioYqK5/gZTMSJuzGOUWH0WClQocJ4N5G2EY0cJ/5CKYoqZ8VoeeyrB9rIjGcXZr8/U2dRh+ja9T1qPlXygArm/rWH3WatD+DMF4JoyKMV8IIKCZuL0WPT/dcFnAcH4JclhsBR1NnNERbTNTGgODeGDSazTBswlLXSpc37bEkxsPT3WAYcxOMzQZ2YBQyED36ni9PFDqe1Q3mhoVxTyfuxeptDN1iSvOt/0owDGHKy6uXn2IQJOVm01Pc+5QwxSpURU2yROB7WZJgVGwYcDMDK+jxpRydqMmUEJlmm0+LtWbUGsKsA0x5aRk211pM32yCUCrSLQNcBoymaUnpZVzuGggl0YuNQa5OBFI4bl80ubbVtHUJg8/6gKX8cBk2zpqdaJJ46EmyFIdXvF7dy2SxKZZpTY5lASd0nBFfji5xYIyRaVrpIvntMGVun8+3RjCHy9YePCgr3ZSOZrdJFgAosqWls9iEYZgIGCYYyOFVzy5PE+CEhKnjYIqPYEpRh8tJh0sPo8qXJY+0i22rdJiIvngOEePEiS1Dp0j9/4Koae1s6uw3n0MBMBj/zYeldBrjUTXx7MIiaYpsxtpxfobuM5eXCENCAz/D/tIEI/aGkebZtO/CYqtKGQbWz6l/ThhXpuaIxtXaefkRVEiTa/MnCGMGSIHgk+Wl5cv2nSzSNDTVQGMTwI2NDXemzsN7PQnl3uVHjx498ZmfRJjDpbsIUEpLl5eXN8kyVVU7YLwqrZ6pG3JXI4ckdICZP6lsq6yMmo87Q9H8tWx3VVdvbobDwWBQB/BulUYFUxHkZBtqjmHgn7+SaEyjrd+3pwKBgKrCTUA/28Gtqm6TBOVFkWgBlmCuSswWQY8MCu1oboVvfW1tbV3smpBwW02LgLRtX+QYMADT696Hi4HgV0YlzZZfzph/HcIdGs0Vd+odTp9SipOYF6IG4kYv8qnXKBj8LS2JnMa+Ic5cY0TjMi1IKFD9lzdjMRrOdpqGcw1RYBSrKk7iNd0SkeN4GgSUwoTI9p7MXtJp/Ian4QVbyRiQrKzAbezpTufnbi9ahYxjc6drruCqE3cBN9SMXMD2FgKXGtVpjPqtuBEFVuROHcncIpEAm2AHnazCzynTcWwvMZEp+wWDZ2eOUk4LKbL/gEErFgvT7A8WCrt3fIe6UVQVBgPCcIZ+Ji8ngP9asdxreu0/jZB5cQY0bZQFXHRJIEwyMTu+4Wgi+y4wgWBRlYYnC4hIVVVEwsAtDgctUPlZbvuYbWK4k4k0UXQ1SK/R5RgGtgDL7OZmAFOswWzGVG8xuBm5J1cTNB1EApm41utdhDQUN2N+jqfRRZtjYazn7rAdqba/PBB0Qu8C649QAqArcNxybzDizmWrvLsM27SNRcHrhP8RxEryaRJYwu6d2cwXaYGgSSYxp0VUhBGatxhZkipd+70fCFvkwurZ1jY6FoJuGvwsZsfEHNN2piUm3BA0VcX44SWv0s1SlBT7bxcUjGihSrlxBn2n/wHN/MCi7nyfIZg0ZzE2AFVeN5RKNSk3bILud74KP2PijA5oEA5XtXAstpJU9fPqtghqPfdFbMVVNg3uIUox+pgX9z73OfhTwjCOVur7mjQVvKLwcUVCqkmb3OKwJfapTO4lLhTDOJf/dwUryd4Xb+NJaZDtYF6WWQzywMGiwb+fx0MS59EmZGd32m3Ml2EpyCLAKJQD0MM0RTlgLLpc0TF0tmqM/5WkpkLcbLtoQKgBLeKlDIAsQcgSmJ4PSLhsE+C0XQbTyOQcjiQ0tztgSNMSkaDTCZWGVBTRfNTP7feidxce63aFomMIg1uYzhY6vBwk4XFmeuhsodSc1Mhs+9mMvVKctmu5y52E7ByzOfdQSzGQqFQl+UFFSQmylepOrngNS5g5WpzBjYRbfYu/UbVfQtehWE8kNoiABO4GMRRQaWY58BZJizNaMCQzoZqEfydQ0PMHNeotWbJkyZIlS5YsWbJkyZIlS5YsWbJkyZIlS5YsWbJkyZIlS5ayoP8Dtak13XvLeZUAAAAASUVORK5CYII=" alt="Logo" className="h-14 w-30" />
            <h1 className="text-2xl font-bold text-red-600  ">PrimeCart</h1>
          </div>
        </Link>

        {/* Search bar */}
        <form
          className="relative group hidden sm:block"
          onSubmit={handleSearchSubmit}
        >
          <input
            type="text"
            placeholder="Search"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            className="w-[300px] sm:w-[300px] text-gray-800 group-hover:w-[400px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2
              text-sm focus:outline-none focus:border-1 focus:border-primary"
          />
          <button type="submit">
            <IoMdSearch className="text-slate-800 absolute top-1/2 -translate-y-1/2 right-3" />
          </button>
        </form>

        <div className="flex items-center gap-5">
          {/* Cart icon */}
          <Link to="/cart" className="relative w-10">
            <ShoppingCart className="text-2xl" />
            <div className="bg-red-500 w-5 absolute -top-2 right-2 flex items-center justify-center rounded-full text-white">
              {totalCartItems}
            </div>
          </Link>

          {/* Wishlist icon */}
          <Link to="/wishlist" className="relative w-10">
            <FaRegHeart className="text-2xl" />
            <div className="bg-red-500 w-5 absolute -top-2 right-2 flex items-center justify-center rounded-full text-white">
              {totalWishlistItems}
            </div>
          </Link>

          {/* Notifications icon */}
          <Link to="/notifications" className="relative w-10 hidden md:block">
            <IoMdNotifications className="text-2xl " />
            <div className="bg-red-500 w-5  absolute -top-2 right-2 flex items-center justify-center rounded-full text-white">
              3
            </div>
          </Link>
          {/* profile icon */}
          <Link to="/profile"><FaUserCircle className="text-2xl" /></Link>

          {/* Mobile hamburger icon */}
          {showMenu ? (
            <HiMenuAlt1
              onClick={toggleMenu}
              className="cursor-pointer transition-all md:hidden"
              size={30}
            />
          ) : (
            <HiMenuAlt3
              onClick={toggleMenu}
              className="cursor-pointer transition-all md:hidden"
              size={30}
            />
          )}
        </div>
      </div>
      {/* navbar links of category wise products */}
      <div className="border-t-2">
        <nav className="hidden md:block">
          <ul className="flex items-center  text-xl gap-7 py-1">
            <Link to="/"><li>Home</li></Link>
            {
              categoryList.map((listItem, index) => (
                <Link key={index} to={/category/ + listItem}><li>{listItem}</li></Link>
              ))
            }
          </ul>
        </nav>
      </div>
      {/* Only show in mobile */}
      <div className=" my-1 text-center sm:block md:hidden lg:hidden">
        {/* 2nd Search bar */}
        <form
          onSubmit={handleSearchSubmit}
        >
          <input
            type="text"
            placeholder="Search"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            className="w-[300px] sm:w-[300px] text-gray-800   rounded-lg border border-gray-300 py-1 px-2
              text-sm focus:outline-none focus:border-1 focus:border-primary"
          />
          {/* <button type="submit">
            <IoMdSearch className="text-slate-800 absolute top-1/2 -translate-y-1/2 right-3" />
          </button> */}
        </form>
      </div>
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default Navbar;
