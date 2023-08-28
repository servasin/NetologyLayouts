function IconSwitch({icon, onSwitch}) {

    return (
      <span 
        onClick={() => onSwitch(icon)}
        className="material-icons">
        {icon}
      </span>
    )
  }
  
  export default IconSwitch