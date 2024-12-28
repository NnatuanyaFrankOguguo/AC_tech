import React, {useRef} from 'react'
import './Testimonial.css'
import right from '../../images/hero-Image/right.png'
import back from '../../images/hero-Image/back.png'
import godwills from '../../images/hero-Image/godwills.png'
import akin from '../../images/hero-Image/akin.png'
import king from '../../images/hero-Image/king.png'
import ruth from '../../images/hero-Image/ruth.png'
import sam from '../../images/hero-Image/sam.png'

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
        if(tx > -75){ /*so the logic is here if tx is greater than -50 which the only way tx can be greater than -50 is when the value of tx is counting donwards because with
            negative numbers increment is counted downwards, so when its -50% the code will not run because it has reach the last list -50 */
            tx -= 20; /*then if the above condition is true its get added with -25 to continue boosting its increment...now we will have to apply the current tx value in the ul element */
        }
        ul.current.style.transform = `translateX(${tx}%)`
    }

    const slideBack = () => {
        if(tx < 0) { /*for backwards now we do if know the current is at -50 the last list and tx(-50) is trully less than 0  */
            tx += 20; /* the tx will be added by 25 subsequently when back button is click to move the image backwards bcos + increment is backward -increment is forward thats why up logic is like that*/
        }
        ul.current.style.transform = `translateX(${tx}%)`
        
    }



  return (
    <div id='testimonial'>
        <div className='title'>
            <p>Testimonials</p>
            <h3>Reviews from our Satisfied Clients</h3>
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
                                <img src={sam} alt=''/>
                                <div> {/*for name and resignation(resides) */}
                                    <h6>Emmanuel Samuel</h6>
                                    <span>Lagos, Nigeria</span>
                                </div>
                                
                            </div>
                            <p>I have often spent too much money on local AC shops and they always leave my AC with more damage and more expenses. But with S.A Dairo's cooling and heating, I have been able to save cost and have no need to worry about additional damages. I am so excited to have had them work on my AC. I would highly recommend them for your AC and heating maintenance and repair. 5 stars all the way!!</p>

                        </div>
                    </li>

                    <li>
                        <div className='slide'> {/*we will display user information(like username, email gotten from the 
                        localstorage you will create it later like profile(but er are using static variable)) */}
                            <div className='userInfo'>
                                <img src={ruth} alt=''/>
                                <div> {/*for name and resignation(resides) */}
                                    <h6>Rutty Ene</h6>
                                    <span>Lagos, Nigeria</span>
                                </div>
                                
                            </div>
                            <p>Their service was timely and the technicians that came around today were very professional. After carrying out the installation and repair work, they  cleaned the space that the installation was carried out and they were open to observations and suggestions too. I am satisfied with their service. Thank you for coming.</p>

                        </div>
                    </li>
                    <li>
                        <div className='slide'> {/*we will display user information(like username, email gotten from the 
                        localstorage you will create it later like profile(but er are using static variable)) */}
                            <div className='userInfo'>
                                <img src={akin} alt=''/>
                                <div> {/*for name and resignation(resides) */}
                                    <h6>Akinwumi Efunshile</h6>
                                    <span>Lagos, Nigeria</span>
                                </div>
                            </div>
                            <p>Awesome service, got my AC running and cooking better now. Will recommend his service to anyone.</p>

                        </div>
                    </li>

                    <li>
                        <div className='slide'> {/*we will display user information(like username, email gotten from the 
                        localstorage you will create it later like profile(but er are using static variable)) */}
                            <div className='userInfo'>
                                <img src={godwills} alt=''/>
                                <div> {/*for name and resignation(resides) */}
                                    <h6>Godswill James</h6>
                                    <span>Lagos, Nigeria</span>
                                </div>
                            
                            </div>
                            <p>Thank your for your service. It was great having you guys around today. My AC is now working perfectly well. No leakage again as it use to before and its cooling more better now.</p>
                        </div>
                        {/*now we are adding the functionality that when we click on this next buttonit should display another user testimonial */}
                    </li>
                    

                    <li>
                        <div className='slide'> {/*we will display user information(like username, email gotten from the 
                        localstorage you will create it later like profile(but er are using static variable)) */}
                            <div className='userInfo'>
                                <img src={king} alt=''/>
                                <div> {/*for name and resignation(resides) */}
                                    <h6>Kingsley Martins</h6>
                                    <span>Lagos, Nigeria</span>
                                </div>
                            
                            </div>
                            <p>They are really big time professionals who are focused on giving their very best in what they do. They are skilled and experienced and their goal is to give each customer an amazing and satisfactory service. Kudos to them.</p>
                        </div>
                        {/*now we are adding the functionality that when we click on this next buttonit should display another user testimonial */}
                    </li>
                </ul>

            </div>
            
        </div>
    </div>
   
  )
}

export default Testimonial