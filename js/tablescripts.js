window.downloadRawJson = function (jsonData, tableName) {
  const blob = new Blob([JSON.stringify(jsonData, null, 2)], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);

  // Use tableName (e.g., "table1") to dynamically set the file name
  link.download = `${tableName}.json`;  // Dynamic file name

  link.click();
};

// Function to trigger CSV download
window.downloadcsv = function downloadCSV() {
  const a = document.createElement('a');
  a.href = csvFilePath;
  a.download = 'data.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// Function to trigger the download of a JSON file with a dynamic filename
window.downloadJson = function downloadJSON(filePath, filename) {
  const a = document.createElement('a');
  a.href = filePath;  // The file path to the JSON file
  a.download = filename;  // The dynamic filename you want to use
  // Ensure it triggers the download and doesn't open in a new tab
  a.style.display = 'none';  // Hide the link (optional for clean UI)
  document.body.appendChild(a);
  
  // Trigger the download programmatically
  a.click();
  
  // Clean up by removing the temporary link
  document.body.removeChild(a);
};
