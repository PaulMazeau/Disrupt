import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../styles/cd.css';
import Cd from '../assets/images/Cd.png';

function CdBox() {
  const imageRef = useRef(null); // Référence pour accéder à l'image
  const textInfoRef = useRef(null); // Référence pour accéder à .TextInfo

  useEffect(() => {
    // Timeline pour l'animation de rotation de l'image
    const spinTl = gsap.timeline({ repeat: -1, paused: true });
    spinTl.to(imageRef.current, { rotation: 360, duration: 10, ease: "none" });

    // Timeline pour l'animation de .TextInfo
    const textTl = gsap.timeline({ paused: true });
    textTl.fromTo(textInfoRef.current.children, 
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "power1.out" }
    );

    const box = imageRef.current.parentNode; // Assume .CdBox est le parent direct

    box.addEventListener('mouseenter', () => {
      spinTl.play();
      textTl.play();
    });
    box.addEventListener('mouseleave', () => {
      spinTl.pause(); // Changez cette ligne pour ajuster le comportement d'arrêt
      textTl.reverse();
    });

    // Pour une décélération au lieu de pause
    box.addEventListener('mouseleave', () => {
      gsap.to(imageRef.current, { rotation: "+=120", duration: 10, ease: "power1.out" });
      textTl.reverse();
    });

    return () => {
      box.removeEventListener('mouseenter', () => {});
      box.removeEventListener('mouseleave', () => {});
    };
  }, []);

  return (
    <div className="CdBox">
      <img src={Cd} alt="Solitude" className="Image" ref={imageRef} />
      <div className="TextInfo" ref={textInfoRef}>
        <p>Nom : Solitude</p>
        <p>Bpm : 145</p>
        <p>Producteur : Couture</p>
      </div>
    </div>
  );
}

export default CdBox;
