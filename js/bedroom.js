const calendarTitle = document.getElementById("calendar-title");
const calendarBody = document.getElementById("calendar-body");
const prevMonthBtn = document.getElementById("prev-month");
const nextMonthBtn = document.getElementById("next-month");
const memoriesList = document.getElementById("memories-list");

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

        const dateKey =
            year + "-" +
            String(month + 1).padStart(2, "0") + "-" +
            String(day).padStart(2, "0");

        if (
            year === today.getFullYear() &&
            month === today.getMonth() &&
            day === today.getDate()
        ) {
            cell.classList.add("today");
        }

        const hasMemory = memories.some(memory => memory.date === dateKey);

        if (hasMemory) {
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

function renderMemories() {
    memoriesList.innerHTML = "";

    memories.forEach((memory) => {
        const li = document.createElement("li");
        li.className = "memory-card";

        let content = `
            <img src="${memory.image}" alt="${memory.title}">
            <p class="memory-date">${memory.date}</p>
            <h2 class="memory-title">${memory.title}</h2>
            <p class="memory-text">${memory.text}</p>
        `;

        if (memory.link) {
            li.innerHTML = `
                <a href="${memory.link}" target="_blank" rel="noopener noreferrer">
                    ${content}
                </a>
            `;
        } else {
            li.innerHTML = content;
        }

        memoriesList.appendChild(li);
    });
}

function updatePage(date) {
    renderCalendar(date);
    renderMemories();
}

prevMonthBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updatePage(currentDate);
});

nextMonthBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updatePage(currentDate);
});

updatePage(currentDate);