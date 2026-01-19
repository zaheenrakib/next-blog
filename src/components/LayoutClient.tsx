"use client";

import type React from "react";
import StoreProvider from "@/components/StoreProvider";
import Navbar from "@/components/common/Navbar";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <Navbar />
      {children}
    </StoreProvider>
  );
}