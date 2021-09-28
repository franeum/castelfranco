inlets = 1;
outlets = 1;
autowatch = 1;

var mode = jsarguments[1];

function bang() {
    post(mode, "\n");
}
