import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import SocialLoginButton from '@/components/SocialLoginButton'; // Custom component
import { AlertCircle, LogIn } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('user@example.com'); // Default credentials
  const [password, setPassword] = useState('password123'); // Default credentials
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  console.log('LoginPage loaded');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    // Simulate API call
    console.log('Login attempt:', { email, password, rememberMe });
    setTimeout(() => {
      if (email === 'user@example.com' && password === 'password123') {
        console.log('Login successful');
        // navigate('/dashboard'); // Navigate to a protected route
        alert('Login successful! (Placeholder - no navigation set up post-login)');
      } else {
        setError('Invalid email or password. Please try again.');
        console.error('Login failed');
      }
      setIsLoading(false);
    }, 1500);
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Attempting social login with ${provider}`);
    // Placeholder for social login logic
    alert(`Social login with ${provider} initiated. (Placeholder)`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          {/* Placeholder for Logo */}
          <div className="flex justify-center mb-4">
            <img src="https://placehold.co/120x50?text=OurApp" alt="Company Logo" className="h-10" />
          </div>
          <CardTitle className="text-2xl font-bold">Welcome Back!</CardTitle>
          <CardDescription>Enter your credentials to access your account.</CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Login Failed</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link to="/password-recovery" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember-me"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                disabled={isLoading}
              />
              <Label htmlFor="remember-me" className="text-sm font-normal">Remember me</Label>
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? <LogIn className="mr-2 h-4 w-4 animate-spin" /> : <LogIn className="mr-2 h-4 w-4" />}
              Login
            </Button>
          </form>

          <Separator className="my-6" />

          <div className="space-y-3">
            <SocialLoginButton
              provider="google"
              onClick={handleSocialLogin}
              isLoading={isLoading}
              buttonText="Sign in with Google"
            />
            <SocialLoginButton
              provider="github"
              onClick={handleSocialLogin}
              isLoading={isLoading}
              buttonText="Sign in with GitHub"
            />
          </div>
        </CardContent>
        <CardFooter className="text-center text-sm">
          <p>
            Don't have an account?{' '}
            <Link to="/registration" className="font-medium text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;