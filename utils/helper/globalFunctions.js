// function to format a string into capitalize format: 
 const Capitalize = (str) => {
    return str[0].toUpperCase() + str.slice(1)
}
// function to format a date string into a localized format:
const formatDateString = (dateString) => {
    // Parse the input date string
    const date = new Date(dateString);

    // Format the date according to the desired format
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

    // Capitalize the first letter of each word in the formatted date
    const capitalizedFormattedDate = formattedDate.replace(/\b\w/g, (char) => char.toUpperCase());

    return capitalizedFormattedDate;
};

// function to limit a string to a specified length:
const limitString = (str, maxLength) => {
    if (str?.length > maxLength) {
        return str.slice(0, maxLength) + '...';
    }
    return str;
}

const getBankDetails = (currency, companyName) => {
    const bankDetails = {
        'USD_tfltd': [
            { id: 1, accHolder: "Techforing Ltd.", accNumber: "96*********70688" },
            { id: 2, accHolder: "TechForing Ltd.", accNumber: "83****7349" }
        ],
        'USD_tfllc': [
            { id: 1, accHolder: "TechForing LLC.", accNumber: "96**********4285" },
            { id: 2, accHolder: "TechForing LLC.", accNumber: "82******3798" },
            { id: 3, accHolder: "TechForing Ltd.", accNumber: "63***9285" }
        ],
        'EUR_tfltd': [
            { id: 1, accHolder: "Techforing Ltd.", accNumber: "BE42 **** **** 8454" }
        ],
        'EUR_tfllc': [
            { id: 1, accHolder: "TechForing LLC.", accNumber: "BE02 **** **** 7340" }
        ],
        'POUND_tfltd': [
            { id: 1, accHolder: "Techforing Ltd.", accNumber: "82****79" },
            { id: 2, accHolder: "Techforing Ltd.", accNumber: "GB76 **** **** **** **** 79" }
        ],
        'POUND_tfllc': []
    };

    const key = `${currency}_${companyName}`;
    return bankDetails[key] || null;
};

const extractDomain = (url) => {
    return url.replace(/^(https?:\/\/)?(www\.)?/, '').split('/')[0];
  };

export {
    Capitalize,
    formatDateString,
    limitString,
    getBankDetails,
    extractDomain
}