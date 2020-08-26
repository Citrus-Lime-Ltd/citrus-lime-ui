import { StatusCodes, StatusMessage } from '@/types/core/StatusCodes';

const statusCodes: StatusCodes = {
    GetMessage (statusCode: number): StatusMessage {
        let foundElement: StatusMessage | undefined = this.httpStatusCodes.find(e => e.code === statusCode);

        if (typeof foundElement === 'undefined') {
            foundElement = {
                'code': -1,
                'technicalMessage': 'Unrecognised HTTP Status Code',
                'customerFacingMessage': 'Unrecognised HTTP Status Code'
            };
        }

        return foundElement;
    },
    GetStatusCodes (): StatusMessage[] {
        return this.httpStatusCodes;
    },
    httpStatusCodes: [
        {
            'code': 0,
            'technicalMessage': 'Network Error',
            'customerFacingMessage': 'There was an error connecting to the API.'
        },
        {
            'code': 100,
            'technicalMessage': 'Continue',
            'customerFacingMessage': 'Interim response: You should continue with your request.'
        },
        {
            'code': 101,
            'technicalMessage': 'Switching Protocols',
            'customerFacingMessage': 'The server is switching protocols.'
        },
        {
            'code': 103,
            'technicalMessage': 'Early Hints',
            'customerFacingMessage': 'Early Hints'
        },
        {
            'code': 200,
            'technicalMessage': 'OK',
            'customerFacingMessage': 'The request has succeeded.'
        },
        {
            'code': 201,
            'technicalMessage': 'Created',
            'customerFacingMessage': 'The request has been fulfilled and resulted in a new resource being created.'
        },
        {
            'code': 202,
            'technicalMessage': 'Accepted',
            'customerFacingMessage': 'The request has been accepted for processing, but the processing has not been completed.'
        },
        {
            'code': 203,
            'technicalMessage': 'Non-Authoritative Information',
            'customerFacingMessage': 'The server successfully processed the request, but is returning information that may be from another source.'
        },
        {
            'code': 204,
            'technicalMessage': 'No Content',
            'customerFacingMessage': 'The server successfully processed the request, but is not returning any content.'
        },
        {
            'code': 205,
            'technicalMessage': 'Reset Content',
            'customerFacingMessage': 'The server successfully processed the request, but is not returning any content.'
        },
        {
            'code': 206,
            'technicalMessage': 'Partial Content',
            'customerFacingMessage': 'The server is delivering only part of the resource due to a range header sent by the client. '
        },
        {
            'code': 301,
            'technicalMessage': 'Moved Permanently',
            'customerFacingMessage': 'This and all future requests should be directed to the given URI.'
        },
        {
            'code': 302,
            'technicalMessage': 'Found',
            'customerFacingMessage': 'The requested resource resides temporarily under a different URI.'
        },
        {
            'code': 303,
            'technicalMessage': 'See Other',
            'customerFacingMessage': 'The response to the request can be found under another URI using a GET method.'
        },
        {
            'code': 304,
            'technicalMessage': 'Not Modified',
            'customerFacingMessage': 'If the client has performed a conditional GET request and access is allowed, but the document has not been modified, the server SHOULD respond with this status code.'
        },
        {
            'code': 305,
            'technicalMessage': 'Use Proxy',
            'customerFacingMessage': 'The requested resource MUST be accessed through the proxy given by the Location field.'
        },
        {
            'code': 306,
            'technicalMessage': '(Unused)',
            'customerFacingMessage': 'No longer used. Originally meant \'Subsequent requests should use the specified proxy.\''
        },
        {
            'code': 307,
            'technicalMessage': 'Temporary Redirect',
            'customerFacingMessage': 'The requested resource resides temporarily under a different URI.'
        },
        {
            'code': 308,
            'technicalMessage': 'Permanent Redirect',
            'customerFacingMessage': 'The request, and all future requests should be repeated using another URI.'
        },
        {
            'code': 400,
            'technicalMessage': 'Bad Request',
            'customerFacingMessage': 'The request could not be understood by the server due to malformed syntax. The client SHOULD NOT repeat the request without modifications.'
        },
        {
            'code': 401,
            'technicalMessage': 'Unauthorized',
            'customerFacingMessage': 'The request requires user authentication.'
        },
        {
            'code': 402,
            'technicalMessage': 'Payment Required',
            'customerFacingMessage': 'This code is reserved for future use.'
        },
        {
            'code': 403,
            'technicalMessage': 'Forbidden',
            'customerFacingMessage': 'The server understood the request, but is refusing to fulfill it. Authorization will not help and the request SHOULD NOT be repeated.'
        },
        {
            'code': 404,
            'technicalMessage': 'Not Found',
            'customerFacingMessage': 'The server has not found anything matching the Request-URI.'
        },
        {
            'code': 405,
            'technicalMessage': 'Method Not Allowed',
            'customerFacingMessage': 'The method specified in the Request-Line is not allowed for the resource identified by the Request-URI.'
        },
        {
            'code': 406,
            'technicalMessage': 'Not Acceptable',
            'customerFacingMessage': 'The resource identified by the request is only capable of generating response entities which have content characteristics not acceptable according to the accept headers sent in the request.'
        },
        {
            'code': 407,
            'technicalMessage': 'Proxy Authentication Required',
            'customerFacingMessage': 'The client must first authenticate itself with the proxy.'
        },
        {
            'code': 408,
            'technicalMessage': 'Request Timeout',
            'customerFacingMessage': 'The client did not produce a request within the time that the server was prepared to wait. The client MAY repeat the request without modifications at any later time.'
        },
        {
            'code': 409,
            'technicalMessage': 'Conflict',
            'customerFacingMessage': 'The request could not be completed due to a conflict with the current state of the resource. '
        },
        {
            'code': 410,
            'technicalMessage': 'Gone',
            'customerFacingMessage': 'The requested resource is no longer available at the server and no forwarding address is known. '
        },
        {
            'code': 411,
            'technicalMessage': 'Length Required',
            'customerFacingMessage': 'The server refuses to accept the request without a defined Content- Length.'
        },
        {
            'code': 412,
            'technicalMessage': 'Precondition Failed',
            'customerFacingMessage': 'The server does not meet one of the preconditions that the requester put on the request.'
        },
        {
            'code': 413,
            'technicalMessage': 'Payload Too Large',
            'customerFacingMessage': 'The request is larger than the server is willing or able to process.'
        },
        {
            'code': 414,
            'technicalMessage': 'URI Too Long',
            'customerFacingMessage': 'The URI provided was too long for the server to process.'
        },
        {
            'code': 415,
            'technicalMessage': 'Unsupported Media Type',
            'customerFacingMessage': 'The server is refusing to service the request because the entity of the request is in a format not supported by the requested resource for the requested method.'
        },
        {
            'code': 416,
            'technicalMessage': 'Range Not Satisfiable',
            'customerFacingMessage': 'The client has asked for a portion of the file, but the server cannot supply that portion.'
        },
        {
            'code': 417,
            'technicalMessage': 'Expectation Failed',
            'customerFacingMessage': 'The server cannot meet the requirements of the Expect request-header field.'
        },
        {
            'code': 418,
            'technicalMessage': 'I\'m a teapot',
            'customerFacingMessage': 'I\'m a teapot'
        },
        {
            'code': 422,
            'technicalMessage': 'Unprocessable Entity',
            'customerFacingMessage': 'The request was well-formed but was unable to be followed due to semantic errors.'
        },
        {
            'code': 429,
            'technicalMessage': 'Too Many Requests',
            'customerFacingMessage': 'The user has sent too many requests in a given amount of time.'
        },
        {
            'code': 451,
            'technicalMessage': 'Unavailable For Legal Reasons',
            'customerFacingMessage': 'Resource access is denied for legal reasons.'
        },
        {
            'code': 500,
            'technicalMessage': 'Internal Server Error',
            'customerFacingMessage': 'The server encountered an unexpected condition which prevented it from fulfilling the request.'
        },
        {
            'code': 501,
            'technicalMessage': 'Not Implemented',
            'customerFacingMessage': 'The server either does not recognise the request method, or it lacks the ability to fulfill the request.'
        },
        {
            'code': 502,
            'technicalMessage': 'Bad Gateway',
            'customerFacingMessage': 'The server was acting as a gateway or proxy and received an invalid response from the upstream server.'
        },
        {
            'code': 503,
            'technicalMessage': 'Service Unavailable',
            'customerFacingMessage': 'The server is currently unable to handle the request due to a temporary overloading or maintenance of the server.'
        },
        {
            'code': 504,
            'technicalMessage': 'Gateway Timeout',
            'customerFacingMessage': 'The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.'
        },
        {
            'code': 505,
            'technicalMessage': 'HTTP Version Not Supported',
            'customerFacingMessage': 'The server does not support the HTTP protocol version used in the request.'
        },
        {
            'code': 506,
            'technicalMessage': 'Variant Also Negotiates',
            'customerFacingMessage': 'Transparent content negotiation for the request results in a circular reference.'
        },
        {
            'code': 507,
            'technicalMessage': 'Insufficient Storage',
            'customerFacingMessage': 'The server is unable to store the representation needed to complete the request.'
        },
        {
            'code': 508,
            'technicalMessage': 'Loop Detected',
            'customerFacingMessage': 'The server detected an infinite loop while processing the request.'
        },
        {
            'code': 510,
            'technicalMessage': 'Not Extended',
            'customerFacingMessage': 'Further extensions to the request are required for the server to fulfill it.'
        },
        {
            'code': 511,
            'technicalMessage': 'Network Authentication Required',
            'customerFacingMessage': 'The client needs to authenticate to gain network access.'
        }
    ]
};

export default statusCodes;