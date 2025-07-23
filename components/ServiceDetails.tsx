
import React from 'react';
import { CheckCircleIcon } from './icons/CheckCircleIcon';

export const ServiceDetails: React.FC = () => {
  const serviceIncludes = [
    "1500+ просмотров вашей книги",
    "200+ добавлений в личные библиотеки",
    "Глубина просмотра: 13 глав",
    "Время на сайте: более 3 минут",
    "Мобильный и десктопный трафик",
    "Трафик от реальных пользователей",
    "Источник трафика: переходы с сайтов",
    "Срок выполнения: 1 день (до 3х дней для больших заказов)",
  ];

  return (
    <section id="details" className="py-16 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-[#2d2e33] rounded-2xl border border-[#404147] overflow-hidden shadow-2xl shadow-black/30">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#f72f8e] to-[#f96b45]">
              Что вы получаете
            </h2>
            <p className="text-center text-gray-400 mb-10">Пакет «Работа с репутацией»</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {serviceIncludes.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-[#5368f5] flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};