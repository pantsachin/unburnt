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
        title="Don't know how to de-stress yourself after a long day of work? Don't worry, we are here to help!"
        paragraph="With different scientifically backed techniques we aim to bring a revolution in the world of unwinding after a hard day's work. Choose what you want to do according to your mood."
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
            content="Book a slot according to your convenience"
          />
          <Perk
            img={perk2Img}
            alt="confidential"
            title="Confidential"
            content="Let your heart out without any fear of rejection or judgement with our trained listeners"
          />
          <Perk
            img={perk3Img}
            alt="friendly"
            title="Friendly"
            content="It is a need for social animals to connect, share and make friendly relations"
          />
        </div>
      </TextBlockImg>
      <Services
        title="Services"
        para="Choose the solution that works for you. Currently we are offering these services"
      >
        <IconContext.Provider
          value={{
            color: "#7FFF00",
            size: "1.2em",
            style: { verticalAlign: "middle", marginRight: "5px" },
          }}
        >
          <Package title="Standard">
            <ul>
              <li>
                <MdDone />1 User
              </li>
              <li>
                <MdDone />
                1GB Storage
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                Dedicated Advisor
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                24/7 Support
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="I want this!" />
            </Link>
          </Package>
          <Package title="Hyper" active={true}>
            <ul>
              <li>
                <MdDone />
                24/7 Support
              </li>
              <li>
                <MdDone />
                Dedicated Advisor
              </li>
              <li>
                <MdDone />
                Unlimited Storage
              </li>
              <li>
                <MdDone />
                Unlimited Users
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="I want this!" />
            </Link>
          </Package>
          <Package title="Super">
            <ul>
              <li>
                <MdDone />
                10 Users
              </li>
              <li>
                <MdDone />
                500GB Storage
              </li>
              <li>
                <MdDone />
                Advice Support
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                Dedicated Advisor
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button label="I want this" cta="I want this!" />
            </Link>
          </Package>
        </IconContext.Provider>
      </Services>
      <Contact
        id="contact"
        title="Contact Startup today and see how we can help your business grow"
        subtitle="Every second counts when you're looking to get your new business started. Drop Startup a message and one of our representatives will be in contact"
      />
    </>
  )
}

export default HomePage
