import React from 'react'

export default function Title({mainTitle, subTitle}) {

  return (
    <div>
          <h1 style={{backgroundColor:'orange',borderBottom:'5px solid red', textAlign:'center'}}>
            {mainTitle}
            </h1>
            <h6>
            {subTitle}

            </h6>
            


    </div>
  )
}
