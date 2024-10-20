import React from "react";
import ParticleImage, { Vector, forces } from "react-particle-image";
import icon from './icon-x.png';

const particleOptions = {
    filter: ({ x, y, image }) => {
        // Get pixel
        const pixel = image.get(x, y);
        console.log(pixel)
        // Make a particle for this pixel if blue > 50 (range 0-255)
        return pixel.b > 90;
    },
    color: ({ x, y, image }) => "rgba(255,255,255,0.64)",
    radius: () => Math.random() * 1.4 + 0.5,
    mass: () => 50,
    friction: () => 0.2,
    initialPosition: ({ canvasDimensions }) => {
        return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
    }
};

const motionForce = (x, y) => {
    return forces.disturbance(x, y, 5);
};

const Logo = () => {
    return (
        <ParticleImage
            src={icon}
            scale={.6}
            entropy={20}
            maxParticles={4000}
            mouseMoveForce={motionForce}
            touchMoveForce={motionForce}
            particleOptions={particleOptions}
            backgroundColor="transparent"
            height={400}
            width={735}
            className="canvasId"
        />
    );
};

export default Logo;
