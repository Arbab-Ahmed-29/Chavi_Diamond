"use client"

import React, {useState} from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

export default function StyledComponentsRegistry({children}){
    // Only create stylesheet once with lazy initial state
    // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
    const [styledComponentsStyledSheet] = useState(()=> new ServerStyleSheet())

    useServerInsertedHTML(()=>{
        const styles = styledComponentsStyledSheet.getStyleElement()
        styledComponentsStyledSheet.instance.clearTag()
        return <>{styles}</>
    })
    if(typeof window !== 'undefined') return <>{children}</>
    return(
        <StyleSheetManager sheet={styledComponentsStyledSheet.instance}>
            {children}
        </StyleSheetManager>
    )
}