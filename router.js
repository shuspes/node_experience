const url = require("url");

const route = (request) => {
    console.log("request", request);
    const requestedURL = url.parse(request.url);
    console.log("requestedURL", requestedURL);
};

exports.route = route;