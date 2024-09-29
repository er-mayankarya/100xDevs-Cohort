const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");

function userMiddlewares(req ,res ,next) {

    const token = req.headers.token
    const decoded = jwt.verify(token , JWT_USER_PASSWORD);

    if(decoded){
        req.userId = decoded.id;
        next();
    }else{
        res.status(403).send({
            message : "You are not signed in"
        });
    }

};

module.exports = {
    userMiddlewares
}