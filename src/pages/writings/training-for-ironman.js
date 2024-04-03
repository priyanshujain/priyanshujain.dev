import React, { useState } from "react";
import Layout from "../../components/layout/index";
import SEO from "../../components/seo";
import { SectionBox } from "../../components/home";
import Icon from "../../components/Icon";

const handleScroll = (isModalOpen) => {
  if (isModalOpen === true) {
    document.documentElement.style.overflow = "hidden";
  } else {
    document.documentElement.style.overflowY = "scroll";
  }
};

const Page = (props) => {
  const [isContactOpen, setContact] = useState(false);
  const handleContact = () => {
    // Look into state updates
    // Look into state updates
    handleScroll(!isContactOpen);
    setContact(!isContactOpen);
  };

  return (
    <Layout headerClass="">
      <SEO
        title="Training for my first half Ironman"
        description={
          `Almost two kilometres of swimming, 90 kilometres on the bike, and 21 kilometres of running, ` +
          `this was what it takes to finish an Ironman 70.3 race`
        }
        image={"/Ironman-70.3.jpg"}
      />
      <div
        class="main-content"
        style={{
          minHeight: "100vh",
        }}
      >
        <SectionBox
          heading="Training for my first half Ironman"
          headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"
          bodyClass="col-12 mw-100 center"
          className="pt16"
          
        />
        <div className=" pt0 pb5 pt10-ns pb20-ns">
          <div className="mw-l center">
            <p className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey">
            Almost two kilometres of swimming, 90 kilometres on the bike, and 21 kilometres of running,
             this was what it takes to finish an Ironman 70.3 race.
                <br />
                <br />
                {<Icon name="tri-sports.jpg" />}
                <br />
                <br />
                How does one find time to train for not one but three sports? 
                Planning the training becomes essential to ensure that you are not overtraining or undertraining.
                Especially when you are working full time and have other commitments.
                <br />
                <br />

                So I consulted with a coach who would help me plan my training. I reached out to  
                <a href="https://u.ironman.com/certified-coach/krishna-kohli" target="_blank"> Krishna Kohli</a>, 
                a triathlete and an Ironman certified coach.
                I would get a plan for the week and I would follow it.
                I started with a plan. I would swim on Monday, Wednesday and Friday. I would run on Tuesday, Thursday and Saturday. 
                I would bike on Wednesday and Sunday. I would have a rest day on Sunday.

                <br />
                <br />
                {<Icon name="training.png" />}
                <span
                style={{
                  fontSize: "1.4rem",
                  fontStyle: "italic",
                }}
              >
                This is how the training plan looked like.
              </span>
                <br />
                <br />
                I would swim at the closest and only 50m pool I could find in Bangalore. It was at the Dolphin Aquatics Kensington. 
                I would bike on the weekends at the Nandi Hills and train at home on trainer. I would run at the Cubbon Park or at the Kanteerava Stadium.

                <br />
                <br />
                Keeping track of the training was essential and effective. I would use the Garmin watch to track my runs and bike rides.
                 I used to record my swims manually on paper. I would also record my sleep and nutrition manually.
                 The most important metric I would track was the heart rate. I would ensure that I was training in the right heart rate zone.
                 Heart rate training is essential to ensure that you are not overtraining or undertraining.
                <br />
                While owning a lot of gadgets is not necessary, a heart rate monitor is essential for training. A lot of people buy 
                gadgets like power meters, cadence and speed sensors. I would recommend buying a heart rate monitor and a GPS watch would be sufficient
                for a beginner. The most important thing is to keep track of your training so that you can see your progress weather it's 
                on paper or on a digital platform.
                <br />
                <br />
                I would also ensure that I was eating right. I would eat a lot of protein and carbs to ensure that I was recovering well.
                I would eat a lot of fruits and vegetables. I would also ensure that I was drinking enough water(more than 3L/Day). I would also take 
                supplemental protein from whey and plant protein. 
                <br />
                <br />

                Every day at the end of the day I would record my training and nutrition on a journal.
                I would record what I ate and how much I ate.
                <br />
                <br />
                <div style={
                    {
                        maxWidth: "400px",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "space-between",
                    }
                    
                }>

                {<Icon name="training-record.jpg" />}
                {<Icon name="nutrition-record.jpg" />}
                </div>
                <span
                style={{
                  fontSize: "1.4rem",
                  fontStyle: "italic",
                }}
              >
                My training and nutrition journals that I maintained on a daily basis.
              </span>

                <br />
                <br />

                I can't stress enough how important it is to do strength training. I would do strength training twice a week.
                Strength training is essential to ensure that you are not getting injured.
                I would go to the gym at least once a week and do high intensity interval training. 
                <br />
                <br />
                {<Icon name="gym.jpg" />}
                <span
                style={{
                  fontSize: "1.4rem",
                  fontStyle: "italic",
                }}
              >
                Me at cult.fit gym after an HRX workout. This was tough in the beginning as I was never into gymming before. but I started enjoying it.
              </span>

                <br />
                <br />
                Other days I would do 15 minutes of strength training at home using resistance bands and body weight exercises.
                <br />
                These short workouts are very effective and can be done at home. I used to follow the workouts from the YouTube channel called
                <a href="https://www.youtube.com/playlist?list=PLNCK0y7ZxQpK11G2LE0hdnDTZfqBziVj6" target="_blank"> Vlad Ixel</a>. 
                He has these amazing small 10-15 minutes workouts that can be done at home.
                <br />
                I used to do a lot of stretching and foam rolling every day to ensure that I was not getting injured.

                <br />
                <br />
                I would also ensure that I was getting enough sleep. I would sleep for more than 7-8 hours every day.
                I would also take a nap in the afternoon if I was tired. Sleep is essential for recovery.
                One benefit of the intense training is that you will sleep like a baby :).
                <br />
                <br />
                In my opinion, the training for an Ironman is not just about the physical training but also about the mental training.
                The mental training is as important as the physical training. You need to be mentally strong to complete an Ironman.
                The mental training is about pushing yourself to the limit and seeing how far you can go.
                <br />
                Sometimes your body will give up but your mind will keep pushing you to the finish line.
                I never swam in my life and I was scared of water. I was not sure if I will be able to swim 1.9 kilometres in open water.
                But there was something about the sport that was very intriguing to me.
                I was always fascinated by the idea of pushing my body to the limit and see how far I can go.
                <br />
                <br />
                I will share my experience of open water swimming in the next post.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;

