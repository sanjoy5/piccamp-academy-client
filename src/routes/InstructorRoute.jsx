import React from 'react';
import { useAuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useInstructor from '../hooks/useInstructor';
import Loading from '../components/Loading';

const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuthContext()
    const [isInstructor, isInstructorLoading] = useInstructor()
    const location = useLocation()

    if (loading || isInstructorLoading) {
        return <Loading />
    }
    if (user || isInstructor) {
        return children
    }

    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default InstructorRoute;