inlets = 1;
outlets = 1;
autowatch = 1;

function list() {
    post(arguments[0]);
    var lst = arrayfromargs(messagename, arguments);
    outlet(0, lst.length);
}
