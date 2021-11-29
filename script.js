var time = document.getElementById('currentDay');
var now = moment();
var humanReadable = now.format("dddd, MMMM Do");
var colorText = document.getElementById('colorText');

time.textContent = humanReadable;

function emea() {
  var now = moment();
    
  var nineAM = moment('09:00', "HH:mm", true);
  var tenAM = moment('10:00', "HH:mm", true);
  var elevenAM = moment('11:00', "HH:mm", true);
  var twelvePM = moment('12:00', "HH:mm", true);
  var onePM = moment('13:00', "HH:mm", true);
  var twoPM = moment('14:00', "HH:mm", true);
  var threePM = moment('15:00', "HH:mm", true);
  var fourPM = moment('16:00', "HH:mm", true);
  var fivePM = moment('17:00', "HH:mm", true);
  var sixPM = moment('18:00', "HH:mm", true);
  

  // var nineAM = moment('09:00AM', "hh:mmA", true);
//console.log(now);
//console.log(time);
//console.log(nineAM);

 if (now >= nineAM && now <= tenAM) {
    // If time is after 9AM or before 10AM, apply present theme to 'colorText'
    $("#colorText").addClass("present").removeClass("future");
} else if (now >= tenAM) {
    // Else use ‘past’ theme
    $("#colorText").addClass("past").removeClass("present").removeClass("future");
}

if (now >= tenAM && now <= elevenAM) {
  $("#colorText1").addClass("present").removeClass("future");
} else if (now >= elevenAM) {
  $("#colorText1").addClass("past").removeClass("present").removeClass("future");
}

if (now >= elevenAM && now <= twelvePM) {
  $("#colorText2").addClass("present").removeClass("future");
} else if (now >= twelvePM) {
  $("#colorText2").addClass("past").removeClass("present").removeClass("future");
}

if (now >= twelvePM && now <= onePM) {
  $("#colorText3").addClass("present").removeClass("future");
} else if (now >= onePM) {
  $("#colorText3").addClass("past").removeClass("present").removeClass("future");
}

if (now >= onePM && now <= twoPM) {
  $("#colorText4").addClass("present").removeClass("future");
} else if (now >= twoPM) {
  $("#colorText4").addClass("past").removeClass("present").removeClass("future");
}

if (now >= twoPM && now <= threePM) {
  $("#colorText5").addClass("present").removeClass("future");
} else if (now >= threePM) {
  $("#colorText5").addClass("past").removeClass("present").removeClass("future");
}

if (now >= threePM && now <= fourPM) {
  $("#colorText6").addClass("present").removeClass("future");
} else if (now >= fourPM) {
  $("#colorText6").addClass("past").removeClass("present").removeClass("future");
}

if (now >= fourPM && now <= fivePM) {
  $("#colorText7").addClass("present").removeClass("future");
} else if (now >= fivePM) {
  $("#colorText7").addClass("past").removeClass("present").removeClass("future");
}

if (now >= fivePM && now <= sixPM) {
  $("#colorText8").addClass("present").removeClass("future");
} else if (now >= sixPM) {
  $("#colorText8").addClass("past").removeClass("present").removeClass("future");
}

$(document).ready(function () {
  emea();

})};


setInterval (() => {
  var now = moment();
    
  var nineAM = moment('09:00', "HH:mm", true);
  var tenAM = moment('10:00', "HH:mm", true);
  var elevenAM = moment('11:00', "HH:mm", true);
  var twelvePM = moment('12:00', "HH:mm", true);
  var onePM = moment('13:00', "HH:mm", true);
  var twoPM = moment('14:00', "HH:mm", true);
  var threePM = moment('15:00', "HH:mm", true);
  var fourPM = moment('16:00', "HH:mm", true);
  var fivePM = moment('17:00', "HH:mm", true);
  var sixPM = moment('18:00', "HH:mm", true);
  

  // var nineAM = moment('09:00AM', "hh:mmA", true);
//console.log(now);
console.log(time);
console.log(nineAM);

 if (now >= nineAM && now <= tenAM) {
    // If time is after 9AM or before 10AM, apply present theme to 'colorText'
    $("#colorText").addClass("present").removeClass("future");
} else if (now >= tenAM) {
    // Else use ‘past’ theme
    $("#colorText").addClass("past").removeClass("present").removeClass("future");
}


if (now >= tenAM && now <= elevenAM) {
  $("#colorText1").addClass("present").removeClass("future");
} else if (now >= elevenAM) {
  $("#colorText1").addClass("past").removeClass("present").removeClass("future");
}


if (now >= elevenAM && now <= twelvePM) {
  $("#colorText2").addClass("present").removeClass("future");
} else if (now >= twelvePM) {
  $("#colorText2").addClass("past").removeClass("present").removeClass("future");
}

if (now >= twelvePM && now <= onePM) {
  $("#colorText3").addClass("present").removeClass("future");
} else if (now >= onePM) {
  $("#colorText3").addClass("past").removeClass("present").removeClass("future");
}

if (now >= onePM && now <= twoPM) {
  $("#colorText4").addClass("present").removeClass("future");
} else if (now >= twoPM) {
  $("#colorText4").addClass("past").removeClass("present").removeClass("future");
}

if (now >= twoPM && now <= threePM) {
  $("#colorText5").addClass("present").removeClass("future");
} else if (now >= threePM) {
  $("#colorText5").addClass("past").removeClass("present").removeClass("future");
}

if (now >= threePM && now <= fourPM) {
  $("#colorText6").addClass("present").removeClass("future");
} else if (now >= fourPM) {
  $("#colorText6").addClass("past").removeClass("present").removeClass("future");
}

if (now >= fourPM && now <= fivePM) {
  $("#colorText7").addClass("present").removeClass("future");
} else if (now >= fivePM) {
  $("#colorText7").addClass("past").removeClass("present").removeClass("future");
}

if (now >= fivePM && now <= sixPM) {
  $("#colorText8").addClass("present").removeClass("future");
} else if (now >= sixPM) {
  $("#colorText8").addClass("past").removeClass("present").removeClass("future");
}

}, (1000 * 60) ); 

var tasks2 = {};

var createTask = function(taskText) {
  // create elements that make up a task item
  var taskP = $("<textarea>").addClass("m-1").text(taskText);

  // append span and p element to parent li
  taskP.append(taskP);


  // append to ul list on the page
  $("#textArea" + taskText).append(taskP);
};

var loadTasks = function() {
  tasks2 = JSON.parse(localStorage.getItem("tasks2"));

  // if nothing in localStorage, create a new object to track all task status arrays
  if (!tasks2) {
    tasks2 = {
      texts: []
    };
  }

  // loop over object properties
  $.each(tasks2, function(list, arr) {
    //console.log(list, arr);
    // then loop over sub-array
    arr.forEach(function(tasks2) {
      createTask(tasks2.text);
    });
  });
  console.log(tasks2);
};

var saveTasks = function() {
  localStorage.setItem("tasks2", JSON.stringify(tasks2));
};

$(".saveBtn").click(function() {
  // get form values
  var taskText = $("#textArea").val();
  
  if (taskText) {
    createTask(taskText, "text");

    // save in tasks array
    tasks2.texts.push({
      text: taskText
    });

    saveTasks();
  }
  console.log("click");
});

$(".list-group").on("click", "p", function() {
  var text = $(this)
  .text()
  .trim();

  var textInput = $("<textarea>")
  .addClass("form-control")
  .val(text);

  $(this).replaceWith(textInput);

  textInput.trigger("focus");
  console.log(this);
});

/*$(".list-group").on("blur", "textarea", function() {
// get the textarea's current value/text
var text = $(this)
  .val()
  .trim();

// get the parent ul's id attribute
var status = $(this)
  .closest(".list-group")
  .attr("id")
  .replace("list-", "");

// get the task's position in the list of other li elements
var index = $(this)
  .closest(".list-group-item")
  .index();

  tasks[status][index].text = text;
  saveTasks();

  // recreate p element
  var taskP = $("<p>")
  .addClass("m-1")
  .text(text);

  // replace textarea with p element
  $(this).replaceWith(taskP);
})*/

loadTasks();