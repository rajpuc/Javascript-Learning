//url params niye kivabe kaj korte hoi:
export const demo1 = async(req,res) =>{
    let name = req.params.name;
    let age = req.params.age;
    return res.json({name:name,age:age});
}
//query string niye kivabe kaj korte hoi:
export const demo2 = async(req,res) =>{
    let name = req.query.name;
    let age =  req.query.age;
    return res.json({name:name,age:age});
}
// request er json body niye kivabe kaj korte hoi:
export const demo3 = async(req,res) =>{
    let JSONBody = req.body;
    return res.json(JSONBody);
}

//request er form data niye kivabe kaj korte hoi:
export const demo4 = async(req,res) =>{
    let FormDataBody = req.body;
    return res.json(FormDataBody);
}

//request er header property niye kivabe kaj korte hoi:
export const demo5 = async(req,res) =>{
    let reqHeaders = req.headers;
    return res.json(reqHeaders);
}

//How to works with middleware
export const demo6 = async(req,res) =>{
    return res.json({name:"Hello Middleware"})
}