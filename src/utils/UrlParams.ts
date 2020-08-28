const GetParamsByName = (stringToSearch: string, paramToFind: string): string => {
    let valueToReturn: string = '';

    const urlToSearch: string = decodeURIComponent(stringToSearch),
        regexS: string = '[\\?&]' + paramToFind + '=([^&#]*)',
        regex: RegExp = new RegExp(regexS),
        results: RegExpExecArray | null = regex.exec(urlToSearch);

    if (results && results[1]) {
        valueToReturn = decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    return valueToReturn;
};

export default GetParamsByName; 