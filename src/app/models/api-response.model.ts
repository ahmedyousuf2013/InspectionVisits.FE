export interface ApiResponse<T> {
    isSuccess: boolean;
    result: T;
    error?: string;
}

export interface TokenResult {
    token: string;
    expiresIn?: number;
}