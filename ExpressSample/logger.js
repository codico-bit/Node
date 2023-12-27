const logger = (req,res,next) =>{ //
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method,url,time);
    //when you work with middleware, you MUST pass it onto a next middleware
    next();
}

module.exports = logger