import React from "react"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
import Perk from "../components/Perk/perk"
import Button from "../components/Button/button"
import Services from "../components/Services/services"
import Package from "../components/Package/package"
import Contact from "../components/Contact/contact"
import { Link } from "react-scroll"

import perk1Img from "../images/speed.svg"
import perk2Img from "../images/piggy-bank.svg"
import perk3Img from "../images/friendly-staff.svg"

import { IconContext } from "react-icons"
import { MdDone, MdClear } from "react-icons/md"

const HomePage = () => {
  return (
    <>
      <Banner />
      <TextBlock
        id="about"
        title="50% of the people suffer from some kind of workplace related stress symptoms."
        paragraph="With different scientifically backed techniques we aim to bring a revolution in the world of unwinding after a hard day's work. Choose what you want to do according to your preference."
      >
        <Link to="perks" smooth={true} duration={500}>
          <Button label="Tell Me More" cta="Tell Me More!" />
        </Link>
      </TextBlock>
      <TextBlockImg
        id="perks"
        title="We provide you the tools to help you create the best version of your life!"
        subtitle="Imagine your life is a cup - it's your cup of life! All your life experiences is like the drink that you fill in this cup. Now imagine if the cup is filled with dirty water then no matter however healthy addition you make to your cup it will still get dirty. That's what happens to life too, you need to empty your cup from time to time, in order to fill it up with good things. "
      >
        <div className="flex-container trio-block">
          <Perk
            img={perk1Img}
            alt="convinient (time)"
            title="Convenient"
            content="Book a slot at any time of the day."
          />
          <Perk
            img={perk2Img}
            alt="confidential"
            title="Confidential"
            content="Let your heart out without any fear of rejection or judgement with our trained listeners. "
          />
          <Perk
            img={perk3Img}
            alt="friendly"
            title="Friendly"
            content="Find your tribe - make friends and connect with like minded people."
          />
        </div>
      </TextBlockImg>
      <Services
        title="Services"
        para="Choose the solution that works for you. Currently we are offering these services ( first session is FREE! )"
      >
        <IconContext.Provider
          value={{
            color: "#7FFF00",
            size: "1.2em",
            style: { verticalAlign: "middle", marginRight: "5px" },
          }}
        >
          <Package title="Excursion">
           
            <ul>
              <li>
                <MdDone />
                Weekly excursion tours
              </li>
              <li>
                <MdDone />
                Register and hop in
              </li>
              <li>
                <MdDone />
                Community experience
              </li>
              {/* <li className="linethrough">
                <MdClear color="red" />
                24/7 Support
              </li> */}
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="I want this!" />
            </Link>
          </Package>
          <Package title="Curated Workshops" active={true}>
            <ul>
              <li>
                <MdDone />
                experiential learning of life skills
              </li>
              <li>
                <MdDone />
                facilitation through art mediums
              </li>
              <li>
                <MdDone />
                explorative and innovative
              </li>
              <li>
                <MdDone />
                initiaing reflective process
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="I want this!" />
            </Link>
          </Package>
          <Package title="Vent-O-Friend">
            <ul>
              <li>
                <MdDone />
                15 mins call session
              </li>
              <li>
                <MdDone />
                schedule on a day's notice
              </li>
              <li>
                <MdDone />
                anonynous and confidential
              </li>
              {/* <li className="linethrough">
                <MdClear color="red" />
                Dedicated Advisor
              </li> */}
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="I want this!" />
            </Link>
          </Package>
        </IconContext.Provider>
      </Services>
      <Contact
        id="contact"
        title="Fill the relevant form below"
        subtitle="Learn the essential tools to navigate in today's hustling world. Fill the form and we will connect with you within a day."
      />
    </>
  )
}

export default HomePage
