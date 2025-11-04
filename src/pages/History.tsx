import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

const History = () => {
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
              <Link to="/structure" className="hover:text-primary transition-colors">Строение</Link>
              <Link to="/history" className="text-primary font-medium">История</Link>
              <Link to="/technologies" className="hover:text-primary transition-colors">Технологии</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">История развития принтеров</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            От механических устройств XIX века до современных высокотехнологичных систем — 
            путь эволюции печатающих устройств.
          </p>
        </div>

        <Card className="p-8 mb-8">
          <img 
            src="https://cdn.poehali.dev/projects/dcc8d39c-8e69-4748-9115-e40b226739a6/files/3d704e98-e89f-4a99-bebc-7877c602d35f.jpg"
            alt="Эволюция печатающих устройств"
            className="w-full rounded-lg mb-6"
          />
          <p className="text-sm text-muted-foreground text-center mb-6">
            Рис. 1. Эволюция технологий печати
          </p>
        </Card>

        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Хронология развития</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">1440-е годы</h3>
              <h4 className="text-lg font-medium mb-2">Печатный станок Гутенберга</h4>
              <p className="text-muted-foreground">
                Иоганн Гутенберг изобрёл первый печатный станок с подвижными литерами. 
                Это революционизировало распространение информации и заложило основы 
                будущих технологий печати.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">1938 год</h3>
              <h4 className="text-lg font-medium mb-2">Изобретение ксерографии</h4>
              <p className="text-muted-foreground">
                Честер Карлсон изобрёл процесс электрофотографии (ксерографии), 
                ставший основой для лазерной печати. Первый копировальный аппарат 
                Xerox появился в 1959 году.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">1953 год</h3>
              <h4 className="text-lg font-medium mb-2">Первый высокоскоростной принтер</h4>
              <p className="text-muted-foreground">
                Remington Rand представила UNIVAC High Speed Printer — первый принтер 
                для компьютеров, печатавший со скоростью 600 строк в минуту.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">1964 год</h3>
              <h4 className="text-lg font-medium mb-2">Матричные принтеры</h4>
              <p className="text-muted-foreground">
                Компания Seiko Epson выпустила EP-101 — первый электронный принтер 
                с печатающей головкой на основе точечной матрицы.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">1969 год</h3>
              <h4 className="text-lg font-medium mb-2">Первый лазерный принтер</h4>
              <p className="text-muted-foreground">
                Гари Старквезер из Xerox создал прототип лазерного принтера, 
                модифицировав копировальный аппарат. Коммерческая модель Xerox 9700 
                появилась в 1977 году.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">1976 год</h3>
              <h4 className="text-lg font-medium mb-2">Струйная печать</h4>
              <p className="text-muted-foreground">
                IBM представила первый коммерческий струйный принтер IBM 6640. 
                Технология непрерывной струйной печати использовалась для промышленных целей.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">1984 год</h3>
              <h4 className="text-lg font-medium mb-2">Революция HP LaserJet</h4>
              <p className="text-muted-foreground">
                HP выпустила LaserJet — первый доступный настольный лазерный принтер 
                стоимостью $3500. Это сделало лазерную печать доступной для малого бизнеса.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">1988 год</h3>
              <h4 className="text-lg font-medium mb-2">Цветная струйная печать</h4>
              <p className="text-muted-foreground">
                HP DeskJet стал первым массовым цветным струйным принтером для дома 
                по доступной цене. Начало эры домашней цветной печати.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">2000-е годы</h3>
              <h4 className="text-lg font-medium mb-2">Многофункциональные устройства</h4>
              <p className="text-muted-foreground">
                Массовое распространение МФУ (принтер + сканер + копир) и фотопринтеров. 
                Появление беспроводной печати через Wi-Fi.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">2010-е годы</h3>
              <h4 className="text-lg font-medium mb-2">Облачная и мобильная печать</h4>
              <p className="text-muted-foreground">
                Развитие облачных сервисов печати (Google Cloud Print, Apple AirPrint). 
                Печать напрямую со смартфонов и планшетов становится стандартом.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">2020-е годы</h3>
              <h4 className="text-lg font-medium mb-2">Умные принтеры и экопечать</h4>
              <p className="text-muted-foreground">
                Принтеры с искусственным интеллектом, автоматическим заказом расходников, 
                технологии экономии тонера и чернил. Фокус на экологичность и снижение 
                отходов.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Ключевые вехи в цифрах</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-3 text-left font-semibold">Год</th>
                <th className="border border-border p-3 text-left font-semibold">Событие</th>
                <th className="border border-border p-3 text-left font-semibold">Скорость печати</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-3">1953</td>
                <td className="border border-border p-3">UNIVAC High Speed Printer</td>
                <td className="border border-border p-3">600 строк/мин</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="border border-border p-3">1964</td>
                <td className="border border-border p-3">Матричный Epson EP-101</td>
                <td className="border border-border p-3">80 символов/сек</td>
              </tr>
              <tr>
                <td className="border border-border p-3">1977</td>
                <td className="border border-border p-3">Лазерный Xerox 9700</td>
                <td className="border border-border p-3">120 стр/мин</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="border border-border p-3">1984</td>
                <td className="border border-border p-3">HP LaserJet</td>
                <td className="border border-border p-3">8 стр/мин</td>
              </tr>
              <tr>
                <td className="border border-border p-3">1988</td>
                <td className="border border-border p-3">HP DeskJet (цветной)</td>
                <td className="border border-border p-3">2 стр/мин</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="border border-border p-3">2024</td>
                <td className="border border-border p-3">Современные лазерные</td>
                <td className="border border-border p-3">70+ стр/мин</td>
              </tr>
            </tbody>
          </table>
        </Card>

        <Card className="p-8">
          <h2 className="text-2xl font-semibold mb-4">Дополнительные материалы</h2>
          <div className="space-y-3">
            <p className="text-muted-foreground">
              Для более глубокого изучения истории печатающих устройств рекомендуем:
            </p>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://ru.wikipedia.org/wiki/История_печати" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  История печати на Википедии
                  <Icon name="ExternalLink" size={14} />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.computerhistory.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Computer History Museum (англ.)
                  <Icon name="ExternalLink" size={14} />
                </a>
              </li>
            </ul>
          </div>
        </Card>

        <div className="mt-8 flex gap-4">
          <Link to="/structure" className="text-primary hover:underline flex items-center gap-1">
            <Icon name="ArrowLeft" size={16} />
            Строение и устройство
          </Link>
          <Link to="/technologies" className="text-primary hover:underline flex items-center gap-1">
            Технологии печати
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

export default History;
