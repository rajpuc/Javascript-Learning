export const createTask = async(req,res)=>{
    return res.json({message:"task created successfully"});
};
export const readTask = async(req,res)=>{
    return res.json({message:"task read successfully"});
};
export const updateTask = async(req,res)=>{
    return res.json({message:"task updated successfully"});
};
export const deleteTask = async(req,res)=>{
    return res.json({message:"task deleted successfully"});
};