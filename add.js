// put your promise inside a function

function add(a,b){
    const mypromise = new Promise((res,rej)=>{
        // heavy task that take more time
        if(!isNaN(a) && !isNaN(b) && typeof a == "number" && typeof b == "number"){
            res(a+b)
        }else{
            rej("Please provide only number")
        }
    })
    return mypromise
}

export default add