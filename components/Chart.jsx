
"use client"
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

import styles from "./Chart.module.css"
import { BsDisplay } from "react-icons/bs";

// Enregistrer les composants nécessaires de Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Chart() {
    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "6 mois",
            },
            legend: {
                display: false,
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            },
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Mois',
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Valeur',
                }
            },
        },
    };

    const ligneSixMois = {
        labels: [
            "Octobre",
            "Novembre",
            "Septembre",
            "Decembre",
            "Janvier",
            "Fevrier",
            "Mars",
        ],
        datasets: [
            {
                label: "6 mois",
                data: [6000, 6500, 7000, 8500, 8000, 10000, 9000],
                borderColor: "#FFB623",
                backgroundColor: "rgba(75, 192, 192, 0.5)",
                fill: true,
                tension: 0.4,
            },
        ],
    };
    return <>
        <div className={styles.contenaire}>
            <Line options={options} data={ligneSixMois} className={styles.chart} />
        </div>
    </>
}
