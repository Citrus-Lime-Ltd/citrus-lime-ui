const GetParamsByName = (stringToSearch: string, paramToFind: string): string => {
    let valueToReturn = '';

    const urlToSearch: string = decodeURIComponent(stringToSearch),
        regexS: string = '[\\?&]' + paramToFind + '=([^&#]*)',
        regex = new RegExp(regexS),
        results: RegExpExecArray | null = regex.exec(urlToSearch);

    if (results && results[1]) {
        valueToReturn = decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    return valueToReturn;
};

export default GetParamsByName; 