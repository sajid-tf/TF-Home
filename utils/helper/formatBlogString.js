function formatBlogString(inputString) {
    // Split the string by underscores if present
    let words = inputString.split('_');

    // Capitalize each word
    let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    // Join the words with a space
    let result = capitalizedWords.join(' ');

    return result;
}

function reverseFormatString(inputString) {
    // Split the string by spaces
    let words = inputString.split(' ');

    // Convert each word to lowercase
    let lowercaseWords = words.map(word => word.charAt(0).toLowerCase() + word.slice(1));

    // Join the words with underscores
    let result = lowercaseWords.join('_');

    return result;
}


export { formatBlogString, reverseFormatString };
