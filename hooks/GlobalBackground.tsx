"use client";

import React from "react";

interface GlobalBackgroundProps {
  imageUrl?: string;
  overlayColor?: string;
}

const GlobalBackground: React.FC<GlobalBackgroundProps> = ({
  imageUrl = "/assets/AllVendorServices/background.png",
  overlayColor = "#010304",
}) => {
  return (
    <div
      className="fixed inset-0 -z-50 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${imageUrl}')`,
        backgroundColor: overlayColor,
      }}
    />
  );
};

export default GlobalBackground;