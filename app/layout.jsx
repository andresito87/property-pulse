import React from "react";
import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";

// Define global metadata for the page, improve SEO
export const metadata = {
  title: "PropertyPulse | Find the perfect rental",
  description: "Find your dream rental property",
  keywords: "rental, real estate, find rentals, find property",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
