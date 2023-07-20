const { app, BrowserWindow, dialog } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    fullscreen: true,
    webPreferences: {
      preload: path.join(__dirname, 'C:\\Users\\romai\\Desktop\\site sport meca\\ap 2\\testapp calculator\\preload.js')
    }
  });

  win.loadFile('bourse.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  // Afficher une boîte de dialogue au démarrage de l'application
  dialog.showMessageBox({
    title: 'RomCorp',
    message: 'AAPL!',
    buttons: ['ok'],
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
