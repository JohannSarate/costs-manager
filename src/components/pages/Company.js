import styles from "./Company.module.css";

function Company() {
  return (
    <div className={styles.page}>

      <div className={styles.hero}>
        <div className={styles.badge}>About Us</div>
        <h1>Built for teams that care about <span>clarity</span></h1>
        <p>Flo was created to make project budget management straightforward, visual, and stress-free.</p>
      </div>

      <div className={styles.cards_grid}>
        <div className={styles.card}>
          <div className={styles.icon}>🎯</div>
          <h3>Our Mission</h3>
          <p>To give teams a simple, honest tool for managing project costs — without the complexity of enterprise software.</p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>💡</div>
          <h3>Our Vision</h3>
          <p>A world where every project team has full visibility over their budget in real time, from day one.</p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>🤝</div>
          <h3>Our Values</h3>
          <p>Transparency, simplicity, and reliability. We build tools we'd use ourselves every day.</p>
        </div>
      </div>

      <div className={styles.stats_section}>
        <div className={styles.stat}>
          <strong>500+</strong>
          <span>Projects tracked</span>
        </div>
        <div className={styles.stat}>
          <strong>120+</strong>
          <span>Teams using Flo</span>
        </div>
        <div className={styles.stat}>
          <strong>98%</strong>
          <span>Satisfaction rate</span>
        </div>
        <div className={styles.stat}>
          <strong>2022</strong>
          <span>Founded</span>
        </div>
      </div>

      <div className={styles.team_section}>
        <h2>The Team</h2>
        <p>A small but passionate team of developers and designers committed to building great software.</p>
        <div className={styles.team_grid}>
          {[
            { name: "Johann Sarate", role: "Founder & Developer", initials: "JS" },
            { name: "Ana Lima", role: "Product Designer", initials: "AL" },
            { name: "Bruno Costa", role: "Backend Engineer", initials: "BC" },
          ].map((member) => (
            <div className={styles.team_card} key={member.name}>
              <div className={styles.avatar}>{member.initials}</div>
              <h4>{member.name}</h4>
              <span>{member.role}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Company;
