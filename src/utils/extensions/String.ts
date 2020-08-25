function Levenshtein (a: string, b: string): number {
    const aLen = a.length;
    const bLen = b.length;

    if (aLen === 0) return bLen;
    if (bLen === 0) return aLen;

    let tmp, i, j, prev, val, ma, mb, mc, md, bprev;

    if (aLen > bLen) {
        tmp = a;
        a = b;
        b = tmp;
    }

    const row = new Int8Array(aLen + 1);
    // init the row
    for (i = 0; i <= aLen; i++) {
        row[i] = i;
    }

    // fill in the rest
    for (i = 1; i <= bLen; i++) {
        prev = i;
        bprev = b[i - 1];

        for (j = 1; j <= aLen; j++) {
            if (bprev === a[j - 1]) {
                val = row[j - 1];
            }
            else {
                ma = prev + 1;
                mb = row[j] + 1;
                mc = ma - ((ma - mb) & ((mb - ma) >> 7));
                md = row[j - 1] + 1;
                val = mc - ((mc - md) & ((md - mc) >> 7));
            }

            row[j - 1] = prev;
            prev = val;
        }

        row[aLen] = prev;
    }

    return row[aLen];
};

interface String {
    Similarity(comparisonString: string): number;
    TrimChar(character: string): string;
    TrimStartChar(character: string): string;
    TrimEndChar(character: string): string;
    TrimToLength(length: number, addElipsis: boolean): string;
    CamelCaseToSentence(): string;
    ToTitleCase(): string;
}

String.prototype.Similarity = function (this: string, comparisonString: string): number {
    let similarityToReturn = 0;

    let longer = this.toLowerCase();
    let shorter = comparisonString.toLowerCase();

    if (longer < shorter) {
        const temp = shorter;

        shorter = longer;
        longer = temp;
    }

    const longerLength: number = longer.length;
    if (longerLength === 0) {
        similarityToReturn = 100;
    }
    else {
        similarityToReturn = Math.round((longerLength - Levenshtein(longer, shorter)) / longerLength * 100);
    }

    return similarityToReturn;
};

String.prototype.TrimChar = function (this: string, character: string): string {
    return this.TrimStartChar(character).TrimEndChar(character);
};


String.prototype.TrimStartChar = function (this: string, character: string): string {
    return character !== '' && this.startsWith(character) ? this.slice(1) : this;
};

String.prototype.TrimEndChar = function (this: string, character: string): string {
    return character !== '' && this.endsWith(character) ? this.slice(0, -1) : this;
};

String.prototype.TrimToLength = function (this: string, length: number, addElipsis: boolean): string {
    const trimLength = (this.length < length) || (typeof length !== 'number')
        ? this.length
        : length;

    return addElipsis && trimLength < this.length ?
        `${this.slice(0, (trimLength - 4))} ...` :
        this.slice(0, trimLength);
};

String.prototype.CamelCaseToSentence = function (this: string): string {
    let toReturn = '';
    const array = this.match(/[a-z]+|[A-Z][a-z]+|[0-9]+/g);

    if (array != null) {
        const temp: string[] = array[0].split('');

        temp[0] = temp[0].toUpperCase();
        array[0] = temp.join('');

        toReturn = array.join(' ');
    }
    return toReturn;
};

String.prototype.ToTitleCase = function (this: string): string {
    let stringAsArray: string[] = this.toLowerCase().split(' ');

    stringAsArray = stringAsArray.map(word => word[0].toUpperCase() + word.slice(1));

    return stringAsArray.join(' ');
};
