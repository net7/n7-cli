export default {
  title: 'timeline#title',
  mapHeader: 'timeline#mapheader',
  libOptions: {
    locale: 'it_IT',
    min: '1920-01-01',
    max: '1960-01-01',
    height: '750px',
    format: {
      minorLabels: {
        month: 'MMM',
        year: 'YYYY'
      },
      majorLabels: {
        month: 'YYYY', 
        year: ''
      }
    },
    cluster: false,
     zoomMin: 1000 * 60 * 60 * 24 * 365 * 4,
    zoomMax: 1000 * 60 * 60 * 24 * 365 * 15,
      groupHeightMode: 'fixed',
     verticalScroll: true,
    stack: true,
    zoomKey: "ctrlKey",  
    start: '1943-01-01',  
    end: '1947-01-01',    
     orientation: {
      axis: "both",
      item: "top",
    },
    type: 'point',   
    itemHeight: 30,
    groupHeight: 30,
    hiddenDates: [
      {
        start: '1946-01-01',
        end: '1955-01-01',
      },
      {
        start: '1925-01-01',
        end: '1930-01-01',
      },
      {
        start: '1933-01-01',
        end: '1937-01-01',
      },
    ], 
  },
};
