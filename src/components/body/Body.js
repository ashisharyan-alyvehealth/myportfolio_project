import React from 'react';
import "./body.css"
import About from './about/About';
import Contact from './contact/Contact';
import Kill from './skill/Skill';
import Ork from './work/Work';
import Roject from './project/Project'
function Body() {
    return (
      <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Roject />
      </section>
      <section id="skills">
        <Kill />
      </section>
      <section id="work">
        <Ork />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>

        
    );
};

export default Body;