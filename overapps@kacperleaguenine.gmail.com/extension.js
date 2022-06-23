const {
    Clutter
} = imports.gi;
const Main = imports.ui.main;
let keyReleaseConnector = null;
let keyPressConnector = null;

function init() {}

function enable() {
    var press = false;
    keyReleaseConnector = global.stage.connect('key-release-event', (a, e) => {
        if (Main.overview._shown && e.get_key_symbol() === Clutter.KEY_space) {
            press = false;
        }
    });
    keyPressConnector = global.stage.connect('key-press-event', (a, e) => {
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

function disable() {
    if (keyReleaseConnector) {
        global.settings.disconnect(keyReleaseConnector);
        keyReleaseConnector = null;
    }
    if (keyPressConnector) {
        global.settings.disconnect(keyPressConnector);
        keyPressConnector = null;
        log("disconnected")
    }
}
