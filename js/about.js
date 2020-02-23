window.addEventListener("load", slowTrigger);

function slowTrigger(onLoad) {
    setTimeout(replaceText, 4000);
}

function replaceText() {
    const heading = document.querySelector("h1");
    const formattedHeading = heading.innerText
        .replace(/The /g, "Replaced ")
        .replace(/the /g, "replaced ");

    heading.innerText = formattedHeading;

    const content = document.querySelectorAll(".about p");

    content.forEach(paragraph => {
        let formattedContent = paragraph.innerText;
        formattedContent = formattedContent
            .replace(/the /g, "replaced ")
            .replace(/The /g, "Replaced ");
        paragraph.innerText = formattedContent;
    });
}
