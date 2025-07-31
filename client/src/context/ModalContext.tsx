import { createContext, useContext, useState } from 'react';

export type PolicyType = 'terms' | 'privacy' | null;

interface ModalContextType {
  isOpen: boolean;
  policyType: PolicyType;
  openModal: (type: PolicyType) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  policyType: null,
  openModal: () => {},
  closeModal: () => {},
});

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [policyType, setPolicyType] = useState<PolicyType>(null);

  const openModal = (type: PolicyType) => {
    setPolicyType(type);  // Set content first
    setIsOpen(true);      // Then show modal
  };

  const closeModal = () => {
    setIsOpen(false);
    setPolicyType(null);
  };

  return (
    <ModalContext.Provider value={{ isOpen, policyType, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);