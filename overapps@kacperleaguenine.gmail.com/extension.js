const {
    Clutter
} = imports.gi;
const Main = imports.ui.main;

function init() {}

function enable() {

    global.stage.connectObject('key-press-event', (a, e) => {
        if (Main.overview._shown && e.get_key_symbol() === Clutter.KEY_space)
            Main.overview.dash.showAppsButton.set_checked(true);
    });

}

function disable() {}
