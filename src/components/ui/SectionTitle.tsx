import React from "react";

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="flex items-center justify-center my-6 bg-[#551760] w-[50%] mx-auto rounded-md mt-30">
      {/* Gạch bên trái */}
      <div className="flex-1 h-[2px] bg-white max-w-[100px]" />
      {/* Tiêu đề */}
      <h2 className="px-6 py-2 text-white text-2xl font-semibold rounded-full mx-4 whitespace-nowrap">
        {title}
      </h2>
      {/* Gạch bên phải */}
      <div className="flex-1 h-[2px] bg-white max-w-[100px]" />
    </div>
  );
}
