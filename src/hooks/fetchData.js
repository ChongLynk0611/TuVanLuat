
const fetchData = async (apiFunction, setState, callback , params ) => {
    try {
        const response = await apiFunction(params);
        setState(response);
        // console.log(response);
        if(callback){
            callback();
        }
    } catch (error) {
        console.log("failed fetch : ", error);
        if(callback){
            callback();
        }
    }
}

export default fetchData