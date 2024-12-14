"use client"
import React, { useState } from "react";

interface InputButtonProps {
    inputchange: (event: React.MouseEvent<HTMLInputElement>) => void;
    text: string;
    color: string
}

const InputButton: React.FC<InputButtonProps> = ({ inputchange, text, color }) => {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <label className=" mt-2 cursor-pointer flex relative md:text-sm text-base gap-3">
            <input
                type="checkbox"
                className=" inpt appearance-none rounded-full overflow-hidden cursor-pointer  border md:h-5 md:w-5 w-6 h-6 md:rounded-sm"
                style={{ backgroundColor: `${color}` }}
                onClick={(e) => {
                    inputchange(e); // Pass MouseEvent to inputchange
                    setChecked(!checked); // Optionally update local state
                }}
                value={text}
            />
            {text}
        </label>
    );
};

export default InputButton;
