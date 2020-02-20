class CommandNew {
  constructor(name, type, prefix, embedded) {
    this.name = name;
    this.type = type;
    this.prefix = prefix;
    this.embedded = embedded;

    // run
    this._run();
  }

  _run() {
    console.log('new run', {
      name: this.name,
      type: this.type,
      prefix: this.prefix,
      embedded: this.embedded,
    });
  }
}

module.exports = CommandNew;