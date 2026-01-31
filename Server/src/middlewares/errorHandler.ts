import type{ Request, Response, NextFunction } from "express";



export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
): Response => {
  
    console.log(err)

  return res.status(400).json({
    success: false,
    message: err.message || "Something went wrong",
  });
};
