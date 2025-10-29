import React from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { getCalAttributes, CAL_CONFIG } from "@/cal/scriptSetup/cal-config";

interface CalButtonProps extends Omit<ButtonProps, "data-cal-link" | "data-cal-namespace" | "data-cal-config"> {
  children: React.ReactNode;
  customConfig?: Partial<typeof CAL_CONFIG>;
  onClick?: () => void;
}

export const CalButton: React.FC<CalButtonProps> = ({ 
  children, 
  customConfig, 
  onClick,
  ...buttonProps 
}) => {
  const calAttributes = getCalAttributes(customConfig);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Button
      {...buttonProps}
      {...calAttributes}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

// Export the configuration for direct use
export { CAL_CONFIG, getCalAttributes };
