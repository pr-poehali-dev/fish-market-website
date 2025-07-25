import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Лосось премиум",
      price: "2,500 ₽/кг",
      description: "Свежий норвежский лосось высшего качества",
      image: "/img/f28332d0-69d8-4065-b19c-85d8eed14d74.jpg",
      badge: "Хит продаж",
      origin: {
        country: "Норвегия",
        region: "Фьорды Западной Норвегии",
        type: "Выращен на ферме",
        producer: "Atlantic Salmon AS",
        catchDate: "15.01.2024",
        method: "Экологичное разведение в морских садках"
      },
      certificates: [
        {
          name: "MSC Сертификат устойчивого рыболовства",
          number: "MSC-C-12345",
          validUntil: "15.01.2025",
          issuer: "Marine Stewardship Council"
        },
        {
          name: "ГОСТ 32366-2013",
          number: "RU.АЛ01.НТ3424",
          validUntil: "31.12.2024",
          issuer: "Росстандарт"
        },
        {
          name: "GlobalGAP Aquaculture",
          number: "GGN-4049928626263",
          validUntil: "20.05.2025",
          issuer: "GlobalGAP c.i.c."
        }
      ]
    },
    {
      id: 2,
      name: "Креветки королевские",
      price: "3,200 ₽/кг",
      description: "Крупные тигровые креветки из Таиланда",
      image: "/img/36274f73-abb4-4e03-92a2-72b048d17f43.jpg",
      badge: "Новинка",
      origin: {
        country: "Таиланд",
        region: "Провинция Сураттани",
        type: "Выращены на ферме",
        producer: "Thai Union Frozen Products PCL",
        catchDate: "10.01.2024",
        method: "Устойчивая аквакультура"
      },
      certificates: [
        {
          name: "ASC Aquaculture Stewardship Council",
          number: "ASC-C-00789",
          validUntil: "10.07.2025",
          issuer: "Aquaculture Stewardship Council"
        },
        {
          name: "BAP Best Aquaculture Practices",
          number: "BAP-12457",
          validUntil: "15.03.2025",
          issuer: "Global Aquaculture Alliance"
        }
      ]
    },
    {
      id: 3,
      name: "Мидии черноморские",
      price: "890 ₽/кг",
      description: "Свежие мидии, выловленные у берегов Крыма",
      image: "/img/36274f73-abb4-4e03-92a2-72b048d17f43.jpg",
      badge: "Акция",
      origin: {
        country: "Россия",
        region: "Республика Крым, Керченский пролив",
        type: "Выловлены в естественной среде",
        producer: "ООО 'Крымские морепродукты'",
        catchDate: "18.01.2024",
        method: "Донное траление, экологически чистые воды"
      },
      certificates: [
        {
          name: "Декларация соответствия ТР ТС 021/2011",
          number: "ТС RU Д-RU.РА01.В.49234",
          validUntil: "18.07.2025",
          issuer: "Росаккредитация"
        },
        {
          name: "Ветеринарное свидетельство",
          number: "77-123-456789",
          validUntil: "28.01.2024",
          issuer: "Россельхознадзор"
        }
      ]
    }
  ];

  const features = [
    {
      icon: "Thermometer",
      title: "Контроль температуры",
      description: "Поддержание холодовой цепи от -2°C до +4°C"
    },
    {
      icon: "Clock",
      title: "Срок годности",
      description: "Автоматический мониторинг сроков хранения"
    },
    {
      icon: "Truck",
      title: "Быстрая доставка",
      description: "Доставка в течение 2-4 часов по городу"
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "100% гарантия свежести или возврат денег"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-ocean-foam to-white">
      {/* Навигация */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-ocean-blue/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Fish" size={32} className="text-ocean-blue" />
              <h1 className="text-2xl font-bold text-ocean-deep">АкваМаркет</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#catalog" className="text-ocean-deep hover:text-ocean-blue transition-colors">Каталог</a>
              <a href="#delivery" className="text-ocean-deep hover:text-ocean-blue transition-colors">Доставка</a>
              <a href="#about" className="text-ocean-deep hover:text-ocean-blue transition-colors">О нас</a>
              <a href="#contact" className="text-ocean-deep hover:text-ocean-blue transition-colors">Контакты</a>
              <Button className="bg-ocean-blue hover:bg-ocean text-white">
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Корзина
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Герой секция */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('/img/a9a41a06-18a8-4330-a7b3-f6d5006250a6.jpg')" }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-ocean-deep mb-6 animate-float">
              Свежие морепродукты
              <span className="block text-ocean-blue">прямо к вашему столу</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Премиальные рыба и морепродукты с гарантией свежести. 
              Контроль температуры и сроков годности на каждом этапе доставки.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-ocean-blue hover:bg-ocean text-white px-8 py-4">
                <Icon name="Fish" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white px-8 py-4">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Каталог товаров */}
      <section id="catalog" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-ocean-deep mb-4">Популярные товары</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Самые свежие и качественные морепродукты, отобранные нашими экспертами
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow animate-wave">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-ocean-blue text-white">
                    {product.badge}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-ocean-deep">{product.name}</CardTitle>
                    <span className="text-2xl font-bold text-ocean-blue">{product.price}</span>
                  </div>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Icon name="MapPin" size={14} className="text-ocean-blue" />
                      <span className="text-sm text-gray-600">{product.origin.country}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Award" size={14} className="text-green-600" />
                      <span className="text-sm text-green-600">{product.certificates.length} сертификата</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-ocean-blue hover:bg-ocean text-white">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      В корзину
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white">
                          <Icon name="FileText" size={16} />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-ocean-deep">{product.name} - Сертификаты качества</DialogTitle>
                          <DialogDescription>Подробная информация о происхождении и сертификации продукта</DialogDescription>
                        </DialogHeader>
                        
                        <div className="space-y-6">
                          {/* Информация о происхождении */}
                          <div>
                            <h4 className="font-semibold text-ocean-deep mb-3 flex items-center">
                              <Icon name="Globe" size={20} className="mr-2 text-ocean-blue" />
                              Происхождение продукта
                            </h4>
                            <div className="bg-ocean-foam p-4 rounded-lg space-y-2">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <span className="font-medium text-gray-700">Страна:</span>
                                  <p className="text-gray-600">{product.origin.country}</p>
                                </div>
                                <div>
                                  <span className="font-medium text-gray-700">Регион:</span>
                                  <p className="text-gray-600">{product.origin.region}</p>
                                </div>
                                <div>
                                  <span className="font-medium text-gray-700">Тип производства:</span>
                                  <p className="text-gray-600">{product.origin.type}</p>
                                </div>
                                <div>
                                  <span className="font-medium text-gray-700">Производитель:</span>
                                  <p className="text-gray-600">{product.origin.producer}</p>
                                </div>
                                <div>
                                  <span className="font-medium text-gray-700">Дата вылова/сбора:</span>
                                  <p className="text-gray-600">{product.origin.catchDate}</p>
                                </div>
                                <div>
                                  <span className="font-medium text-gray-700">Метод:</span>
                                  <p className="text-gray-600">{product.origin.method}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <Separator />
                          
                          {/* Сертификаты */}
                          <div>
                            <h4 className="font-semibold text-ocean-deep mb-3 flex items-center">
                              <Icon name="Award" size={20} className="mr-2 text-green-600" />
                              Сертификаты качества
                            </h4>
                            <div className="space-y-4">
                              {product.certificates.map((cert, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                  <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                      <h5 className="font-medium text-ocean-deep mb-1">{cert.name}</h5>
                                      <div className="text-sm text-gray-600 space-y-1">
                                        <p><span className="font-medium">Номер:</span> {cert.number}</p>
                                        <p><span className="font-medium">Действителен до:</span> {cert.validUntil}</p>
                                        <p><span className="font-medium">Выдан:</span> {cert.issuer}</p>
                                      </div>
                                    </div>
                                    <div className="ml-4">
                                      <Badge variant="outline" className="text-green-600 border-green-600">
                                        <Icon name="CheckCircle" size={14} className="mr-1" />
                                        Действителен
                                      </Badge>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Изображение сертификата */}
                          <div>
                            <h4 className="font-semibold text-ocean-deep mb-3 flex items-center">
                              <Icon name="Image" size={20} className="mr-2 text-ocean-blue" />
                              Образец сертификата
                            </h4>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                              <img 
                                src="/img/681334ec-a9ca-49f4-9b29-251fcee0e33b.jpg" 
                                alt="Сертификат качества" 
                                className="w-full max-w-md mx-auto rounded-lg shadow-md"
                              />
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Сертификация и гарантии */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-ocean-deep mb-4">Сертификация и гарантии качества</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Все наши продукты имеют международные сертификаты качества и полную прозрачность происхождения
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-ocean-deep mb-2">MSC сертификация</h4>
              <p className="text-gray-600 text-sm">Устойчивое рыболовство, подтвержденное международными стандартами</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Globe" size={32} className="text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-ocean-deep mb-2">GlobalGAP</h4>
              <p className="text-gray-600 text-sm">Безопасность пищевых продуктов и устойчивое производство</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" size={32} className="text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-ocean-deep mb-2">ГОСТ качества</h4>
              <p className="text-gray-600 text-sm">Соответствие российским стандартам качества и безопасности</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="FileText" size={32} className="text-orange-600" />
              </div>
              <h4 className="text-lg font-semibold text-ocean-deep mb-2">Ветеринарные документы</h4>
              <p className="text-gray-600 text-sm">Полный пакет ветеринарных свидетельств на каждую партию</p>
            </Card>
          </div>
          
          <div className="bg-gradient-to-r from-ocean-foam to-white rounded-2xl p-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-ocean-deep mb-4">Прозрачность происхождения</h4>
                <p className="text-gray-600">Для каждого продукта мы предоставляем полную информацию о его происхождении</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-ocean-blue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="MapPin" size={32} className="text-ocean-blue" />
                  </div>
                  <h5 className="font-semibold text-ocean-deep mb-2">Место происхождения</h5>
                  <p className="text-gray-600 text-sm">Точная информация о стране, регионе и производителе каждого продукта</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-ocean-blue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Calendar" size={32} className="text-ocean-blue" />
                  </div>
                  <h5 className="font-semibold text-ocean-deep mb-2">Дата вылова/сбора</h5>
                  <p className="text-gray-600 text-sm">Точные даты добычи для контроля свежести и качества продукции</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-ocean-blue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Leaf" size={32} className="text-ocean-blue" />
                  </div>
                  <h5 className="font-semibold text-ocean-deep mb-2">Метод производства</h5>
                  <p className="text-gray-600 text-sm">Детальная информация о том, выловлен продукт в дикой природе или выращен на ферме</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Особенности доставки */}
      <section id="delivery" className="py-16 bg-ocean-foam">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-ocean-deep mb-4">Система контроля качества</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Уникальная система доставки с мониторингом температуры и сроков годности
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="bg-ocean-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon} size={32} className="text-ocean-blue" />
                </div>
                <h4 className="text-xl font-semibold text-ocean-deep mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Акции */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-ocean-blue to-ocean rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">🔥 Скидка 20% на первый заказ!</h3>
            <p className="text-xl mb-6 opacity-90">
              Используйте промокод FRESH20 при оформлении заказа
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-ocean-blue hover:bg-gray-100">
              <Icon name="Gift" size={20} className="mr-2" />
              Воспользоваться акцией
            </Button>
          </div>
        </div>
      </section>

      {/* О нас */}
      <section id="about" className="py-16 bg-ocean-foam">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-ocean-deep mb-6">О компании АкваМаркет</h3>
                <p className="text-gray-600 mb-4">
                  Мы специализируемся на поставке премиальных морепродуктов уже более 10 лет. 
                  Наша команда экспертов отбирает только лучшие продукты от проверенных поставщиков.
                </p>
                <p className="text-gray-600 mb-6">
                  Уникальная система контроля температуры и сроков годности гарантирует, 
                  что к вам на стол попадут только самые свежие морепродукты.
                </p>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-ocean-blue">10+</div>
                    <div className="text-sm text-gray-600">лет на рынке</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-ocean-blue">5000+</div>
                    <div className="text-sm text-gray-600">довольных клиентов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-ocean-blue">100%</div>
                    <div className="text-sm text-gray-600">гарантия качества</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/img/36274f73-abb4-4e03-92a2-72b048d17f43.jpg"
                  alt="О нас"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-ocean-deep mb-4">Свяжитесь с нами</h3>
            <p className="text-gray-600">Мы всегда готовы помочь вам с выбором морепродуктов</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6">
              <Icon name="Phone" size={32} className="text-ocean-blue mx-auto mb-4" />
              <h4 className="font-semibold text-ocean-deep mb-2">Телефон</h4>
              <p className="text-gray-600">+7 (495) 123-45-67</p>
            </Card>
            
            <Card className="text-center p-6">
              <Icon name="Mail" size={32} className="text-ocean-blue mx-auto mb-4" />
              <h4 className="font-semibold text-ocean-deep mb-2">Email</h4>
              <p className="text-gray-600">info@akvamarket.ru</p>
            </Card>
            
            <Card className="text-center p-6">
              <Icon name="MapPin" size={32} className="text-ocean-blue mx-auto mb-4" />
              <h4 className="font-semibold text-ocean-deep mb-2">Адрес</h4>
              <p className="text-gray-600">Москва, ул. Морская, 15</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-ocean-deep text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Fish" size={28} className="text-ocean-blue" />
                <h4 className="text-xl font-bold">АкваМаркет</h4>
              </div>
              <p className="text-gray-300">
                Премиальные морепродукты с доставкой по всей России
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Каталог</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-ocean-blue transition-colors">Рыба</a></li>
                <li><a href="#" className="hover:text-ocean-blue transition-colors">Креветки</a></li>
                <li><a href="#" className="hover:text-ocean-blue transition-colors">Мидии</a></li>
                <li><a href="#" className="hover:text-ocean-blue transition-colors">Икра</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Информация</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-ocean-blue transition-colors">О доставке</a></li>
                <li><a href="#" className="hover:text-ocean-blue transition-colors">Оплата</a></li>
                <li><a href="#" className="hover:text-ocean-blue transition-colors">Возврат</a></li>
                <li><a href="#" className="hover:text-ocean-blue transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Социальные сети</h5>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-gray-300 hover:text-ocean-blue">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-300 hover:text-ocean-blue">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-300 hover:text-ocean-blue">
                  <Icon name="Mail" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 АкваМаркет. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;