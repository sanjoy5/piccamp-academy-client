import { useQuery } from '@tanstack/react-query';

const useClasses = () => {

    const { data: classes = [], isLoading: loading } = useQuery({
        queryFn: ['classes'],
        queryFn: async () => {
            const res = await fetch('/classes')
            return res.json()
        }
    })

    return [classes, loading]
};

export default useClasses;