var formEl = $('#cal-form');
var listEl = $('#event-list');

var day = moment();
$("#currentDay").text(day.format("MMM Do, YYYY"));

function handleFormSubmit(event) {
    event.preventDefault();

    var calEvent = $('input[name="textarea"]').val();

    if (!calEvent) {
        console.log('No events added to calendar!');
        return;
    }

    var listeItemEl = $(
        '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
    );
    listeItemEl.text(calEvent);

    function storeData() {
        var input = document.getElementById("textarea").value;
        alert(input);
    }

    listEl.append(listEl);
}
