import { useEffect, useState } from "react";

export function useFetch(url){
    const [finalData , setFinalData ] = useState({});

    async function getDetails(){
        const response = await fetch();
        const json = await response.json;
        return setFinalData(json);
    }

    useEffect(() => {
        getDetails();
    } , [url]);

    return {
        finalData
    }
}