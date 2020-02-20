class CommandNew {
  constructor(name, type, prefix) {
    this.name = name;
    this.type = type;
    this.prefix = prefix;

    // run
    this._run();
  }

  _run() {
    console.log('new run', {
      name: this.name,
      type: this.type,
      prefix: this.prefix
    });
  }
}

module.exports = CommandNew;