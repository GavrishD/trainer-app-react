// import Chart from 'chart.js/auto';
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { grey } from "@mui/material/colors";

import Clients from '../Clients/Clients';
import Header from '../Header/Header';
import Schedule from '../Schedule/Schedule';
import "./style.scss";

const Dashboard = () => {
    return (
        <div className='dashboard'>

            <Header />
            <Schedule />
            
            <div className='blocks'>
                <section className='income'>
                    <div className="income__header">
                        <div className="income__info">
                            <div className="income__title">Income - <span>this month</span></div>
                            <div className="income__sum">₴ 57 500,00</div>
                        </div>
                        <div className="income__button button">
                            <a href="!#" className='income__link link'>
                            Income
                            <ArrowForwardRoundedIcon style={{ color: grey[900] }}/>
                        </a>
                        </div>
                    </div>
                    <div className='income__graph'>
                        {/* <canvas id="myChart"></canvas> */}
                    </div>
                </section>

                <Clients />

            </div>

        </div>
    );
}

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

export default Dashboard;