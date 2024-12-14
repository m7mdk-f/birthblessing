import React, { useState, useEffect, useRef } from "react";
import InputButton from "./InputButton";
import Header from "./Header";

interface FilterProps {
    Title: string;
    value: string[];
    setvalues: React.Dispatch<React.SetStateAction<string[]>>;
    arraycontent: { numberitem: number; title: string }[];
}

const Filter: React.FC<FilterProps> = ({ Title, value, setvalues, arraycontent }) => {
    const [show, setShow] = useState(false);
    const [number, setNumber] = useState(0);
    const formRef = useRef<HTMLFormElement>(null);

    const getInputs = (): HTMLInputElement[] => {
        const form = document.querySelectorAll('.formall');
        let inputs: HTMLInputElement[] = []
        form.forEach((item) => {
            item.querySelectorAll('input').forEach(inpu => {
                inputs.push(inpu)
            })
        })
        return inputs;
    };

    const handleInputChange = (e: React.MouseEvent<HTMLInputElement>) => {
        const { value: inputValue, checked } = e.target as HTMLInputElement;
        if (checked) {
            setNumber((prev) => prev + 1);
            setvalues((prevValues) => [...prevValues, inputValue]);
        } else {
            setNumber((prev) => prev - 1);
            setvalues((prevValues) => prevValues.filter((item) => item !== inputValue));
        }
    };

    const buttonFunction = () => {
        const updatedValues = value.filter(item => arraycontent.some(arr => item.startsWith(arr.title)))
        setvalues(updatedValues)
    };

    useEffect(() => {
        const newNumber = arraycontent.filter((item) =>
            value.some((variable) => variable.startsWith(item.title))
        ).length;
        setTimeout(() => {
            getInputs().forEach((input) => {
                input.checked = value.some((v) => v.startsWith(input.value));
            });

        }, 0.5);
        setNumber(newNumber);
    }, [value, arraycontent]);


    return (
        <Header text={Title}>
            <form
                ref={formRef}
                className="formall  duration-500 transition-all overflow-hidden mb-5"
            >
                <div className="md:flex hidden justify-between">
                    <div>
                        <h2 className="text-sm">
                            <span id="number">{number}</span> selected
                        </h2>
                    </div>
                    <div>
                        <button
                            className="text-sm"
                            type="reset"
                            onClick={buttonFunction}
                        >
                            Reset
                        </button>
                    </div>
                </div>
                {Array.isArray(arraycontent) &&
                    arraycontent.map((item, index) => (
                        <InputButton
                            key={index}
                            inputchange={handleInputChange}
                            text={`${item.title} (${item.numberitem})`}
                            color={item.title}
                        />
                    ))}
            </form>
        </Header>
    );
};

export default Filter;
