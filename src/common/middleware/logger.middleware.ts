import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const now = new Date().toISOString();
    console.log(`[${req.method}] ${req.originalUrl} - ${now}`);
    next();
  }
}