import { useRef, useState, useEffect } from 'react';
import { useGSAP } from '../../hooks/use-gsap';
import { useModal, type PolicyType } from '../../context/ModalContext';
import { PrivacyPolicy } from '../policies/PrivacyPolicy';
import { TermsConditions } from '../policies/TermsConditions';
import { gsap } from 'gsap';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './accordion';
import { X } from 'lucide-react';

interface AnimatedModalProps {
  title: string;
}

export function AnimatedModal({ title }: AnimatedModalProps) {
  const { isOpen, closeModal, policyType } = useModal();
  const [shouldRender, setShouldRender] = useState(isOpen);
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const animationContext = useRef<gsap.Context | null>(null);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    } else {
      gsap.context(() => {
        gsap.to(modalRef.current, {
          duration: 0.4,
          opacity: 0,
          scale: 0.95,
          rotateX: -5,
          ease: "power3.inOut"
        });
        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 0.4,
          ease: "sine.out",
          onComplete: () => setShouldRender(false)
        });
      });
    }
  }, [isOpen]);

  useGSAP(() => {
    if (!shouldRender || !modalRef.current || !overlayRef.current) return;

    animationContext.current = gsap.context(() => {
      gsap.from(overlayRef.current, {
        opacity: 0,
        duration: 0.3
      });

      gsap.from(modalRef.current, {
        y: 80,
        opacity: 0,
        scale: 0.9,
        rotateX: 15,
        duration: 0.6,
        ease: "power3.out",
        transformPerspective: 1000
      });
    });

    return () => animationContext.current?.revert();
  }, [shouldRender]);

  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={(e) => e.target === e.currentTarget && closeModal()}
      />
      
      <div ref={modalRef} className="relative flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-2xl rounded-xl bg-white p-8 shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <button
              onClick={closeModal}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="prose max-h-[70vh] overflow-y-auto p-4">
            {policyType === 'privacy' && <PrivacyPolicy />}
            {policyType === 'terms' && <TermsConditions />}
          </div>
        </div>
      </div>
    </div>
  );
}