const calendarTitle = document.getElementById("calendar-title");
const calendarBody = document.getElementById("calendar-body");
const prevMonthBtn = document.getElementById("prev-month");
const nextMonthBtn = document.getElementById("next-month");
const comingUpList = document.getElementById("coming-up-list");

let currentDate = new Date();

function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    const today = new Date();

    calendarTitle.textContent = `${year}.${String(month + 1).padStart(2, "0")}`;

    calendarBody.innerHTML = "";

    let row = document.createElement("tr");

    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement("td");
        emptyCell.classList.add("empty");
        row.appendChild(emptyCell);
    }

    for (let day = 1; day <= lastDate; day++) {
        const cell = document.createElement("td");
        cell.textContent = day;

        // 今日の日付
        if (
            year === today.getFullYear() &&
            month === today.getMonth() &&
            day === today.getDate()
        ) {
            cell.classList.add("today");
        }

        // 予定がある日
        const dateKey =
            year + "-" +
            String(month + 1).padStart(2, "0") + "-" +
            String(day).padStart(2, "0");

        if (events[dateKey]) {
            cell.classList.add("event");
        }

        row.appendChild(cell);

        if ((firstDay + day) % 7 === 0) {
            calendarBody.appendChild(row);
            row = document.createElement("tr");
        }
    }

    while (row.children.length < 7) {
        const emptyCell = document.createElement("td");
        emptyCell.classList.add("empty");
        row.appendChild(emptyCell);
    }

    calendarBody.appendChild(row);
}

function renderComingUp(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    comingUpList.innerHTML = "";

    const filteredEvents = Object.entries(events).filter(([key]) => {
        const eventDate = new Date(key);
        return (
            eventDate.getFullYear() === year &&
            eventDate.getMonth() + 1 === month
        );
    });

    if (filteredEvents.length === 0) {
        const li = document.createElement("li");
        li.textContent = "予定はまだありません";
        comingUpList.appendChild(li);
        return;
    }

    filteredEvents.sort((a, b) => new Date(a[0]) - new Date(b[0]));

    filteredEvents.forEach(([key, text]) => {
        const eventDate = new Date(key);
        const li = document.createElement("li");
        const dateText = document.createElement("div");
        dateText.textContent = `${eventDate.getMonth() + 1}/${eventDate.getDate()}`;
        li.appendChild(dateText);

        const ul = document.createElement("ul");
        li.appendChild(ul);
        
        text.forEach(event => {

            const liEvent = document.createElement("li");

            if (typeof event === "string") {

                liEvent.textContent = event;

            } else if (event.link) {

                const a = document.createElement("a");
                a.href = event.link;
                a.textContent = event.text;
                a.target = "_blank";

                liEvent.appendChild(a);

            } else {

                liEvent.textContent = event.text;

            }

            ul.appendChild(liEvent);

        }); comingUpList.appendChild(li);
    });
}

function updateCalendar(date) {
    renderCalendar(date);
    renderComingUp(date);
}

prevMonthBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar(currentDate);
});

nextMonthBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar(currentDate);
});

updateCalendar(currentDate);