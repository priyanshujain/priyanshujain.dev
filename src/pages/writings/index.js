import React from "react";
import Layout from "../../components/layout/index";
import SEO from "../../components/seo";
import styleVars from "../../styles/style-vars";

const pastWritings = [
  {
    title: "Running multiple sites or multiple servers over a single IP",
    date: "January 31, 2018",
    link: "https://medium.com/@priyanshujain/running-multiple-sites-or-multiple-servers-over-a-single-ip-using-apache-as-a-reverse-proxy-f239bc0a5d0f",
  },
  {
    title: "Machine learning in creating a new highly rated design",
    date: "July 30, 2017",
    link: "https://medium.com/@priyanshujain/machine-learning-in-creating-a-new-highly-rated-design-36687dbd42c2",
  },
  {
    title: "how to write a cover letter when applying for a job",
    date: "July 7, 2017",
    link: "https://42hire.com/how-to-write-a-cover-letter-when-applying-for-a-job-50abf39ca03f",
  },
  {
    title: "Upgrade or Install new kernel manually in Ubuntu",
    date: "July 1, 2017",
    link: "https://medium.com/@priyanshujain/upgrade-or-install-new-kernel-manually-in-ubuntu-88e687edf6b1",
  },
  {
    title:
      "how to use Environment Variables keep your secret keys safe & secure!",
    date: "July 1, 2017",
    link: "https://hackernoon.com/how-to-use-environment-variables-keep-your-secret-keys-safe-secure-8b1a7877d69c",
  },
  {
    title: "Does Britain owe reparations to India and other former colonies?",
    date: "March 26, 2017",
    link: "https://medium.com/@priyanshujain/does-britain-owe-reparations-to-india-and-other-former-colonies-71702c88b143",
  },
  {
    title: "A password that is going to make everything okay",
    date: "March 16, 2017",
    link: "https://medium.com/@priyanshujain/a-password-that-is-going-to-change-my-life-f2c3b80e8e77",
  },
  {
    title: "How Do Artificial Neural Network Recognize Images",
    date: "March 11, 2017",
    link: "https://hackernoon.com/how-do-artificial-neural-network-recognize-images-c3699af0f553",
  },
  {
    title: "How do artificial neural networks learn",
    date: "February 26, 2017",
    link: "https://www.quora.com/How-do-artificial-neural-networks-learn/answer/Priyanshu-Jain-12/",
  },
  {
    title: "Is it really tough to get in the Open Source",
    date: "Feb 1, 2017",
    link: "https://hackernoon.com/is-it-really-tough-to-start-contributing-to-open-source-projects-6c7ae644fc77",
  },
  {
    title:
      "learn computer science for free from the best universities in the World",
    date: "January 25, 2017",
    link: "https://medium.com/@priyanshujain/learn-computer-science-for-free-from-the-best-universities-in-the-world-dd1266020894",
  },
  {
    title: "Set Up SSL on Github Pages With Custom Domains for Free",
    date: "January 25, 2017",
    link: "https://hackernoon.com/set-up-ssl-on-github-pages-with-custom-domains-for-free-a576bdf51bc",
  },
  {
    title: "Real world applications of public key cryptography",
    date: "January 21, 2017",
    link: "https://medium.com/@priyanshujain/real-world-applications-of-public-key-cryptography-cca4c5d8d05",
  },
  {
    title:
      "Prepare for getting job as Software Engineer at technology companies",
    date: "January 20, 2017",
    link: "https://medium.com/@priyanshujain/prepare-for-getting-job-as-software-engineer-at-technology-companies-like-google-facebook-etc-7b506fc239f8",
  },
  {
    title: "Getting Start to participate or contribute in open source projects",
    date: "January 20, 2017",
    link: "https://medium.com/@priyanshujain/getting-start-to-participate-or-contribute-in-open-source-projects-e8b792c19787",
  },
  {
    title: "Create a strong, secure and memorable password",
    date: "January 20, 2017",
    link: "https://hackernoon.com/create-a-strong-secure-and-memorable-password-e9d75540e2c4",
  },
  {
    title: "What is quantum cryptography?",
    date: "June 15, 2015",
    link: "https://www.quora.com/Who-uses-quantum-cryptography/answer/Priyanshu-Jain-12/",
  },
  {
    title: "handle research problems in Graph Theory and Algorithms",
    date: "June 1, 2015",
    link: "https://www.quora.com/What-is-needed-to-handle-research-problems-in-Graph-Theory-and-Algorithms/answer/Priyanshu-Jain-12/",
  },
];

const Writing = (props) => {
  return (
    <Layout headerClass="">
      <SEO title="My Writings" />
      <div class="main-content">
        <div className={`${styleVars.page.xl} mb10`}>
          <div className="pt10 pt20-ns tc tl-ns">
            <h1 className="pa0 f3 f1-ns center fw-bold tc">My Writings</h1>
            <p className="f4 f3-ns ma0 mt4 mt10-ns fw-normal tc">
              I write about my experiences, learnings and thoughts on various
              topics.
            </p>
            <div>
              <div className="mt10 ma20-l">
                <a
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="/writings/throwaway-code-and-coding-agents"
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="left fit-content">Throwaway code and coding agents: Build it, ship it, move on</p>
                    <p className="tertiary-text-color tl">Sep 22, 2025</p>
                  </h4>
                </a>
                <a
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="/writings/anthropic-infrastructure-bugs"
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="left fit-content">Anthropic's rough month: Infrastructure bugs and the importance of evals</p>
                    <p className="tertiary-text-color tl">Sep 21, 2025</p>
                  </h4>
                </a>
                <a
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="/writings/openai-no-reasoning-traces"
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="left fit-content">OpenAI no longer exposes raw reasoning traces</p>
                    <p className="tertiary-text-color tl">Sep 20, 2025</p>
                  </h4>
                </a>
                <a
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="/writings/production-outage-coding-agent"
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="left fit-content">Production outage from copy paste error made by a coding agent :(</p>
                    <p className="tertiary-text-color tl">Sep 18, 2025</p>
                  </h4>
                </a>
                <a
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="/writings/npm-packages-supply-chain-attacks"
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="left fit-content">Should we use the latest npm packages or wait for a release to settle?</p>
                    <p className="tertiary-text-color tl">Sep 10, 2025</p>
                  </h4>
                </a>
                <a
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="/writings/early-career-jobs-are-shot"
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="left fit-content">Labour market for early-career developers is shot</p>
                    <p className="tertiary-text-color tl">Aug 30, 2025</p>
                  </h4>
                </a>
                <a
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="/writings/pilot-vs-production-with-llms"
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="left fit-content">Pilot vs Production with LLMs</p>
                    <p className="tertiary-text-color tl">Aug 28, 2025</p>
                  </h4>
                </a>
                <a
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="/writings/hrm24"
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="left fit-content">A tiny HRM 27M beat Opus 4 and o3 on the ARC AGI benchmark</p>
                    <p className="tertiary-text-color tl">Aug 21, 2025</p>
                  </h4>
                </a>
                <a
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="/writings/llm-taking-programming-jobs"
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="left fit-content">Is LLM Coding Going to Take Programming Jobs? I'm Not Worried.</p>
                    <p className="tertiary-text-color tl">Jul 05, 2025</p>
                  </h4>
                </a>
                <a
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="/writings/how-to-garbage-collect-thoughts"
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="left fit-content">How to Garbage Collect Your Thoughts</p>
                    <p className="tertiary-text-color tl">Jul 02, 2025</p>
                  </h4>
                </a>
                <a
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="/writings/babysitting-coding-agents"
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="left fit-content">Why do we still need to babysit coding agents?</p>
                    <p className="tertiary-text-color tl">Jun 28, 2025</p>
                  </h4>
                </a>
                <a
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="/writings/multi-agent-systems"
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="left fit-content">Multi-Agent Systems: When AI Agents Work Together</p>
                    <p className="tertiary-text-color tl">June 16, 2025</p>
                  </h4>
                </a>
                <a
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="/writings/ai-in-devops"
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="left fit-content">How to Manage Infrastructure with Agents</p>
                    <p className="tertiary-text-color tl">June 03, 2025</p>
                  </h4>
                </a>
                <a
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="/writings/ai-coding"
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="left fit-content">How I Code with AI</p>
                    <p className="tertiary-text-color tl">May 18, 2025</p>
                  </h4>
                </a>
                <a
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="/writings/philosophy-of-rpc"
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="left fit-content">Philosophy of RPC</p>
                    <p className="tertiary-text-color tl">Jan 28, 2025</p>
                  </h4>
                </a>
                <a
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="/writings/reflecting-on-2024"
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="left fit-content">Reflecting on 2024</p>
                    <p className="tertiary-text-color tl">Jan 06, 2025</p>
                  </h4>
                </a>
                <a
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="/writings/developers-hate-jira"
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="left fit-content">Developers Hate JIRA</p>
                    <p className="tertiary-text-color tl">Oct 12, 2024</p>
                  </h4>
                </a>
                <a
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="/writings/ideal-software"
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="left fit-content">Imagining the Ideal Software</p>
                    <p className="tertiary-text-color tl">Sep 15, 2024</p>
                  </h4>
                </a>
                <a
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="/writings/t-shaped-engineer"
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="left fit-content">T-shaped engineer</p>
                    <p className="tertiary-text-color tl">Sep 01, 2024</p>
                  </h4>
                </a>
                <a
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="/writings/level-of-error-handling"
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="left fit-content">
                      Level of error handling
                    </p>
                    <p className="tertiary-text-color tl">Aug 22, 2024</p>
                  </h4>
                </a>
                <a
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="/writings/software-bugs"
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="left fit-content">Software bugs</p>
                    <p className="tertiary-text-color tl">Aug 21, 2024</p>
                  </h4>
                </a>
                <a
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="/writings/why-software-projects-are-notoriously-late"
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="left fit-content">
                      Why software projects are notoriously late?
                    </p>
                    <p className="tertiary-text-color tl">Aug 20, 2024</p>
                  </h4>
                </a>
                <a
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="/writings/does-altruism-really-exist"
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="left fit-content">
                      Does altruism really exist?
                    </p>
                    <p className="tertiary-text-color tl">Aug 18, 2024</p>
                  </h4>
                </a>
                <a
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="/writings/naming-is-hard"
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="left fit-content">Naming is hard</p>
                    <p className="tertiary-text-color tl">Aug 13, 2024</p>
                  </h4>
                </a>
                <a
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="/writings/why-chrome"
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="left fit-content">Why Chrome?</p>
                    <p className="tertiary-text-color tl">Aug 09, 2024</p>
                  </h4>
                </a>
                <a
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="/writings/swimming-3km-open-water"
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="left fit-content">
                      How did I swim 3km in open water?
                    </p>
                    <p className="tertiary-text-color tl">Oct 10, 2023</p>
                  </h4>
                </a>
                <a
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="/writings/training-for-ironman"
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="left fit-content">
                      Training for my first half Ironman
                    </p>
                    <p className="tertiary-text-color tl">Aug 15, 2023</p>
                  </h4>
                </a>
                <a
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="/writings/signing-up-for-ironman"
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="left fit-content">
                      I signed up for an Ironman race
                    </p>
                    <p className="tertiary-text-color tl">Jul 29, 2023</p>
                  </h4>
                </a>
              </div>
            </div>
          </div>
          <div className="tc tl-ns">
            <h1 className="pa0 f3 f1-ns center fw-bold tc">My Papers</h1>
            <p className="f4 f3-ns ma0 mt4 mt10-ns fw-normal tc">
              My research papers and other academic writings.
            </p>
            <div>
              <div className="mt10 ma20-l">
                <a
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="/kidney_exchange_paper.pdf"
                  target="_blank"
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="left fit-content">
                      A Survey on Algorithms and Constraints for Modern Kidney
                      Exchanges
                    </p>
                    <p className="tertiary-text-color tl">2016</p>
                  </h4>
                </a>
                <a
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="/sm_lncs_paper.pdf"
                  target="_blank"
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="left fit-content">
                      Stable Marriage Problem (matching algorithm)
                    </p>
                    <p className="tertiary-text-color tl">2016</p>
                  </h4>
                </a>
              </div>
            </div>
          </div>
          <div className="pb10 tc tl-ns pb20-ns">
            <h1 className="pa0 f3 f1-ns center fw-bold tc">Past Writings</h1>
            <p className="f4 f3-ns ma0 mt4 mt10-ns fw-normal tc">
              writings from my old blog and other platforms.
            </p>
            <div>
              <div className="mt10 ma20-l">
                {pastWritings.map((writing, index) => (
                  <a
                    className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                    href={writing.link}
                    target="_blank"
                  >
                    <h4 className="f3 ma0 flex-l justify-between">
                      <p className="left fit-content">{writing.title}</p>
                      <p className="tertiary-text-color tl">{writing.date}</p>
                    </h4>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Writing;
