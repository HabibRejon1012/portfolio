


import React from 'react'
import { css } from 'styled-system/css'


type Props = {
    children: React.ReactNode
}

const HISTORY_LIST_CONTAINER = css({
    display: "flex",
    flexDir: "column",
    width: "100%",
    position: "relative",
    background: "white",
   boxSizing: "border-box",
  
})

const HISTORY_LIST_TITLE = css({

})

const HISTORY_LIST_ITEM_CONTAINER = css({
    padding: "45px 40px",
    boxSizing: "border-box",
    borderRadius: "6px",
    marginLeft: "32px",
    position: "relative",
    backgroundColor: "linear-gradient(145deg, #e2e8ec, #ffffff)",
    boxShadow: "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff",
    
  
})

export const HistoryList: React.FC<Props>  = () => {
  return (
    <section className={HISTORY_LIST_CONTAINER}>
         <h3 className={HISTORY_LIST_TITLE}>Title</h3>
         <div className={css({
             borderLeft: "5px solid #d9dee2",
             display: "flex",
             flexDir: "column",
             rowGap: "32px",
             "&::after": {
                content: "test",
              
               
            }
         })}>
         <article className={HISTORY_LIST_ITEM_CONTAINER}>
            <h4>Test</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio molestiae ducimus repudiandae maiores corporis quas iure voluptatibus commodi aliquam. Fugiat nihil assumenda modi adipisci dolorem nam tenetur debitis quis quibusdam.</p>
         </article>

         <article className={HISTORY_LIST_ITEM_CONTAINER}>
            <h4>Test</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio molestiae ducimus repudiandae maiores corporis quas iure voluptatibus commodi aliquam. Fugiat nihil assumenda modi adipisci dolorem nam tenetur debitis quis quibusdam.</p>
         </article>
         </div>
    </section>
  )
}
