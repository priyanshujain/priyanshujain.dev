import React, { useState } from "react";
import Layout from "../../components/layout/index";
import SEO from "../../components/seo";
import { SectionBox } from "../../components/home";

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
        title="Philosophy of RPC"
        description={`Philosophy of RPC - A deep dive into the principles of Remote Procedure Call (RPC) and how it has evolved over time.`}
      />
      <div
        class="main-content"
        style={{
          minHeight: "100vh",
        }}
      >
        <SectionBox
          heading="Philosophy of RPC"
          headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"
          bodyClass="col-12 mw-100 center"
          className="pt16"
        />
        <div className=" pt0 pb5 pt10-ns pb20-ns">
          <div className="mw-l center">
            <p className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey">
              We know distributed systems as a collection of nodes (machines)
              that communicate with each other over a network. These nodes can
              be servers, clients, or both.
              <br />
              <br />
              Imagine you’re a developer at CoolStuff Inc., an online store
              selling gadgets. One day, your team needs to add credit card
              payments. But wait—the payment process isn’t handled by CoolStuff.
              Instead, you need to call a third-party payment service like
              Stripe or PayPal.
              <br />
              So what happens when a user wants to pay with a credit card? The
              user enters their card details on CoolStuff’s website, and
              CoolStuff needs to send this information to the payment service.
              <br />
              <br />
              Essentially, CoolStuff needs to send a message to the payment
              service, which is running on a different node owned by another
              company. This message contains the credit card number and the
              amount to be charged. The payment service then does a whole bunch
              of things—validating the card, communicating with the credit card
              network and the bank to authorize the transaction, and finally,
              sending a response back to CoolStuff. Based on this response,
              CoolStuff updates the order status to either “paid” or “failed.”
              <br />
              This is an example of distributed systems that is used every day
              by millions of people.
              <br />
              <br />
              Let's look at a bit at what the code might look like. You are
              developing the software that runs on CoolStuff’s server, and
              someone else is developing the software that runs on the payment
              service’s server and provides you a procedure to call to make the
              payment. Let’s call this procedure or function `make_payment`.
              <br />
              When you call `make_payment` function, you don’t know what happens
              underneath. You don’t know how the payment service is implemented,
              but it will have a network communication layer that will send the
              message to the payment service. So underneath, the `make_payment`
              function will translate Coolstuff message to a format that the
              payment service understands, send it over the network, and wait
              for the response. When the response comes back, it will translate
              the response to a format that CoolStuff understands and return it
              to you.
              <br />
              This is the essence of Remote Procedure Call (RPC).
              <br />
              <br />
              So let's have a look at the how a typical RPC call work. RPC is
              typically implemented using a client-server model. The client is
              the one that initiates the RPC call and the server is the one that
              receives the call and executes the procedure. The client and
              server can be on the same machine or on different machines. The
              client and server can be implemented in different languages and
              can run on different operating systems. The client and server
              communicate over a network using a protocol like HTTP, TCP, or
              UDP. The client sends a message to the server, the server executes
              the procedure, and sends a response back to the client. The client
              waits for the response and when it receives the response, it
              continues executing the program.
              <br />
              So essentially RPC is about calling a function and that causes
              something to happen on a remote server by making some network
              request and packaging the whole thing into a function implemented
              in a programming language.
              <br />
              <br />
              RPC’s core philosophy: to hide the complexity of distributed
              systems. By mimicking local programming paradigms, RPC prioritizes
              developer familiarity and productivity.
              <br />
              <br />
              <p>{">> Commandments of RPC"}</p>
              Here are some key principles that define the philosophy of RPC:
                <br />
                <br />
              The illusion of locality. RPC abstracts the network, allowing
              developers to focus on logic rather than infrastructure. This
              mirrors Alan Kay’s principle: “Simple things should be simple.”
              <br />
              <br />
              Action-oriented design. RPC emphasizes verbs over nouns—procedures
              like calculateTax() or fetchUser(), unlike REST’s resource-centric
              model (e.g., GET /users/123).
              <br />
              <br />
              Contract-first design. RPC enforces strict method signatures
              between clients and servers, ensuring type safety but creating
              tight coupling. This favors precision and predictability over
              flexibility.
              <br />
              <br />
              Developer ergonomics. RPC frameworks like gRPC and Thrift optimize
              for usability—offering code generation, IDE autocompletion, and
              typed interfaces to reduce friction.
              <br />
              <br />
              <p>{">> Comparing it to REST"}</p>
              REST, as defined by Roy Fielding’s dissertation, enforces
              architectural constraints (statelessness, uniform interface, etc.)
              to improve scalability and resilience. Its philosophy treats the
              network as a first-class citizen—embracing its complexities rather
              than abstracting them away.
              <br />
              <br />
              RPC, by contrast, treats the network as an implementation detail.
              It aligns with the fallacies of distributed computing—recognizing
              that developers often underestimate network complexity, so
              abstraction is a necessary tool.
              <br />
              <br />
              However, tight coupling and action-oriented design can become
              liabilities in long-lived, evolving systems. REST’s
              resource-oriented model often better accommodates change.
              <br />
              <br />
              Whether you’re using REST, gRPC, or another RPC framework, the
              core idea remains the same: invoking remote functionality over a
              network. REST isn’t a fundamentally different paradigm—it’s just
              an RPC style optimized for the web.
              <br />
              <br />
              In a dusty archive, the original RPC RFC whispers: "Hide the
              network, but respect its chaos." Nearby, Roy Fielding’s REST
              dissertation retorts: "The network is your partner, not your
              enemy."
              <br />
              And so, the balance remains.
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
