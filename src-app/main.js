'use strict';
const electron = require('electron');
const exec = require('child_process').exec;
var path = require('path');
const url = require('url');

const app = electron.app;
const dialog = electron.dialog;
const menu = electron.Menu;

// Adds debug features like hotkeys for triggering dev tools and reload
//require('electron-debug')();

// Prevent window being garbage collected
let mainWindow;

let isDevelopment = true;

if (isDevelopment) {
	require('electron-reload')(__dirname, {
		ignored: /node_modules|[\/\\]\./
	});
}

function onClosed() {
	// Dereference the window
	// For multiple windows store them in an array
	mainWindow = null;
}

function execute(command, callback) {
	exec(command, function (error, stdout, stderr) { callback(stdout); });
};

function createMainWindow() {
	const win = new electron.BrowserWindow({
		width: 1200,
		height: 800,
		frame: true //无边框窗口
	});

	let indexPath = url.format({
		protocol: 'file:',
		pathname: path.join(__dirname, './view', 'index.html'),
		slashes: true
	});

	//win.loadURL(`file://${__dirname}/dist/index.html`);
	console.log(indexPath);
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
	/* execute('weinre --httpPort 9000 --debug --boundHost 192.168.9.1', function (output) {
		console.log("ping", output);
	}); */


});
