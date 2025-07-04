import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

const contactSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  email: z.string().email('Некорректный email адрес'),
  company: z.string().min(2, 'Название компании должно содержать минимум 2 символа'),
  phone: z.string().min(10, 'Некорректный номер телефона'),
  message: z.string().min(10, 'Сообщение должно содержать минимум 10 символов'),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
    },
  });

  useEffect(() => {
    document.title = 'Контакты - Synecology';
  }, []);

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Сообщение отправлено!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте отправить сообщение позже.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-tech-pattern">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Свяжитесь с нами
          </h1>
          <p className="text-xl text-light-gray max-w-3xl mx-auto">
            Получите персональную консультацию и узнайте, как Synecology может помочь вашему бизнесу
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-dark-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">Отправить сообщение</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-light-gray">Имя *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Ваше имя" 
                              {...field}
                              className="bg-card-bg border-gray-700 text-white placeholder-gray-400 focus:border-accent-green"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-light-gray">Email *</FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="Ваш email" 
                              {...field}
                              className="bg-card-bg border-gray-700 text-white placeholder-gray-400 focus:border-accent-green"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-light-gray">Компания *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Название компании" 
                              {...field}
                              className="bg-card-bg border-gray-700 text-white placeholder-gray-400 focus:border-accent-green"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-light-gray">Телефон *</FormLabel>
                          <FormControl>
                            <Input 
                              type="tel"
                              placeholder="Ваш телефон" 
                              {...field}
                              className="bg-card-bg border-gray-700 text-white placeholder-gray-400 focus:border-accent-green"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-light-gray">Сообщение *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Расскажите о ваших задачах..." 
                            rows={5}
                            {...field}
                            className="bg-card-bg border-gray-700 text-white placeholder-gray-400 focus:border-accent-green"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-accent-green text-dark-bg hover:bg-green-400 py-3 text-lg font-medium"
                  >
                    {isSubmitting ? 'Отправляем...' : 'Отправить сообщение'}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">Контактная информация</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-green rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-dark-bg font-bold">📍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Адрес</h3>
                    <p className="text-light-gray">
                      г. Москва, ул. Тверская, д. 1<br />
                      БЦ "Центральный", офис 1001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-green rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-dark-bg font-bold">📞</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Телефон</h3>
                    <p className="text-light-gray">
                      <a href="tel:+74951234567" className="hover:text-accent-green transition-colors">
                        +7 (495) 123-45-67
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-green rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-dark-bg font-bold">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Email</h3>
                    <p className="text-light-gray">
                      <a href="mailto:info@synecology.ru" className="hover:text-accent-green transition-colors">
                        info@synecology.ru
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-green rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-dark-bg font-bold">⏰</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Время работы</h3>
                    <p className="text-light-gray">
                      Пн-Пт: 9:00 - 18:00<br />
                      Сб-Вс: выходной
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 p-6 bg-card-bg rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-white">Быстрый звонок</h3>
                <p className="text-light-gray mb-4">
                  Оставьте номер телефона, и мы перезвоним вам в течение 30 минут
                </p>
                <div className="flex gap-2">
                  <input
                    type="tel"
                    placeholder="Ваш номер"
                    className="flex-1 px-4 py-2 bg-dark-bg border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-green"
                  />
                  <Button className="bg-accent-green text-dark-bg hover:bg-green-400">
                    Позвонить
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
