import { ReactNode } from "react";

type FullScreenCardProps = {
  children: ReactNode;
};

export function FullScreenCard({ children }) {
  return <div className="flex justify-center items-center min-h-screen "></div>;
}
