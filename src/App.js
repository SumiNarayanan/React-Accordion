import React from 'react';
import './App.css';
 import { useState } from 'react';
import Header from './components/Header';

const App = () => {
  // const [isActive, setIsActive] = useState(false);
  const accordionData = [
    {
    title: 'Website Design and Development',
    content:'Whether you need a wordpress website, a shopify site, or a custom fullstack application, we got you! No matter what kind of website or application you need, it will be made with clean and maintable code that follows modern development standards. We also have top notch designers that can make unique designs that will make your website look different and unique. Not to mention that we also provide 24/7 website maintenance so that you get all the support you need'
    },
      {
        title: 'Website Analytics and Performance',
        content :'We believe that in order to have a successful website, you need to constantly adjust and adapt to the data provided by your website visitors. Here at Pierre Web Development, we have narrowed down the specific key performance indicators that will dramatically boost your success with connecting to target markets. We will provide a basic metric dashboard based on how much traffic your site gets, detailed analytical reports that show which parts of your website is the most popular among visitors as well as access to tools you can use to make meaningful decisions based on this data'},
          {
            title: 'Digital Marketing',
            content:`We know that every great website focuses on helping you get more business and building a brand that your ideal customers will love and support. We can help you set up a great, SEO-focused content strategy, a paid ads campaign, email marketing integration with Mailchimp as well as a social media marketing campaign. We also use popular website analytic tools to track your site's performance and provide you with weekly analytic reports to help bolster your growth.
          `},
          ];
    
  

  const { title, content } = accordionData;

  return (
    <React.Fragment>
      <h1>Simple Accordion</h1>
      <div className="accordion">
        {accordionData.map(({title,content})=>(
        <Header title={title} content={content}/>
        ))}
        {/* <div className="accordion-item">
          <div className="accordion-title" onClick={()=>setIsActive(!isActive)}>
            
            <div>{title}</div>
            <div>{isActive ? '-' : '+'}</div>
            
          </div>
          {isActive && <div className="accordion-content">{content}</div>}
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default App;