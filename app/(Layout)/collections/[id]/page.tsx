"use client";
import ProducsPage from '@/app/components/ProducsPage';
import { useParams } from 'next/navigation';
import React from 'react';



function Page() {
  const { id } = useParams();

  let title = '';
  if (id) {
    title = decodeURIComponent(id.toString().trim()); // Decode any URL-encoded characters
  }

  return (
    <div>
      <h1 className="text-center md:text-4xl text-2xl my-5 font-semibold">{title}</h1>
      <ProducsPage />
    </div>
  );
}

export default Page;
