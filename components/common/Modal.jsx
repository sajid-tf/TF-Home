'use client';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { RxCrossCircled } from "react-icons/rx";

const Modal = ({ isOpen, onClose, children, className }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className={`bg-white rounded-lg p-8 relative w-full max-w-lg mx-4 ${className?.body}`}>
        <RxCrossCircled className={`absolute top-3 cursor-pointer text-xl transition-all duration-200 right-3 text-gray-500 hover:text-rose-400 ${className.button}`} onClick={onClose} />
        {children}
      </div>
    </div>
  );
};

export default Modal;
Modal.proTotype = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.shape({
    body: PropTypes.string,
    button: PropTypes.string,
  }),
};

