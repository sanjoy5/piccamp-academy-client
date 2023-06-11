import { useQuery } from '@tanstack/react-query';

const useUsers = () => {
    const { data: allusers = [], isLoading: loading } = useQuery({
        queryKey: ['allusers'],
        queryFn: async () => {
            const res = await fetch('http://127.0.0.1:5000/allusers')
            return res.json()
        }
    })

    return [allusers, loading]
};

export default useUsers;