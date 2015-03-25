var fs = require('fs'),
	colors = require('colors'),
	child  = require('child_process');

// On affiche les dossiers correspondants aux services;
var folders = fs.readdirSync('./');

for (var i = folders.length - 1; i >= 0; i--) {
	var folder = folders[i];

	if (fs.existsSync(folder + '/main.js')) {
		console.log('Lancement du service '.bold.green + folder);
		
		var process = child.spawn('node ', [folder + '/main.js'], {cwd: folder});

		process.stdout.on('data', function(data) {
			console.log(data);
		});

		process.stderr.on('data', function(data) {
			console.log(data.bold.red);
		});

		process.on('error', function(err) {
			console.log(err);
		});

	}
};