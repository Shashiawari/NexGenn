"use client";
import React from 'react';
import { signOut } from 'next-auth/react';

const Button = () => {
  const handleLogout = () => {
    signOut({ callbackUrl: '/' }); // Redirects to the home page after sign out
  };

  return (
    <div>
      <button onClick={handleLogout} className="btnsp mx-2">LogOut</button>
    </div>
  );
};

export default Button;
