'use strict';
const electron = require('electron');
const exec = require('child_process').exec;
var path = require('path');
const url = require('url');
const app = electron.app;
const dialog = electron.dialog;
const menu = electron.Menu;

let mainWindow;

require('electron-reload')(__dirname, {
	ignored: /node_modules|[\/\\]\./
});

function onClosed() {
	mainWindow = null;
}

function execute(command, callback) {
	exec(command, function (error, stdout, stderr) { callback(stdout); });
};

function createMainWindow() {
	const win = new electron.BrowserWindow({
		backgroundColor: '#2e2c29',
		resizable: false,
		width: 1200,
		height: 800,
		frame: true //无边框窗口
	});

	let indexPath = url.format({
		protocol: 'file:',
		pathname: path.join(__dirname, './view', 'index.html'),
		slashes: true
	});

	win.loadURL(indexPath);
	win.on('closed', onClosed);
	return win;
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (!mainWindow) {
		mainWindow = createMainWindow();
	}
});


app.on('ready', () => {
	mainWindow = createMainWindow();
});
