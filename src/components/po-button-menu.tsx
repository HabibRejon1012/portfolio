import type React from "react"
import { css } from "styled-system/css"

type Props  = {
    children: React.ReactNode,
    className?: string,
}  & React.DOMAttributes<HTMLDivElement>

const BUTTON_CONTAINER = css({

    padding: "15px 15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    boxSizing: "border-box",
    borderRadius: "50%",
    background: "bg_button_neo",
    boxShadow: `shadow_button_neo`,
    transitionDuration: ".2s",
    transitionProperty: "transform",
    transitionTimingFunction: "ease-in",
    cursor: "pointer",
    _hover: {
        transform: "scale(1.03)",
    }
})


export const PoButtonMenu: React.FC<Props> = ({children, className, onClick}) => {

    return <div onClick={onClick} className={BUTTON_CONTAINER +" " + className}>
        {children}
    </div>
}