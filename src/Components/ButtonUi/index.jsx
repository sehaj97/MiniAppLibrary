
export default function ButtonUi({ mode = 'filled', children, Icon, ...props }) {
    return <button {...props} className={`button ${mode && `${mode}-button`} ${Icon && `icon-button`}`}>
        {Icon && <span className="button-icon">
            <Icon />
        </span>}
        <span>{children}</span>
    </button>
}
