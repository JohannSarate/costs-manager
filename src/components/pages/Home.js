import styles from "./Home.module.css";
import LinkButton from "../layout/Linkbutton";

function Home() {
  return (
    <section className={styles.home_container}>
      <div className={styles.badge}>Project Budget Management</div>
      <h1>Take control of your <span>project costs</span></h1>
      <p>Flo helps teams plan, track, and manage project budgets — all in one clean and simple workspace.</p>
      <div className={styles.cta_row}>
        <LinkButton to="/newproject" text="Create a project" />
        <LinkButton to="/projects" text="View all projects" />
      </div>
      <div className={styles.stats_row}>
        <div className={styles.stat}>
          <strong>100%</strong>
          <span>Free to use</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.stat}>
          <strong>Simple</strong>
          <span>No complexity</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.stat}>
          <strong>Fast</strong>
          <span>Setup in minutes</span>
        </div>
      </div>
    </section>
  );
}

export default Home;
