var TableComponent = React.createClass({
  displayName: "TableComponent",

  render: function render() {
    // Data
    var dataColumns = this.props.data.columns;
    var dataRows = this.props.data.rows;

    var tableHeaders = React.createElement(
      "thead",
      null,
      React.createElement(
        "tr",
        null,
        dataColumns.map(function (column) {
          return React.createElement(
            "th",
            null,
            column
          );
        })
      )
    );

    var tableBody = dataRows.map(function (row) {
      return React.createElement(
        "tr",
        null,
        dataColumns.map(function (column) {
          return React.createElement(
            "td",
            null,
            row[column]
          );
        })
      );
    });

    // Decorate with Bootstrap CSS
    return React.createElement(
      "table",
      { className: "table table-bordered table-hover", width: "100%" },
      tableHeaders,
      tableBody
    );
  } });

// Example Data
var tableData = {
  columns: ['Service', 'Cost/Unit', 'Unit', 'Units Requested'],
  rows: [{
    'Service': 'Veterinary Assitance',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    'Service': 'Veterinary Assitance',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    'Service': 'Veterinary Assitance',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    'Service': 'Veterinary Assitance',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    'Service': 'Veterinary Assitance',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    'Service': 'Veterinary Assitance',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    'Service': 'Veterinary Assitance',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    'Service': 'Veterinary Assitance',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    'Service': 'Veterinary Assitance',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    'Service': 'foo',
    'Unit': null,
    'Cost/Unit': undefined,
    'Units Requested': 42
  }]
};

ReactDOM.render(React.createElement(TableComponent, { data: tableData }), document.getElementById('table-component'));