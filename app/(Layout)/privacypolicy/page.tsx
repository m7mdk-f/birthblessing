"use client"
import MtionInViewSec from '@/app/components/MtionInViewSec'
import React from 'react'

function page() {
    return (
        <MtionInViewSec delay={1}>
            <h1 className="text-xl lg:text-4xl font-bold my-10 text-center">Privacy Policy</h1>
            <div className="container">
                <p className="text-sm">Maecenas ut ipsum tempus, euismod elit vel, iaculis nisl. Nulla facilisi. Orci varius natoque
                    penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc sed ligula rhoncus neque condimentum
                    condimentum. Quisque cursus ipsum eu elit tincidunt, sed fringilla odio convallis. Nam quis libero quam.
                    Nullam vitae aliquet risus, at pellentesque libero. Nam volutpat, ante ac lacinia fermentum, diam eros
                    condimentum nisi, nec sodales ex neque et augue. Cras id dui velit. Curabitur ut maximus magna, id
                    pellentesque metus. Duis vel auctor metus, id pulvinar ante. Mauris hendrerit iaculis neque, in convallis ex
                    ultricies in. Donec ultrices viverra nulla ac fermentum. Praesent condimentum justo sed gravida consectetur.
                    Nullam non auctor enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                    egestas.</p>
            </div>
        </MtionInViewSec>
    )
}

export default page