import MyButton from "../../../components/Button/Button";
import styles from "../style.module.scss";
import { CiStar } from "react-icons/ci";
function Review() {
  const {
    containerReview,
    boxText1,
    boxRating,
    boxStar,
    boxFooter,
    boxHeader,
    myBtn,
  } = styles;
  const star = [1, 2, 3, 4, 5];
  return (
    <div className={containerReview}>
      <div className={boxHeader}>REVIEWS</div>
      <div className={boxText1}>
        <div>There are no reviews yet.</div>
        <div>BE THE FIRST REVIEW "10K YELLOW GOLD"</div>
      </div>
      <div className={boxFooter}>
        Your email address will not be pulished.
        <div className={boxRating}>
          <div>Your Rating *</div>
          <div className={boxStar}>
            {star.map((i, index) => (
              <div key={index}>
                {Array.from({ length: i }, (_, j) => (
                  <CiStar key={j} />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className={boxRating}>
          <label>Your review *</label>
          <textarea rows="4" cols="50" />
        </div>
        <div className={boxRating}>
          <label>Name *</label>
          <input type="Text" />
        </div>
        <div className={boxRating}>
          <label>Email *</label>
          <input type="Email" />
        </div>
        <div>
          <input type="checkbox" />
          <label>
            Save me name, email and website in this browser for the next time I
            comment.
          </label>
        </div>
        <div className={myBtn}>
          <MyButton content={"SUBMIT"} />
        </div>
      </div>
    </div>
  );
}

export default Review;
