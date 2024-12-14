"use client"
import MtionInViewSec from '@/app/components/MtionInViewSec'
import React from 'react'

function page() {
  return (
    <MtionInViewSec delay={1} >
      <h1 className="text-xl lg:text-4xl font-bold my-10 text-center">About Us</h1>
      <div className="container">
        <p className="text-sm">Phasellus at finibus tellus. Curabitur ligula mi, tempor id ullamcorper eget, efficitur vitae
          diam.
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum eu
          lacinia nisl, nec placerat libero. Morbi nec finibus ex. Duis consectetur orci turpis, vitae sagittis turpis
          commodo eget. Aliquam malesuada, ante vitae commodo congue, lacus odio pellentesque neque, in molestie ex
          nisi sollicitudin odio. Fusce pharetra lobortis odio, a mollis sem. Quisque ipsum arcu, lobortis vel
          facilisis sit amet, ornare sit amet urna. Nam ligula sem, congue a semper ac, molestie eget dolor.
          Pellentesque imperdiet dui ut mi mattis vehicula. Aenean justo elit, eleifend ac convallis nec, mollis id
          sapien. Nunc a ipsum eget risus molestie varius hendrerit a nibh.</p>
      </div>
    </MtionInViewSec>
  )
}

export default page