import Profile from "./profile/components/Profile";
import PropTypes from "prop-types";
import Navbar from "./profile/components/Navbar";
import Footer from "./profile/components/Footer";
function Appp() {
  const styleObject = { backgroundColor:"#ecf0f1", color: "#1e272e", textAlign: "center",borderRadius:"5px" };
  const prof = [
    {
      fullName: "Diego Maradona",
      bio: "Born October 30, 1960 in Lanús and died November 25, 2020 in Tigre, is an Argentinian international footballer who became a coach. During his playing career, between 1976 and 1997, he played as an attacking midfielder in jersey no.10.",
      profession: "Footballeur international",
    },
  ];
  return (
    <div className="App" style={styleObject}>
      <Navbar/>
      <Profile el={prof} />
      <Footer/>
    </div>
  );
}
Profile.PropTypes = {
  el: PropTypes.object,
};
export default Appp;
