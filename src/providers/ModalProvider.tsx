import MainModal, {modalType} from '@components/modals/mainModal';
import React, {PropsWithChildren, createContext, useState} from 'react';

type ModalConfig = {
  type: modalType;
  title: string;
  description: string;
  action: () => void;
  btnLabel: string;
};

interface ContextProps {
  show: (config: ModalConfig) => void;
  close: () => void;
}

export const ModalContext = createContext({} as ContextProps);

const ModalProvider = ({children}: PropsWithChildren) => {
  const [showModal, setShowModal] = useState(false);
  const [modalConfig, setModalConfig] = useState<ModalConfig>(
    {} as ModalConfig,
  );

  const show = (config: ModalConfig) => {
    setShowModal(true);
    setModalConfig(config);
  };

  const close = () => {
    setShowModal(false);
  };

  return (
    <ModalContext.Provider
      value={{
        show,
        close,
      }}>
      {children}
      <MainModal
        visible={showModal}
        title={modalConfig?.title}
        action={modalConfig?.action}
        btnLabel={modalConfig?.btnLabel}
        description={modalConfig?.description}
        type={modalConfig?.type}
        closeModal={close}
      />
    </ModalContext.Provider>
  );
};

export default ModalProvider;
