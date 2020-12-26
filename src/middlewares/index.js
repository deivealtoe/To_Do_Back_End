module.exports = {
    notFound(request, response, next) {
        const error = new Error('Not found');

        error.status = 404;

        next(error);
    },
    catchAllErrors(error, request, response, next) {
        response.status(error.status || 500);

        response.json({
            error: error.message
        });
    }
}