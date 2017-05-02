
// To use your Google spreadsheet, you need to first 'Publish to web' in order to get it's unique 'KEY'.

// Once you have your KEY, you can paste it into the following URL:
// https://spreadsheets.google.com/feeds/list/PUT-KEY-HERE/od6/public/values?alt=json

// If you open this URL (with your KEY) in your browser, you should see all the data in a 'minified' JSON format.
// Copy and paste the minified data into an online JSON formatter; it will help you format/read the content easier!

// To grab data from your spreadsheet, you need to 'get' the JSON data with jQuery
$.getJSON("https://spreadsheets.google.com/feeds/list/1CweCoZSBd6FHeKy0BoSdl-BivjNVf6EKY-uOFHl4TGw/od6/public/values?alt=json", function(data) {

	// TESTING
	// It's a good idea to test whether you can grab any data at all from your spreadsheet.
	// Open the Console and try to grab data from a particular cell in your spreadsheet.
	
	// To select a particular cell from your spreadsheet, you need to provide the co-ordinates to that cell.
	// The number inside the [] is the row in your spreadsheet.
	// The string that begins with 'gsx$...', is the name of your column in your spreadsheet.
  	console.log(data.feed.entry[3]['gsx$price']['$t']);
  	console.log(data.feed.entry[10]['gsx$numbersoldtoday']['$t']);
  	console.log(data.feed.entry[3].gsx$nameofproduct.$t);

  	// AFTER TESTING
  	// Using jQuery, you can insert data ('append') from your spreadsheet into the SPAN tag.
  	// Note: You will need to provide the co-ordinates to a specific cell in the spreadsheet. 
	$( ".total-number-of-drinks" ).append((data.feed.entry[10].gsx$numbersoldtoday.$t));

})