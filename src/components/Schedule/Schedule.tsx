import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { table, time } from 'console';
import { data } from './data';
import styles from './schedule.module.scss';

const parseScheduleData = (data) => {
    const weekDays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
    const obj = [];

    // 'Mon 01.04.2024': [
    //     { time: '11:00', name: 'Nick' },
    //     { time: '12:00', name: 'Lara' },
    //     { time: '14:00', name: 'Henry' },
    //     { time: '16:00', name: 'Piter' },
    //     { time: '17:00', name: 'Ken' },
    //     { time: '18:00', name: 'Anna' },
    // ],
    // 'Tues 02.04.2024': [
    //     { time: '11:00', name: 'Nick' },
    //     { time: '12:00', name: 'Lara' },
    //     { time: '14:00', name: 'Henry' },
    // ],
    // 'Wed 03.04.2024': [],
    // 'Thurs 04.04.2024': [
    //     { time: '17:00', name: 'Ken' },
    //     { time: '18:00', name: 'Anna' },
    // ],
    // 'Fri 05.04.2024': [{ time: '11:00', name: 'Nick' }],
    // 'Sat 06.04.2024': [
    //     { time: '12:00', name: 'Lara' },
    //     { time: '14:00', name: 'Henry' },
    //     { time: '16:00', name: 'Piter' },
    // ],
    // 'Sun 07.04.2024': [
    //     { time: '14:00', name: 'Henry' },
    //     { time: '16:00', name: 'Piter' },
    // ],

    data.forEach((item) => {
        const weekDay = new Date(item.sessionDate).getDay();
        const formattedDate = new Date(item.sessionDate).toLocaleDateString();
        const day = weekDays[weekDay];
        // const scheduleDay = obj[`${day} ${formattedDate}`];
        const scheduleDay = obj;

        const date = new Date(item.sessionDate);
        const time = [date.getHours(), date.getMinutes()]
            .map(function (x) {
                return x < 10 ? '0' + x : x;
            })
            .join(':');

        if (scheduleDay) {
            scheduleDay.push({
                date: day + ' ' + formattedDate,
                time: time,
                name: item.sessionName,
            });
        } else {
            obj = [
                {
                    date: day + ' ' + formattedDate,
                    time: time,
                    name: item.sessionName,
                },
            ];
        }
    });
    return obj;
};

const Schedule = () => {
    const parseData = parseScheduleData(data);

    const uniqueData = parseData.filter(
        (obj, idx, arr) => idx === arr.findIndex((t) => t.date === obj.date)
    );

    console.log(parseData);
    console.log(uniqueData);

    return (
        <section className={styles.schedule}>
            <h2 className={styles.schedule__title}>Your schedule is ready</h2>
            <div className={styles.schedule__week}>
                <div className={styles.schedule__day}>
                    {uniqueData.map((item) => (
                        <div className={styles.schedule__date}>{item.date}</div>
                    ))}
                    <ul>
                        {parseData.map((item, index) => (
                            <li key={index}>
                                <span>{item.time}</span>
                                <span>{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* <div className={styles.schedule__day}>
                    <div className={styles.schedule__date}>Tues 02.04.2024</div>

                    <ul>
                        <li>
                            <span className="client__time">07:00</span>
                            <span className="client__name">Name</span>
                        </li>
                        <li>
                            <span className="client__time">09:00</span>
                            <span className="client__name">Name</span>
                        </li>
                        <li>
                            <span className="client__time">10:00</span>
                            <span className="client__name">Name</span>
                        </li>
                        <li>
                            <span className="client__time">11:00</span>
                            <span className="client__name">Name</span>
                        </li>
                        <li>
                            <span className="client__time">13:00</span>
                            <span className="client__name">Name</span>
                        </li>
                        <li>
                            <span className="client__time">14:30</span>
                            <span className="client__name">Name</span>
                        </li>
                        <li>
                            <span className="client__time">16:00</span>
                            <span className="client__name">Name</span>
                        </li>
                        <li>
                            <span className="client__time">18:00</span>
                            <span className="client__name">Name</span>
                        </li>
                    </ul>
                </div>
                <div className={styles.schedule__day}>
                    <div className={styles.schedule__date}>Wed 02.04.2024</div>

                    <ul>
                        <li>
                            <span className="client__time">10:00</span>
                            <span className="client__name">Name</span>
                        </li>
                        <li>
                            <span className="client__time">11:00</span>
                            <span className="client__name">Name</span>
                        </li>
                        <li>
                            <span className="client__time">13:00</span>
                            <span className="client__name">Name</span>
                        </li>
                        <li>
                            <span className="client__time">14:30</span>
                            <span className="client__name">Name</span>
                        </li>
                        <li>
                            <span className="client__time">18:00</span>
                            <span className="client__name">Name</span>
                        </li>
                    </ul>
                </div>
                <div className={styles.schedule__day}>
                    <div className={styles.schedule__date}>
                        Thurs 02.04.2024
                    </div>

                    <ul>
                        <li>
                            <span className="client__time">10:00</span>
                            <span className="client__name">Name</span>
                        </li>
                        <li>
                            <span className="client__time">11:00</span>
                            <span className="client__name">Name</span>
                        </li>
                        <li>
                            <span className="client__time">13:00</span>
                            <span className="client__name">Name</span>
                        </li>
                        <li>
                            <span className="client__time">14:30</span>
                            <span className="client__name">Name</span>
                        </li>
                        <li>
                            <span className="client__time">16:00</span>
                            <span className="client__name">Name</span>
                        </li>
                        <li>
                            <span className="client__time">18:00</span>
                            <span className="client__name">Name</span>
                        </li>
                    </ul>
                </div>
                <div className={styles.schedule__day}>
                    <div className={styles.schedule__date}>Fri 02.04.2024</div>

                    <ul>
                        <li>
                            <span className="client__time">10:00</span>
                            <span className="client__name">Name</span>
                        </li>
                        <li>
                            <span className="client__time">11:00</span>
                            <span className="client__name">Name</span>
                        </li>
                        <li>
                            <span className="client__time">13:00</span>
                            <span className="client__name">Name</span>
                        </li>
                        <li>
                            <span className="client__time">14:30</span>
                            <span className="client__name">Name</span>
                        </li>
                        <li>
                            <span className="client__time">16:00</span>
                            <span className="client__name">Name</span>
                        </li>
                        <li>
                            <span className="client__time">18:00</span>
                            <span className="client__name">Name</span>
                        </li>
                    </ul>
                </div>
                <div className={styles.schedule__day}>
                    <div className={styles.schedule__date}>Sat 02.04.2024</div>

                    <ul>
                        <li>
                            <span className="client__time">10:00</span>
                            <span className="client__name">Name</span>
                        </li>
                        <li>
                            <span className="client__time">11:00</span>
                            <span className="client__name">Name</span>
                        </li>
                        <li>
                            <span className="client__time">16:00</span>
                            <span className="client__name">Name</span>
                        </li>
                        <li>
                            <span className="client__time">18:00</span>
                            <span className="client__name">Name</span>
                        </li>
                    </ul>
                </div>
                <div className={styles.schedule__day}>
                    <div className={styles.schedule__date}>Sun 02.04.2024</div>

                    <ul>
                        <li>
                            <span className="client__time">10:00</span>
                            <span className="client__name">Name</span>
                        </li>
                        <li>
                            <span className="client__time">11:00</span>
                            <span className="client__name">Name</span>
                        </li>
                        <li>
                            <span className="client__time">13:00</span>
                            <span className="client__name">Name</span>
                        </li>
                        <li>
                            <span className="client__time">14:30</span>
                            <span className="client__name">Name</span>
                        </li>
                        <li>
                            <span className="client__time">16:00</span>
                            <span className="client__name">Name</span>
                        </li>
                    </ul>
                </div> */}
            </div>
            <div className={styles.schedule__button}>
                <a href="!#" className={styles.schedule__link}>
                    Training schedule
                    <ArrowForwardRoundedIcon />
                </a>
            </div>
        </section>
    );
};

export default Schedule;
