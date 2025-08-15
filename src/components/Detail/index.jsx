// import React, { useState } from 'react'

import { useParams } from "react-router"
import { useLocation } from "react-router"
export default function Detail() {
    // const param = useParams()
    const param = useLocation().state
  return (
    
    <div>
        {JSON.stringify(param)}
    </div>
  )
}
