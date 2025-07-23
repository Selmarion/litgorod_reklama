import React from 'react';
import { LibraryIcon } from './icons/LibraryIcon';
import { TrendingUpIcon } from './icons/TrendingUpIcon';
import { UsersIcon } from './icons/UsersIcon';

export const WhyItWorks: React.FC = () => {
  const features = [
    {
      icon: <LibraryIcon className="w-6 h-6" />,
      title: "Рост добавлений",
      description: "Платформа видит интерес и продвигает книгу.",
    },
    {
      icon: <TrendingUpIcon className="w-6 h-6" />,
      title: "Эффект снежного кома",
      description: "Больше показов приводит к росту читателей.",
    },
    {
      icon: <UsersIcon className="w-6 h-6" />,
      title: "Целевая аудитория",
      description: "Продвижение среди читателей вашего жанра.",
    },
  ];

  return (
    <section id="why" className="py-12 px-6">
      <div className="container mx-auto">
        <div className="bg-[#2d2e33]/60 rounded-2xl border border-[#404147] max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#404147]/70">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 p-6">
                <div className="flex-shrink-0 h-11 w-11 flex items-center justify-center rounded-lg bg-[#5368f5]/10 text-[#5368f5]">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-tight">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};