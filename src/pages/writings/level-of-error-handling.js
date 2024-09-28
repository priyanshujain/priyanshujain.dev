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
        title="Level of error handling"
        description={`How should I determine the level of error handling needed while building software, especially when interacting with multiple external systems? How many times should I retry after a failure? This is a stressful question for every developer.`}
        image={"/error-handling.png"}
      />
      <div
        class="main-content"
        style={{
          minHeight: "100vh",
        }}
      >
        <SectionBox
          heading="Level of error handling"
          headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"
          bodyClass="col-12 mw-100 center"
          className="pt16"
        />
        <div className=" pt0 pb5 pt10-ns pb20-ns">
          <div className="mw-l center">
            <p className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey">
              How should I determine the level of error handling needed while
              building software, especially when interacting with multiple
              external systems? How many times should I retry after a failure?
              This is a stressful question for every developer.
              <br />
              <br />
              The answer isn't straightforward, and the decision-making process
              can be stressful. Over-engineering error handling can lead to
              unnecessary complexity, while under-engineering can expose your
              system to vulnerabilities. So, how do you strike the right
              balance?
              <br />
              <br />
              The Nature of Failures: Transient vs. Persistent First, it’s
              essential to understand the types of failures your system is
              likely to encounter. Are these failures transient, such as brief
              network issues or temporary service hiccups? Or are they
              persistent, like an external service going down for an extended
              period?
              <br />
              <br />
              Understanding the nature of the failure informs how aggressive
              your retry strategy should be. Transient failures might justify
              several retry attempts, while persistent failures might need
              different handling—such as alerting a human operator or switching
              to a fallback system.
              <br />
              <br />
              The Retry Conundrum: How Many Times? This brings us to the heart
              of the dilemma: how many times should you retry an operation? The
              answer depends on several factors:
              <br />
              <br />
              Criticality of the Operation: If the operation is crucial—like
              processing a payment—you might want to implement more retries with
              exponential backoff to increase the likelihood of success. For
              less critical operations, a single retry or none at all might
              suffice. Exponential Backoff: This technique, where the delay
              between retries increases exponentially, is a common strategy. It
              gives the external system time to recover and reduces the risk of
              overloading it with repeated requests. However, determining the
              exact backoff interval can be tricky and may require fine-tuning
              based on real-world conditions. Circuit Breaker Pattern: To avoid
              overwhelming a failing service, you can use a circuit breaker
              pattern. After a set number of failures, the circuit breaker
              trips, and further attempts are halted temporarily. This approach
              prevents your system from wasting resources on doomed operations.
              <br />
              <br />
              Timeouts and Deadlines: Avoiding the Infinite Wait Time is another
              crucial factor in error handling. Setting appropriate timeouts
              ensures that your system doesn't hang indefinitely, waiting for a
              response that may never come. But how long should you wait?
              <br />
              <br />
              The timeout value should be informed by the typical response time
              of the external service. Too short, and you risk cutting off
              potentially successful operations; too long, and you could be
              holding up other processes. A global deadline for a set of
              operations can also help prevent cascading failures from causing
              long delays.
              <br />
              <br />
              Fallback Strategies: Preparing for the Worst No matter how
              carefully you design your error handling, there will be times when
              external systems fail beyond your control. That’s where fallback
              strategies come into play.
              <br />
              <br />
              Graceful Degradation: This might involve serving cached data,
              switching to a secondary service, or providing a default response
              to the user. The goal is to maintain functionality, even if it’s
              limited, rather than failing outright. Idempotency: Ensuring that
              retries are idempotent is crucial. This means that performing the
              same operation multiple times won’t have unintended side
              effects—like charging a customer twice. Idempotency is key to
              making your retry logic safe and reliable.
              <br />
              <br />
              Monitoring and Alerting: Eyes on the System To navigate the
              uncertainty of error handling, real-time monitoring and alerting
              are indispensable. By tracking the success and failure rates of
              your system’s interactions with external services, you can
              identify patterns and intervene when necessary.
              <br />
              <br />
              Alerts: Set up alerts to notify you when retries exceed a certain
              threshold or when failures are consistent over a period. This way,
              you can step in before minor issues escalate into major problems.
              <br />
              <br />
              The Final Word: There’s No One-Size-Fits-All The reality is that
              error handling is as much an art as it is a science. Every system,
              every external service, and every business requirement is
              different. What works in one context may not work in another, and
              that’s where the stress often comes in.
              <br />
              <br />
              However, by understanding the nature of failures, employing smart
              retry logic, setting appropriate timeouts, and having robust
              fallback strategies, you can mitigate much of the uncertainty. The
              key is to make informed decisions, continually monitor
              performance, and be ready to adjust as needed.
              <br />
              <br />
              In the end, while error handling will always involve some level of
              stress, it’s also an opportunity to build resilient systems that
              can weather the unexpected—turning potential pitfalls into mere
              bumps in the road.
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
