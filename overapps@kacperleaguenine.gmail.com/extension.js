const {
    Clutter
} = imports.gi;
const Main = imports.ui.main;

function init() {}

function enable() {
    var press = false;
    global.stage.connectObject('key-release-event', (a, e) => {
        if (Main.overview._shown && e.get_key_symbol() === Clutter.KEY_space) {
            press = false;
        }
    });
    global.stage.connectObject('key-press-event', (a, e) => {
        if (Main.overview._shown && e.get_key_symbol() === Clutter.KEY_space) {
            if (press) return;
            press = true;
            if (!Main.overview.dash.showAppsButton.checked) {
                Main.overview.dash.showAppsButton.set_checked(true);
            } else {
                Main.overview.dash.showAppsButton.set_checked(false);
            }
        }
    });

}

function disable() {}
