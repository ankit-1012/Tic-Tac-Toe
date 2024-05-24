import React from "react";
interface Blockprops{
    value : string | null;
    onClick?:() => void;
}
const Block: React.FC<Blockprops> = (props) => {
    return (
        <div  onClick={props.onClick} className="block">
            {props.value}
        </div>
    )
}
export default Block;
