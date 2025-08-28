"use strict";

const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");
const counter = document.getElementById("counter");
const filterBtns = document.querySelectorAll(".filters button");

let filter = "all";

function updateCounter() {
    const all = list.querySelectorAll("li");
    const completed = list.querySelectorAll("li.completed");
    counter.textContent = `Active: ${all.length - completed.length} | Completed: ${completed.length}`;
}

function applyFilter() {
    list.querySelectorAll("li").forEach(li => {
        if (filter === "all") {
            li.style.display = "";
        } else if (filter === "active") {
            li.style.display = li.classList.contains("completed") ? "none" : "";
        } else if (filter === "completed") {
            li.style.display = li.classList.contains("completed") ? "" : "none";
        }
    });
}

function createTask(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = text;

    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.addEventListener("click", () => {
        li.classList.toggle("completed");
        updateCounter();
        applyFilter();
    });

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => {
        li.remove();
        updateCounter();
    });

    li.append(span, doneBtn, delBtn);
    list.appendChild(li);

    updateCounter();
    applyFilter();
}

addBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (text) {
        createTask(text);
        input.value = "";
    }
});

input.addEventListener("keypress", e => {
    if (e.key === "Enter") addBtn.click();
});

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        filter = btn.dataset.filter;
        applyFilter();
    });
});




