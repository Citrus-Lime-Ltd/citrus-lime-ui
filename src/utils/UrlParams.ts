const GetParamsByName = (stringToSearch: string, paramToFind: string): string => {
    let valueToReturn = '';

    const urlToSearch = decodeURIComponent(stringToSearch),
        regexS = `[\\?&]'${paramToFind}=([^&#]*)`,
        regex = new RegExp(regexS),
        results = regex.exec(urlToSearch);

    if (results != null) {
        valueToReturn = decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    return valueToReturn;
};

export default GetParamsByName; 