
import 'bulma/css/bulma.css'// here i used bulma css library (npm insall bulma) and import it 
import ProfileCard from './component/ProfileCard'
import Alexaimg from './picture/alexa.png'
import CortanaImg from './picture/cortana.png'
import SiriImg from './picture/siri.png'



function App() {
  
  return (
    <>
      <div>
        <section className='hero is-primary'>
          <div className='hero-body'>
            <p className='title'>Personal Digital Assistant</p>
          
          </div>
        </section>
       
        <div className="container">
          <section className="section">
            <div className='columns'>
              <div className="columns is -3">
                <ProfileCard 
                title="Alexa" 
                handel="@alexa99" 
                image={Alexaimg} 
                description="Alexa was created by amazon "
                />
              </div>
              <div className="columns is -3">
                <ProfileCard 
                title="Cortana" 
                handle="@cortana32" 
                image={CortanaImg} 
                description="Cortana was mad by Microsoft  "
                />
              </div>
              <div className="columns is -3">
                <ProfileCard 
                title="Siri" 
                handle="@siri01" 
                image={SiriImg}
                description="Siri was mad by Apple "
                  />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default App
