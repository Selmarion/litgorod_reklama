
import React from 'react';
import { BriefcaseIcon } from './icons/BriefcaseIcon';
import { ChartBarIcon } from './icons/ChartBarIcon';
import { LightbulbIcon } from './icons/LightbulbIcon';

interface InvestorFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InvestorFeatureCard: React.FC<InvestorFeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-[#2d2e33]/80 p-6 rounded-xl border border-[#404147]">
    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#5368f5]/10 text-[#5368f5] mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export const ForInvestors: React.FC = () => {
  const features = [
    {
      icon: <ChartBarIcon className="w-6 h-6" />,
      title: "Растущий рынок",
      description: "Инвестируйте в быстрорастущий сектор самиздата и цифровой литературы с доказуемым спросом.",
    },
    {
      icon: <BriefcaseIcon className="w-6 h-6" />,
      title: "Прозрачная модель",
      description: "Четкая и понятная бизнес-модель, ориентированная на результат для авторов и прибыльность для инвесторов.",
    },
    {
      icon: <LightbulbIcon className="w-6 h-6" />,
      title: "Инновационный подход",
      description: "Мы используем уникальные методики продвижения, которые обеспечивают устойчивый органический рост.",
    },
  ];

  return (
    <section id="investors" className="py-16 px-6 bg-black/20">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Инвестируйте в будущее литературы</h2>
          <p className="text-lg text-gray-400">
            Наш проект предлагает уникальную возможность для инвестиций в масштабируемый и востребованный сервис на рынке электронных книг.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <InvestorFeatureCard key={index} {...feature} />
          ))}
        </div>
        <div className="text-center mt-12">
            <a
                href="mailto:invest@litgorod-promo.com?subject=Инвестиционное предложение"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#f72f8e] to-[#f96b45] hover:opacity-90 text-white font-bold py-3 px-6 rounded-lg text-base transition-all duration-300 shadow-lg shadow-[#f72f8e]/30 transform hover:scale-105"
            >
                Связаться для инвесторов
            </a>
        </div>
      </div>
    </section>
  );
};
