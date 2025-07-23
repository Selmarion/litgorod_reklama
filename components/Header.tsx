
import React from 'react';
import { BookOpenIcon } from './icons/BookOpenIcon';

export const Header: React.FC = () => {
  return (
    <header className="py-3 px-6 md:px-10 sticky top-0 z-50 bg-[#222327]/60 backdrop-blur-lg border-b border-[#404147]/50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center gap-3" aria-label="На главную">
          <BookOpenIcon className="w-8 h-8 text-[#5368f5]" />
          <span className="text-2xl font-extrabold">
            <span className="text-[#5368f5]">Лит</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f72f8e] to-[#f96b45]">Город</span>
          </span>
        </a>
        <a 
          href="https://t.me/litgorod_reklama_bot" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#5368f5] hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm shadow-lg shadow-[#5368f5]/20"
        >
          Заказать
        </a>
      </div>
    </header>
  );
};
