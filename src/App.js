import 'bulma/css/bulma.css'
import ProfileCard from './ProfileCard';  
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';
function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>
      <div className="container">
          <section className="section">
              <div className="columns">
                <div className="column is-3">
                  <ProfileCard
                   title ="Alexa" 
                   handle= "@alexa99" 
                   image ={AlexaImage}
                   description = "Alexa is Amazon's AI-powered voice assistant that interacts with users via smart devices, offering a wide range of services such as answering questions, playing music, providing weather updates, controlling smart home devices, and more. Integrated into Amazon's Echo devices, Alexa uses machine learning to continuously improve, delivering personalized experiences and enhancing convenience for users in everyday tasks through voice commands."/>
                </div>
                <div className="column is-3">
                  <ProfileCard 
                    title ="Cortana" 
                    handle= "@cortana32" 
                    image ={CortanaImage}
                    description = "Cortana is Microsoft's virtual assistant, designed to help users with tasks through voice commands. Integrated into Windows and other Microsoft products, it assists with reminders, managing calendars, answering questions, and controlling smart devices. Cortana aims to streamline productivity and offer personalized assistance, adapting to users' preferences and needs over time."/>
                </div>
                <div className="column is-3">
                  <ProfileCard 
                    title ="Siri" 
                    handle= "@siri01" 
                    image ={SiriImage}
                    description = "Siri is Apple's virtual assistant, enabling users to interact with their devices using voice commands.  Integrated across Apple products, Siri performs tasks like setting reminders, sending messages, making calls, answering questions, and controlling smart home devices. Siri provides hands-free convenience while continuously improving through machine learning to deliver personalized assistance."/>
                </div>
              </div>
          </section>
      </div>
      
      

      
    </div>
  );
}

export default App;
