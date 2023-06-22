import React from 'react';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useAuthContext } from '../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {
    const { user } = useAuthContext()
    const [axiosSecure] = useAxiosSecure()

    const { data: history = [] } = useQuery({
        queryKey: ['enrolled-history'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/enrolled-history?email=${user?.email}`)
            return res.data
        }
    })


    return (
        <div>
            <Helmet>
                <title>Payment History - PicCamp Academy</title>
            </Helmet>

            <h2 className="text-2xl md:text-4xl font-bold text-center mb-5 bg-base-200 py-6"><span className="text-indigo-500">Payment</span> History</h2>


            <div className="overflow-x-auto px-5 md:px-10 py-5">

                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-base'>
                            <th>SN</th>
                            <th>Transaction Id</th>
                            <th>Class Name</th>
                            <th>Instructor Email</th>
                            <th>Price</th>
                            <th>Payment Date</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            history?.map((cls, idx) => {
                                const { cname, email, price } = cls.selected;
                                return (
                                    <tr key={cls._id}>
                                        <td>{idx + 1}</td>
                                        <td>
                                            {cls.transactionId}
                                        </td>
                                        <td>{cname} </td>
                                        <td>
                                            {email}
                                        </td>
                                        <td>${price}</td>
                                        <td>{cls.date}</td>

                                    </tr>
                                )
                            })
                        }


                    </tbody>


                </table>

            </div>


        </div>
    );
};

export default PaymentHistory;