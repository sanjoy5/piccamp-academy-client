import { useQuery } from '@tanstack/react-query';
import { useAuthContext } from '../AuthProvider/AuthProvider';

const useSelectedClasses = () => {

    const { user } = useAuthContext()

    const token = localStorage.getItem('token')

    const { data: selectedClasses = [], refetch } = useQuery({
        queryKey: ['selecetedClasses', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://pic-camp-academy-server.vercel.app/selectedclasses?email=${user?.email}`, {
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