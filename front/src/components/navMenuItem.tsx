import { ReactNode } from "react";
import { IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface NavMenuItemProps {
  icon: ReactNode; 
  text: string;
  href: string;
}

export default function NavMenuItem({ icon, text, href }: NavMenuItemProps) {   //componente reutilizável do menu de navegação :]
  return (
    <IconButton
      component={Link}
      to={href}
      aria-label={text}
      size="large"
      sx={{ gap: 2 }}
    >
      {icon}
      <Typography variant="body2">{text}</Typography>
    </IconButton>
  );
}
