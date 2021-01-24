let codeInDivElements = document.querySelectorAll(".prism-code");

for (let codeInDivElement of codeInDivElements) {
    let codeElement = document.createElement("code");
    codeElement.append(...codeInDivElement.childNodes);
    codeElement.classList.add("prism-code");
    codeElement.style.display = "block";
    codeElement.style.overflow = "auto";
    codeElement.style.fontSize = "inherit";
    codeElement.style.padding = 0;
    codeInDivElement.replaceWith(codeElement);
}