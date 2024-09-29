const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");

function adminMiddlewares(req ,res ,next) {

    const token = req.headers.token
    const decoded = jwt.verify(token , JWT_ADMIN_PASSWORD);

    if(decoded){
        req.adminId = decoded.id;
        next();
    }else{
        res.status(403).send({
            message : "You are not signed in"
        });
    }

};

module.exports = {
    adminMiddlewares
}