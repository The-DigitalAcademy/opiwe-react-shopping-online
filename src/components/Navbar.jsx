import { Search } from "@mui/icons-material";
import React from "react";

const Navbar = () => {
    return (
        <div className="navbar h-[60px] shadow-md relative z-10">
            <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb[10px] flex justify-between items-center">
                {/* left div */}
                <div className="left flex flex-1 items-center">
                <div className="language cursor-pointer text-[16px]">En</div>

                <div className="searchInput flex border-[2px] border-solid border-lightgrey rounded-md items-center ml-[10px] p-[5px] focus-within:border-[#8a4af3] transition-all">
                    <input className="input outline-none" type="text" />
                    <Search className="" style={{ fontSize: "16px" }} />
                </div>
                </div>
                {/* Logo */}
                <div className="center flex-1 text-center"></div>
                <div>3</div>
            </div>
        </div>
    );
};

export default Navbar;
