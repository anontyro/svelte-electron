import {app, BrowserWindow} from 'electron';

let mainWindow = null;

app.on('ready', () => {
  console.log('app started...');
  mainWindow = new BrowserWindow();
  mainWindow.webContents.loadFile(`${__dirname}/index.html`);
});
