import { Drawer } from '@mui/material'
import React from 'react'
type Props = {
    child: React.ReactNode,
    side: "left" | "right" | "top" | "bottom",
    
}
export const AsideMenu: React.FC<Props>  = ({child, side}) => {


  const onClose = () => {

  }

  return <>
   <Drawer
      anchor={side}
      open={true}
    >
     
    </Drawer>
  </>
  
}
