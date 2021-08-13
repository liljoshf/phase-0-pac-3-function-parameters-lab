function introduction(string) {
if (string === "Josh")
    return "Hi, my name is Josh."
if (string === "Nancy")
    return "Hi, my name is Nancy."
}

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

// console.log("Hi, my name is Nancy and I am learning to program in React.");
function introductionWithLanguageOptional(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOptional(name, language="JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
