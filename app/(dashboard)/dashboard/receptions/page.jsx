"use client";
import GestionsReception from "@/components/GestionsReception";
import styles from "./page.module.css";

export default function Receptions() {
    return (
        <main className={styles.main}>
            <GestionsReception />
        </main>
    );
}