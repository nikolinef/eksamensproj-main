// accordionLogic.js
import { useEffect } from 'react';

export const useAccordionLogic = () => {
  useEffect(() => {
    const accordions = document.querySelectorAll(".onefolder");

    accordions.forEach(accordion => {
        accordion.addEventListener("click", () => {
            accordion.classList.toggle("active");
        });
    });

    // Clean up event listeners when component unmounts
    return () => {
        accordions.forEach(accordion => {
            accordion.removeEventListener("click", () => {
                accordion.classList.toggle("active");
            });
        });
    };

}, []); // Empty dependency array ensures the effect runs only once after initial render
};