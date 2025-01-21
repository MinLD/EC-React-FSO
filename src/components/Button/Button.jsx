import  style from'./btn.module.scss';
import classNames from 'classnames';
function MyButton({content,isPriamry= true}) {
    const {btn,black,primari} = style
  return (
    <>
    <button className={classNames(btn, {
      [primari]: isPriamry,
      [black]: !isPriamry
    })}>{content}</button>
    </>
  );
}

export default MyButton;
