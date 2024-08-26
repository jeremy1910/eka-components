import { useAuth } from '../../contexts/AuthContext';
const BASE_URL = 'http://192.168.8.106:8093';

export interface RequestOptions extends RequestInit {

}

function useAPI() {

    const { token } = useAuth();

    function fetchAPI(url: string, options: RequestOptions = {}): Promise<any> {

        const customHeaders = {
            ...options.headers,
            accept: 'application/json',
            'Content-Type': 'application/json',
            ...(token && { 'X-API-KEY': `${token}` }),
        };

        const customOptions: RequestOptions = {
            ...options,
            headers: customHeaders,
        };

        return fetch(`${BASE_URL}${url}`, customOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            });
    }
    return {
        fetchAPI
    };
}

export default useAPI