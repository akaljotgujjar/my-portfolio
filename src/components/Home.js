import React from "react"
import image from "../bgImg.jpg"

export default function Home() {
    return (
        <main>
            <img src={image} alt="World Map" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6x1 text-blue-400 font-bold cursive leading-name lg:leading-snug home-name">Hello! I'm Akaljot</h1>
            </section>
        </main>
    )
}