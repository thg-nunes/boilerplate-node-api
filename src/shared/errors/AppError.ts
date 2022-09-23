class AppError {
  constructor(readonly message: string, readonly statusCode = 400) {}
}

export { AppError };
