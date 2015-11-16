function start() {
  console.log("Request handler 'start' was called.");
  return 'Hello Start';
}

function upload() {
  console.log("Request handler 'upload' was called.");
  return 'Hello updload';
}

exports.start = start;
exports.upload = upload;
