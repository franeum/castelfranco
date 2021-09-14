inlets = 2;
outlets = 2;

var autowatch = 1;
var l_value = 0.0;
var r_value = 0.0;
var arg = jsarguments[1];
post(arg);

function bang() {
    post(this);
    outlet(0, l_value + r_value);
}

function msg_float(f) {
    post(inlet);
    if (inlet == 0) {
        l_value = f;
        bang();
    } else {
        r_value = f;
    }
}

function list() {
    var lst = arrayfromargs(messagename, arguments);
    var a = [];
    var len = lst.length;

    while (len) {
        a.push(lst[len - 1]);
        len--;
    }

    outlet(0, a);
}

function midi(m) {
    var freq = 440.0 * Math.pow(2, (m - 69) / 12);
    outlet(0, freq);
}

function freq(f) {
    var midi = 69 + 12 * Math.log(f / 440);
    outlet(0, midi);
}

function random() {
    outlet(0, Math.random());
}

function random100() {
    var v100 = parseInt(Math.random() * 100);
    outlet(0, Math.round(v100));
}

function moses(v) {
    if (v < arg) outlet(0, v);
    else outlet(1, v);
}
