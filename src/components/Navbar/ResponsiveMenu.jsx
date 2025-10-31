// import React from 'react'
// import { FaUserCircle } from "react-icons/fa";
// import { IoMdNotifications } from 'react-icons/io';
// import { Link } from 'react-router-dom';

// // List of categories for the responsive menu
// const categoryList = [
//     "beauty",
//     "fragrances",
//     "furniture",
//     "groceries",
//     "laptops",
//     "tops",
//     "smartphones",
// ]

// const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
//     // here is the responseve logic for mobile screen
//     return (
//         <div className={`${showMenu ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md`}>
//             <div>
//                 {/* // showing greeting */}
//                 <div className='flex items-center justify-start gap-3'>
//                     <FaUserCircle size={50} />
//                     <div>
//                         <h1>Hello User</h1>
//                         <h1 className='text-sm text-slate-500'>Premium User</h1>
//                     </div>
//                 </div>
//                 {/* displaying item list  */}
//                 <nav className='mt-12'>
//                     <ul className='flex flex-col space-y-4 text-xl'>
//                         {
//                             categoryList.map((listItem, index) => (
//                                 <Link key={index} to={/category/ + listItem}><li>{listItem}</li></Link>
//                             ))
//                         }
//                         <Link to='/login'><button onClick={() => setShowMenu(false)} className='bg-red-500 text-white px-4 py-1 rounded-md'>Login</button></Link>
//                         <Link to="/notifications" ><button onClick={() => setShowMenu(false)} className='bg-red-500 text-white px-4 py-1 rounded-md'>Notifications</button></Link>
//                     </ul>
//                 </nav>
//             </div>
//             <div className=''>
//                 <h1>
//                     Made with ❤️ by Abhishek Gupta
//                 </h1>
//             </div>
//         </div>
//     )
// }

// export default ResponsiveMenu




import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

// List of categories for the responsive menu
const categoryList = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "laptops",
    "tops",
    "smartphones",
];

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
    // Close menu when clicking outside
    const handleOutsideClick = (e) => {
        if (e.target.id === "menu-overlay") {
            setShowMenu(false);
        }
    };

    return (
        <>
            {showMenu && (
                <div 
                    id="menu-overlay" 
                    className="fixed inset-0 z-10 bg-black bg-opacity-50"
                    onClick={handleOutsideClick}
                >
                    <div 
                        className={`${showMenu ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md`}
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                    >
                        <div>
                            {/* Showing greeting */}
                            <div className='flex items-center justify-start gap-3'>
                                <Link to="/profile"><FaUserCircle size={50} /></Link>
                                <div>
                                    <h1>Hello User</h1>
                                    <h1 className='text-sm text-slate-500'>Premium User</h1>
                                </div>
                            </div>
                            {/* Displaying item list */}
                            <nav className='mt-12'>
                                <ul className='flex flex-col space-y-4 text-xl'>
                                    {categoryList.map((listItem, index) => (
                                        <Link key={index} to={`/category/${listItem}`}><button onClick={()=> {setShowMenu(false)}}>{listItem}</button></Link>
                                    ))}
                                    <Link to='/login'>
                                        <button onClick={() => setShowMenu(false)} className='bg-red-500 text-white px-4 py-1 rounded-md'>Login</button>
                                    </Link>
                                    <Link to="/notifications">
                                        <button onClick={() => setShowMenu(false)} className='bg-red-500 text-white px-4 py-1 rounded-md'>Notifications</button>
                                    </Link>
                                </ul>
                            </nav>
                        </div>
                        <div className=''>
                            <h1>Made with ❤️ by Abhishek Gupta</h1>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ResponsiveMenu;

