import React from 'react'
import About from '../../components/aboutsection/About'
import Video from '../../components/Videosection/Video'
import Counter from '../../components/counter/Counter'

const Home = () => {
  return (
    <div>
        <Counter/>
        <About/>
        <Video/>
    </div>
  )
}

export default Home
