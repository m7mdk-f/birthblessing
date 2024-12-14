"use client"
import React, { useState } from "react";
import InputComp from "./InputComp";
import Button from "./Slider/Button";

const CommentForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        comment: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
        // Add logic to send data to the server or handle it
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="  flex flex-col gap-4 mb-7"
        >
            <h2 className="text-2xl font-semibold">Leave A Comment</h2>
            <div className="flex gap-5">
                <div className="flex flex-col w-full">
                    <InputComp type="text" name="Name *" />
                </div>
                <div className="flex flex-col w-full">
                    <InputComp type="email" name="email *" />
                </div>
            </div>
            <div className="flex flex-col">
                <textarea
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    placeholder="Your Comment"
                    required
                    rows={4}
                    className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none"
                />
            </div>
            <p className="text-xs text-gray-500 mt-3">
                Please note, comments need to be approved before they are published.
            </p>
            <div className="mt-10">
                <Button
                    className=" bg-main-color text-white py-2 px-4 rounded-md hover:bg-black duration-300 transition"
                >
                    Post Comment
                </Button>
            </div>
        </form>
    );
};

export default CommentForm;
