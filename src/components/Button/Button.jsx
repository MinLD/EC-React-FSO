import  style from'./btn.module.scss';
import classNames from 'classnames';
function MyButton({content,isPriamry= true , ...props}) {
    const {btn,black,primari} = style
  return (
    <>
    <button className={classNames(btn, {
      [primari]: isPriamry,
      [black]: !isPriamry
    })}
    {...props}
    >{content}
 
    </button>

    </>
  );
}

export default MyButton;
