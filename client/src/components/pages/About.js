import {React} from 'react';

const About =()  =>{
    return(
        <div classsName='container'>
            <div className='py-4'>
                {/*<h1>Project Info :</h1>*/}
                <h4>
                <p className="lead">Intro :This website is created with the help of React js+Node js in which various topic of React is used by  the developer like hooks,Effect,Routing etc . The main aim of this website is to get  clear Understanding of React + Node js and get experience in both of the Technology. </p>
                <p className='lead'>React js: React js is used as the front end which help to create the User-Interface part various pages are developed with react js help like home page,page for adding the user,viewing the details of the user .</p>
                <p className='lead'> Node js:In this project Node js is used for backend part with the help of which API's are developed which performs the query part based on the requirement from the frontend and provide the result </p>
                <p className="lead">Database: Database used in this website is of Mysql which perform basic CRUD functionality on the user like updating ,deleting,and adding the User .</p>
                <p className="lead">functionality : It stores the information of the user by providing id to each user along with the name ,username,phoneno,email address . It provide basic functionality like updating the user,Deleting the existing user and view all the information of the user which  helps to manage each user information easily </p>
                </h4>    
            </div>
            <p>© Mayank  Mishra</p>
        </div>
    )
}
export default About;