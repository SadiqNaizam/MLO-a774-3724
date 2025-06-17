import React from 'react';
import { Button, type ButtonProps } from '@/components/ui/button';
import { Loader2, Github, ExternalLink, Apple } from 'lucide-react'; // Using ExternalLink as a generic 'web service' icon

interface SocialLoginButtonProps extends Omit<ButtonProps, 'onClick' | 'children'> {
  /** The social provider identifier (e.g., 'google', 'github'). Used for icon and default text. */
  provider: 'google' | 'facebook' | 'github' | 'apple' | string; // Allow other strings for custom providers
  /** Click handler that receives the provider string. */
  onClick: (provider: string) => void;
  /** If true, shows a loading spinner and disables the button. */
  isLoading?: boolean;
  /** Custom text for the button. If not provided, defaults to "Sign in with [Provider]". */
  buttonText?: string;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  provider,
  onClick,
  isLoading,
  buttonText,
  variant = "outline", // Default to outline variant, common for social buttons
  className,
  ...props
}) => {
  console.log(`Rendering SocialLoginButton for provider: ${provider}, isLoading: ${isLoading}`);

  const handleProviderClick = () => {
    if (!isLoading && onClick) {
      onClick(provider);
    }
  };

  const ProviderIcon: React.FC = () => {
    switch (provider.toLowerCase()) {
      case 'github':
        return <Github className="mr-2 h-4 w-4" aria-hidden="true" />;
      case 'apple':
        return <Apple className="mr-2 h-4 w-4" aria-hidden="true" />;
      // Lucide-react doesn't have specific brand icons for Google/Facebook.
      // For a production app, you'd typically use custom SVG icons for these.
      // Using a generic icon as a placeholder.
      case 'google':
      case 'facebook':
      default:
        return <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />;
    }
  };

  const defaultText = `Sign in with ${provider.charAt(0).toUpperCase() + provider.slice(1)}`;
  const currentText = buttonText || defaultText;

  return (
    <Button
      variant={variant}
      onClick={handleProviderClick}
      disabled={isLoading}
      className={`w-full flex items-center justify-center ${className || ''}`}
      aria-label={currentText}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
      ) : (
        <ProviderIcon />
      )}
      {currentText}
    </Button>
  );
};

export default SocialLoginButton;