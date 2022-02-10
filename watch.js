const chokidar = require('chokidar');
const {debounce} = require('lodash');
const {execSync} = require('child_process');

const buildDebounced = debounce(function build() {

    execSync('npm run build', {stdio: 'inherit'});

}, 300);

chokidar.watch('./src').on('all', (event, path) => {
    console.log(event, path);
    buildDebounced();
});