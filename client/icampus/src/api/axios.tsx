import axios from 'axios';
import { FaAcquisitionsIncorporated } from 'react-icons/fa';

export default axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
});
