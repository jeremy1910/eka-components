import useAPI from './useAPI';


export interface RequestOptions extends RequestInit {

}

function usePost() {

    const { fetchAPI } = useAPI();

    function post<T>(url: string, body: any, options?: RequestOptions): Promise<T> {

        return fetchAPI(url, {
            ...options,
            method: 'POST',
            body: JSON.stringify(body),
        });
    }
    return { post };

}

export default usePost