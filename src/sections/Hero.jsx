import { Canvas } from '@react-three/fiber';
import React from 'react';
import { HackerRoom } from '../components/HackerRoom';
import { Leva, useControls } from 'leva';
import { useMediaQuery } from 'react-responsive';
import ReactLogo from '../components/ReactLogo';
import { useGSAP } from '@gsap/react';
import Cube from '../components/Cube';
import Rings from '../components/Rings';
import HeroCamera from '../components/HeroCamera';
import Button from '../components/Button';
import { calculateSizes } from '../constants/index';
import Target from '../components/Target';
function Hero() {
    // const x = useControls('hackerRoom', {
    //     positionX: { value: 2.5, min: -10, max: 10 },
    //     positionY: { value: 2.5, min: -10, max: 10 },
    //     positionZ: { value: 2.5, min: -10, max: 10 },
    //     rotationX: { value: 0, min: -10, max: 10 },
    //     rotationY: { value: 0, min: -10, max: 10 },
    //     rotationZ: { value: 0, min: -10, max: 10 },
    //     scale: { value: 1, min: 0.1, max: 10 },
    // });
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);


    return (
        <section className='min-h-screen w-full flex flex-col relative' id=''>
            <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
                <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>
                    Hi, I am Aryan <span className='waving-hand'>👋</span>
                </p>
                <p className='hero_tag text-gray_gradient'>Full stack web developer</p>
                <div className='w-full h-full absolute inset-0'>
                    <Canvas className='w-full h-full'>
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                        <ambientLight intensity={3} />
                        <HeroCamera>
                            <HackerRoom
                                position={[1, -8.4, -10]}
                                rotation={[0, -Math.PI, 0]}
                                scale={isMobile ? 0.07 : 0.1}
                            />
                        </HeroCamera>
                        <group>
                            {/* <ReactLogo position={sizes.reactLogoPosition} /> */}
                            {/* <Rings position={sizes.ringPosition} /> */}
                            {/* <Cube position={sizes.cubePosition} /> */}
                            {/* <Target position={sizes.targetPosition}/> */}
                        </group>

                    </Canvas>
                    <Leva />
                </div>
                <div className='absolute bottom-7 left-0 right-0 w-full z-10 flex justify-center'>
                    <a href='#about' className='w-fit'>
                        <Button
                            name="Let's work together"
                            isBeam
                            containerClass="sm:w-fit w-full"
                        />
                    </a>
                </div>

            </div>
        </section>
    );
}

export default Hero;
