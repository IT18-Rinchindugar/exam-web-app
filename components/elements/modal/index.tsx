/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import React, { Fragment, ReactChildren, ReactNode } from 'react';
import { Dialog, Transition } from '@headlessui/react';

type ModalProps = {
  children: ReactNode | ReactChildren;
  isOpen: boolean;
  closeModal: () => void;
  className?: string;
  opacity: number;
};

export default function Modal({
  children,
  isOpen,
  closeModal,
  className,
  opacity,
}: ModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className={`min-h-screen px-4 text-center ${className}`}>
          <Dialog.Overlay
            className={`fixed inset-0 bg-background opacity-${opacity}`}
          />
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div>{children}</div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
