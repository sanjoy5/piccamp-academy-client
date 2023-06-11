import { useQuery } from '@tanstack/react-query';
import { useAuthContext } from '../AuthProvider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useStudent = () => {
    const { user, loading } = useAuthContext()
    const [axiosSecure] = useAxiosSecure()
    const { data: isStudent, isLoading: isStudentLoading } = useQuery({
        queryKey: ['isStudent', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/student/${user?.email}`)
            return res.data.student
        }
    })
    return [isStudent, isStudentLoading]
};

export default useStudent;