
import React from 'react';
import { Helmet } from 'react-helmet-async';
import useSelectedClasses from '../hooks/useSelectedClasses';


const SelectedClasses = () => {
    const [selectedClasses] = useSelectedClasses()

    console.log(selectedClasses, 'selected Classes');

    return (
        <div>
            <Helmet>
                <title>Selected Classes - PicCamp Academy</title>
            </Helmet>

            <h2 className="text-2xl md:text-4xl font-bold text-center mb-5 bg-base-200 py-6"><span className="text-indigo-500">Selected</span> Classes</h2>


            <div className="overflow-x-auto px-5 md:px-10 py-5">

                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-base'>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Instructor</th>
                            <th>Seats</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            selectedClasses?.map((cls) => (
                                <tr key={cls._id}>

                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={cls.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{cls.cname} </td>
                                    <td>
                                        <p className="">Name: {cls.iname}</p>
                                        <p className="text-sm">Email: {cls.email}</p>
                                    </td>
                                    <td>{cls.seats}</td>
                                    <td>${cls.price}</td>

                                    <td>
                                        <button className="btn bg-indigo-500 hover:bg-indigo-600 btn-sm text-white" >Payment</button>
                                    </td>
                                    <td>
                                        <button className="btn bg-indigo-500 hover:bg-indigo-600 btn-sm text-white" >Delete</button>
                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>


                </table>

            </div>


        </div>
    );
};

export default SelectedClasses;