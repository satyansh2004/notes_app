let add_notes_textarea = document.getElementById("add_notes_textarea");

let input_text = document.getElementById("input_text"); // Textarea
let tags_input = document.getElementById("tags_input"); // Tags input

let main_div = document.getElementById("main");

function adds_Notes() {
    let show_popup = add_notes_textarea;
    if (show_popup.classList.contains("hidden") == true) {
        show_popup.classList.remove("hidden")
    }
}


let addNotes = document.getElementById("addNotes");
addNotes.addEventListener("click", adds_Notes);

let post_arr = [];
let tags_arr = [];

const savedNotes = localStorage.getItem("notes");
const savedTags = localStorage.getItem("tags");

if (savedNotes) post_arr = JSON.parse(savedNotes);
if (savedTags) tags_arr = JSON.parse(savedTags);

function post() {
    if (input_text.value == "") {
        alert("Enter some text before posting")
    } else {
        post_arr.push(input_text.value);
        tags_arr.push(tags_input.value);
        localStorage.setItem("notes", JSON.stringify(post_arr));
        localStorage.setItem("tags", JSON.stringify(tags_arr));

        input_text.value = "";
        tags_input.value = "";
        close_add_notes();
    }
}

let postBtn = document.getElementById("add_btn_textarea");
postBtn.addEventListener("click", () => {
    post();
    displayNotes();
});


function displayNotes() {
    let p_notes = JSON.parse(localStorage.getItem("notes"));
    let p_tags = JSON.parse(localStorage.getItem("tags"));

    main_div.innerHTML = "";
    let html = "";

    for (let i = 0; i < p_notes.length; i++) {
        let card = `<div class="flex flex-col h-[200px] bg-[#292929] row-span-1 break-all p-1 rounded-[4px]">
                <div class="cardButtons w-full mb-1 justify-between flex fle-row py-2 px-3">
                    <span class="flex">
                        <button class="copy">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        </button>
                    </span>

                    <span class="flex gap-x-3">
                        <button class="edit">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M11 5h2m-6 6h10m-9 4h8M15.232 5.232l3.536 3.536M6 20h12a2 2 0 002-2v-6.586a2 2 0 00-.586-1.414l-7.414-7.414A2 2 0 009.586 2H7a2 2 0 00-2 2v3.586a2 2 0 00.586 1.414l7.414 7.414A2 2 0 0014 16H8" />
                            </svg>
                        </button>
                        <button class="delete">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7h6m-7-3h8l1 3H7l1-3z" />
                            </svg>
                        </button>

                    </span>
                </div>

                <p class="content py-[1px] px-3 overflow-y-scroll [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-[#252525] [&::-webkit-scrollbar-thumb]:bg-[#777]">${p_notes[i]}</p>

                <div class="tags pt-2 px-3 pb-1 mt-auto">
                    <span class="displayTags text-[13px] cursor-pointer">#${p_tags[i]}</span>
                </div>
            </div>`;

        html += card;
    }
    main_div.innerHTML = html;
}
displayNotes();

function close_add_notes() {
    let close_parent = close_btn_add_notes.parentNode.parentNode.parentNode;
    if (close_parent.classList.contains("hidden") != true) {
        close_parent.classList.add("hidden")
    }
}

let close_btn_add_notes = document.getElementById("close_btn_add_notes");
close_btn_add_notes.addEventListener("click", close_add_notes);



// For footer
window.addEventListener("load", () => {
    const footer = document.body.querySelector("footer");

    if (footer && footer.innerHTML.includes("Satyansh")) {
        console.log(footer.innerHTML);
    } else {
        document.body.innerHTML = "";

        const error = document.createElement("div");
        error.textContent = "Error: Website Has been Tempered";
        error.style.color = "red";
        error.style.fontSize = "1.5rem";
        error.style.textAlign = "center";
        error.style.marginTop = "50px";

        document.body.appendChild(error);
    }
});