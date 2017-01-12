#!/usr/bin/env node

const player = require('play-sound')(opts = {})
const exec = require('child_process').exec;

const args = process.argv.slice(2);

const argsString = args.join(' ');

function blastTheHorn() {
	player.play(__dirname + '/horn.mp3', function(err){})

	setTimeout(
		() => player.play(__dirname + '/horn.mp3', function(err){}),
		150
	);

	setTimeout(
		() => player.play(__dirname + '/horn.mp3', function(err){}),
		300
	);
}

const run = function(cmd) {
	console.log(`Running '${argsString}'...`);

	exec(cmd, null, function (error, stdout, stderr) {
		if (stderr !== null) {
			console.log('' + stderr);
		}
		if (stdout !== null) {
			console.log('' + stdout);
		}
		if (error !== null) {
			console.log('' + error);
		}

		console.log(`'${argsString}' Finished!`);
		blastTheHorn();
	});
};

run(argsString);