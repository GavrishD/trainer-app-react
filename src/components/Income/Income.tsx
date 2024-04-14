// import Chart from 'chart.js/auto';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import styles from './income.module.scss';

const Income = () => {
    return (
        <section className={styles.income}>
            <div className={styles.income__header}>
                <div className={styles.income__info}>
                    <div className={styles.income__title}>
                        Income - <span>this month</span>
                    </div>
                    <div className={styles.income__sum}>₴ 57 500,00</div>
                </div>
                <div className={styles.income__button}>
                    <a href="!#" className={styles.income__link}>
                        Income
                        <ArrowForwardRoundedIcon />
                    </a>
                </div>
            </div>
            <div className={styles.income__graph}>
                {/* <canvas id="myChart"></canvas> */}
            </div>
        </section>
    );
};

export default Income;

// const graph = document.getElementById('myChart') as HTMLCanvasElement;

// new Chart(graph, {
//   type: "bar",
//   data: {
//     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//     datasets: [
//       {
//         label: "# of Votes",
//         data: [12, 19, 3, 5, 2, 3],
//         borderWidth: 1,
//       },
//     ],
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// });
