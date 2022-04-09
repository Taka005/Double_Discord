const { app, BrowserWindow, Menu } = require("electron");

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        "title": "Discord",
        "width": 1300,
        "height": 1000,
        "icon": "icon.png",
        "webPreferences": {

        }
    });

    Menu.setApplicationMenu(Menu.buildFromTemplate([
        {
          label: "アカウント切り替え",
            submenu: [
              { label:'Discord_1', click: function() {mainWindow.loadURL("https://discord.com/app");} },
              { label:'Discord_2', click: function() {mainWindow.loadURL("https://ptb.discord.com/app");} },
              { label:'Discord_3', click: function() {mainWindow.loadURL("https://canary.discord.com/app");} }
            ]
        },
        {
          label: "表示",
          submenu: [
            { role:'togglefullscreen',   label:'フルスクリーン' },
            { role:'minimize',  label:'最小化' },
            { type:'separator' },
            { role:'zoomin',  label:'拡大' },
            { role:'zoomout',  label:'縮小' },
            { role:'resetzoom',  label:'元に戻す' },
            { type:'separator' },
            { role:'quit', label:'終了' }
          ]
        },
        {
          label: "開発",
          submenu: [
            { label:'DevTools',role:'toggledevtools'},
            { label:'Discord', click: function() {mainWindow.loadURL("https://discord.gg/GPs3npB63m");} }
          ]
        }
    ]));

    mainWindow.loadURL("http://discord.com/app");
};

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});
