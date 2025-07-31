import { useGSAP as useBaseGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type GSAPContext = {
  gsap: typeof gsap;
  ScrollTrigger: typeof ScrollTrigger;
};

export const useGSAP = (callback: (ctx: GSAPContext) => void, deps?: any[]) => {
  return useBaseGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (typeof callback === 'function') {
      callback({ gsap, ScrollTrigger });
    }
  }, deps);
};
