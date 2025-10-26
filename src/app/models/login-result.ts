 class ApiResponse<T> {
    result: T;
    error: string | null;
    message: string | null;
    isSuccess: boolean;
    count: number;
    errorMessages: string | null;

    constructor(
        result: T,
        error: string | null,
        message: string | null,
        isSuccess: boolean,
        count: number,
        errorMessages: string | null
    ) {
        this.result = result;
        this.error = error;
        this.message = message;
        this.isSuccess = isSuccess;
        this.count = count;
        this.errorMessages = errorMessages;
    }
}

class TokenResult {
    token: string;

    constructor(token: string) {
        this.token = token;
    }
}

// Example usage:
const response = new ApiResponse<TokenResult>(
    new TokenResult("eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJqdGkiOiI5ZjYwMWVhOS1mOTgyLTRjYjQtOTJiMS0wZDhiYjMwNzFhZjgiLCJleHAiOjE3NjE1MTI5NjIsImlzcyI6IllvdXJJc3N1ZXIiLCJhdWQiOiJZb3VyQXVkaWVuY2UifQ"),
    null,
    null,
    true,
    0,
    null
);

console.log(response);
