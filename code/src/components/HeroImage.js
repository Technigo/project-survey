import React from 'react';
const hero = "https://images.unsplash.com/photo-1523357585206-175e971f2ad9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1653&q=80"

export const HeroImage = () => {
    return (
        <img className="heroimage" alt="hero image" src={hero} />
    )
}