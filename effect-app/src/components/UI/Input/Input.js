import React,{ useRef ,useImperativeHandle} from "react"
 const Input =React.forwardRef((props,ref)=>{

    const inputRef = useRef();
    const activate = ()=>{
        inputRef.current.focus()
    }
        useImperativeHandle(ref,()=>{
            return(
                {focus:activate}
            )
        })
    return(
       
            <div className={props.className}>
        <label htmlFor={props.htmlFor}>{props.children}</label>
        <input type = {props.type} id={props.id}
            ref={inputRef}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}></input>
        
        </div>

       

    )
})
export default Input;