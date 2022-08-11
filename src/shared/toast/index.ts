import { Slide, ToastOptions, toast as reactToastify } from 'react-toastify'

import { i18n } from '@/app/i18n'

export default function toast(message: string, options?: ToastOptions): void {
  reactToastify(i18n.t(message).toString(), {
    closeOnClick: true,
    transition: Slide,
    position: reactToastify.POSITION.BOTTOM_CENTER,
    hideProgressBar: true,
    ...options,
  })
}

export function errorMessage(message: string, options?: ToastOptions): void {
  toast(message, {
    closeOnClick: true,
    transition: Slide,
    type: 'error',
    hideProgressBar: true,
    ...options,
  })
}

export function successMessage(message: string, options?: ToastOptions): void {
  toast(message, {
    closeOnClick: true,
    transition: Slide,
    type: 'success',
    hideProgressBar: true,
    ...options,
  })
}

export function infoMessage(message: string, options?: ToastOptions): void {
  toast(message, {
    closeOnClick: true,
    transition: Slide,
    type: 'info',
    autoClose: 100,
    hideProgressBar: true,
    ...options,
  })
}
