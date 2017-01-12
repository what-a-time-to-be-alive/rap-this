#!/usr/bin/env node

const player = require('play-sound')(opts = {})
const exec = require('child_process').exec;

const run = function(cmd){
	console.log('Running \'npm install\'...');
	const child = exec(cmd, null, function (error, stdout, stderr) {
		if (stderr !== null) {
			console.log('' + stderr);
		}
		if (stdout !== null) {
			console.log('' + stdout);
		}
		if (error !== null) {
			console.log('' + error);
		}

		player.play(__dirname + '/horn.mp3', function(err){})

		setTimeout(
			() => player.play(__dirname + '/horn.mp3', function(err){}),
			150
		);

		setTimeout(
			() => player.play(__dirname + '/horn.mp3', function(err){}),
			300
		);
		console.log('\'npm install\' finished!');
	});
};

run('npm install');