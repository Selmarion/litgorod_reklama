
import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 px-6 border-t border-[#404147]">
      <div className="container mx-auto text-center text-gray-500">
        <p>&copy; {currentYear} ЛитПромоГород. Все права защищены.</p>
        <p className="mt-2 text-sm">Связь с нами: <a href="https://t.me/litgorod_reklama_bot" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#5368f5] transition-colors">@litgorod_reklama_bot</a></p>
      </div>
    </footer>
  );
};
