import { Request, Response, NextFunction } from "express";

export const notFound = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const error = new Error(
    `요청한 경로를 찾을 수 없습니다 - ${req.originalUrl}`
  );
  res.status(404).json({
    success: false,
    error: error.message,
  });
};
