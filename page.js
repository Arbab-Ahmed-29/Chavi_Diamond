"use client";

import "../app/themes/globalstyle";
import "./app.css";
import styled from "styled-components";
import image from "next/image";
export default function Home() {
  const Main = styled.div`
    width: 100%;
    height: 100vh;
  `;
  const FirstNav = styled.div`
    width: 100%;
    height: 5vh;
    background: linear-gradient(to right, #012634, #007a64);
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0vh 2vw;

     @media (max-width: 320px) {
      width: 100%;
    height: 5vh;
    background: linear-gradient(to right, #012634, #007a64);
    color: white;
    display: flex;
    font-size: 2vh;
    align-items: center;
    justify-content: center;
    padding: 0vh 2vw;
    }
    
  `;
  const Pin = styled.div`
  @media (max-width: 320px){
  display:none;
  }
  `;

  const Navbar = styled.div`
    width: 100%;
    height: 17.5vh;
    padding: 2vh 3vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgb(234, 233, 233);


    @media (max-width: 320px){
     display: flex;
    align-items: center;
    justify-content: space-between;
    height:9vh;
    }
  `;
  const Gemlay = styled.div`
    width: 12vw;
    height: 80%;
    // background-color:red;
    font-size: 3.4vw;
    font-family: cursive;


    @media (max-width: 320px){
    width: 12vw;
    height: 80%;
    // background-color:red;
    font-size: 6vw;
    font-family: cursive;
    }
    
  `;
  const Input = styled.input`
    width: 29vw;
    height: 8vh;
    border: 2px solid #007a64;
    border-radius: 12px;

    @media (max-width: 320px){
    display:none;
    }
    
  `;
  const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5vw;

    @media (max-width: 320px){
    dipslay:flex;
    alitn-items:center;
    justify-content:space-between;
    }
  `;
  const Options = styled.div`
    width: 30vw;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    // gap:10px
    
    @media (max-width: 320px){
    display:none;
    }
  `;
  const Opts = styled.div`
    width: 24%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:2.4vh;
    flex-direction:column;
    border-right: 1px solid rgb(234, 233, 233);
  `;
  const SignUp = styled.div`
    width: 10vw;
    height: 80%;
    display: flex;
    align-items: center;
    gap:10px;
    justify-content: center;

    @media (max-width: 320px){
    width: 15vw;
    font-size:2.1vh;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    }
  `;
  const MinDiv = styled.div`
    width: 100%;
    height: 7.5vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2vw;
    border-bottom: 1px solid rgb(234, 233, 233);

    @media (max-width: 320px){
    background: linear-gradient(to right, #012634, #007a64);  
    height:3vh;
    }  `;

    const Pra = styled.div`
    @media (max-width: 320px){
    display:none;
    }
    `;
  const Locations = styled.div`
    width: 100%;
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 1vh 2vw;
    font-size: 2.1vh;

    @media (max-width: 320px){
    display:none;
    }
  `;
  const Span = styled.div`
    color: gray;
  `;
  const Product = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 320px){
      height: 20vh;
      display: inline;
    }
  `;
  const RingImage = styled.div`
    width: 42%;
    height: 100%;
    display:flex;
    align-items:center;
    justify-content:center;
    @media (max-width: 320px){
    width: 100%;
    height: 50%;
    }
    
  `;
  const RingDetails = styled.div`
    width: 55%;
    height: 100%;
    background-color: #f8fffe;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 320px){
    display:inline;
    height:60%;
    background-color:gray
    }
  `;
  const WishList = styled.div`
    width: 55%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 320px){
    display:inline;

    }
  `;

  const Content = styled.div`
    width: 95%;
    height: 90%;

    @media (max-width: 320px){
    height: 80%; 
    }
  `;
  const Prizing = styled.div`
    width: 100%;
    height: 30%;
    padding: 3vh 2vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 1px solid rgb(234, 233, 233);
  `;
  const Rupees = styled.div`
    color: green;
    font-size: 1.6vw;
    font-weight: 700;

    @media (max-width: 320px){
    font-size:2.5vh;
    }
  `;
  const Mrp = styled.div`
    font-size: 1.9vh;
  `;
  const Dets = styled.div`
    width: 95%;
    height: 70%;
    padding: 2vh 2vw;
  `;
  const Box = styled.div`
    width: 70%;
    height: 5vh;
    display: flex;
    align-items: center;
    gap: 10px;
  `;
  const Cricles = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 5px;
  `;
  const Circle = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid gray;
    border-radius: 50%;
    font-size: 2.2vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const BoxTwo = styled.div`
    width: 90%;
    height: 5vh;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 15px;
  `;
  const CriclesTwo = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 15px;
  `;
  const CircleTwo = styled.div`
    width: 10vw;
    height: 6vh;
    border: 1px solid rgb(234, 233, 233);
    border-radius: 20px;
    font-size: 2.2vh;
    display: flex;
    align-items: center;
    justify-content: center;


    @media (max-width: 320px){
    width: 20vw;
    }
  `;

  const BoxThree = styled.div`
    width: 90%;
    height: 5vh;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 15px;

  `;
  const CriclesThree = styled.div`
    width: 100%;
    height: 3vw;
    display: flex;
    // align-items: center;
    gap: 20px;
    margin-top: 15px;
  `;
  const CircleThree = styled.div`
    width: 80px;
    height: 30px;
    border: 1px solid rgb(234, 233, 233);
    border-radius: 20px;
    font-size: 2.2vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    @media (max-width: 320px){
    margin-top:10px;
    height: 30px;
    }
  `;
  const DivBtn = styled.div`
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: start;
    align-items: end;

    @media (max-width: 320px){
    display:none;
    }
  `;
  const Button = styled.div`
    width: 75%;
    height: 10vh;
    background: linear-gradient(to bottom, #012634, #007a64);
    align-items: center;
    color: white;
    display: flex;
    justify-content: center;
    border-top-right-radius: 70px;

    @media (max-width: 320px){
    display:none;
    }
  `;

  const Availability = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    // justify-content:center;

    @media (max-width: 320px){
    width:95%;
    height:50%;
    }

  `;
  const Container = styled.div`
    width: 95%;
    height: 25%;

    @media (max-width: 320px){
    display:none;
    }
  `;
  const Demand = styled.div`
  display:flex;
  align-items:center;
  justify:content:center;

  `;
  const FirstLine = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    // align-items:center;
    justify-content: space-between;
    padding: 4vh 2vw;

    @media (max-width: 320px){
    display:none;
    }
  `;
  const LikeBtn = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    // align-items:center;
    justify-content: end;
    gap: 10px;

    @media (max-width: 320px){
    height:0;
    display:none;
    }
  `;
  const Quantity = styled.div`
    width: 95%;
    height: 63%;
    padding: 2vh 2vw;

    @media (max-width: 320px){
    width:100%;
    }
  `;

  const BoxFour = styled.div`
    width: 70%;
    height: 5vh;
    display: flex;
    align-items: center;
    gap: 10px;
    // margin-bottom: 15px;


    @media (max-width: 320px){
    }
  `;
  // const BoxFourth = styled.div`
  //   width: 70%;
  //   height: 5vh;
  //   display: none;
  //   align-items: center;
  //   gap: 10px;
  //   // margin-bottom: 15px;

  //   @media (max-width: 320px){
  //   display:flex;
    
  //   }
  // `;
  const CriclesFour = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 5px;
    margin-bottom: 15px;
  `;
  // const CriclesFourth = styled.div`
  //   display: none;
  //   align-items: center;
  //   gap: 20px;
  //   margin-top: 5px;
  //   margin-bottom: 15px;

  //   @media (max-width: 320px){
  //   display:block;
  //   }
  // `;
  const Yellow = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid rgb(234, 233, 233);
    border-radius: 50%;
    font-size: 2.2vh;
    display: flex;
    align-items: center;
    background-color: #ffde6a;
    justify-content: center;
  `;
  // const Yellowth = styled.div`
  //   width: 30px;
  //   height: 30px;
  //   border: 1px solid rgb(234, 233, 233);
  //   border-radius: 50%;
  //   font-size: 2.2vh;
  //   display: none;
  //   align-items: center;
  //   background-color: #ffde6a;
  //   justify-content: center;

  //   @media (max-width: 320px){
  //   display:block;
  //   }
  // `;
  const Gray = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid rgb(234, 233, 233);
    border-radius: 50%;
    font-size: 2.2vh;
    display: flex;
    align-items: center;
    background-color: #c2c0c0;
    justify-content: center;
  `;
  const Brown = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid rgb(234, 233, 233);
    border-radius: 50%;
    font-size: 2.2vh;
    display: flex;
    align-items: center;
    background-color: #bf796e;
    justify-content: center;
  `;
  
  
  const Counts = styled.div`
    width: 85%;
    height: 13%;
    padding-left:2vw;
    border: 1px solid rgb(234, 233, 233);
    border-radius: 20px;
    display: flex;
    // margin-left: 15px;
    align-items: center;
  `;
  const End = styled.div`
    display: flex;
    align-items: end;
    justify-content: center;
  `;
  const PincodeDiv = styled.div`
    width: 95%;
  `;
  const Delivery = styled.div`
    font-size: 2.5vh;
    font-weight: 800;
    margin-top: 15px;
  `;
  const PinCode = styled.div`
    width: 90%;
    // margin-left: 15px;
    height: 8vh;
    border: 1px solid rgb(234, 233, 233);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
  `;

  const DivBtnTwo = styled.div`
    width: 100%;
    height: 20.4vh;
    margin-top: 30px;
    display: flex;
    justify-content: end;
    align-items: end;

    @media (max-width: 320px){
    display:none;
    }
  `;
  const ButtonTwo = styled.div`
    width: 100%;
    height: 10vh;
    background: linear-gradient(to bottom, #012634, #007a64);
    align-items: center;
    color: white;
    display: flex;
    justify-content: center;
    border-top-left-radius: 50px;

    @media (max-width: 320px){
    display:none;
    }
  `;
  const TenX = styled.div`
    width: 100%;
    height: 8vh;

    @media (max-width: 320px){
    display:none;
    }
  `;

  const Para = styled.div`
    width: 45%;
    height: 100%;
    background-color: #f8fffe;
    font-size: 2.2vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 320px){
    
    }
  `;

  const Information = styled.div`
    width: 100%;
    height: 51vh;

    padding: 2vh 1vw;

  `;
  const Info = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fafafa;
    padding: 2vh 3vw;

    @media (max-width: 320px){
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    }
  `;

  const PdInfo = styled.div`
    width: 22%;
    height: 8vh;
    font-size: 3vh;
    display: flex;
    align-item: center;
    padding-top: 2vh;
    justify-content: center;
    background-color: white;

    @media (max-width: 320px){
    font-size: 2.1vh;
    width:50vw;
}
  `;
  const BigContainer = styled.div`
    width: 100%;
    height: 43vh;
    display: flex;
    justify-content: space-between;

    @media (max-width: 320px){
    flex-direction:column;
    height:100vh;
    }
  `;
  const ThreeBoxes = styled.div`
    width: 52%;
    height: 100%;

    display: flex;
    justify-content: space-between;

    @media (max-width: 320px){
    flex-wrap: wrap;
    width:100%;
        align-items: center;
    justify-content:space-evenly;

    }
  `;

  const SmallBox = styled.div`
    width: 100%;
    height: 80%;
    padding: 1vh 1vw;
    margin-top: 15px;

    @media (max-width: 320px){
    }
  `;
  const SmallBoxCenter = styled.div`
width:100%;
height:80%;
padding: 1vh 1vw;
margin-top:15px
border-left:1px solid rgb(234, 233, 233)
border-right:1px solid rgb(234, 233, 233);


`;
  const NestedBoxes = styled.div`
    width: 33%;
    height: 100%;
    display: flex;
    padding: 2vh 1vw;

    @media (max-width: 320px){
    width:45%;

    }
  `;
  const NestedBoxesCenter = styled.div`
    width: 33.333%;
    height: 100%;
    padding: 2vh 0vw;


        @media (max-width: 320px){
    display:none;
    }
  `;
  const P = styled.div`
    font-size: 2.1vh;

    @media (max-width: 320px){
    font-size:1.4vh;
    }
  `;

  const Hide = styled.div`
  font-size: 2.1vh;

  @media (max-width: 320px){
  display:none;
  }
`;
  const FourBoxes = styled.div`
    width: 48%;
    height: 100%;
    display: flex;
    padding: 6vh 3vw;
    align-items: start;
    justify-content: space-between;

    @media (max-width: 320px){
    display:flex;
    justify-content:space-between;
    gap:10px;
    width:95%;
    height:100%;
    padding:0vh 0vh;
    }
  `;
  const NestedFour = styled.div`
    width: 22%;
    height: 70%;
    border-radius: 10px;
    background-color: white;
    border: 1px solid rgb(234, 233, 233);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:10px;
    

    @media (max-width: 320px){
    width: 100%;
    height:100%:
    }
  `;

  const NestedFours = styled.div`
    width: 22%;
    height: 70%;
    border-radius: 10px;
    background-color: white;
    border: 1px solid rgb(234, 233, 233);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:10px;

    @media (max-width: 320px){
    display:none;
    }
  `;
  const Img = styled.div`
    width: 100%;
    height: 50%;

  
  `;
  const PriceBackUp = styled.div`
    width: 100%;
    height: 26vh;
    padding: 4vh 3vw;
  `;
  const Pack = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
  `;
  const Text = styled.div`
    font-size: 2.9vh;
  `;
  const HallMark = styled.div`
    width: 100%;
    height: 35vh;
    // padding:2vh 2vw;
    background-color: #fbfbfb;

    @media (max-width: 320px){
    height:40vh;
    }
  `;
  const Sels = styled.div`
    width: 100%;
    height: 8vh;
    display: flex;
    align-items: center;
    padding: 2vh 2vw;
    justify-content: start;
    gap: 12vw;

    @media (max-width: 320px){
    height:6vh;
    }
  `;
  const SelOne = styled.div`
    color: gray;
    margin-bottom: 10px;
  `;
  const SelOneSle = styled.div`
    color: gray;
    margin-bottom: 10px;

    border-bottom: 2px solid black;
  `;
  const Paragraph = styled.div`
    border: 1px solid rgb(234, 233, 233);
    width: 100%;
    height: 29vh;
    display: flex;
    padding: 2vh 2vw;
    align-items: center;
    justify-content: center;

    @media (max-width: 320px){
    font-size:1.7vh;
    }
  `;

  const Similar = styled.div`
    width: 100%;
    height: 106vh;
    background-color: #fbfbfb;

    @media (max-width: 320px){
    height: 70vh;
    }
  `;
  const SmlrPrdct = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    @media (max-width: 320px){
    height:10vh;
    }
  `;
  const First = styled.div`
    font-size: 3.9vh;
    font-weight: 500;

    @media (max-width: 320px){
    font-size: 2.8vh;
    }
  `;
  const Second = styled.div`
    font-size: 3.5vh;
    color: #a99d9d;

    @media (max-width: 320px){
    font-size:2.8vh;
    }
  `;
  const Suggestions = styled.div`
    width: 100%;
    height: 80vh;
    background-color: #fbfbfb;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2vh 2vw;

    @media (max-width: 320px){
    height: 60vh;
    }
  `;
  const Kar = styled.div`
  
  `;
  const Segs = styled.div`
    width: 19%;
    height: 95%;
    background-color: white;
    border: 1px solid rgb(234, 233, 233);
    border-radius: 20px;

    @media (max-width: 320px){
    width:48%;
    height: 48%;
    }

  `;
  const SegsThree = styled.div`
    width: 19%;
    height: 95%;
    background-color: white;
    border: 1px solid rgb(234, 233, 233);
    border-radius: 20px;

    @media (max-width: 320px){
    display:none;
    }
  `;
  const ImagePlace = styled.div`
    width: 100%;
    height: 65%;
    background-color: white;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    display:flex;
    align-items:center;
    justify-content:center;

    @media (max-width: 320px){
    height:90%;
    margin-bottom:15px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    }
  `;
  const Rate = styled.div`
    width: 80%;
    height: 13vh;
    padding: 2vh 1vw;

    @media (max-width: 320px){
    height:12vh;
    }
  `;
  const Seconds = styled.div`
    font-size: 3.5vh;

    @media (max-width: 320px){
    font-size: 1.9vh;
    }
  `;
  const Think = styled.div`
    display: flex;
    gap: 10px;

    @media (max-width: 320px){
    
    }
  
  `;
  const Colours = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
  `;
  const YellowTwo = styled.div`
    width: 20px;
    height: 20px;
    border: 1px solid rgb(234, 233, 233);
    border-radius: 50%;
    font-size: 2.2vh;
    display: flex;
    align-items: center;
    background-color: #ffde6a;
    justify-content: center;

    @media (max-width: 320px){
    width:10px;
    height:10px;
    }
  `;
  const GrayTwo = styled.div`
    width: 20px;
    height: 20px;
    border: 1px solid rgb(234, 233, 233);
    border-radius: 50%;
    font-size: 2.2vh;
    display: flex;
    align-items: center;
    background-color: #c2c0c0;
    justify-content: center;

    @media (max-width: 320px){
    width:10px;
    height:10px;
    }
  `;
  const BrownTwo = styled.div`
    width: 20px;
    height: 20px;
    border: 1px solid rgb(234, 233, 233);
    border-radius: 50%;
    font-size: 2.2vh;
    display: flex;
    align-items: center;
    background-color: #bf796e;
    justify-content: center;

    @media (max-width: 320px){
    width:10px;
    height:10px;
    }
  `;
  const BuTn = styled.div`
    width: 100%;
    height: 12.1vh;
    border-radius: 20px;
    display: flex;
    align-items: end;
    justify-content: space-between;

    @media (max-width: 320px){
    width: 100%;
    height: 9vh;
    flex-direction:column;
    }
  `;
  const Txt = styled.div`
    font-size: 2.4vh;
    display: flex;
    justify-content: center;
    padding: 1vh 1vw;
    align-items: center;

    @media (max-width: 320px){
    font-size:1.2vh;
    }
  `;
  const BuyNow = styled.div`
    width: 55%;
    height: 66%;
    color: white;
    background: linear-gradient(to right, #012634, #007a64);
    border-bottom-right-radius: 20px;
    border-top-left-radius: 45px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 320px){
    width:100%;
    border-top-left-radius: 0;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius:10px;
    }
  `;
  const Offer = styled.div`
    font-size: 1.9vh;
    color: red;

    @media (max-width: 320px){
    font-size: 1.4vh;
    }
  `;

  const Footer = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    background-color: #fbfbfb;
    align-items: center;
    justify-content: center;
  


    @media (max-width: 320px){
    display:flex;
    height:60vh;
    margin-top:10vh;

    }
  
    `;
  const Discover = styled.div`
    width: 15%;
    height: 8vh;
    background-color: white;
    font-size: 3.5vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 320px){
    font-size: 2.1vh;
    width:30%;
    }
  `;
  const FootBox = styled.div`
    width: 100%;
    height: 90%;

    @media (max-width: 320px){
    display:flex;
    // align-items: center;
    // justify-content: space-between;
    // gap:10px;
    height:65%;
    }
  `;
  const Cont = styled.div`
    width: 100%;
    height: 65%;
    background-color: #f4fffd;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0vh 3vw;

    @media (max-width: 320px){
    display:flex;
    flex-direction:column;
    align-items:center;
    
    }
  `;
  const FootBoxOne = styled.div`
    width: 18%;
    height: 41vh;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-right: 1px solid rgb(234, 233, 233);


    @media (max-width: 320px){
    width:100%;
    display:block;
    // flex-direction:column;
    
    // gap:10px;
    }
  `;

  const SocialMedia = styled.div`
    width: 90%;
    height: 30%;
    display: flex;
    align-item: center;
    padding: 3vh 2vw;
    justify-content: space-between;
    gap: 20px;
    margin-top: 3vh;
  `;
  const HFour = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid rgb(234, 233, 233);
    border-radius: 50%;
    display: flex;
    color: white;
    background-color: black;
    align-items: center;
    justify-content: center;
  `;
  const DownloadApp = styled.div`
    width: 100%;
    height: 25%;

    @media (max-width: 320px){
    display:none;
    }
  `;


  const LineOne = styled.div`
    width:100%;
    height:30%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 0vh 4vw;
  `;
  const Down = styled.div`
    font-size: 2.7vh;
  `;
  const Play = styled.div`
  width: 22%;
  height:10vh;
  display:flex;
  align-item:center;
  justify-content:space-between;
  `;
  const LineTwo = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 0vh 2vw;
  `;
  const FirstTwo = styled.div`
    font-size: 3.9vh;
    font-weight: 500;
    width: 48%;
    height:100%;
    display:flex;
    align-items:center;
    border:1px solid rgb(234, 233, 233);
    border-radius:10px;
    gap:10px;
    color:white;
    background-color:black;
    justify-content:center;
  `;
  const CopyRight = styled.div`
    width:100%;
    height:10%;
    background: linear-gradient(to bottom, #012634, #007a64);
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;

  
    @media (max-width: 320px){
    display:none;
    }
  `;

  const Mn = styled.div`
  font-weight: 500;
  display:none;

  @media (max-width: 320px){
  display:block;
  }
  `;




  const AddCart = styled.div`
  height:15vh;
  width:100%;
  display:none;

  @media (max-width: 320px){
  border-top:1px solid rgb(234, 233, 233);
  display:flex;
  padding:2vh 1vw;
  justify-content:space-between;
  gap:30px;
  }
  `;
  const Love = styled.div`
  @media (max-width: 320px){
  width:15%;
  display:flex;
  font-size:3.5vh;
  align-items:center;
  justify-content:center;
  height:7vh;
  background-color:white;
  border:1px solid rgb(234, 233, 233);
  border-radius: 5px;
  }
  `;
  const CartBtn = styled.div`
  @media (max-width: 320px){
  width:70%;
  display:flex;
  font-size:3.5vh;
  align-items:center;
  justify-content:center;
  height:7vh;
  color:white;
  background: linear-gradient(to bottom, #012634, #007a64);
  border-radius:10px;
  }
  `;
  return (
    <Main>
      <FirstNav>
        <p> </p>
        <p>Gemlay By Garnet Lanee</p>
        <Pin>Pincode</Pin>
      </FirstNav>
      <Navbar>
      <Mn>mnu</Mn>
        <Logo>
          
          <Gemlay>Gemlay</Gemlay>
          <Input></Input>
        </Logo>
        
        <Options>
          <Opts>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTobCvCSyE8kojn1ToBPItPCk7eG1cTu4sCrw&s" style={{width:"25%"}}/>
          
            GSP</Opts>
          <Opts>
            <img src="https://i.pinimg.com/564x/92/fb/d9/92fbd957c81227f4e49e752f9267e555.jpg" style={{width:"25%"}}/>
            WISHLIST</Opts>
          <Opts>
          <img src="https://www.shutterstock.com/image-vector/woman-bag-hand-drawn-female-600nw-383488684.jpg" style={{width:"30%"}}/>CART</Opts>
          
          
          <Opts>
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" style={{width:"30%"}}/>VERIFY</Opts>
        </Options>

        <SignUp>
        <img src="        https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5BSEPxHF0-PRxJlVMHla55wvcxWdSi8RU2g&s" style={{width:"30%"}}/>

          
          Sign Up</SignUp>
      </Navbar>

      <MinDiv>
        <Pra>NEW ARRIVALS</Pra>
        <Pra>RINGS</Pra>
        <Pra>EARRINGS</Pra>
        <Pra>PENDANTS</Pra>
        <Pra>BRACELETS & BANGLES</Pra>
        <Pra>GOLD COINS</Pra>
        <Pra>ALL JEWELLERY</Pra>
      </MinDiv>

      <Locations>
        Home - Products - Rings -<Span>Chavi Diamond Ring</Span>
      </Locations>

      <Product>
        <RingImage>
<img src="https://www.candere.com/media/jewellery/images/GR00103__1.jpeg" style={{width:"75%"}}/>

        </RingImage>

        <RingDetails>
          <WishList>
            <Content>
              <Prizing>
                <h2>Chavi Diamond Ring</h2>
                <Rupees>₹29,290</Rupees>
                <Mrp>MRP (Inclusive all Taxes)</Mrp>
              </Prizing>
              <Dets>
                <Demand>
                <Kar>
                <Box>
                  <h3>Karat: </h3>
                  <p> 18K</p>
                </Box>
                <Cricles>
                  <Circle>14K</Circle>
                  <Circle>18K</Circle>
                </Cricles>
                </Kar>

                
                </Demand>

                <BoxTwo>
                  <h3>Diamond Origin: </h3>
                  <p> Natural</p>
                </BoxTwo>
                <CriclesTwo>
                  <CircleTwo>Natural</CircleTwo>
                </CriclesTwo>

                <BoxThree>
                  <h3>Diamond Quality: </h3>
                  <p> IJ-SI</p>
                </BoxThree>
                <CriclesThree>
                  <CircleThree>IJ-SI</CircleThree>
                  <CircleThree>GH-VS/SI</CircleThree>
                  <CircleThree>GH-VVS</CircleThree>
                </CriclesThree><br/>
                <CircleThree>EF-VVS</CircleThree>
              </Dets>
            </Content>
            <DivBtn>
              <Button>ADD TO WISHLIST</Button>
            </DivBtn>
          </WishList>

          <Availability>
            <Container>
              <FirstLine>
                <h1> </h1>
                <LikeBtn>
                  <p>Like</p>
                  <p>Share</p>
                </LikeBtn>
              </FirstLine>
            </Container>
            <Quantity>
              <BoxFour>
                <h3>Metal: </h3>
                <p> Yellow Gold</p>
              </BoxFour>
              <CriclesFour>
                <Yellow></Yellow>
                <Gray></Gray>
                <Brown></Brown>
              </CriclesFour>

              <BoxFour>
                <h3>Size: </h3>
                <p> 12</p>
              </BoxFour>
              <Counts> 12</Counts>
              <End>
                <h6>Not Sure about Ring Size ?</h6>
              </End>

              <PincodeDiv>
                <Delivery>Delivery & Store Details</Delivery>
                <PinCode>E n t e r P i n c o d e</PinCode>
              </PincodeDiv>

              <DivBtnTwo>
                <ButtonTwo>CHECKING AVAILIBILITY</ButtonTwo>
              </DivBtnTwo>
            </Quantity>
          </Availability>
        </RingDetails>
      </Product>

      <TenX>
        <Para>PRODUCT SHOWN IN 10X ZOOM FOR YOUR CLARITY</Para>
      </TenX>

      <Information>
        <Info>
          <PdInfo>PRODUCT INFORMATION</PdInfo>
          <BigContainer>
            <ThreeBoxes>
              <NestedBoxes>
                <SmallBox>
                  <h5>Dimension</h5>
                  <P>Width - 7.4 mm</P>
                  <P>Height - 5 mm</P>
                  <P>Size - 12 (51.8 mm)</P>
                </SmallBox>
              </NestedBoxes>
              <NestedBoxesCenter>
                <SmallBoxCenter>
                  <h5>Weight</h5>
                  <P>Approx.Weight - 2.454 Gm</P>
                  <h5>Purity</h5>
                  <P>Purity - 18kt</P>
                  <h5>Product Id</h5>
                  <P>PRD-LR-2152-GL-2024-853</P>
                </SmallBoxCenter>
              </NestedBoxesCenter>
              <NestedBoxes>
                <SmallBox>
                  <h5>Diamonds & Gemstones</h5>
                  <P>Diamond Type - IJ-SI</P>
                  <P>Total Diamonds - 7</P>
                  <P>Total Weight - 0.155 ct</P>
                </SmallBox>
              </NestedBoxes>
            </ThreeBoxes>

            <FourBoxes>
              <NestedFour>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Indian_Rupee_symbol.svg/170px-Indian_Rupee_symbol.svg.png" style={{width:"30%", }}/>
                <P>Cash on Delivery</P>
              </NestedFour>
              <NestedFour>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNn4TneKWKKLKHmjTaZ6Lu9C9o4ZP5bSbvHErzI8bg7xieuRAvRiTsTRqcFTJBYiv3dQ&usqp=CAU" style={{width:"60%", }}/>
                <P>30 Days Return</P>
              </NestedFour>
              <NestedFours>
              <img src="https://png.pngtree.com/png-vector/20220301/ourmid/pngtree-lady-hand-silhouette-vector-illustration-direction-pointer-vector-png-image_12432260.jpg" style={{width:"60%", }}/>
                <P>Lifetime Exchange</P>
              </NestedFours>
              <NestedFours>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL4uZ4lQNyDl2T5E41D_lRNvQbnoZ85-n61ZlZl-3znJNKk_J164XyuNCVhlyzg7dvzIA&usqp=CAU" style={{width:"70%", }}/>
                <P>BIS Hallmark</P>
              </NestedFours>
            </FourBoxes>
          </BigContainer>
        </Info>
      </Information>

      <PriceBackUp>
        <Pack>
          <Text>PRICE BACKUP</Text>
          <P>Show More</P>
        </Pack>
      </PriceBackUp>

      <HallMark>
        <Sels>
          <SelOneSle>BIS Hallmark</SelOneSle>
          <SelOne>IGI</SelOne>
          <SelOne>SGL</SelOne>
        </Sels>
        <Paragraph>
          Hallmark Unique Identification (HUID) is a revolutionary system
          designed to provide unparalleled authenticity and traceability for
          products. Each item is assigned a unique identifier, encoded with
          encrypted data and embedded within the hallmark. This identifier
          serves as a digital fingerprint, allowing for seamless verification of
          authenticity and origin throughout the supply chain and beyond.
        </Paragraph>
      </HallMark>

      <Similar>
        <SmlrPrdct>
          <First>SIMILAR PRODUCTS</First>
          <Second>SAME BUT DIFFERENT</Second>
        </SmlrPrdct>

        <Suggestions>
          <Segs>
            <ImagePlace>

            <img src="https://www.candere.com/media/jewellery/images/GR00103__1.jpeg" style={{width:"90%"}}/>
            </ImagePlace>
            <Think>
              <Rate>
                <Seconds>₹29,290</Seconds>
                <P>Simple Diamond Brand..</P>
              </Rate>
              <Colours>
                <YellowTwo></YellowTwo>
                <GrayTwo></GrayTwo>
                <BrownTwo></BrownTwo>
              </Colours>
            </Think>
            <BuTn>
              <Txt>View Similar</Txt>
              <BuyNow>Buy Now</BuyNow>
            </BuTn>
          </Segs>

          <Segs>
            <ImagePlace>

            <img src="https://m.media-amazon.com/images/I/61UQ9XYnxJL._AC_UY1100_.jpg" style={{width:"75%"}}/>
            </ImagePlace>
            <Think>
              <Rate>
                <Seconds>₹36,746</Seconds>
                <P>Classy Diamond Brand..</P>
                <Offer>Flat 35% off on making charges</Offer>
              </Rate>
              <Colours>
                <YellowTwo></YellowTwo>
                <GrayTwo></GrayTwo>
                <BrownTwo></BrownTwo>
              </Colours>
            </Think>
            <BuTn>
              <Txt>View Similar</Txt>
              <BuyNow>Buy Now</BuyNow>
            </BuTn>
          </Segs>

          <SegsThree>
            <ImagePlace>

            <img src="https://images-cdn.ubuy.co.in/653cb1289d3cc4441b5992c2-halukakah-mens-gold-ring-diamond-3pcs.jpg" style={{width:"90%"}}/>
            </ImagePlace>
            <Think>
              <Rate>
                <Seconds>₹63,763</Seconds>
                <P>Subtle Diamond Brand..</P>
              </Rate>
              <Colours>
                <YellowTwo></YellowTwo>
                <GrayTwo></GrayTwo>
                <BrownTwo></BrownTwo>
              </Colours>
            </Think>
            <BuTn>
              <Txt>View Similar</Txt>
              <BuyNow>Buy Now</BuyNow>
            </BuTn>
          </SegsThree>

          <SegsThree>
            <ImagePlace>
            <img src="https://www.candere.com/media/jewellery/images/gr00237_1_2.jpg" style={{width:"90%"}}/>
            </ImagePlace>
            <Think>
              <Rate>
                <Seconds>₹25,247</Seconds>
                <P>Shimmer Diamond Brand..</P>
                <Offer>Flat 35% off on making charges</Offer>
              </Rate>
              <Colours>
                <YellowTwo></YellowTwo>
                <GrayTwo></GrayTwo>
                <BrownTwo></BrownTwo>
              </Colours>
            </Think>
            <BuTn>
              <Txt>View Similar</Txt>
              <BuyNow>Buy Now</BuyNow>
            </BuTn>
          </SegsThree>

          <SegsThree>
            <ImagePlace>
            <img src="https://m.media-amazon.com/images/I/615FGqVGheL._AC_UY1100_.jpg" style={{width:"75%"}}/>
            </ImagePlace>
            <Think>
              <Rate>
                <Seconds>₹20,280</Seconds>
                <P>Eva Diamond Brand..</P>
              </Rate>
              <Colours>
                <YellowTwo></YellowTwo>
                <GrayTwo></GrayTwo>
                <BrownTwo></BrownTwo>
              </Colours>
            </Think>
            <BuTn>
              <Txt>View Similar</Txt>
              <BuyNow>Buy Now</BuyNow>
            </BuTn>
          </SegsThree>
        </Suggestions>
      </Similar>

      <Footer>
        <Discover>Discover All</Discover>

        <FootBox>
          <Cont>
            <FootBoxOne>
              <h5>OUR SERVICES</h5>
              <Hide>GOLD RATE</Hide>
              <Hide>VARIOUS PAYMENT OPTIONS</Hide>
            </FootBoxOne>

            <FootBoxOne>
              <h5>OUR POLICIES</h5>
              <Hide>30-DAY RETURNS</Hide>
              <Hide>FREE SHIPPING</Hide>
              <Hide>LIFETIME EXCHANGE POLICY</Hide>
              <Hide>RETURN AND REFUND POLICY</Hide>
              <Hide>GSP TERMS & CONDITIONS</Hide>
            </FootBoxOne>

            <FootBoxOne>
              <h5>KNOWLEDGE</h5>
              <Hide>GOLD GUIDE</Hide>
              <Hide>DIAMOND GUIDE</Hide>
              <Hide>JEWELLERY GUIDE</Hide>
              <Hide>SOLITAIRE DIAMOND GUIDE</Hide>
              <Hide>GEMSTONE GUIDE</Hide>
              <Hide>CERTIFICATION GUIDE</Hide>
              <Hide>JEWELLERY GIFTING</Hide>
            </FootBoxOne>

            <FootBoxOne>
              <h5>ABOUT US</h5>
              <Hide>OUR VISION</Hide>
              <Hide>WHY GEMLAY ?</Hide>
              <Hide>OUR STORY</Hide>
              <Hide>OUR TEAM</Hide>
              <Hide>REVIEWS AND RATINGS</Hide>
              <Hide>PRESS RELEASE</Hide>
            </FootBoxOne>

            <FootBoxOne>
              <h5>Get In Touch</h5>
              <Hide>99888-98866</Hide>
              <Hide>info@gemlay.com</Hide>
              <Hide>
                Sco 15, Ground Floor, Jubilee Junction, Sector 66, Main Mohali
                Airport Road.
              </Hide>
              <SocialMedia>
                <HFour>F</HFour>
                <HFour>I</HFour>
                <HFour>Y</HFour>
              </SocialMedia>
            </FootBoxOne>
          </Cont>

          <DownloadApp>
            <LineOne>
              <h1> </h1>
              <Down>Download Our Application</Down>
            </LineOne>
            <LineTwo>
              <P>SITE MAP | PRIVACY POLICY | TERMS AND CONDITIONS | FAQs</P>
             <Play>
             <FirstTwo>Google Play</FirstTwo>
             <FirstTwo>AppStore</FirstTwo>
             </Play>
            </LineTwo>
            
          </DownloadApp>
          <CopyRight>
          Copyright © Gemlay 2024
          </CopyRight>
          
        </FootBox>
        <AddCart>

            <Love>
                ♥
            </Love>

            <CartBtn>
                  Add to Cart
            </CartBtn>
          </AddCart>
      </Footer>
    </Main>
  );
}
