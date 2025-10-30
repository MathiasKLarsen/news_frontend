"use client"

import { Dispatch, PropsWithChildren, useState } from 'react'
import { createPortal } from 'react-dom'

interface Props extends PropsWithChildren {
    isOpen: boolean;
    onClose: Dispatch<boolean>;
}

const Modal = ({isOpen, onClose, children}: Props) => {

  return (
    isOpen && createPortal(
        <section id='modal'
            onClick={() => onClose(false)} 
            className='fixed inset-0 z-100 grid place-content-center bg-black/80'
        >
            {children}
        </section>,
        document.body
    )
  )
}

export default Modal