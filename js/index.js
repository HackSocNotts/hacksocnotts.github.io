var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

var now = new Date();

function loadCalendar() {
    populateCalendar(now.getFullYear(), now.getMonth());
}

function populateCalendar(year, month) {
    var tbody = document.getElementById("calendar-tbody");
    if (tbody == null) {
        // not on the calendar page
        return
    }

    tbody.innerHTML = "";

    document.getElementById("calendar-left").innerHTML = months[(month + 11) % 12];
    document.getElementById("calendar-month").innerHTML = months[month] + " " + year;
    document.getElementById("calendar-right").innerHTML = months[(month + 1) % 12];

    var start = new Date(year, month, 1);

    var col = getDay(start);
    var row = 0;
    var days = daysInMonth(year, month);

    var added = false;
    
    var today = new Date();

    for (var day = 1; day <= days; day++) {
        if (!added) {
            addRow(row);
            added = true;
        }

        var td = document.getElementById("calendar-" + row + "-" + col);

        var dateEl = document.createElement("div");
        dateEl.classList.add("date");
        if (year == today.getFullYear() && month == today.getMonth() && day == today.getDate()) {
            dateEl.classList.add("today");
        }
        dateEl.innerHTML = day;
        td.appendChild(dateEl);

        var evt = document.createElement("div");
        evt.classList.add("event");
        evt.id = "day-" + day;
        td.appendChild(evt);

        col++;
        if (col == 8) {
            col = 1;
            row++;
            added = false;
        }
    }

    fetchEvents(evt => renderEvents(year, month, evt));
}

function renderEvents(year, month, events) {    
    for (var event of events) {
        var date = new Date(event.date);

        if (date.getFullYear() != year || date.getMonth() != month) continue;

        var evtEl = document.getElementById("day-" + date.getDate());

        var link = document.createElement("a");
        link.href = event.permalink;
        link.innerHTML = event.title;
        evtEl.appendChild(link);

        var timeEl = document.createElement("div");
        timeEl.classList.add("time");
        timeEl.innerHTML = event.time;
        evtEl.appendChild(timeEl);
    }
}

function addRow(index) {
    var tbody = document.getElementById("calendar-tbody");

    var tr = document.createElement("tr");

    for (var col = 0; col < 7; col++) {
        var td = document.createElement("td");
        td.classList.add("day");
        td.id = "calendar-" + index + "-" + (col+1);
        tr.appendChild(td);
    }

    tbody.appendChild(tr);
}

function getDay(d) {
    day = d.getDay();
    if (day == 0) return 7;
    return day;
}

function daysInMonth(year, month) {
    return new Date(year, month+1, 0).getDate();
}

function fetchEvents(f) {
    var req = new XMLHttpRequest();

    req.onreadystatechange = function() {
        if (this.readyState != 4) return;

        if (this.status != 200) {
            console.error("couldn't fetch the events list.");
            return;
        }

        f(JSON.parse(req.responseText).data);
    }

    req.open("GET", window.location.origin + "/events/index.json", true);
    req.send();
}

function changeMonth(d) {
    now = new Date(now.getFullYear(), now.getMonth() + d, 1);
    loadCalendar();
}

function resetMonth() {
    now = new Date();
    loadCalendar();
}