import styles from './style.css';

const Button = (props) => {
    const handleButtonClick = (e) => {
        e.preventDefault();
        props.onButtonClick(props.type);
    };
    
    const buttonStyle = props.className ? `${styles.button} ${props.className}` : styles.button;
    const markup = (
        <button className={buttonStyle} onClick={handleButtonClick}>
            {props.children}
        </button>
    );

    return markup;
};

Button.defaultProps = { children: 'Button' };
export default Button;