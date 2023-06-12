import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useAuthContext } from '../../AuthProvider/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useClasses from '../../hooks/useClasses';
import Swal from 'sweetalert2';

const Checkout = ({ selected }) => {

    const [classes] = useClasses()
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [axiosSecure] = useAxiosSecure()
    const { user } = useAuthContext()
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')

    const price = parseFloat(selected?.price.toFixed(2))

    const updatecls = classes?.find(cls => cls?._id == selected?.cId)



    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    // console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure])




    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
        } else {
            setCardError('')
            // console.log('[PaymentMethod]', paymentMethod);
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'annonymous'
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError)
        }
        console.log(paymentIntent);

        setProcessing(false)

        if (paymentIntent.status === "succeeded") {
            setTransactionId(paymentIntent.id)

            // Save Payment Info 
            console.log(transactionId, 'tran');
            const payment = {
                transactionId: transactionId,
                selected,
                updatecls,
                orderStatus: 'Pending',
                date: new Date()
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log('Payment : ', res.data);
                    if (res.data.result.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Payment Successfull',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }

    }
    return (
        <div className='payments w-full'>




            <form onSubmit={handleSubmit}>

                <CardElement className='payment'
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-outline border-indigo-500 btn-sm hover:bg-indigo-500 hover:border-indigo-500 mt-4' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>

                {
                    cardError && <p className="text-red-600 mt-4">Error: {cardError}</p>
                }
                {
                    transactionId && <p className="text-green-600 mt-4">Transaction Complete with transactionId: {transactionId}</p>
                }
            </form>


        </div>
    );
};

export default Checkout;