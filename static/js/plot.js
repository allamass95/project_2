




// function plotbyvalue() {
//   var x = document.getElementsByClassName("plotresult")[0].id; 
//   var y = document.getElementById("factortype").value;
//   var X = "\""+ x+  "\""; 
//   var Y = "\""+ y+  "\"";
//   document.getElementById(X).setAttribute("id", Y);
// }

// function plotbyvalue(elementId)
// {


//   // Adds an element to the document
  
  
//       var p = document.getElementById(plotresults);
//       var newElement = document.createElement(div);
//       newElement.setAttribute('id', elementId);
//       p.appendChild(newElement);
//   }
  
  
  
//   function removeElement(elementId) 
  
//   {
  
//       // Removes an element from the document
//       var element = document.getElementById(elementId);
//       element.parentNode.removeChild(element);
//   }
//############################################################

function init() {
  var trace1 = {
  
    type: "scatter",
    mode: "lines+markers",
    marker:{
      color:'blue',
      size:8
    },
    name: 'Democrat',
    x: dem_data.map(row=>row["year"]),
    y: dem_data.map(row=>row['Median Household Income']),
    line: {
      color: "blue",
      width: 4,
      dash:'dashdot'
    }
  };


  var data = [trace1];

  var layout = {
    legend: {
      x: 0,
      y: 1,
      traceorder: 'normal',
      font: {
        family: 'sans-serif',
        size: 12,
        color: '#000'
      },
      bgcolor: '#E2E2E2',
      bordercolor: '#FFFFFF',
      borderwidth: 2
  
    },
    title: {
      text:name
     ,
      font:{
        family:'Arial',
        size:30,
        color:'black'
      }
  },
    xaxis: {
      autorange: true,
      type: "date"

      
    },
    yaxis: {
      autorange: true,
      type: "linear",
      title:{
        text:name,
        font:{
          family:'Courier New,monospace',
          size:18,
          color:'black'
        }
      }
    }
  

  };

  Plotly.plot("pie", data, layout);
}


function init_two(){

  var trace2 = {

    type: "scatter",
    mode: "lines+markers",
    marker:{
      color:'red',
      size:8
    },
    name: 'Republican',
    x: rep_data.map(row=>row["year"]),
    y: rep_data.map(row=>row['Median Household Income']),
    line: {
      color: "red",
      width:4,
      dash:'dot'
    }
  }
  data_two=[trace2];

  var layout = {
    legend: {
      x: 0,
      y: 1,
      traceorder: 'normal',
      font: {
        family: 'sans-serif',
        size: 12,
        color: '#000',
        bordercolor:'black'
      },
      bgcolor: '#E2E2E2',
      bordercolor: '#FFFFFF',
      borderwidth: 2
    },
    title: {
      text:`Median HouseHold Income`,
      font:{
        family:'Arial',
        size:30,
        color:'black'
      }
  },
    xaxis: {
      autorange: true,
      type: "date"

      
    },
    yaxis: {
      autorange: true,
      type: "linear",
      title:{
        text:'Income',
        font:{
          family:'Courier New,monospace',
          size:18,
          color:'black'
        }
      }
    }
  

  };

  Plotly.plot("pie", data_two, layout);
}

function init_three(){

  var trace3 = {

    type: "scatter",
    mode: "lines+markers",
    marker:{
      color:'#DDD011',
      size:8
    },
    name: 'Split',
    x: split_data.map(row=>row["year"]),
    y: split_data.map(row=>row['Median Household Income']),
    line: {
      color: "#DDD011",
      width:4,
      dash:'dot'
    }
  }
  data_three=[trace3];

  var layout = {
    legend: {
      x: 0,
      y: 1,
      traceorder: 'normal',
      font: {
        family: 'sans-serif',
        size: 12,
        color: '#000'
      },
      bgcolor: '#E2E2E2',
      bordercolor: '#FFFFFF',
      borderwidth: 2
    },
    title: {
      text:`Median HouseHold Income`,
      font:{
        family:'Arial',
        size:30,
        color:'black'
      }
  },
    xaxis: {
      autorange: true,
      type: "date"

      
    },
    yaxis: {
      autorange: true,
      type: "linear",
      title:{
        text:'Income',
        font:{
          family:'Courier New,monospace',
          size:18,
          color:'black'
        }
      }
    }
  

  };

  Plotly.plot("pie", data_three, layout);
}


function updatePlotly(newdata,_newdata_two,_newdata_three) {
  var PIE = document.getElementById("pie");
  //var PIE = d3.select("#pie").node();
  Plotly.restyle(PIE, 'y', [newdata,_newdata_two,_newdata_three]);

}


function getData(dataset,_dataset_two,_newdata_three) {
  var data = [];
  var _data_two=[];
  var data_three=[];
  
  switch (dataset) {
  case "dataset1":
      data = dem_data.map(row=>row['Median Household Income'])
      _data_two = rep_data.map(row=>row['Median Household Income'])
      data_three=split_data.map(row=>row['Median Household Income'])

  break;
  case "dataset2":
      data= dem_data.map(row=>row['Poverty Rate'])
      _data_two = rep_data.map(row=>row['Poverty Rate'])
      data_three=split_data.map(row=>row['Poverty Rate'])

  break;
  case "dataset3":
    data = dem_data.map(row=>row['Unemployment Rate']);
    _data_two = rep_data.map(row=>row['Unemployment Rate'])
    data_three=split_data.map(row=>row['Unemployment Rate'])

    break;
    case "dataset4":
      data = dem_data.map(row=>row["Median Cost of Rent"]);
      _data_two = rep_data.map(row=>row['Median Cost of Rent'])
      data_three=split_data.map(row=>row['Median Cost of Rent'])

      break;
    case "dataset5":
      data = dem_data.map(row=>row["Black Poverty Rate"]);
      _data_two = rep_data.map(row=>row['Black Poverty Rate'])
      data_three=split_data.map(row=>row['Black Poverty Rate'])

      break;
    case "dataset6":
      data = dem_data.map(row=>row["Hispanic Poverty Rate"]);
      _data_two = rep_data.map(row=>row['Hispanic Poverty Rate']);
      data_three=split_data.map(row=>row['Hispanic Poverty Rate'])

      break;
    case "dataset7":
      data = dem_data.map(row=>row["White Poverty Rate"]);
      _data_two = rep_data.map(row=>row['White Poverty Rate'])
      data_three=split_data.map(row=>row['White Poverty Rate'])

      break;
  default:
    data = [0];
    _data_two=[0];
    data_three=[0];
  }
  updatePlotly(data,_data_two,data_three);
}
init();
init_two();
init_three();

//####################################


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */




//####################################

//######################################################
    // var trace1 = {
    //   type: "scatter",
    //   mode: "lines+markers",
    //   marker:{
    //     color:'blue',
    //     size:8
    //   },
    //   name: 'Democrat',
    //   x: dem_data.map(row=>row["year"]),
    //   y: dem_data.map(row=>row['Median Household Income']),
    //   line: {
    //     color: "blue",
    //     width: 4,
    //     dash:'dashdot'
    //   }
    // };

    // var trace2 = {
    //   type: "scatter",
    //   mode: "lines+markers",
    //   marker:{
    //     color:'red',
    //     size:8
    //   },
    //   name: 'Republican',
    //   x: rep_data.map(row=>row["year"]),
    //   y: rep_data.map(row=>row['Median Household Income']),
    //   line: {
    //     color: "red",
    //     width:4,
    //     dash:'dot'
    //   }
    // };

    // var combined_data = [trace1,trace2];

    // var layout = {
    //   legend: {
    //     x: 0,
    //     y: 1,
    //     traceorder: 'normal',
    //     font: {
    //       family: 'sans-serif',
    //       size: 12,
    //       color: '#000'
    //     },
    //     bgcolor: '#E2E2E2',
    //     bordercolor: '#FFFFFF',
    //     borderwidth: 2
    
    //   },
    //   title: {
    //     text:`Median HouseHold Income`,
    //     font:{
    //       family:'Arial',
    //       size:30,
    //       color:'black'
    //     }
    // },
    //   xaxis: {
    //     autorange: true,
    //     type: "date"

        
    //   },
    //   yaxis: {
    //     autorange: true,
    //     type: "linear",
    //     title:{
    //       text:'Income',
    //       font:{
    //         family:'Courier New,monospace',
    //         size:18,
    //         color:'black'
    //       }
    //     }
    //   }
    // };

    // Plotly.newPlot("plot", combined_data, layout);






//     var trace1 = {
//       type: "scatter",
//       mode: "lines+markers",
//       marker:{
//         color:'blue',
//         size:8
//       },
//       name: 'Democrat',
//       x: dem_data.map(row=>row["year"]),
//       y: dem_data.map(row=>row['Poverty Rate']),
//       line: {
//         color: "blue",
//         width: 4,
//         dash:'dashdot'
//       }
//     };

//     var trace2 = {
//       type: "scatter",
//       mode: "lines+markers",
//       marker:{
//         color:'red',
//         size:8
//       },
//       name: "Republican",
//       x: rep_data.map(row=>row["year"]),
//       y: rep_data.map(row=>row['Poverty Rate']),
//       line: {
//         color: "red",
//         width:4,
//         dash:'dot'
      
//       }
//     };

//     var combined_data = [trace1,trace2];

//     var layout = {
//       title: {
//         text:`Poverty Rates`,
//         font:{
//           family:'Arial',
//           size:30,
//           color:'black'
//         }
//       },
//       xaxis: {
//         autorange: true,
//         type: "date"
//       },
//       yaxis: {
//         autorange: true,
//         type: "linear",
//         title:{
//           text:'Porverty Rate',
//           font:{
//             family:'Courier New,monospace',
//             size:18,
//             color:'black'
//           }
//         }
//       }
//     };

//     Plotly.newPlot("plot2", combined_data, layout);









//     var trace1 = {
//       type: "scatter",
//       mode: "lines+markers",
//       marker:{
//         color:'blue',
//         size:8
//       },
//       name: 'Democrat',
//       x: dem_data.map(row=>row["year"]),
//       y: dem_data.map(row=>row['Unemployment Rate']),
//       line: {
//         color: "blue",
//         width: 4,
//         dash:'dashdot'
//       }
//     };

//     var trace2 = {
//       type: "scatter",
//       mode: "lines+markers",
//       marker:{
//         color:'red',
//         size:8
//       },
//       name: 'Republican',
//       x: rep_data.map(row=>row["year"]),
//       y: rep_data.map(row=>row['Unemployment Rate']),
//       line: {
//         color: "red",
//         width:4,
//         dash:'dot'
//       }
//     };

//     var combined_data = [trace1,trace2];

//     var layout = {
//       title: {
//         text:`Unemployment Rate`,
//         font:{
//           family:'Arial',
//           size:30,
//           color:'black'
//         }
//       },
//       xaxis: {
//         autorange: true,
//         type: "date"
//       },
//       yaxis: {
//         autorange: true,
//         type: "linear",
//         title:{
//           text:'Unemployment Rate',
//           font:{
//             family:'Courier New,monospace',
//             size:18,
//             color:'black'
//           }
//         }
//       }
//     };

//     Plotly.newPlot("plot3", combined_data, layout);





//     var trace1 = {
//       type: "scatter",
//       mode: "lines+markers",
//       marker:{
//         color:'blue',
//         size:8
//       },
    
//       name: 'Democrat',
//       x: dem_data.map(row=>row["year"]),
//       y: dem_data.map(row=>row["Median Cost of Rent"]),
//       line: {
//         color: "blue",
//         width: 4,
//         dash:'dashdot'
      
//       }
//     };

//     var trace2 = {
//       type: "scatter",
//       mode: "lines+markers",
//       marker:{
//         color:'red',
//         size:8
//       },
//       name: 'Republican',
//       x: rep_data.map(row=>row["year"]),
//       y: rep_data.map(row=>row["Median Cost of Rent"]),
//       line: {
//         color: "red",
//         width:4,
//         dash:'dot'
      
//       }
//     };

//     var combined_data = [trace1,trace2];

//     var layout = {
//       title: {
//         text:'Median Cost of Rent',
//         font:{
//           family:'Arial',
//           size:30,
//           color:'black'
//         }
//       },
//       xaxis: {
//         autorange: true,
//         type: "date"
//       },
//       yaxis: {
//         autorange: true,
//         type: "linear",
//         title:{
//           text:'Cost of Rent',
//           font:{
//             family:'Courier New,monospace',
//             size:18,
//             color:'black'
//       }
//         }
//       }
//     };

//     Plotly.newPlot("plot4", combined_data, layout);








//     var trace1 = {
//       type: "scatter",
//       mode: "lines+markers",
//       marker:{
//         color:'blue',
//         size:8
//       },
//       name: 'Democrat',
//       x: dem_data.map(row=>row["year"]),
//       y: dem_data.map(row=>row["Black Poverty Rate"]),
//       line: {
//         color: "blue",
//         width: 4,
//         dash:'dashdot'
      
//       }
//     };

//     var trace2 = {
//       type: "scatter",
//       mode: "lines+markers",
//       marker:{
//         color:'red',
//         size:8
//       },
//       name: 'Republican',
//       x: rep_data.map(row=>row["year"]),
//       y: rep_data.map(row=>row["Black Poverty Rate"]),
//       line: {
//         color: "red",
//         width:4,
//         dash:'dot'
      
//       }
//     };

//     var combined_data = [trace1,trace2];

//     var layout = {
//       title: {
//         text:'Black Poverty Rate',
//         font:{
//           family:'Arial',
//           size:30,
//           color:'black'
//         },
//       xaxis: {
//         autorange: true,
//         type: "date"
//       },
//       yaxis: {
//         autorange: true,
//         type: "linear",
//         title:{
//           text:'Poverty Rate',
//           font:{
//             family:'Courier New,monospace',
//             size:18,
//             color:'black'
//           }
//         }
//       }
//       }
//     };

//     Plotly.newPlot("plot5", combined_data, layout);






//     var trace1 = {
//       type: "scatter",
//       mode: "lines+markers",
//       marker:{
//         color:'blue',
//         size:8
//       },
//       name: 'Democrat',
//       x: dem_data.map(row=>row["year"]),
//       y: dem_data.map(row=>row["Hispanic Poverty Rate"]),
//       line: {
//         color: "blue",
//         width: 4,
//         dash:'dashdot'
//       }
//     };

//     var trace2 = {
//       type: "scatter",
//       mode: "lines+markers",
//       marker:{
//         color:'red',
//         size:8
//       },
//       name: 'Republican',
//       x: rep_data.map(row=>row["year"]),
//       y: rep_data.map(row=>row["Hispanic Poverty Rate"]),
//       line: {
//         color: "red",
//         width:4,
//         dash:'dot'
      
//       }
//     };

//     var combined_data = [trace1,trace2];

//     var layout = {
//       title: {
//         text:'Hispanic Poverty Rate',
//         font:{
//           family:'Arial',
//           size:30,
//           color:'black'
//         },
//       xaxis: {
//         autorange: true,
//         type: "date"
//       },
//       yaxis: {
//         autorange: true,
//         type: "linear",
//         title:{
//           text:'Poverty Rate',
//           font:{
//             family:'Courier New,monospace',
//             size:18,
//             color:'black'
//           }
//         }
//       }
//     }
//     };

//     Plotly.newPlot("plot6", combined_data, layout);








//     var trace1 = {
//       type: "scatter",
//       mode: "lines+markers",
//       marker:{
//         color:'blue',
//         size:8
//       },
//       name: 'Democrat',
//       x: dem_data.map(row=>row["year"]),
//       y: dem_data.map(row=>row["White Poverty Rate"]),
//       line: {
//         color: "blue",
//         width: 4,
//         dash:'dashdot'
//       }
      
//     };

//     var trace2 = {
//       type: "scatter",
//       mode: "lines+markers",
//       marker:{
//         color:'red',
//         size:8
//       },
//       name: 'Republican',
//       x: rep_data.map(row=>row["year"]),
//       y: rep_data.map(row=>row["White Poverty Rate"]),
//       line: {
//         color: "red",
//         width:4,
//         dash:'dot'
      
//       }
//     };

//     var combined_data = [trace1,trace2];

//     var layout = {
//       title: {
//         text:'White Poverty Rate',
//         font:{
//           family:'Arial',
//           size:30,
//           color:'black'
//         },
//       xaxis: {
//         autorange: true,
//         type: "date"
//       },
//       yaxis: {
//         autorange: true,
//         type: "linear",
//         title:{
//           text:'Poverty Rate',
//           font:{
//             family:'Courier New,monospace',
//             size:18,
//             color:'black'
//           }
//         }
//       }
//       }
//     };

//     Plotly.newPlot("plot7", combined_data, layout);

// buildPlot();