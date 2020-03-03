class CommandLayout {
  constructor(name, datasource, eventhandler, verbose) {
    this.name = name;
    this.datasource = datasource;
    this.eventhandler = eventhandler;
    this.verbose = verbose;

    // run
    this._run();
  }

  _run() {
    console.log('layout run', { 
      name: this.name, 
      datasource: this.datasource, 
      eventhandler: this.eventhandler,
      verbose: this.verbose,
    });
  }
}

module.exports = CommandLayout;