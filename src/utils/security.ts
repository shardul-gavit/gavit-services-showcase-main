/**
 * Security Utilities for Web Application
 * Provides input sanitization, validation, and security helpers
 */

/**
 * Sanitize string input to prevent XSS attacks
 * Removes potentially dangerous characters and HTML tags
 */
export const sanitizeInput = (input: string): string => {
  if (typeof input !== 'string') {
    return '';
  }

  // Remove HTML tags
  let sanitized = input.replace(/<[^>]*>/g, '');
  
  // Remove script tags and event handlers
  sanitized = sanitized.replace(/javascript:/gi, '');
  sanitized = sanitized.replace(/on\w+\s*=/gi, '');
  
  // Remove potentially dangerous characters
  sanitized = sanitized.replace(/[<>'"&]/g, '');
  
  // Trim whitespace
  sanitized = sanitized.trim();
  
  return sanitized;
};

/**
 * Validate email format
 */
export const validateEmail = (email: string): boolean => {
  if (!email || typeof email !== 'string') {
    return false;
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254; // RFC 5321 limit
};

/**
 * Validate phone number (10 digits for Indian numbers)
 */
export const validatePhone = (phone: string): boolean => {
  if (!phone || typeof phone !== 'string') {
    return false;
  }
  
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length === 10 && /^[6-9]\d{9}$/.test(cleaned); // Indian mobile number format
};

/**
 * Validate and sanitize name input
 */
export const validateName = (name: string): { valid: boolean; sanitized: string } => {
  if (!name || typeof name !== 'string') {
    return { valid: false, sanitized: '' };
  }
  
  const sanitized = sanitizeInput(name);
  const valid = sanitized.length >= 2 && sanitized.length <= 200 && /^[a-zA-Z\s.'-]+$/.test(sanitized);
  
  return { valid, sanitized };
};

/**
 * Rate limiting helper (client-side)
 * Uses localStorage to track request timestamps
 */
export class RateLimiter {
  private key: string;
  private maxRequests: number;
  private windowMs: number;

  constructor(key: string, maxRequests: number = 5, windowMs: number = 60000) {
    this.key = `rate_limit_${key}`;
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
  }

  canProceed(): boolean {
    if (typeof window === 'undefined' || !window.localStorage) {
      return true; // Server-side or no localStorage, allow
    }

    try {
      const data = localStorage.getItem(this.key);
      const now = Date.now();

      if (!data) {
        localStorage.setItem(this.key, JSON.stringify({ count: 1, resetTime: now + this.windowMs }));
        return true;
      }

      const { count, resetTime } = JSON.parse(data);

      if (now > resetTime) {
        // Reset window
        localStorage.setItem(this.key, JSON.stringify({ count: 1, resetTime: now + this.windowMs }));
        return true;
      }

      if (count >= this.maxRequests) {
        return false;
      }

      // Increment count
      localStorage.setItem(this.key, JSON.stringify({ count: count + 1, resetTime }));
      return true;
    } catch (error) {
      console.error('Rate limiter error:', error);
      return true; // Fail open in case of error
    }
  }

  reset(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem(this.key);
    }
  }
}

/**
 * Validate form data for common injection attacks
 */
export const validateFormData = (data: Record<string, any>): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      // Check for SQL injection patterns
      if (/['";\\]|(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE)\b)/i.test(value)) {
        errors.push(`Invalid characters detected in ${key}`);
      }
      
      // Check for script injection
      if (/<script|javascript:|on\w+\s*=/i.test(value)) {
        errors.push(`Potentially dangerous content in ${key}`);
      }
    }
  }
  
  return {
    valid: errors.length === 0,
    errors,
  };
};

