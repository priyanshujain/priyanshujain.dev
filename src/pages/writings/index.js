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
                  href="/writings/t-shaped-engineer"
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="underline fit-content">T-shaped engineer</p>
                    <p className="tertiary-text-color tl">Sep 01, 2024</p>
                  </h4>
                </a>
                <a
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="/writings/level-of-error-handling"
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="underline fit-content">
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
                    <p className="underline fit-content">Software bugs</p>
                    <p className="tertiary-text-color tl">Aug 21, 2024</p>
                  </h4>
                </a>
                <a
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="/writings/why-software-projects-are-notoriously-late"
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="underline fit-content">
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
                    <p className="underline fit-content">
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
                    <p className="underline fit-content">Naming is hard</p>
                    <p className="tertiary-text-color tl">Aug 13, 2024</p>
                  </h4>
                </a>
                <a
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="/writings/why-chrome"
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="underline fit-content">Why Chrome?</p>
                    <p className="tertiary-text-color tl">Aug 09, 2024</p>
                  </h4>
                </a>
                <a
                  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
                  href="/writings/training-for-ironman"
                >
                  <h4 className="f3 ma0 flex-l justify-between">
                    <p className="underline fit-content">
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
                    <p className="underline fit-content">
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
                    <p className="underline fit-content">
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
                    <p className="underline fit-content">
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
                      <p className="underline fit-content">{writing.title}</p>
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
