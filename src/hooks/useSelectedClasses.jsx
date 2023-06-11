import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import { useAuthContext } from '../AuthProvider/AuthProvider';

const useSelectedClasses = () => {

    const { user } = useAuthContext()
    const [axiosSecure] = useAxiosSecure()

    const { data: selectedClasses = [], refetch } = useQuery({
        queryKey: ['selecetedClasses', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/selectedclasses/${user?.email}`)
            return res.data
        }
    })
    return [selectedClasses, refetch]

};

export default useSelectedClasses;