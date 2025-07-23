
import React from 'react';
import { TelegramIcon } from './icons/TelegramIcon';

export const Hero: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#f72f8e] to-[#f96b45] mb-4 leading-tight">
          Продвижение книг на Литгород - лайки, добавление в библиотеку, подписка на автора, комментарии о книге. 
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6">
          Выведите вашу книгу в топ на Литгороде. Предлагаем услугу по продвижению вашей книги с акцентом на добавления в личные библиотеки. Это сигнал для платформы, что ваша книга интересна, и она начнёт чаще появляться в рекомендациях.
        </p>
        <a
          href="https://t.me/litgorod_reklama_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#5368f5] hover:bg-opacity-90 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-xl shadow-[#5368f5]/25 transform hover:scale-105"
        >
          <TelegramIcon className="w-6 h-6" />
          Связаться в Telegram
        </a>
        <p className="mt-4 text-sm text-gray-400">Скидки и специальные предложения в нашем боте!</p>
      </div>
    </section>
  );
};