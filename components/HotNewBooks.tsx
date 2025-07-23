import React from 'react';

interface Book {
  title: string;
  author: string;
  imageUrl: string;
  bookUrl: string;
  isGif?: boolean;
}

const books: Book[] = [
  {
    title: '👰Невеста на одну ночь. Черные драконы (не) женятся👰',
    author: 'Александра Самойлова',
    imageUrl: 'https://cdn.litgorod.ru/api/v1/images/covers/12c05ffd2c2323fd84967effe4feeb44.gif',
    bookUrl: 'https://litgorod.ru/books/view/50234',
    isGif: true,
  },
  {
    title: '💖 Пять ночей с драконом 💖',
    author: 'Ольга Герр',
    imageUrl: 'https://cdn.litgorod.ru/api/v1/images/covers/11cb565264ec58524b8ab189ddace535.jpg',
    bookUrl: 'https://litgorod.ru/books/view/50529',
  },
  {
    title: '✔Муж на сдачу, или Попаданка требует развода✔',
    author: 'Санна Сью',
    imageUrl: 'https://cdn.litgorod.ru/api/v1/images/covers/9fbe81d16cab7298d7d902e4d501154d.jpg',
    bookUrl: 'https://litgorod.ru/books/view/50423',
  },
  {
    title: 'Развод с генералом драконов, или Беглянка с секретом',
    author: 'Лана Ларсон',
    imageUrl: 'https://cdn.litgorod.ru/api/v1/images/covers/8392570780c3904c6a324895bb7c837b.jpg',
    bookUrl: 'https://litgorod.ru/books/view/50930',
  },
  {
    title: 'Драконий развод, или Списанная со счетов',
    author: 'София Руд.',
    imageUrl: 'https://cdn.litgorod.ru/api/v1/images/covers/249535b81fa62005b907aaaafc29743a.png',
    bookUrl: 'https://litgorod.ru/books/view/50128',
  },
  {
    title: 'Ненужная жена. Хозяйка сада пустоцветов',
    author: 'Алиса Князева',
    imageUrl: 'https://cdn.litgorod.ru/api/v1/images/covers/8fcb0265c7e3ea41c2fb421094dd3062.png',
    bookUrl: 'https://litgorod.ru/books/view/50431',
  },
    {
    title: 'Развод с Владыкой драконов. Сама себе хозяйка🍓',
    author: 'НИКА АСТРА',
    imageUrl: 'https://cdn.litgorod.ru/api/v1/images/covers/d74e25d7bb4675aec88a3e76da4bca44.gif',
    bookUrl: 'https://litgorod.ru/books/view/50989',
    isGif: true,
  },
  {
    title: 'Жестокий развод с драконом',
    author: 'Эйрена Космос',
    imageUrl: 'https://cdn.litgorod.ru/api/v1/images/covers/f1eb0dc9c932220b1fabca877adb6ae9.png',
    bookUrl: 'https://litgorod.ru/books/view/50616',
  },
];

const BookCard: React.FC<{ book: Book }> = ({ book }) => (
  <div className="flex-shrink-0 w-48 group">
    <a href={book.bookUrl} target="_blank" rel="noopener noreferrer" className="block">
      <div className="relative">
        <img
          src={`${book.imageUrl}?w=160&h=230&q=90`}
          alt={`Обложка книги ${book.title}`}
          width={160}
          height={230}
          className="w-full h-auto rounded-lg shadow-lg object-cover transition-transform duration-300 group-hover:scale-105"
          style={{aspectRatio: '160 / 230'}}
        />
         {book.isGif && (
            <div className="absolute top-2 right-2 bg-[#5368f5] text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">GIF</div>
         )}
      </div>
      <div className="mt-3">
        <h4 className="font-bold text-white text-sm truncate group-hover:text-[#5368f5] transition-colors" title={book.title}>
          {book.title}
        </h4>
        <p className="text-gray-400 text-xs truncate">{book.author}</p>
      </div>
    </a>
  </div>
);

export const HotNewBooks: React.FC = () => {
  return (
    <section id="hot-new" className="pt-0 pb-16 px-6">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Примеры продвигаемых книг</h2>
          <p className="text-lg text-gray-400">
            Мы работаем с разными жанрами, включая популярные "Горячие новинки Фэнтези" на ЛитГород.
          </p>
        </div>
        <div className="relative">
          <div className="flex gap-6 pb-4 -mx-6 px-6 overflow-x-auto custom-scrollbar">
            {books.map((book) => (
              <BookCard key={book.bookUrl} book={book} />
            ))}
             <div className="flex-shrink-0 w-6"></div> {/* Spacer */}
          </div>
           <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-[#222327] pointer-events-none"></div>
           <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-[#222327] pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};