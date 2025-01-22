const { CustomAPIError } = require("../errors/custom-error");

const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return err.status(err.statusCode).json({msg: err.message});
    }
    return res.status(500).json('Someting went wrong!');
};

module.exports = errorHandlerMiddleware;