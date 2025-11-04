import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Technologies = () => {
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
              <Link to="/history" className="hover:text-primary transition-colors">История</Link>
              <Link to="/technologies" className="text-primary font-medium">Технологии</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Технологии печати</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Детальное рассмотрение физических и химических процессов, лежащих в основе 
            различных технологий печати.
          </p>
        </div>

        <Card className="p-8 mb-8">
          <img 
            src="https://cdn.poehali.dev/projects/dcc8d39c-8e69-4748-9115-e40b226739a6/files/e42e6fe6-58e2-467e-8ba8-106157e8f70f.jpg"
            alt="Технологии печати"
            className="w-full rounded-lg mb-6"
          />
          <p className="text-sm text-muted-foreground text-center mb-6">
            Рис. 1. Сравнение различных технологий печати
          </p>
        </Card>

        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Технологии в деталях</h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="laser">
              <AccordionTrigger className="text-xl font-medium">
                Технология лазерной печати
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <p className="text-muted-foreground">
                  Лазерная печать основана на принципе ксерографии и включает семь основных этапов:
                </p>
                
                <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                  <li className="font-medium">
                    Зарядка фотобарабана
                    <p className="ml-6 mt-1 font-normal">
                      Коротрон заряжает поверхность фотобарабана отрицательным зарядом (-600В)
                    </p>
                  </li>
                  <li className="font-medium">
                    Экспонирование
                    <p className="ml-6 mt-1 font-normal">
                      Лазерный луч создаёт изображение, снимая заряд в нужных местах
                    </p>
                  </li>
                  <li className="font-medium">
                    Проявление
                    <p className="ml-6 mt-1 font-normal">
                      Отрицательно заряженный тонер притягивается к незаряженным участкам барабана
                    </p>
                  </li>
                  <li className="font-medium">
                    Перенос
                    <p className="ml-6 mt-1 font-normal">
                      Положительный заряд на бумаге притягивает тонер с барабана
                    </p>
                  </li>
                  <li className="font-medium">
                    Закрепление
                    <p className="ml-6 mt-1 font-normal">
                      Печка нагревает бумагу до 180-220°C, запекая тонер
                    </p>
                  </li>
                  <li className="font-medium">
                    Очистка
                    <p className="ml-6 mt-1 font-normal">
                      Ракель удаляет остатки тонера с барабана
                    </p>
                  </li>
                  <li className="font-medium">
                    Разрядка
                    <p className="ml-6 mt-1 font-normal">
                      Лампа разрядки снимает остаточный заряд с барабана
                    </p>
                  </li>
                </ol>

                <div className="bg-muted/30 p-4 rounded-lg mt-4">
                  <h4 className="font-medium mb-2">Преимущества:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Высокая скорость печати (20-70 стр/мин)</li>
                    <li>Низкая стоимость страницы</li>
                    <li>Устойчивость к воде и выцветанию</li>
                    <li>Высокий ресурс картриджа (до 10 000 страниц)</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="inkjet">
              <AccordionTrigger className="text-xl font-medium">
                Технология струйной печати
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <p className="text-muted-foreground">
                  Существует два основных метода струйной печати:
                </p>

                <div>
                  <h4 className="text-lg font-medium mb-2">1. Термоструйная технология (HP, Canon)</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                    <li>Нагревательный элемент мгновенно нагревает чернила до 300-400°C</li>
                    <li>Образуется пузырёк пара, выталкивающий каплю чернил</li>
                    <li>Процесс занимает 2-5 микросекунд</li>
                    <li>Частота выброса: до 36 000 капель в секунду</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2">2. Пьезоэлектрическая технология (Epson)</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                    <li>Пьезокристалл изменяет форму под действием электрического тока</li>
                    <li>Деформация создаёт давление, выталкивающее каплю</li>
                    <li>Более точный контроль размера капли</li>
                    <li>Не требует нагрева чернил</li>
                  </ul>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg mt-4">
                  <h4 className="font-medium mb-2">Система CMYK:</h4>
                  <ul className="list-none space-y-1 text-sm text-muted-foreground">
                    <li>• <strong>C</strong>yan (голубой) — поглощает красный свет</li>
                    <li>• <strong>M</strong>agenta (пурпурный) — поглощает зелёный свет</li>
                    <li>• <strong>Y</strong>ellow (жёлтый) — поглощает синий свет</li>
                    <li>• <strong>K</strong>ey/blacK (чёрный) — для контраста и чёткости</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="matrix">
              <AccordionTrigger className="text-xl font-medium">
                Матричная печать
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <p className="text-muted-foreground">
                  Матричные принтеры используют механический принцип ударной печати:
                </p>

                <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                  <li>Печатающая головка содержит от 9 до 24 игл</li>
                  <li>Электромагнит приводит иглу в движение</li>
                  <li>Игла ударяет по красящей ленте</li>
                  <li>След от удара формирует точку на бумаге</li>
                  <li>Комбинация точек создаёт символы и изображения</li>
                </ul>

                <div className="bg-muted/30 p-4 rounded-lg mt-4">
                  <h4 className="font-medium mb-2">Особенности:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Возможность печати через копирку (до 5 копий)</li>
                    <li>Работа в сложных условиях (пыль, влажность)</li>
                    <li>Высокий уровень шума (до 70 дБ)</li>
                    <li>Низкое разрешение (72-360 dpi)</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="sublimation">
              <AccordionTrigger className="text-xl font-medium">
                Термосублимационная печать
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <p className="text-muted-foreground">
                  Основана на физическом процессе сублимации — прямом переходе вещества 
                  из твёрдого состояния в газообразное:
                </p>

                <ol className="list-decimal list-inside space-y-2 ml-4 text-muted-foreground">
                  <li>Нагревательные элементы нагревают цветную плёнку до 350-400°C</li>
                  <li>Краситель переходит в газообразное состояние</li>
                  <li>Газ проникает в специальное полимерное покрытие бумаги</li>
                  <li>При охлаждении краситель фиксируется в структуре бумаги</li>
                </ol>

                <div className="bg-muted/30 p-4 rounded-lg mt-4">
                  <h4 className="font-medium mb-2">Преимущества:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Фотографическое качество (разрешение до 300 dpi)</li>
                    <li>Плавные цветовые переходы (до 16.7 млн цветов)</li>
                    <li>Стойкость к УФ-излучению и воде</li>
                    <li>Срок службы отпечатка: 10-50 лет</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>

        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Сравнение технологий</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left font-semibold">Характеристика</th>
                  <th className="border border-border p-3 text-left font-semibold">Лазерная</th>
                  <th className="border border-border p-3 text-left font-semibold">Струйная</th>
                  <th className="border border-border p-3 text-left font-semibold">Матричная</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3 font-medium">Разрешение</td>
                  <td className="border border-border p-3">600-2400 dpi</td>
                  <td className="border border-border p-3">1200-9600 dpi</td>
                  <td className="border border-border p-3">72-360 dpi</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border border-border p-3 font-medium">Скорость</td>
                  <td className="border border-border p-3">20-70 стр/мин</td>
                  <td className="border border-border p-3">5-20 стр/мин</td>
                  <td className="border border-border p-3">5-15 стр/мин</td>
                </tr>
                <tr>
                  <td className="border border-border p-3 font-medium">Стоимость печати</td>
                  <td className="border border-border p-3">0.5-2 руб/стр</td>
                  <td className="border border-border p-3">2-5 руб/стр</td>
                  <td className="border border-border p-3">0.3-1 руб/стр</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border border-border p-3 font-medium">Качество фото</td>
                  <td className="border border-border p-3">Среднее</td>
                  <td className="border border-border p-3">Отличное</td>
                  <td className="border border-border p-3">Низкое</td>
                </tr>
                <tr>
                  <td className="border border-border p-3 font-medium">Время прогрева</td>
                  <td className="border border-border p-3">30-60 сек</td>
                  <td className="border border-border p-3">5-10 сек</td>
                  <td className="border border-border p-3">Нет</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border border-border p-3 font-medium">Уровень шума</td>
                  <td className="border border-border p-3">~50 дБ</td>
                  <td className="border border-border p-3">~45 дБ</td>
                  <td className="border border-border p-3">~70 дБ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="p-8">
          <h2 className="text-2xl font-semibold mb-4">Перспективные технологии</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-2">3D-печать</h3>
              <p className="text-muted-foreground">
                Послойное создание трёхмерных объектов из различных материалов. 
                Технологии: FDM, SLA, SLS, Binder Jetting.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Нанографическая печать</h3>
              <p className="text-muted-foreground">
                Разработка HP — сочетает преимущества офсетной и струйной печати. 
                Использует жидкие чернила на водной основе с частицами пигмента размером 
                менее 200 нанометров.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Биопечать</h3>
              <p className="text-muted-foreground">
                Печать живых клеток для создания биологических тканей и органов. 
                Перспективная область для медицины будущего.
              </p>
            </div>
          </div>
        </Card>

        <div className="mt-8 flex gap-4">
          <Link to="/history" className="text-primary hover:underline flex items-center gap-1">
            <Icon name="ArrowLeft" size={16} />
            История развития
          </Link>
          <Link to="/" className="text-primary hover:underline flex items-center gap-1">
            Вернуться на главную
            <Icon name="Home" size={16} />
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

export default Technologies;
