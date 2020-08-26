export declare interface StatusCodes {
    GetStatusCodes(): StatusMessage[];
    GetMessage(httpStatusCode: number): StatusMessage;
    httpStatusCodes: StatusMessage[];
}

export declare interface StatusMessage {
    code: number;
    technicalMessage: string;
    customerFacingMessage: string;
}