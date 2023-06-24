const path = require('path')
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    menu: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadURL('https://krunker.io')
  win.setMenuBarVisibility(false);
}

  app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })

