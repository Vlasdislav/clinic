import React from "react"
import Block from "./Block/Block"
import "./SectionServices.css"
import spots from "../../assets/services/spots.svg"
import workout from "../../assets/services/workout.svg"
import osteotherapy from "../../assets/services/osteotherapy.svg"
import neurology from "../../assets/services/neurology.svg"
import vaccine from "../../assets/services/vaccine.svg"
import xRay from "../../assets/services/xRay.svg"
import phonendoscope from "../../assets/services/phonendoscope.svg"
import joint from "../../assets/services/joint.svg"
import scalpel from "../../assets/services/scalpel.svg"

const SectionServices = () => {
    return (
        <section className="container" id="services">
            <div className="section-content">
                <h1 className="section-title">Услуги</h1>
                <div className="blocks">
                    <Block service="/services/cosmetology" icon={spots} blockTitle="Отделение косметологии" blockText="Косметология — наука изучающая эстетические проблемы организма человека, их этиологии, проявления и методы коррекции, также — свод методик, направленных на коррекцию эстетических проблем внешности человека."/>
                    <Block service="/services/sport" icon={workout} blockTitle="ЛФК и спортивная медицина" blockText="Спортивная медицина — это отдельная специфическая область медицинской науки и практики, отвечающая за медико-биологическое обеспечение подготовки спортсменов — неотъемлемую составляющую их спортивной подготовки в целом, призванная решать целый ряд специфических задач"/>
                    <Block service="/services/monotherapy" icon={osteotherapy} blockTitle="Мануальная терапия" blockText="Вид альтернативной медицины, вариант манипулятивной медицины. Метод лечения и диагностики путём воздействия рук мануального терапевта на тело пациента. Используется преимущественно с целью лечения заболеваний опорно-двигательной системы."/>
                    <Block service="/services/neurology" icon={neurology} blockTitle="Отделение неврологии" blockText="Невроло́гия — группа медико-биологических научных дисциплин, которая изучает нервную систему как в норме, так и в патологии. Занимается вопросами возникновения заболеваний центральной и периферической частей нервной системы, а также изучает механизмы их развития, симптоматику и возможные способы диагностики, лечения и профилактики."/>
                    <Block service="/services/plasmolifting" icon={vaccine} blockTitle="Плазмолифтинг" blockText="Метод регенеративной медицины, базирующийся на принципах технологии PRP, заключающейся в выделении из крови тромбоцитарной плазмы. Данная методика может эффективно применяться в различных областях медицины."/>
                    <Block service="/services/rheumatology" icon={xRay} blockTitle="Ревматология" blockText="Раздел медицины, изучающий этиологию, патогенез, клинические проявления, лечение и профилактику ревматических болезней. Предметом изучения ревматологии являются воспалительные и дегенеративно-дистрофические заболевания суставов и позвоночника и системные заболевания соединительной ткани    "/>
                    <Block service="/services/therapy" icon={phonendoscope} blockTitle="Терапия" blockText="Процесс, целью которого является облегчение, снятие или устранение симптомов и проявлений того или иного заболевания или травмы, патологического состояния или иного нарушения жизнедеятельности, нормализация нарушенных процессов жизнедеятельности и выздоровление, восстановление здоровья."/>
                    <Block service="/services/traumatology_ortopedics" icon={joint} blockTitle="Травмотология - ортопедия" blockText="Раздел медицины, изучающий возможности выявления и лечения патологий и повреждений опорно-двигательного аппарата. В сферу интересов дисциплины входят травматические поражения различной природы, врождённые и приобретённые нарушения функции мягкотканных и твердотканных структур."/>
                    <Block service="/services/surgery" icon={scalpel} blockTitle="Хирургия" blockText="Медицинская клиническая дисциплина, направленная на профилактику, диагностику, лечение и научное исследование заболеваний и нарушений, при которых основное определяющее значение имеют кровавые или бескровные оперативные вмешательства руками хирурга с помощью инструментов и приборов."/>
                </div>
            </div>
        </section>
    )
}

export default SectionServices;