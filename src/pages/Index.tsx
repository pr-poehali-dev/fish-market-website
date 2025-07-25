import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Функция для расчета индикатора свежести
  const getFreshnessIndicator = (arrivalDate, shelfLife) => {
    const arrival = new Date(arrivalDate);
    const now = new Date();
    const expiry = new Date(arrival.getTime() + shelfLife * 24 * 60 * 60 * 1000);
    
    const totalDays = shelfLife;
    const daysLeft = Math.ceil((expiry - now) / (24 * 60 * 60 * 1000));
    const percentage = Math.max(0, (daysLeft / totalDays) * 100);
    
    if (percentage > 70) {
      return { status: 'excellent', color: 'green', text: 'Отличная', percentage };
    } else if (percentage > 40) {
      return { status: 'good', color: 'yellow', text: 'Хорошая', percentage };
    } else if (percentage > 15) {
      return { status: 'fair', color: 'orange', text: 'Удовлетворительная', percentage };
    } else {
      return { status: 'poor', color: 'red', text: 'Скидка - срок истекает', percentage };
    }
  };

  const products = [
    {
      id: 1,
      name: "Лосось премиум",
      price: "2,500 ₽/кг",
      description: "Свежий норвежский лосось высшего качества",
      image: "/img/f28332d0-69d8-4065-b19c-85d8eed14d74.jpg",
      badge: "Хит продаж",
      freshness: {
        arrivalDate: "20.01.2024",
        shelfLife: 7, // дней
        temperature: "-1°C",
        storageConditions: "Охлажденный в льду"
      },
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
      freshness: {
        arrivalDate: "22.01.2024",
        shelfLife: 5, // дней
        temperature: "-2°C",
        storageConditions: "Замороженные в шоковой заморозке"
      },
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
      freshness: {
        arrivalDate: "19.01.2024",
        shelfLife: 3, // дней
        temperature: "+2°C",
        storageConditions: "Живые в морской воде"
      },
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
    },
    {
      id: 4,
      name: "Морская капуста вакамэ",
      price: "1,850 ₽/кг",
      description: "Свежая морская капуста, богатая йодом и минералами",
      image: "/img/6d99cd2f-7da0-4365-8069-0bcc2a550fd2.jpg",
      badge: "Суперфуд",
      freshness: {
        arrivalDate: "21.01.2024",
        shelfLife: 10, // дней
        temperature: "+4°C",
        storageConditions: "В соленой воде, охлажденные"
      },
      origin: {
        country: "Япония",
        region: "Префектура Иватэ",
        type: "Выращены на морских фермах",
        producer: "Yamada Seaweed Co., Ltd",
        catchDate: "18.01.2024",
        method: "Устойчивое культивирование в чистых водах"
      },
      certificates: [
        {
          name: "JAS Organic сертификат",
          number: "JAS-ORG-23456",
          validUntil: "18.12.2024",
          issuer: "Japan Agricultural Standards"
        },
        {
          name: "Сертификат качества ТР ТС 021/2011",
          number: "ТС RU Д-RU.МЛ15.В.78945",
          validUntil: "15.10.2025",
          issuer: "Росаккредитация"
        }
      ]
    },
    {
      id: 5,
      name: "Ламинария сушеная",
      price: "2,400 ₽/кг",
      description: "Премиальная сушеная ламинария с высоким содержанием йода",
      image: "/img/c0fac590-0da2-4415-a89f-d828b1645e11.jpg",
      badge: "Эко",
      freshness: {
        arrivalDate: "20.01.2024",
        shelfLife: 730, // дней (2 года)
        temperature: "+18°C",
        storageConditions: "Сухое прохладное место"
      },
      origin: {
        country: "Россия",
        region: "Приморский край, залив Посьета",
        type: "Дикорастущая в очищенных водах",
        producer: "ООО 'Дальневосточные морепродукты'",
        catchDate: "15.01.2024",
        method: "Ручной сбор в экологически чистых районах"
      },
      certificates: [
        {
          name: "Экологический сертификат Лист Жизни",
          number: "ЛЖ-2024-789",
          validUntil: "31.03.2025",
          issuer: "НП Лист Жизни"
        },
        {
          name: "ГОСТ Р 57127-2016",
          number: "RU.ПРМ.05.НМ23",
          validUntil: "20.08.2025",
          issuer: "Росстандарт"
        }
      ]
    },
    {
      id: 6,
      name: "Нори премиум",
      price: "3,100 ₽/кг",
      description: "Красные водоросли нори высшего качества для суши",
      image: "/img/6d99cd2f-7da0-4365-8069-0bcc2a550fd2.jpg",
      badge: "Премиум",
      freshness: {
        arrivalDate: "23.01.2024",
        shelfLife: 365, // дней (1 год)
        temperature: "+20°C",
        storageConditions: "Сухое место, защищенное от света"
      },
      origin: {
        country: "Китай",
        region: "Провинция Фуцзянь",
        type: "Культивированные на морских фермах",
        producer: "Fujian Ocean Harvest Ltd",
        catchDate: "20.01.2024",
        method: "Органическое культивирование в открытом море"
      },
      certificates: [
        {
          name: "China Organic Product Certificate",
          number: "COP-2024-1456",
          validUntil: "20.01.2026",
          issuer: "China Organic Food Certification Center"
        },
        {
          name: "Декларация соответствия ТР ИМ 021/2011",
          number: "ИМ RU Д-CN.PA01.В.65432",
          validUntil: "30.06.2025",
          issuer: "Импортный контроль"
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
              <h1 className="text-2xl font-bold text-ocean-deep">Великий прилив</h1>
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
              Премиальные рыба, морепродукты и морские водоросли с гарантией свежести. 
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
              Самые свежие морепродукты и морские водоросли, отобранные нашими экспертами
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
                  {(() => {
                    const freshness = getFreshnessIndicator(product.freshness.arrivalDate, product.freshness.shelfLife);
                    return (
                      <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className={`w-3 h-3 rounded-full bg-${freshness.color}-500 animate-pulse`}></div>
                            <span className="text-sm font-medium text-gray-700">Свежесть: {freshness.text}</span>
                          </div>
                          <span className="text-xs text-gray-500">{Math.round(freshness.percentage)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`bg-${freshness.color}-500 h-2 rounded-full transition-all duration-300`} 
                            style={{ width: `${freshness.percentage}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Поступил: {product.freshness.arrivalDate}</span>
                          <span>Температура: {product.freshness.temperature}</span>
                        </div>
                      </div>
                    );
                  })()}
                  
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
                          {/* Информация о свежести */}
                          <div>
                            <h4 className="font-semibold text-ocean-deep mb-3 flex items-center">
                              <Icon name="Thermometer" size={20} className="mr-2 text-ocean-blue" />
                              Контроль свежести
                            </h4>
                            <div className="bg-ocean-foam p-4 rounded-lg space-y-3">
                              {(() => {
                                const freshness = getFreshnessIndicator(product.freshness.arrivalDate, product.freshness.shelfLife);
                                return (
                                  <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center space-x-3">
                                        <div className={`w-4 h-4 rounded-full bg-${freshness.color}-500 animate-pulse`}></div>
                                        <span className="font-medium text-gray-700">Состояние: {freshness.text}</span>
                                      </div>
                                      <span className="text-sm text-gray-600">{Math.round(freshness.percentage)}% свежести</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-3">
                                      <div 
                                        className={`bg-${freshness.color}-500 h-3 rounded-full transition-all duration-300`} 
                                        style={{ width: `${freshness.percentage}%` }}
                                      ></div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                      <div>
                                        <span className="font-medium text-gray-700">Дата поступления:</span>
                                        <p className="text-gray-600">{product.freshness.arrivalDate}</p>
                                      </div>
                                      <div>
                                        <span className="font-medium text-gray-700">Срок годности:</span>
                                        <p className="text-gray-600">{product.freshness.shelfLife} дней</p>
                                      </div>
                                      <div>
                                        <span className="font-medium text-gray-700">Температура хранения:</span>
                                        <p className="text-gray-600">{product.freshness.temperature}</p>
                                      </div>
                                      <div>
                                        <span className="font-medium text-gray-700">Условия хранения:</span>
                                        <p className="text-gray-600">{product.freshness.storageConditions}</p>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })()}
                            </div>
                          </div>
                          
                          <Separator />
                          
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

      {/* Система контроля свежести */}
      <section className="py-16 bg-gradient-to-b from-ocean-foam to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-ocean-deep mb-4">Инновационная система контроля свежести</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Каждый продукт отслеживается с момента поступления до доставки с помощью передовых технологий мониторинга
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-l-4 border-green-500">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <h4 className="text-lg font-semibold text-ocean-deep mb-2">Отличная свежесть</h4>
              <p className="text-gray-600 text-sm">70-100% свежести. Только что поступившие продукты премиального качества</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-l-4 border-yellow-500">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
              </div>
              <h4 className="text-lg font-semibold text-ocean-deep mb-2">Хорошая свежесть</h4>
              <p className="text-gray-600 text-sm">40-70% свежести. Отличное качество с небольшим сроком хранения</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
              </div>
              <h4 className="text-lg font-semibold text-ocean-deep mb-2">Удовлетворительная</h4>
              <p className="text-gray-600 text-sm">15-40% свежести. Качество хорошее, рекомендуется быстрое употребление</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-l-4 border-red-500">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <h4 className="text-lg font-semibold text-ocean-deep mb-2">Акционная цена</h4>
              <p className="text-gray-600 text-sm">До 15% свежести. Большие скидки, срок истекает в ближайшие дни</p>
            </Card>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-ocean-deep mb-4">Как работает наша система</h4>
                <p className="text-gray-600">Полный цикл мониторинга качества от поставщика до вашего стола</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-ocean-blue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Calendar" size={32} className="text-ocean-blue" />
                  </div>
                  <h5 className="font-semibold text-ocean-deep mb-2">Учет даты поступления</h5>
                  <p className="text-gray-600 text-sm">Каждая партия маркируется точной датой и временем поступления на склад</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-ocean-blue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Thermometer" size={32} className="text-ocean-blue" />
                  </div>
                  <h5 className="font-semibold text-ocean-deep mb-2">Контроль температуры</h5>
                  <p className="text-gray-600 text-sm">Непрерывный мониторинг температурного режима в специальных холодильных камерах</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-ocean-blue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Clock" size={32} className="text-ocean-blue" />
                  </div>
                  <h5 className="font-semibold text-ocean-deep mb-2">Расчет свежести</h5>
                  <p className="text-gray-600 text-sm">Автоматический расчет процента свежести на основе срока годности и условий хранения</p>
                </div>
              </div>
            </div>
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
                <h4 className="text-xl font-bold">Великий прилив</h4>
              </div>
              <p className="text-gray-300">
                Премиальные морепродукты и водоросли с доставкой по всей России
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Каталог</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-ocean-blue transition-colors">Рыба</a></li>
                <li><a href="#" className="hover:text-ocean-blue transition-colors">Креветки</a></li>
                <li><a href="#" className="hover:text-ocean-blue transition-colors">Мидии</a></li>
                <li><a href="#" className="hover:text-ocean-blue transition-colors">Водоросли</a></li>
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
            <p>&copy; 2024 Великий прилив. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;