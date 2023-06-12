import React from 'react';
import { Helmet } from 'react-helmet-async';
import Checkout from '../components/Payment/Checkout';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import useSelectedClasses from '../hooks/useSelectedClasses';
import { useParams } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK)

const Payment = () => {

    const [selectedClasses] = useSelectedClasses()
    const { id } = useParams()
    const selected = selectedClasses.find(cls => cls._id === id)
    console.log(selected);


    return (
        <div>
            <Helmet>
                <title>Payment - PicCamp Academy</title>
            </Helmet>

            <h2 className="text-2xl md:text-4xl font-bold text-center mb-5 bg-base-200 py-6"><span className="text-indigo-500">Payment</span> Here</h2>

            <div className="px-6 md:px-16 py-5">
                <Elements stripe={stripePromise}>
                    <Checkout selected={selected}></Checkout>
                </Elements>

            </div>
        </div>
    );
};

export default Payment;