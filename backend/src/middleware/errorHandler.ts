import { Request, Response, NextFunction } from "express";

export interface AppError extends Error {
  statusCode?: number;
  isOperational?: boolean;
}

export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  _next: NextFunction
): void => {
  let error = { ...err };
  error.message = err.message;

  // 로그 출력
  console.error("❌ 에러 발생:", {
    message: err.message,
    stack: err.stack,
    url: req.url,
    method: req.method,
    ip: req.ip,
    userAgent: req.get("User-Agent"),
  });

  // Mongoose bad ObjectId
  if (err.name === "CastError") {
    const message = "잘못된 ID 형식입니다";
    error = { message, statusCode: 400 } as AppError;
  }

  // Mongoose duplicate key
  if (err.name === "MongoError" && (err as any).code === 11000) {
    const message = "중복된 데이터가 존재합니다";
    error = { message, statusCode: 400 } as AppError;
  }

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const message = Object.values((err as any).errors)
      .map((val: any) => val.message)
      .join(", ");
    error = { message, statusCode: 400 } as AppError;
  }

  // JWT errors
  if (err.name === "JsonWebTokenError") {
    const message = "유효하지 않은 토큰입니다";
    error = { message, statusCode: 401 } as AppError;
  }

  if (err.name === "TokenExpiredError") {
    const message = "토큰이 만료되었습니다";
    error = { message, statusCode: 401 } as AppError;
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "서버 내부 오류가 발생했습니다",
    ...(process.env["NODE_ENV"] === "development" && { stack: err.stack }),
  });
};
