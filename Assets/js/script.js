var currentDay = moment();
var currentHour = moment().format("H");
var ninthHour = 9;
var tenthHour = 10;
var eleventhHour = 11;
var twelthHour = 12;
var thirteenthHour = 13;
var fourteenthHour = 14;
var fifteenthHour = 15;
var sixteenthHour = 16;
var seventeenthHour = 17;
var inputIds = [
    '9thHour', '10thHour', '11thHour', '12thHour',
    '13thHour', '14thHour', '15thHour', '16thHour',
    '17thHour'
];

//displays date on main page
$("#currentDay").text(currentDay.format("dddd, MMM Do YYYY"));


//if time is in past
var timePast = function() {
    if (currentHour > 9) {
        $("#9thHour").addClass("past");
    };
    if (currentHour > 10) {
        $("#10thHour").addClass("past");
    };
    if (currentHour > 11) {
        $("#11thHour").addClass("past");
    };
    if (currentHour > 12) {
        $("#12thHour").addClass("past");
    };
    if (currentHour > 13) {
        $("#13thHour").addClass("past");
    };
    if (currentHour > 14) {
        $("#14thHour").addClass("past");
    };
    if (currentHour > 15) {
        $("#15thHour").addClass("past");
    };
    if (currentHour > 16) {
        $("#16thHour").addClass("past");
    };
    if (currentHour > 17) {
        $("#17thHour").addClass("past");
    };
};




//if current hour
var timePresent = function() {
    if (currentHour == 9) {
        $("#9thHour").removeClass("past").addClass("present");
    };
    if (currentHour == 10) {
        $("#10thHour").removeClass("past").addClass("present");
    };
    if (currentHour == 11) {
        $("#11thHour").removeClass("past").addClass("present");
    };
    if (currentHour == 12) {
        $("#12thHour").removeClass("past").addClass("present");
    };
    if (currentHour == 13) {
        $("#13thHour").removeClass("past").addClass("present");
    };
    if (currentHour == 14) {
        $("#14thHour").removeClass("past").addClass("present");
    };
    if (currentHour == 15) {
        $("#15thHour").removeClass("past").addClass("present");
    };
    if (currentHour == 16) {
        $("#16thHour").removeClass("past").addClass("present");
    };
    if (currentHour == 17) {
        $("#17thHour").removeClass("past").addClass("present");
    };
};

//if time is in the future
var timeFuture = function() {
    if (currentHour < 9) {
        $("#9thHour").addClass("future");
    };
    if (currentHour < 10) {
        $("#10thHour").addClass("future");
    };
    if (currentHour < 11) {
        $("#11thHour").addClass("future");
    };
    if (currentHour < 12) {
        $("#12thHour").addClass("future");
    };
    if (currentHour < 13) {
        $("#13thHour").addClass("future");
    };
    if (currentHour < 14) {
        $("#14thHour").addClass("future");
    };
    if (currentHour < 15) {
        $("#15thHour").addClass("future");
    };
    if (currentHour < 16) {
        $("#16thHour").addClass("future");
    };
    if (currentHour < 17) {
        $("#17thHour").addClass("future");
    };
}; 

//check every 1 second to see if events are expired
setInterval(function() {
    timePast();
    timePresent();
    timeFuture();
  }, 500);

// Save functionality
function saveTask(id) {
    var inputValue = $('#' + id).val();
    localStorage.setItem(id, inputValue);
    displaySavedTasks();
}

// Saves text value when save button is pressed
$('button.saveBtn').click(function () {
    var id = $(this).parent().children('textarea').attr('id');
    saveTask(id);
    $(this).removeClass('unsaved');
})

// Change button color on value change
 $('textarea').keydown(function() {
    $(this).parent().children('.saveBtn').addClass('unsaved');
}) 

// Display saved tasks
function displaySavedTasks() {
    $(inputIds).each(function (id) {
        $('#' + inputIds[id]).val(localStorage.getItem(inputIds[id]));
    });
}

displaySavedTasks();