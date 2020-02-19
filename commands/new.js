class CommandNew {
  constructor(name) {
    this.name = name;

    // run
    this._run();
  }

  _run() {
    console.log('new run', {
      name: this.name
    });
  }
}

module.exports = CommandNew;