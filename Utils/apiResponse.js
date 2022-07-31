const successResponse = (data, message = 'success', statusCode = 200) => {
    return {
      message,
      error: false,
      code: statusCode,
      data
    };
};
  
const errorResponse = (message, statusCode = 400) => {
    const codes = [200, 201, 400, 401, 404, 403, 422, 500];
    const findCode = codes.find((code) => code == statusCode);
    if (!findCode) statusCode = 500;
    else statusCode = findCode;
    return {
        message,
        code: statusCode,
        error: true
    };
};
  

module.exports = {
    successResponse, 
    errorResponse,
}