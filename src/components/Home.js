import React from 'react'
import Notes from './Notes'
import Footer from './Footer';

const Home = (props) => {
  
  const { showAlert } = props;
  return (
    <>
      <div className="container">
        <Notes showAlert={showAlert} />
      </div>
      <Footer />
    </>
  )
}

export default Home