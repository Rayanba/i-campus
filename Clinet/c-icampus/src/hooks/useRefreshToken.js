import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { auth, setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        });
        setAuth(prev => {
            // console.log(JSON.stringify(prev)); // show rev value (should be empty)
            // console.log(response.data.accessToken);
            return { 
                ...prev,
                roles: response.data.roles,
                 accessToken: response.data.accessToken
                 }
        });
        return response.data.accessToken;
    }
    // console.log(auth)// remove this
    return refresh;
};

export default useRefreshToken;
