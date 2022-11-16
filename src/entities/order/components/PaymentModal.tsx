import { XCircleIcon } from "@heroicons/react/outline";
import React from "react";

type PaymentModalProps = {
  paymentModal: boolean;
  setPaymentModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const PaymentModal = ({ paymentModal, setPaymentModal }: PaymentModalProps) => {
  return (
    <div className={`${paymentModal ? "fixed" : "hidden"} top-0 left-0 z-20 h-screen w-screen bg-black/60`}>
      <div className="absolute left-1/2 top-1/2 z-10 h-60 w-72 -translate-x-1/2 -translate-y-1/2 rounded-md bg-slate-100 md:w-96">
        <div className="rounded-t-md bg-green-700 py-2 text-center text-white">System</div>
        <div onClick={() => setPaymentModal(false)} className="absolute top-2 right-3 cursor-pointer font-bold">
          <XCircleIcon className="h-7 w-7 text-red-500" />
        </div>
        <div className="mt-2 text-center text-xl">The payment sistem is not ready yet</div>
      </div>
    </div>
  );
};

export default PaymentModal;
