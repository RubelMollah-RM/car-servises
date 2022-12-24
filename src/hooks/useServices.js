import { useEffect, useState } from "react";

const useServices = () => {
    const [servise, setServise] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServise(data))
    }, []);
    return [servise, setServise]
        
    
}
export default useServices;