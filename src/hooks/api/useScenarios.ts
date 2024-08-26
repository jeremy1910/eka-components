import { useQuery } from '@tanstack/react-query';
import usePost from './usePost';


interface Scenario {
    id: string;
    name: string;
}


export function useScenarios() {

    const { post } = usePost();

    const getScenarios = () => {
        return useQuery<Scenario[], Error>({
            queryKey: ['scenarios'],
            queryFn: () => post('/scenarios', {}),
        });
    }

    return {
        getScenarios
    }

}