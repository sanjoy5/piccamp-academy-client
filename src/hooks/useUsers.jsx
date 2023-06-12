import { useQuery } from '@tanstack/react-query';

const useUsers = () => {
    const { data: allusers = [], isLoading: loading } = useQuery({
        queryKey: ['allusers'],
        queryFn: async () => {
            const res = await fetch('https://pic-camp-academy-server.vercel.app/allusers')
            return res.json()
        }
    })

    return [allusers, loading]
};

export default useUsers;