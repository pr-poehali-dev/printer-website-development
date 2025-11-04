import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

const Structure = () => {
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
              <Link to="/classification" className="hover:text-primary transition-colors">Классификация</Link>
              <Link to="/structure" className="text-primary font-medium">Строение</Link>
              <Link to="/history" className="hover:text-primary transition-colors">История</Link>
              <Link to="/technologies" className="hover:text-primary transition-colors">Технологии</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Строение и устройство принтера</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Несмотря на разнообразие технологий, все принтеры имеют общие конструктивные элементы 
            и работают по схожим принципам.
          </p>
        </div>

        <Card className="p-8 mb-8">
          <img 
            src="https://cdn.poehali.dev/projects/dcc8d39c-8e69-4748-9115-e40b226739a6/files/206ce5fc-1d8c-4d59-ab09-82e23553e78b.jpg"
            alt="Внутреннее устройство принтера"
            className="w-full rounded-lg mb-6"
          />
          <p className="text-sm text-muted-foreground text-center mb-6">
            Рис. 1. Схема внутреннего устройства принтера
          </p>

          <h2 className="text-2xl font-semibold mb-4">Основные компоненты</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2">1. Система подачи бумаги</h3>
              <p className="text-muted-foreground mb-2">
                Обеспечивает захват и продвижение листа через устройство.
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-muted-foreground">
                <li>Лоток для бумаги (входной)</li>
                <li>Ролики захвата</li>
                <li>Транспортные ролики</li>
                <li>Выходной лоток</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">2. Печатающая головка / Картридж</h3>
              <p className="text-muted-foreground mb-2">
                Основной рабочий элемент, наносящий изображение на бумагу.
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-muted-foreground">
                <li>В струйных: сопла для распыления чернил</li>
                <li>В лазерных: фотобарабан и тонер-картридж</li>
                <li>В матричных: игольчатая головка</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">3. Блок управления</h3>
              <p className="text-muted-foreground mb-2">
                Координирует работу всех систем принтера.
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-muted-foreground">
                <li>Процессор</li>
                <li>Оперативная память (RAM)</li>
                <li>Постоянная память (ROM) с прошивкой</li>
                <li>Контроллеры двигателей</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">4. Интерфейс подключения</h3>
              <ul className="list-disc list-inside space-y-1 ml-4 text-muted-foreground">
                <li>USB (Universal Serial Bus)</li>
                <li>Ethernet (сетевое подключение)</li>
                <li>Wi-Fi (беспроводное подключение)</li>
                <li>Bluetooth</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Детальное устройство лазерного принтера</h2>
          <div className="space-y-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left font-semibold w-1/4">Компонент</th>
                  <th className="border border-border p-3 text-left font-semibold">Функция</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3 font-medium">Лазер</td>
                  <td className="border border-border p-3">Создаёт изображение на фотобарабане путём изменения заряда поверхности</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border border-border p-3 font-medium">Фотобарабан</td>
                  <td className="border border-border p-3">Светочувствительный цилиндр, переносящий тонер на бумагу</td>
                </tr>
                <tr>
                  <td className="border border-border p-3 font-medium">Тонер-картридж</td>
                  <td className="border border-border p-3">Содержит порошкообразный краситель (тонер)</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border border-border p-3 font-medium">Печка (термоблок)</td>
                  <td className="border border-border p-3">Нагревает и запекает тонер на бумаге при температуре 180-220°C</td>
                </tr>
                <tr>
                  <td className="border border-border p-3 font-medium">Ракель</td>
                  <td className="border border-border p-3">Очищает фотобарабан от остатков тонера</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border border-border p-3 font-medium">Коротрон переноса</td>
                  <td className="border border-border p-3">Электростатически переносит тонер с барабана на бумагу</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Детальное устройство струйного принтера</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-3">Печатающая головка</h3>
              <p className="text-muted-foreground mb-3">
                Ключевой элемент струйного принтера, содержащий микроскопические сопла для распыления чернил.
              </p>
              <div className="bg-muted/30 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Характеристики сопел:</h4>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• Диаметр: 20-50 микрон</li>
                  <li>• Количество: от 300 до 3000 штук</li>
                  <li>• Частота выброса: до 50 000 капель в секунду</li>
                  <li>• Объём капли: 1-3 пиколитра</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3">Система подачи чернил</h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Картриджи с чернилами (обычно 4 цвета: CMYK)</li>
                <li>Трубки подачи чернил</li>
                <li>Система капиллярного питания</li>
                <li>СНПЧ (система непрерывной подачи чернил) — в некоторых моделях</li>
              </ol>
            </div>
          </div>
        </Card>

        <Card className="p-8">
          <h2 className="text-2xl font-semibold mb-4">Дополнительная информация</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-2">Полезные ссылки:</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://ru.wikipedia.org/wiki/Принтер" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Википедия: Принтер
                    <Icon name="ExternalLink" size={14} />
                  </a>
                </li>
                <li>
                  <a 
                    href="#top" 
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Вернуться к началу страницы
                    <Icon name="ArrowUp" size={14} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        <div className="mt-8 flex gap-4">
          <Link to="/classification" className="text-primary hover:underline flex items-center gap-1">
            <Icon name="ArrowLeft" size={16} />
            Классификация принтеров
          </Link>
          <Link to="/history" className="text-primary hover:underline flex items-center gap-1">
            История развития
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

export default Structure;
