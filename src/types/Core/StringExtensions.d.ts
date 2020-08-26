declare global {
    interface String {
        Similarity(comparisonString: string): number;
        TrimChar(character: string): string;
        TrimStartChar(character: string): string;
        TrimEndChar(character: string): string;
        TrimToLength(length: number, addElipsis: boolean): string;
        CamelCaseToSentence(): string;
        ToTitleCase(): string;
    }
}

export { };

declare function Levenshtein(a: string, b: string): number;
