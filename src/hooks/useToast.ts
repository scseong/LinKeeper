import { toast, ToastOptions } from 'react-toastify';

type ToastArgs = {
  message: string;
};

export const useToast = () => {
  const options: ToastOptions = {
    position: 'top-right',
    autoClose: 2000,
  };

  const successTopRight = ({ message }: ToastArgs) => {
    toast.success(message, options);
  };

  const errorTopRight = ({ message }: ToastArgs) => {
    toast.error(message, options);
  };

  const warnTopRight = ({ message }: ToastArgs) => {
    toast.warn(message, options);
  };

  return {
    successTopRight,
    errorTopRight,
    warnTopRight,
  };
};
