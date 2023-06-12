import React from 'react';
import { useAuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useStudent from '../hooks/useStudent';
import Loading from '../components/Loading';

const StudentRoute = ({ children }) => {
    const { user, loading } = useAuthContext()
    const [isStudent, isStudentLoading] = useStudent()
    const location = useLocation()

    if (loading || isStudentLoading) {
        return <Loading />
    }
    if (user || isStudent) {
        return children
    }

    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default StudentRoute;