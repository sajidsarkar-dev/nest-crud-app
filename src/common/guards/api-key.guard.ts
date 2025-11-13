import { ForbiddenException, Injectable } from "@nestjs/common";

@Injectable()
export class ApiKeyGuard {
  private readonly validApiKey = 'my-secret-api-key';

  canActivate(context: any): boolean {
    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers['x-api-key'];
    if (apiKey !== this.validApiKey) {
      throw new ForbiddenException('Invalid API Key');
    }
    
    return apiKey === this.validApiKey;
  }
}