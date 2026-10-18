import ProfileCard from './components/ProfileCard.jsx'
import './App.css'

const teachers = [
  {
    name: 'امیرحسین فرازمند',
    role: 'دبیر ریاضیات',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc55c?w=500&q=80'
  },
  {
    name: 'مریم احمدی',
    role: 'دبیر ادبیات فارسی',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80'
  },
  {
    name: 'سید محمد کاظمی علوی نجف‌آبادی',
    role: 'دبیر فیزیک و ناظم آموزشی',
    image: 'https://images.unsplash.com/photo-1507006320719-36b8d8c8c9c3?w=500&q=80'
  },
  {
    name: 'زهرا موسوی',
    role: 'دبیر شیمی',
    image: 'https://images.unsplash.com/photo-1580489944761-4aada93b9593?w=500&q=80'
  }
]

const pta = [
  {
    name: 'فاطمه رضایی',
    role: 'عضو انجمن اولیا و مربیان',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&q=80'
  },
  {
    name: 'علی محمدی',
    role: 'عضو انجمن اولیا و مربیان',
    image: 'https://images.unsplash.com/photo-1500648766837-d4376d8c8c2c?w=500&q=80'
  },
  {
    name: 'نگار صادقی',
    role: 'رئیس انجمن اولیا',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&q=80'
  }
]

export default function App() {
  return (
    <div className="registry">
      <header className="registry__header">
        <span className="registry__eyebrow">مدرسه مفید</span>
        <h1 className="registry__title">بدنه آموزشی و انجمن اولیا</h1>
        <p className="registry__lead">
          فهرست اعضای مدرسه مفید؛ کارت‌های زیر برای «دبیران و کارکنان» و «اعضای انجمن
          اولیا و مربیان» به‌صورت یکپارچه طراحی شده‌اند.
        </p>
      </header>

      <section className="registry__section">
        <h2 className="registry__section-title">دبیران و کارکنان</h2>
        <div className="registry__grid">
          {teachers.map((p) => (
            <ProfileCard key={p.name} image={p.image} name={p.name} role={p.role} />
          ))}
        </div>
      </section>

      <section className="registry__section">
        <h2 className="registry__section-title">انجمن اولیا و مربیان</h2>
        <div className="registry__grid">
          {pta.map((p) => (
            <ProfileCard key={p.name} image={p.image} name={p.name} role={p.role} />
          ))}
        </div>
      </section>
    </div>
  )
}
