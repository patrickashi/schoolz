import React from 'react';
// import { usePaystackPayment } from 'react-paystack';
// import { useNavigate } from 'react-router-dom';

const Admissionbutton = () => {
//   const navigate = useNavigate();

//   const config = {
//     reference: (new Date()).getTime().toString(),
//     email: "user@example.com",
//     amount: 5000000, // Amount in kobo (50,000 Naira)
//     publicKey: 'YOUR_PAYSTACK_PUBLIC_KEY',
//   };

//   const onSuccess = (reference) => {
//     // Redirect to admission form page
//     navigate('/admission-form');
//   };

//   const onClose = () => {
//     // Redirect to home page on failed payment
//     navigate('/');
//     alert("Payment failed. Please try again.");
//   };

//   const initializePayment = usePaystackPayment(config);

  return (
    <div className='mt-10'>
        <a href='https://paystack.com/pay/admissionformpurchase'className='ml-4'>
            <button
                //   onClick={() => initializePayment(onSuccess, onClose)}
                className="bg-[#925FE2] hover:bg-[#925FE2] text-white font-bold py-2 px-4 rounded"
                >
                Purchase Admission Form
            </button>
        </a>
    </div>
  );
};

export default Admissionbutton;