//function what can be call if some of conditions do not meet
function error(status, msg) {
    var err = new Error(msg);
    err.status = status;
    return err;
}

module.exports = error;