const path = require('path');
const mimeTypes = {
    "css": "text/css",
    "htm": "text/html",
    "html": "text/html",
    "js": "text/javascript",
    "json": "application/json",
    "jpg": "image/jpeg",
    "jpeg": "image/jpeg",
    "png": "image/png",
    "txt": "text/plain"
}

module.exports = (filePath) => {
    let ext = path.extname(filePath).split('.').pop().toLowerCase();
    if(!ext) {
        ext = filePath
    }
    return mimeTypes[ext] || mimeTypes['txt'];
}
