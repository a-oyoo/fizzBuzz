'use strict'

function handleSubmit() {
    $("button").on('click', function(event) {
        event.preventDefault();
        $(".js-results").empty();
        const num = parseInt($(this).find(`input[name="number-choice"]`).val())
    
    const results = [];

    for (let i=0; i<=num; i++) {
        results.push(num)
    }
    console.log(results);
    })

  
}
$(handleSubmit);
