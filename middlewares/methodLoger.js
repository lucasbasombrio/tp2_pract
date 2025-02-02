export const methodLoger=(req, res, next)=>{       //middleware //exporto solo esta funcion
    console.log("🚀 url:", req.url)
    console.log("🚀 method:", req.method)
    next();
};  



// export default methodLoger  //exporto todo el archivo