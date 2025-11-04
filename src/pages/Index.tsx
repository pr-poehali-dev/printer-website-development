import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
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
              <Link to="/" className="text-primary font-medium">Главная</Link>
              <Link to="/classification" className="hover:text-primary transition-colors">Классификация</Link>
              <Link to="/structure" className="hover:text-primary transition-colors">Строение</Link>
              <Link to="/history" className="hover:text-primary transition-colors">История</Link>
              <Link to="/technologies" className="hover:text-primary transition-colors">Технологии</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Принтеры: строение и классификация</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Образовательный справочник о технологиях печати, истории развития 
            и внутреннем устройстве современных принтеров
          </p>
        </div>

        <div className="mb-12">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Введение</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong>Принтер</strong> (от англ. <em>printer</em> — печатник) — периферийное устройство 
                компьютера, предназначенное для переноса текста или графики на физический носитель, 
                обычно бумагу или прозрачную плёнку.
              </p>
              <p>
                Современные принтеры делятся на несколько категорий в зависимости от технологии печати, 
                каждая из которых имеет свои преимущества и области применения. Понимание принципов работы 
                и конструкции принтеров важно как для специалистов в области информационных технологий, 
                так и для обычных пользователей.
              </p>
              <div className="bg-background/50 p-4 rounded-lg mt-4">
                <h3 className="font-semibold mb-2">Основные характеристики принтеров:</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Разрешение печати (измеряется в dpi — точек на дюйм)</li>
                  <li>Скорость печати (страниц в минуту)</li>
                  <li>Тип используемых расходных материалов</li>
                  <li>Формат печати (A4, A3 и другие)</li>
                  <li>Цветность (монохромные или цветные)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Разделы справочника</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/classification" className="group">
              <Card className="h-full hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <Icon name="LayoutGrid" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        Классификация принтеров
                      </CardTitle>
                      <CardDescription className="mt-2">
                        Виды принтеров по технологии печати, назначению и характеристикам
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Струйные принтеры</li>
                    <li>• Лазерные принтеры</li>
                    <li>• Матричные принтеры</li>
                    <li>• Сравнительные таблицы</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            <Link to="/structure" className="group">
              <Card className="h-full hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <Icon name="Settings" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        Строение и устройство
                      </CardTitle>
                      <CardDescription className="mt-2">
                        Внутренние компоненты и принципы работы печатающих устройств
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Система подачи бумаги</li>
                    <li>• Печатающая головка</li>
                    <li>• Блок управления</li>
                    <li>• Схемы и диаграммы</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            <Link to="/history" className="group">
              <Card className="h-full hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <Icon name="Calendar" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        История развития
                      </CardTitle>
                      <CardDescription className="mt-2">
                        Эволюция печатающих устройств от станка Гутенберга до наших дней
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Ключевые изобретения</li>
                    <li>• Временная шкала</li>
                    <li>• Важные этапы развития</li>
                    <li>• Хронология технологий</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            <Link to="/technologies" className="group">
              <Card className="h-full hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <Icon name="Zap" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        Технологии печати
                      </CardTitle>
                      <CardDescription className="mt-2">
                        Физические и химические процессы различных методов печати
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Лазерная технология</li>
                    <li>• Струйная печать</li>
                    <li>• Термосублимация</li>
                    <li>• Сравнение технологий</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        <Card className="bg-muted/30">
          <CardHeader>
            <CardTitle className="text-2xl">Дополнительная информация</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Навигация по сайту</h3>
              <p className="text-muted-foreground mb-3">
                Используйте верхнее меню для перехода между разделами. Каждая страница содержит 
                ссылки на смежные темы для удобной навигации.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Цель справочника</h3>
              <p className="text-muted-foreground">
                Данный образовательный ресурс создан для изучения устройства, классификации 
                и технологий работы печатающих устройств. Материалы подходят как для студентов 
                технических специальностей, так и для всех интересующихся современными 
                информационными технологиями.
              </p>
            </div>

            <div className="border-t pt-4 mt-4">
              <h3 className="text-lg font-semibold mb-2">Полезные ссылки</h3>
              <div className="space-y-2">
                <a 
                  href="https://ru.wikipedia.org/wiki/Принтер" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1 block"
                >
                  Принтер — Википедия
                  <Icon name="ExternalLink" size={14} />
                </a>
                <a 
                  href="https://ru.wikipedia.org/wiki/История_печати" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1 block"
                >
                  История печати — Википедия
                  <Icon name="ExternalLink" size={14} />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <div className="inline-flex gap-4">
            <Link 
              to="/classification" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Начать изучение
              <Icon name="ArrowRight" size={18} />
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t mt-16 py-8 bg-muted/30">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>© 2024 Образовательный справочник по принтерам. Все права защищены.</p>
          <p className="mt-2">
            Материалы предназначены для образовательных целей
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
