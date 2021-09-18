const apikey = "jdhrXGKYQJA6Pd4fb0oQYo4SXK9Nu052"

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