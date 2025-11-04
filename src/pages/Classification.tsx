import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

const Classification = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-white sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 text-xl font-semibold">
              <Icon name="Printer" size={24} />
              Принтеры
            </Link>
            <div className="flex gap-6 text-sm">
              <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
              <Link to="/classification" className="text-primary font-medium">Классификация</Link>
              <Link to="/structure" className="hover:text-primary transition-colors">Строение</Link>
              <Link to="/history" className="hover:text-primary transition-colors">История</Link>
              <Link to="/technologies" className="hover:text-primary transition-colors">Технологии</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Классификация принтеров</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Современные принтеры классифицируются по различным критериям, включая технологию печати, 
            цветность, формат бумаги и область применения.
          </p>
        </div>

        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">По технологии печати</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-2">1. Струйные принтеры (Inkjet)</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li>Используют жидкие чернила</li>
                <li>Высокое качество печати фотографий</li>
                <li>Доступная цена устройства</li>
                <li>Типы печатающих головок:
                  <ul className="list-circle list-inside ml-6 mt-2">
                    <li>Термоструйные</li>
                    <li>Пьезоэлектрические</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">2. Лазерные принтеры (Laser)</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li>Используют тонер (порошок)</li>
                <li>Высокая скорость печати</li>
                <li>Низкая стоимость одной страницы</li>
                <li>Идеальны для офисной работы</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">3. Матричные принтеры (Dot Matrix)</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li>Ударная технология печати</li>
                <li>Возможность печати копий через копирку</li>
                <li>Низкое качество, но высокая надёжность</li>
                <li>Применение в складах и кассах</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">4. Термосублимационные принтеры</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li>Высочайшее качество цветопередачи</li>
                <li>Фотолабораторное качество</li>
                <li>Высокая стоимость печати</li>
                <li>Профессиональная фотопечать</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Сравнительная таблица характеристик</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left font-semibold">Тип принтера</th>
                  <th className="border border-border p-3 text-left font-semibold">Скорость (стр/мин)</th>
                  <th className="border border-border p-3 text-left font-semibold">Качество печати</th>
                  <th className="border border-border p-3 text-left font-semibold">Стоимость печати</th>
                  <th className="border border-border p-3 text-left font-semibold">Область применения</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">Струйный</td>
                  <td className="border border-border p-3">10-20</td>
                  <td className="border border-border p-3">Высокое</td>
                  <td className="border border-border p-3">Средняя</td>
                  <td className="border border-border p-3">Дом, фото</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border border-border p-3">Лазерный</td>
                  <td className="border border-border p-3">20-60</td>
                  <td className="border border-border p-3">Среднее</td>
                  <td className="border border-border p-3">Низкая</td>
                  <td className="border border-border p-3">Офис, документы</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">Матричный</td>
                  <td className="border border-border p-3">5-15</td>
                  <td className="border border-border p-3">Низкое</td>
                  <td className="border border-border p-3">Очень низкая</td>
                  <td className="border border-border p-3">Склады, кассы</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border border-border p-3">Термосублимационный</td>
                  <td className="border border-border p-3">1-5</td>
                  <td className="border border-border p-3">Очень высокое</td>
                  <td className="border border-border p-3">Высокая</td>
                  <td className="border border-border p-3">Фотолаборатории</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="p-8">
          <h2 className="text-2xl font-semibold mb-4">По дополнительным критериям</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-3">По цветности:</h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Чёрно-белые (монохромные)</li>
                <li>Цветные</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">По формату:</h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>A4 (стандартный офисный)</li>
                <li>A3 (широкоформатный)</li>
                <li>A2, A1, A0 (плоттеры)</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">По назначению:</h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Домашние</li>
                <li>Офисные</li>
                <li>Профессиональные</li>
                <li>Промышленные</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">По функциональности:</h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Принтеры</li>
                <li>МФУ (многофункциональные устройства)</li>
                <li>Плоттеры</li>
              </ol>
            </div>
          </div>
        </Card>

        <div className="mt-8 flex gap-4">
          <Link to="/" className="text-primary hover:underline flex items-center gap-1">
            <Icon name="ArrowLeft" size={16} />
            Вернуться на главную
          </Link>
          <Link to="/structure" className="text-primary hover:underline flex items-center gap-1">
            Строение и устройство
            <Icon name="ArrowRight" size={16} />
          </Link>
        </div>
      </main>

      <footer className="border-t mt-16 py-8 bg-muted/30">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>© 2024 Образовательный справочник по принтерам. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Classification;
