
import React from 'react';
import { LinkIcon } from './icons/LinkIcon';
import { CameraIcon } from './icons/CameraIcon';
import { RocketLaunchIcon } from './icons/RocketLaunchIcon';

interface StepProps {
    number: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const StepCard: React.FC<StepProps> = ({ number, title, description, icon }) => (
    <div className="relative pl-12">
        <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#5368f5] text-white font-bold">
            {number}
        </div>
        <div className="absolute left-4 top-8 h-full border-l-2 border-[#404147]"></div>
        <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
                {icon}
                <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>
            <p className="text-gray-400">{description}</p>
        </div>
    </div>
);

export const HowToOrder: React.FC = () => {
    return (
        <section id="order" className="py-16 px-6 bg-black/20">
            <div className="container mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Как начать?</h2>
                    <p className="text-lg text-gray-400">
                        Всего 2 простых шага для запуска продвижения.
                    </p>
                </div>
                <div className="max-w-md mx-auto">
                    <StepCard
                        number="1"
                        icon={<LinkIcon className="w-6 h-6 text-[#5368f5]"/>}
                        title="Ссылка на книгу"
                        description="Пришлите нам ссылку на вашу книгу на сайте Литгород."
                    />
                     <StepCard
                        number="2"
                        icon={<CameraIcon className="w-6 h-6 text-[#5368f5]"/>}
                        title="Скриншот оплаты заказа"
                        description="Вложите скриншот об оплате или PDF файл чек."
                    />
                     <div className="relative pl-12">
                        <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#5368f5] text-white">
                           <RocketLaunchIcon className="w-5 h-5"/>
                        </div>
                         <h3 className="text-xl font-bold text-white">Запуск!</h3>
                         <p className="text-gray-400">Мы начинаем работу, а вы наблюдаете за ростом показателей.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};