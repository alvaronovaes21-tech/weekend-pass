import { schedule } from '../data/content'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Schedule() {
  return (
    <section className="section section--tint" id="programacao" aria-labelledby="programacao-title">
      <div className="container">
        <SectionHeading
          eyebrow="Programação"
          id="programacao-title"
          title="Como serão os dois dias"
          description="Todos os encontros acontecem on-line e ao vivo."
        />

        <div className="schedule">
          {schedule.map((day, i) => (
            <Reveal key={day.date} delay={i * 100} className="day">
              <div className="day__head">
                <span className="icon-badge icon-badge--solid">
                  <Icon name="calendar" size={24} />
                </span>
                <div>
                  <h3>{day.day}</h3>
                  <p>{day.date}</p>
                </div>
              </div>
              <ol className="day__slots">
                {day.slots.map((slot) => (
                  <li key={slot.time} className="slot">
                    <span className="slot__time">
                      <Icon name="clock" size={16} />
                      {slot.time}
                    </span>
                    <span className="slot__title">{slot.title}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
