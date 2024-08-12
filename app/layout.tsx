import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Resume Builder',
  description: 'Build and preview your resume in real-time',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        {children}
      </body>
    </html>
  );
}
