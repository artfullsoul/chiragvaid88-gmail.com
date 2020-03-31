import React from "react";
import ReactDOM from "react-dom"
import {useState} from "react";





function ScrollTest(){
    const [scrollTop,scrollTopFunc] = useState(0);
    const myref= React.createRef();
    
    

    function scrollFunction(){
      const scrollY = window.scrollY //Don't get confused by what's scrolling - It's not the window
      const scrolltop = myref.current.scrollTop
      console.log(`onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`)
      console.log(myref.current.scrollTop);
      scrollTopFunc(scrolltop)
    }
    
    return (
        <div
          ref={myref}
          onScroll={scrollFunction}
          style={{
            border: '1px solid black',
            width: '600px',
            height: '200px',
            overflow: 'scroll',
          }} >
          <p>This demonstrates how to get the scrollTop position within a scrollable react component.</p>
          <p>ScrollTop is {scrollTop}</p>
          <p>This demonstrates how to get the scrollTop position within a scrollable react component.</p>
          <p>ScrollTop is {scrollTop}</p>
          <p>This demonstrates how to get the scrollTop position within a scrollable react component.</p>
          <p>ScrollTop is {scrollTop}</p>
          <p>This demonstrates how to get the scrollTop position within a scrollable react component.</p>
          <p>ScrollTop is {scrollTop}</p>
          <p>This demonstrates how to get the scrollTop position within a scrollable react component.</p>
          <p>ScrollTop is {scrollTop}</p>
          <p>This demonstrates how to get the scrollTop position within a scrollable react component.</p>
          <p>ScrollTop is {scrollTop}</p>
        </div>
      )
  }
  
  export default ScrollTest;