import React, {useRef} from 'react'
import './Testimonial.css'
import right from '../../images/hero-Image/right.png'
import back from '../../images/hero-Image/back.png'
import woman from '../../images/hero-Image/woman.png'
import profile from '../../images/hero-Image/profile.png'

const Testimonial = () => {

    // ------------------------------------------------------------------------------
    /* the logic to make this move is that each testimonials in the unordered contains 25% percent width for that makes up 100% for all
    (100% width in the hidden part 100% width in the shown part making it 200% in total) so when we move the ul tag by 25% it will display
    the third width increment it by another 25% again which is 50% it will display the fourth and so on and so forth( the way we move in the css)
    is transform translate X horinzontal we go to css
    so we have to shift the ul tag the parent by 25% each time the button is click */
    // selecting the ul tag so we can be able to shift it when either of the button is clicked with useRef
    // now we can ass the ul tag using the variable slider

    const ul = useRef();
    let tx = 0; /*initial value to display first list and second list tx(translate X) */

    const slideNext = () => {
        if(tx > -50){ /*so the logic is here if tx is greater than -50 which the only way tx can be greater than -50 is when the value of tx is counting donwards because with
            negative numbers increment is counted downwards, so when its -50% the code will not run because it has reach the last list -50 */
            tx -= 25; /*then if the above condition is true its get added with -25 to continue boosting its increment...now we will have to apply the current tx value in the ul element */
        }
        ul.current.style.transform = `translateX(${tx}%)`
    }

    const slideBack = () => {
        if(tx < 0) { /*for backwards now we do if know the current is at -50 the last list and tx(-50) is trully less than 0  */
            tx += 25; /* the tx will be added by 25 subsequently when back button is click to move the image backwards bcos + increment is backward -increment is forward thats why up logic is like that*/
        }
        ul.current.style.transform = `translateX(${tx}%)`
        
    }



  return (
    <>
        <div className='title'>
            <p>Testimonials</p>
            <h3>Reviews from our Satisfied Guests</h3>
        </div>

        <div className='testimonials'>
            <img src={right} alt='' className='nextBtn' onClick={slideNext}/>
            <img src={back} alt='' className='backBtn' onClick={slideBack}/>

            <div className='slider'>{/*done with styling the nextbtn now with the cards */}
                <ul ref={ul}>
                    <li>
                        <div className='slide'> {/*we will display user information(like username, email gotten from the 
                        localstorage you will create it later like profile(but er are using static variable)) */}
                            <div className='userInfo'>
                                <img src={profile} alt=''/>
                                <div> {/*for name and resignation(resides) */}
                                    <h6>William Jackson</h6>
                                    <span>Lagos, Nigeria</span>
                                </div>
                                
                            </div>
                            <p>Lorem  quas doloremque, officiis quos eius dolorum ipsam laborum pariatur 
                            quibusdam labore dolorem, delectus iure perferendis maxime itaque minus soluta.</p>

                        </div>
                    </li>

                    <li>
                        <div className='slide'> {/*we will display user information(like username, email gotten from the 
                        localstorage you will create it later like profile(but er are using static variable)) */}
                            <div className='userInfo'>
                                <img src={woman} alt=''/>
                                <div> {/*for name and resignation(resides) */}
                                    <h6>William Jackson</h6>
                                    <span>Lagos, Nigeria</span>
                                </div>
                                
                            </div>
                            <p>Lorem ipsum dolor sit  quas doloremque, officiis quos eius dolorum ipsam laborum pariatur 
                            quibusdam labore dolorem, delectus iure perferendis maxime itaque minus soluta.</p>

                        </div>
                    </li>
                    <li>
                        <div className='slide'> {/*we will display user information(like username, email gotten from the 
                        localstorage you will create it later like profile(but er are using static variable)) */}
                            <div className='userInfo'>
                                <img src={woman} alt=''/>
                                <div> {/*for name and resignation(resides) */}
                                    <h6>William Jackson</h6>
                                    <span>Lagos, Nigeria</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequuntur quas doloremque, officiis quos eius dolorum ipsam laborum pariatur 
                                quibusdam labore dolorem, delectus iure perferendis maxime itaque minus soluta.</p>

                        </div>
                    </li>

                    <li>
                        <div className='slide'> {/*we will display user information(like username, email gotten from the 
                        localstorage you will create it later like profile(but er are using static variable)) */}
                            <div className='userInfo'>
                                <img src={profile} alt=''/>
                                <div> {/*for name and resignation(resides) */}
                                    <h6>William Jackson</h6>
                                    <span>Lagos, Nigeria</span>
                                </div>
                            
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequuntur quas doloremque, officiis quos eius dolorum ipsam laborum pariatur 
                            quibusdam labore dolorem, delectus iure perferendis maxime itaque minus soluta.</p>
                        </div>
                        {/*now we are adding the functionality that when we click on this next buttonit should display another user testimonial */}
                    </li>
                    
                </ul>

            </div>
            
        </div>
    </>
   
  )
}

export default Testimonial