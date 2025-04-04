document.getElementById("postForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const category = document.getElementById("category").value;
    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();

    if (!name || !category || !title || !content) {
        alert("Please fill in all fields.");
        return;
    }

    const postList = document.getElementById("postList");

    let selectedThread;
    if (category === "Fitness") {
        selectedThread = document.getElementById("fitnessThread");
    } else if (category === "Diet") {
        selectedThread = document.getElementById("dietThread");
    } else if (category === "Health") {
        selectedThread = document.getElementById("healthThread");
    } else {
        alert("Please select a category.");
        return;
    }

    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `
        <strong>${name}</strong> - <em>${category}</em><br>
        <strong>${title}</strong>
        <p>${content}</p>
        <hr>
    `;

    // Add the new post to the most recent thread
    selectedThread.appendChild(postDiv);

    document.getElementById("postForm").reset(); // Reset the form
});
