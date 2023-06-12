import { useQuery } from '@tanstack/react-query';
// import useAxiosSecure from './useAxiosSecure';
import { useAuthContext } from '../AuthProvider/AuthProvider';

const useSelectedClasses = () => {

    const { user } = useAuthContext()
    // const [axiosSecure] = useAxiosSecure()
    const token = localStorage.getItem('token')

    const { data: selectedClasses = [], refetch } = useQuery({
        queryKey: ['selecetedClasses', user?.email],
        queryFn: async () => {
            // const res = await axiosSecure.get(`/selectedclasses/${user?.email}`)
            // return res.data
            const res = await fetch(`http://127.0.0.1:5000/selectedclasses?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                },
            })
            return res.json()
        }
    })
    return [selectedClasses, refetch]

};

export default useSelectedClasses;