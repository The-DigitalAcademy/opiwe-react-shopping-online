import { Close } from "@material-ui/icons";
import React from "react";

function Announce(){
    return(
        <div className="bg-[#8a4af3] font-bold text-white flex items-center justify-center">
            <h2>Hurry up it's 40% off now</h2>
            <Close className="cursor-pointer"/>
        </div>
    );
}

export default Announce;