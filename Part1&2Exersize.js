/*
What is HTTP?
HyperText Transfer Protocols
What is a URL?
A URL is a specific call to a networked computer that looks at protocol, hostname, port, resource and then optionally query
What is DNS?
Domain name system - Easy way to turn computer speak into human readable domains
What is a query string?
Query string is the last part of a URL that searches through the host server
What are two HTTP verbs and how are they different?
They are essentially the same thing but in one case (https) the requests are secure and encrypted
What is an HTTP request?
The request is from the user that goes through a protocol, grabs the resource url you want and then grabs the headers, which is pretty much everything that the user wants to get
What is an HTTP response?
protocol version then some kind of code, usually one saying things worked or didn't work. Then the headers of all the stuff the server has that the user wanted that the server has
What is an HTTP header? Give a couple examples of request and response headers you have seen.
What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
All i got from that one was favicon.ico status code 200 with a type x-icon. took 345 ms. The request was for an image.
*/

/*
Using curl, make a GET request to the icanhazdadjoke.com API to find all jokes involving the word “pirate”
did it
Use dig to find what the IP address is for icanhazdadjoke.com
The IP address is 172.67.211.64
Make a simple web page and serve it using python3 -m http.server. Visit the page in a browser.
Did it, looks the same. But different in address bar
*/