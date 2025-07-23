
import React from 'react';
import { TelegramIcon } from './icons/TelegramIcon';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="container mx-auto text-center max-w-3xl">
         <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Готовы привлечь новых читателей?
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
          Нажмите на кнопку ниже, чтобы обсудить детали и запустить продвижение вашей книги уже сегодня. Наш менеджер ждет вас в Telegram.
        </p>
        <a
          href="https://t.me/litgorod_reklama_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#5368f5] hover:bg-opacity-90 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-xl shadow-[#5368f5]/25 transform hover:scale-105"
        >
          <TelegramIcon className="w-6 h-6" />
          Заказать продвижение в Telegram
        </a>
      </div>
    </section>
  );
};