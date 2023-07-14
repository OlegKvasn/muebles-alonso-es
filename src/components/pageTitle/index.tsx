import styles from "./pageTitle.module.css";

const PageTitle = (props: React.ComponentProps<"section">) => {
  return (
    <section className={`${styles.title} ${props.className}`}>
      {props.children}
    </section>
  );
};

export default PageTitle;
