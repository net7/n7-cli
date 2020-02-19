class CommandLayout {
  constructor(name, datasource, eventhandler) {
    this.name = name;
    this.datasource = datasource;
    this.eventhandler = eventhandler;

    // run
    this._run();
  }

  _run() {
    console.log('layout run', { 
      name: this.name, 
      datasource: this.datasource, 
      eventhandler: this.eventhandler
    });
  }
}

module.exports = CommandLayout;