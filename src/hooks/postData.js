
const postData = async (apiFunction, setState, data, callback) => {
    try {
        const response = await apiFunction(data);
        setState(response);
        if(callback){
            callback(response);
        }
    } catch (error) {
        console.log("failed post: ", error);
        if(callback){
            callback();
        }
    }
}

export default postData;