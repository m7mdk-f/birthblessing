"use client";
import { products } from "@/app/components/List";
import Product from "@/app/components/Product";
import ProductView from "@/app/components/ProductView";
import { useParams } from "next/navigation";
import React, { useMemo } from "react";

function Page() {
    const { id } = useParams();

    const item = useMemo(() => {
        if (id) {
            return products.find((p) => p.id === parseInt(id.toString().trim()));
        }
        return null;
    }, [id]);

    let i = 0;

    return (
        <>
            {item && <ProductView item={item} />}
            <h1 className="text-xl lg:text-4xl font-bold my-20 text-center">
                You may also like
            </h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 container">
                {products.map((productItem, index) => {
                    if (id && productItem.id === parseInt(id.toString().trim())) {
                        return null; // Skip the current product
                    }
                    if (i >= 4) {
                        return null; // Limit to 4 products
                    }
                    i++;
                    return <Product key={index} itemlist={productItem} />;
                })}
            </div>
        </>
    );
}

export default Page;
