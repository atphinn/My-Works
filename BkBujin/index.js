import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {withScriptjs, withGoogleMap, GoogleMap,Marker} from "react-google-maps"
import { compose, withProps } from "recompose"

const MyMapComponent = compose(
  withProps({
    googleMapURL:  "https://maps.googleapis.com/maps/api/js?key=AIzaSyByVYdAAV-bsEE8Qugi0RrJCn2m_5kMpI4&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
}),
withScriptjs,
withGoogleMap
)

(props => (
  <GoogleMap defaultZoom={17} defaultCenter={{ lat: 40.678919, lng: -73.982449}}>
    {props.isMarkerShown && (
      <Marker position={{ lat: 40.678919, lng: -73.982449 }} />

    )}
  </GoogleMap>
));


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="mainBody">
      <div id="mainBanner">
        <Link
        to="/page-2/">
          <img src={require('../images/about.jpg')} alt="jumbotron" className="img-responsive" />
        </Link>
      </div>
        <div id="mainBanner"> 
          <img src={require('../images/aboutTop.jpg')} alt="Punch and evasion" className="img-responsive" />
        </div>
        <div id="typeContainer">
          <h1>What is BK Muzosa Bujinkan</h1>
          <p>Brooklyn Muzosa Bujikan Dojo embraces the spirit of Budo - an armed and unarmed historical style of Martial Arts that pre dates modern practices such a Judo and Akido. Known as a living art, Bujinkan Budo Taijutsu is applicable within our modern culture.Training in the evenings in all weather, we believe the way of Budo, is to practice it in all situations and in all environments.</p>
          <p><b>LOCATION:Training takes place from 7:00 pm-9:00 pm on the porch and surrounding grounds of Litchfield Villa in Prospect Park </b></p>
        </div>
        <div id="bujinBanner">
          <img src={require('../images/masaaki-hatsumi.jpg')} alt="Soke" className="img-responsive" />
          <div id="typeContainer2">
            <h1>History of the Bujinkan</h1>


              <p>The Bujinkan Dojo was organized in the early 1970's by Masaaki Hatsumi. This organization is comprised of nine distinct schools of ancient Japanese martial arts, with traceable histories from the 9th century and earlier. Hatsumi-sensei inherited these ryuha from his teacher, the late Toshitsugu Takamatsu, in 1972.The Bujinkan Budo Taijutsu system of martial arts emphasizes natural and relaxed body movement. This martial art is comprised of authentic techniques from ancient samurai and ninja combat arts, taught within both their historical contexts as well as within the modern millieu.

              The subtle destruction of the attacker's balance and rhythm and proper control of distance and timing are a primary focus of Bujinkan Budo Taijutsu. These principles allow even smaller persons to overcome larger and more powerful opponents.
                <a href="https://www.muzosa.com/articles" target="_blank" ><h3> <u>See more at our main site</u></h3></a>
              </p>
            </div>
        </div>
    </div>
    <div id='map'>
    <MyMapComponent isMarkerShown/>
    </div>
    <div id="contactBody">
        <div id="contactInfo">
        <a href="https://www.muzosa.com/contact" target="_blank" >
          <h1>Contact us to try a free class!</h1>
        </a>
        <p>LOCATION:Training takes place from 7:00 pm-9:00 pm at Dance Wave studios 182 4th Ave - Degraw Street</p>
        <p>Take the R train to Union street and walk to Degraw along 4th ave</p>
        <img src={require('../images/647.jpg')} alt="Litchfield villa" className="img-responsive" />
      </div>
    </div>
  </Layout>
)

export default IndexPage
