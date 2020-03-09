class CommandLayout {
  constructor(name, options) {
    const { path, datasource, eventhandler, verbose } = options;
    this.name = name;
    this.path = path;
    this.datasource = datasource;
    this.eventhandler = eventhandler;
    this.verbose = !!verbose;

    // run
    this._run();
  }

  _run() {
    console.log('layout run', { 
      name: this.name, 
      path: this.path, 
      datasource: this.datasource, 
      eventhandler: this.eventhandler,
      verbose: this.verbose,
    });
  }
}

module.exports = CommandLayout;