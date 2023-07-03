// function processData() {
//     var data = document.getElementById('codeInput').value;
//     var pattern = /<trkpt lat="(-?\d+\.\d+)" lon="(-?\d+\.\d+)"><ele>(\d+\.\d+)<\/ele><time>(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z)<\/time><speed>(\d+\.\d+)<\/speed><sat>(\d+)<\/sat><\/trkpt>/g;
//     var matches = data.match(pattern);
    
//     var csvContent = "data:text/csv;charset=utf-8,"
//       + "lat,lon,ele,time,speed,sat\n";
    
//     for (var i = 0; i < matches.length; i++) {
//       var match = matches[i];
//       var values = match.match(/"([^"]+)"/g);
//       var line = values.map(function(value) {
//         return value.replace(/"/g, '');
//       }).join(",");
      
//       csvContent += line + "\n";
//     }
    
//     var encodedUri = encodeURI(csvContent);
//     var link = document.createElement("a");
//     link.setAttribute("href", encodedUri);
//     link.setAttribute("download", "data.csv");
//     document.body.appendChild(link);
    
//     link.click();
    
//     alert("Archivo generado con éxito.");
//     clearCodeInput();
//   }
  
//   function openFileLocation() {
//     alert("Abrir ubicación del archivo.");
//     // Agrega aquí el código para abrir la ubicación del archivo
//   }
  
//   function clearCodeInput() {
//     document.getElementById('codeInput').value = "";
//   }
  





// function processData() {
//     var data = document.getElementById('codeInput').value;
//     var pattern = /<trkpt lat="(-?\d+\.\d+)" lon="(-?\d+\.\d+)"><ele>(\d+\.\d+)<\/ele><time>(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z)<\/time><speed>(\d+\.\d+)<\/speed><sat>(\d+)<\/sat><\/trkpt>/g;
//     var matches = data.matchAll(pattern);
    
//     var csvContent = "data:text/csv;charset=utf-8,"
//       + "lat,lon,ele,time,speed,sat\n";
    
//     for (const match of matches) {
//       var line = Array.from(match).slice(1).join(",");
//       csvContent += line + "\n";
//     }
    
//     var encodedUri = encodeURI(csvContent);
//     var link = document.createElement("a");
//     link.setAttribute("href", encodedUri);
//     link.setAttribute("download", "data.csv");
//     document.body.appendChild(link);
    
//     link.click();
    
//     alert("Archivo generado con éxito.");
//     clearCodeInput();
//   }
  
//   function openFileLocation() {
//     alert("Abrir ubicación del archivo.");
//     // Agrega aquí el código para abrir la ubicación del archivo
//   }
  
//   function clearCodeInput() {
//     document.getElementById('codeInput').value = "";
//   }
  



function processData() {
    var data = document.getElementById('codeInput').value;
    var pattern = /<trkpt lat="(-?\d+\.\d+)" lon="(-?\d+\.\d+)"><ele>(\d+\.\d+)<\/ele><time>([\d\-TZ:]+)<\/time><speed>(\d+\.\d+)<\/speed><sat>(\d+)<\/sat><\/trkpt>/g;
  
    var matches = data.matchAll(pattern);
    var csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "lat,lon,ele,time,speed,sat\n";
    
    for (const match of matches) {
      csvContent += match[1] + "," + match[2] + "," + match[3] + "," + match[4] + "," + match[5] + "," + match[6] + "\n";
    }
  
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  function openFileLocation() {
    alert("Abriendo ubicación del archivo...");
    // Aquí puedes agregar el código para abrir la ubicación del archivo.
  }
  
  function clearCodeInput() {
    document.getElementById('codeInput').value = "";
  }
  
  function showHelp() {
    $('#helpModal').modal('show');
  }
  