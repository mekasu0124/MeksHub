const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;
let loadingWindow;

function createLoadingWindow() {
  loadingWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    webPreferences: {},
    icon: path.join(__dirname, '/images/app-icon.jpg'),
  });

  loadingWindow.loadFile(path.join(__dirname, '/loading.html'));
};

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {},
    icon: path.join(__dirname, '/images/app-icon.jpg'),
  });

  mainWindow.loadURL('http://localhost:3000');

  mainWindow.once('ready-to-show', () => {
    loadingWindow.close();
    mainWindow.show();
  });
};

app.on('ready', () => {
  createLoadingWindow();

  setTimeout(() => {
    createMainWindow();
  }, 1000);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
