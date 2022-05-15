import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Particle1 from 'assets/particles/particle-1.png';
import Particle2 from 'assets/particles/particle-2.png';
import Particle3 from 'assets/particles/particle-3.png';
import Particle4 from 'assets/particles/particle-4.png';
import Particle5 from 'assets/particles/particle-5.png';
import Particle6 from 'assets/particles/particle-2.png';
import Particle7 from 'assets/particles/particle-4.png';

const AppParticle = () => {
  const particlesInit = async (main: any) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  return (
    <Particles
      className="absolute h-full w-full -z-10"
      init={particlesInit}
      params={{
        particles: {
          number: {
            value: 15,
            density: { enable: true, value_area: 800 },
          },
          shape: {
            type: ['images'],
            image: [
              {
                src: `${Particle1?.src}`,
                width: 50,
                height: 53,
              },
              {
                src: `${Particle2?.src}`,
                width: 50,
                height: 53,
              },
              {
                src: `${Particle3?.src}`,
                width: 20,
                height: 23,
              },
              {
                src: `${Particle4?.src}`,
                width: 20,
                height: 23,
              },
              {
                src: `${Particle5?.src}`,
                width: 50,
                height: 53,
              },
              {
                src: `${Particle6?.src}`,
                width: 50,
                height: 53,
              },
            ],
          },
          opacity: {
            value: 0.57626369048095938,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 8,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.4, sync: false },
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 3,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: false, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true,
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
            },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default AppParticle;
