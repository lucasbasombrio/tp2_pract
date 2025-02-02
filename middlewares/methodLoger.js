export const methodLoger=(req, res, next)=>{       //middleware
    console.log("🚀 url:", req.url)
    console.log("🚀 method:", req.method)
    next();
};  



//export default methodLoger  