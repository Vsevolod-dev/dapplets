import BG from './assets/BG.png'
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import Content from "./components/Content";
import {useEffect, useRef, useState} from "react";

function App() {
    const leftSideRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const rightSideRef = useRef<HTMLDivElement>(null)

    const [leftSideHidden, setLeftSideHidden] = useState(false);
    const [rightSideHidden, setRightSideHidden] = useState(false);

    useEffect(() => {
        console.log(leftSideHidden, rightSideHidden)

        const leftSideElem: HTMLDivElement = leftSideRef.current as HTMLDivElement
        const contentElem: HTMLDivElement = contentRef.current as HTMLDivElement

        const classesToHide = ['left-side__text', 'left-side__right-arrow', 'tab__text', 'my-lists', 'tags']
        classesToHide.map((className: string) => {
            const listNode = leftSideElem.querySelectorAll<HTMLElement>(`.${className}`)
            listNode.forEach((elem) => {
                elem.style.display = leftSideHidden ? 'none' : ''
            })

            const hrListNode = leftSideElem.querySelectorAll<HTMLElement>('hr')
            hrListNode.forEach( function(elem) {
                elem.style.display = leftSideHidden ? 'none' : ''
            })
        })

        leftSideElem.style.width = leftSideHidden ? '96px' : '360px'
        document.querySelector<HTMLElement>('.echo__left-side')!.style.width = leftSideHidden ? '96px' : '360px'

        contentElem.querySelector<HTMLElement>('.content__header')!.style.left = leftSideHidden ? '96px' : '360px'
        contentElem.querySelector<HTMLElement>('.content__main')!.style.maxWidth = leftSideHidden ? '1370px' : '1100px'
    }, [leftSideHidden, rightSideHidden])

    const hideShow = (side: 'left' | 'right', value: boolean) => {
        side === 'left' && setLeftSideHidden(value)
        side === 'right' && setRightSideHidden(value)
    }
    return (
        <div className="App">
            <img className={'background'} src={BG} alt="BG"/>
            <LeftSide leftSideRef={leftSideRef} hideShow={hideShow} />
            <Content contentRef={contentRef} />
            <RightSide rightSideRef={rightSideRef} hideShow={hideShow}/>
        </div>
    );
}

export default App;
