
import styles from "../DateModal/DateModal.module.css";
const DateModal = () => {

  return (
    <div>
      <div className={`${styles.DateModal} border-radius1 btn-padding  `}>
    
      <form action="https://example.com">

    
    <input type="date" name="date"/>


  <p> <button
              className={`btn-padding pointer border-radius1 btn-primary font-bolder`}
            >
             Find
            </button></p>
</form>
      </div>
    </div>
  );
};

export { DateModal };
