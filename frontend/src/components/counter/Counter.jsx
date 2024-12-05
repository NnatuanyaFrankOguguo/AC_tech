import React, {useEffect, useState} from 'react'
import './Counter.css'
import plus from './plus.png'

const Counter = () => {

   const [count, setCount] = useState(0);
   const [count2, setCount2] = useState(0);
   const [count3, setCount3] = useState(0);
   const [count4, setCount4] = useState(0);

   //maximum values for each counter
   const maxCount = [150, 237, 83, 104]
   const counts = [count, count2, count3, count4]
   const setCounts = [setCount, setCount2, setCount3, setCount4]

   const handleScroll = () => {
    //adjusting the scroll position based on when you want the counter to start
    const triggerPoint = window.innerHeight * 0.55;
    if(window.scrollY > triggerPoint)
    {
        startCounting();
        //remove the event lsitener after the first trigger to avoid multiple counts
        window.removeEventListener("scroll", handleScroll)
    }
   };

   const startCounting = () => {
    counts.forEach((count, index) => {
        let currentCount = 0;
        const interval = setInterval(()=>{
            if(currentCount < maxCount[index])
            {
                currentCount += 1; //increment count
                setCounts[index](currentCount); //look at it carefully and you will understand Frank
            } else {
                clearInterval(interval); //clear interval when maximum is reached
            }
        }, 30); // Adjust speed of counting
    });
   };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll)  // Clean up on unmount
        }
    }, [])



  return (
    <div className='count-container'>
        <div className="count-heading">
            <div className="count" max-data={maxCount[0]}>{count} <span><img className='plus-img' src={plus} alt="plus" /></span></div>
            <h3 className='counter-text'>Projects Completed</h3>   
        </div>
        <div className="count-heading">
            <div className="count" max-data={maxCount[1]}>{count2} <span><img className='plus-img' src={plus} alt="plus" /></span></div>
            <h3  className='counter-text'>Happy Client</h3>   
        </div>
        <div className="count-heading">
            <div className="count" max-data={maxCount[2]}>{count3} <span><img className='plus-img' src={plus} alt="plus" /></span></div>
            <h3  className='counter-text'>Different Cities</h3>   
        </div>
        <div className="count-heading">
            <div className="count" max-data={maxCount[3]}>{count4} <span><img className='plus-img' src={plus} alt="plus" /></span></div>
            <h3 className='counter-text'>Reviews</h3>   
        </div>
    </div>
  )
}

export default Counter