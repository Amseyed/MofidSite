// Centralized data - structured for future CMS/database integration

export const navLinks = [
  { label: 'خانه', href: '#', active: true },
  { label: 'درباره مدرسه', href: '#about' },
  { label: 'فضا و امکانات', href: '#facilities' },
  { label: 'زندگی در مفید', href: '#life' },
  { label: 'اخبار و رویدادها', href: '#news' },
  { label: 'تماس با ما', href: '#contact' },
]

export const quickAccessItems = [
  { icon: 'announcement', title: 'اطلاعیه‌ها', desc: 'آخرین اطلاعیه‌های مدرسه' },
  { icon: 'calendar', title: 'تقویم مدرسه', desc: 'برنامه‌های آموزشی و تفریحی' },
  { icon: 'systems', title: 'سامانه‌ها', desc: 'دسترسی به سامانه‌های مدرسه' },
  { icon: 'phone', title: 'تماس با مدرسه', desc: 'راه‌های ارتباطی مدرسه' },
  { icon: 'family', title: 'خانواده مفید', desc: 'پورتال والدین دانش‌آموزان' },
  { icon: 'question', title: 'پرسش از ما', desc: 'سؤالات و پاسخ‌های شما' },
]

export const glanceFeatures = [
  { icon: 'diamond', title: 'مدرسه زندگی', desc: 'جایی برای یادگیری، تجربه و رشد' },
  { icon: 'book', title: 'یادگیری عمیق', desc: 'فراتر از حفظیات، درک معنادار' },
  { icon: 'leaf', title: 'رشد متوازن', desc: 'توسعه علمی، هنری و اجتماعی' },
  { icon: 'user', title: 'مسئولیت‌پذیری', desc: 'پرورش دانش‌آموزان مسئول' },
]

export const facilities = [
  { title: 'کلاس‌های هوشمند', image: 'https://images.unsplash.com/photo-1580582932707-520aed9dc36f?w=600&q=80' },
  { title: 'آزمایشگاه‌ها', image: 'https://images.unsplash.com/photo-1532094349884-568bc81a0783?w=600&q=80' },
  { title: 'کتابخانه', image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&q=80' },
  { title: 'سالن ورزشی', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80' },
  { title: 'فضاهای عمومی', image: 'https://images.unsplash.com/photo-1562794023-045b8f5e6d57?w=600&q=80' },
]

export const lifeAtMofid = [
  { title: 'گروه‌های دانش‌آموزی', image: 'https://images.unsplash.com/photo-1427504494785-3a9ca9f58845?w=600&q=80' },
  { title: 'فعالیت‌های متنوع', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80' },
  { title: 'اردوها و بازدیدها', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80' },
  { title: 'تجربه‌های یادگیری', image: 'https://images.unsplash.com/photo-1503676263721-9a0b0b3b98d5?w=600&q=80' },
]

export const events = [
  {
    day: '۱۸',
    month: 'مهر',
    title: 'اردوی علمی پایه هشتم',
    desc: 'بازدید از موزه علوم و فناوری',
    category: 'اردو',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e7c5?w=600&q=80',
  },
  {
    day: '۲۵',
    month: 'مهر',
    title: 'مسابقات ورزشی',
    desc: 'مسابقات فوتبال بین پایه‌ها',
    category: 'ورزش',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe1950b4?w=600&q=80',
  },
  {
    day: '۰۲',
    month: 'آبان',
    title: 'نشست آشنایی با مسیر تحصیلی',
    desc: 'هم‌اندیشی با مشاوران تحصیلی',
    category: 'آموزشی',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80',
  },
]

export const newsItems = [
  {
    date: '۱۲ مهر ۱۴۰۳',
    category: 'آموزشی',
    title: 'آغاز پروژه‌های پژوهشی دانش‌آموزی',
    excerpt: 'دانش‌آموزان پایه نهم با موضوعات متنوع پژوهش خود را آغاز کردند.',
    image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&q=80',
  },
  {
    date: '۰۸ مهر ۱۴۰۳',
    category: 'فرهنگی',
    title: 'برگزاری جشن میلاد امام رضا (ع)',
    excerpt: 'برنامه‌های فرهنگی و هنری ویژه میلاد امام رضا (ع) در مدرسه برگزار شد.',
    image: 'https://images.unsplash.com/photo-1530103862696-cf1c4e83c2a6?w=600&q=80',
  },
  {
    date: '۰۲ مهر ۱۴۰۳',
    category: 'ورزشی',
    title: 'قهرمانی تیم فوتبال مدرسه',
    excerpt: 'تیم فوتبال مفید در مسابقات منطقه به مقام قهرمانی رسید.',
    image: 'https://images.unsplash.com/photo-1551958219-acbc608c637f?w=600&q=80',
  },
  {
    date: '۲۸ شهریور ۱۴۰۳',
    category: 'عمومی',
    title: 'آغاز سال تحصیلی جدید',
    excerpt: 'مراسم آغاز سال تحصیلی با حضور دانش‌آموزان و والدین برگزار شد.',
    image: 'https://images.unsplash.com/photo-1503676263721-9a0b0b3b98d5?w=600&q=80',
  },
]

export const faqItems = [
  {
    question: 'چگونه می‌توانم ثبت‌نام کنم؟',
    answer: 'ثبت‌نام از طریق سامانه ثبت‌نام آنلاین مدرسه انجام می‌شود. پس از تکمیل فرم ثبت‌نام، از شما برای مصاحبه و ارزیابی دعوت به عمل خواهد آمد.',
  },
  {
    question: 'ساعات حضور دانش‌آموزان در مدرسه چگونه است؟',
    answer: 'ساعات حضور دانش‌آموزان از ساعت ۷:۳۰ صبح تا ۱۴:۳۰ بعدازظهر است. در روزهای خاص ممکن است برنامه‌های فوق‌برنامه تا ساعت ۱۶ ادامه داشته باشد.',
  },
  {
    question: 'آیا کلاس‌های تکمیلی برگزار می‌شود؟',
    answer: 'بله، کلاس‌های تکمیلی در زمینه‌های مختلف علمی، هنری و ورزشی بعد از ساعات رسمی مدرسه برای دانش‌آموزان علاقه‌مند برگزار می‌شود.',
  },
  {
    question: 'ارتباط با معلمان چگونه امکان‌پذیر است؟',
    answer: 'ارتباط با معلمان از طریق سامانه خانواده مفید، جلسات اولیا و مربیان، و در زمان‌های مشخص از طریق تماس تلفنی امکان‌پذیر است.',
  },
]

export const footerLinks = {
  quickAccess: [
    { label: 'درباره مدرسه', href: '#' },
    { label: 'فضا و امکانات', href: '#' },
    { label: 'زندگی در مفید', href: '#' },
    { label: 'اخبار و رویدادها', href: '#' },
  ],
  contact: {
    address: 'مشهد، بلوار وکیل‌آباد، مجتمع آموزشی مفید',
    phone: '۰۵۱-۳۸۹۸۷۶۵۴',
    email: 'info@mofid-school.ir',
  },
}
