export interface OTPRequest {
  phone: string;
  email?: string;
}

export interface OTPResponse {
  success: boolean;
  message: string;
  requestId?: string;
  expiresIn?: number;
}

export interface VerifyOTPRequest {
  requestId: string;
  otp: string;
}

export interface VerifyOTPResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: UserData;
}

export interface UserData {
  id: string;
  phone: string;
  email?: string;
  createdAt: string;
  verifiedAt?: string;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
}