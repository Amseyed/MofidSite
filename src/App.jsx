import ProfileCard from './components/ProfileCard.jsx'
import { makePortrait } from './portraits.js'
import './App.css'

const teachers = [
  { name: 'امیرحسین فرازمند', role: 'دبیر ریاضیات', image: '/portraits/amir.png' },
  { name: 'مریم احمدی', role: 'دبیر ادبیات فارسی', image: makePortrait(1) },
  { name: 'سید محمد کاظمی علوی نجف‌آبادی', role: 'دبیر فیزیک و ناظم آموزشی', image: makePortrait(2) },
  { name: 'زهرا موسوی', role: 'دبیر شیمی', image: makePortrait(3) }
]

const pta = [
  { name: 'فاطمه رضایی', role: 'عضو انجمن اولیا و مربیان', image: makePortrait(4) },
  { name: 'علی محمدی', role: 'عضو انجمن اولیا و مربیان', image: makePortrait(5) },
  { name: 'نگار صادقی', role: 'رئیس انجمن اولیا', image: makePortrait(6) }
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
