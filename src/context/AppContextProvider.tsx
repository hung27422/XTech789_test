"use client";
import { Cart } from "@/models/Cart";
// AppContext.tsx
import { createContext, useContext, useState } from "react";

type AppContextType = {
  dataCart: Cart[];
  setDataCart: React.Dispatch<React.SetStateAction<Cart[]>>;
};

// Tạo context với giá trị ban đầu là undefined
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider
export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [dataCart, setDataCart] = useState<Cart[]>([]);

  return <AppContext.Provider value={{ dataCart, setDataCart }}>{children}</AppContext.Provider>;
};

// Custom hook để sử dụng context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppContextProvider"); // sửa lại tên cho đúng
  }
  return context;
};
