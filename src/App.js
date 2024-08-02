import React from 'react';
import Header from './Header'; // Import Header component
import Card from './Card';
import "./App.css"
import Button from './Button';
import SignUp from './Signup';
import Footer from './Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <img style={{width : 1500}} src={require('C:\\Users\\Daiyan Khan\\OneDrive\\Desktop\\Daiyan\\STUDY\\Deakin\\Year 2 Trim 2\\SIT313_Frontend\\4.1P\\my-app\\src\\images\\Deakin.avif')} alt="deakin pic" />
      <h1>Featured Articles</h1>
      <div className='ArticleSection'>
        
      <
      Card 
          image={require('C:\\Users\\Daiyan Khan\\OneDrive\\Desktop\\Daiyan\\STUDY\\Deakin\\Year 2 Trim 2\\SIT313_Frontend\\4.1P\\my-app\\src\\images\\React.avif')}
          title="Article 1" 
          description="Description for Article 1." 
          author="Author 1" 
          rating="3.5" />
          
      <
      Card 
          image={require('C:\\Users\\Daiyan Khan\\OneDrive\\Desktop\\Daiyan\\STUDY\\Deakin\\Year 2 Trim 2\\SIT313_Frontend\\4.1P\\my-app\\src\\images\\React.avif')}
          title="Article 2" 
          description="Description for Article 2." 
          author="Author 2" 
          rating="4.0" />

      <
      Card 
          image={require('C:\\Users\\Daiyan Khan\\OneDrive\\Desktop\\Daiyan\\STUDY\\Deakin\\Year 2 Trim 2\\SIT313_Frontend\\4.1P\\my-app\\src\\images\\React.avif')}
          title="Article 3" 
          description="Description for Article 3." 
          author="Author 3" 
          rating="4.5" />

      </div>
      <Button text="See all articles" />
      <h1>Featured Tutorials</h1>
      <div className='TutorialSection'>
      <Card
          image={require('C:\\Users\\Daiyan Khan\\OneDrive\\Desktop\\Daiyan\\STUDY\\Deakin\\Year 2 Trim 2\\SIT313_Frontend\\4.1P\\my-app\\src\\images\\Deakin.avif')}
          title="Article 1" 
          description="Description for Article 1." 
          author="Author 1" 
          rating="4.7" />
      <Card
          image={require('C:\\Users\\Daiyan Khan\\OneDrive\\Desktop\\Daiyan\\STUDY\\Deakin\\Year 2 Trim 2\\SIT313_Frontend\\4.1P\\my-app\\src\\images\\Deakin.avif')}
          title="Article 2" 
          description="Description for Article 2." 
          author="Author 2" 
          rating="3.8" />
      <Card
          image={require('C:\\Users\\Daiyan Khan\\OneDrive\\Desktop\\Daiyan\\STUDY\\Deakin\\Year 2 Trim 2\\SIT313_Frontend\\4.1P\\my-app\\src\\images\\Deakin.avif')}
          title="Article 3" 
          description="Description for Article 3." 
          author="Author 3" 
          rating="4.5" />
      
      </div>
      <Button text="See all tutorials" />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
