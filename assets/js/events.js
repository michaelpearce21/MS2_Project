const apikey = "jdhrXGKYQJA6Pd4fb0oQYo4SXK9Nu052"

// Code from Ticketmaster tutorials - https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/#event-details-v2 // 
$.ajax({
    type:"GET",
    url:"https://app.ticketmaster.com/discovery/v2/events.json?keyword=allelitewrestling&apikey=jdhrXGKYQJA6Pd4fb0oQYo4SXK9Nu052",
    async:true,
    dataType: "json",
    success: function(json) {
                console.log(json);
                // Parse the response.
                // Do other things.
             },
    error: function(xhr, status, err) {
                // This time, we do not end up here!
             }
  });