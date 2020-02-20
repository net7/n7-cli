class CommandNew {
  constructor(name, type) {
    this.name = name;
    this.type = type;

    // run
    this._run();
  }

  _run() {
    console.log('new run', {
      name: this.name,
      type: this.type
    });
  }
}

module.exports = CommandNew;