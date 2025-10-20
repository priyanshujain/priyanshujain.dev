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
    handleScroll(!isContactOpen);
    setContact(!isContactOpen);
  };

  return (
    <Layout headerClass="">
      <SEO
        title="Should we use the latest npm packages or wait for a release to settle?"
        description={``}
      />
      <div
        class="main-content"
        style={{
          minHeight: "100vh",
        }}
      >
        <SectionBox
          heading="Should we use the latest npm packages or wait for a release to settle?"
          headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"
          bodyClass="col-12 mw-100 center"
          className="pt16"
        />
        <div className=" pt0 pb5 pt10-ns pb20-ns">
          <div className="mw-l center">
            <p className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey">
Two recent incidents have occurred where a user’s npm credentials were compromised and attackers published malicious versions of packages.
              <br />
              <br />
Recently, multiple packages belonging to a single maintainer, accounting for two billion weekly downloads, were subject to a email phishing attack.
              <br />
              <br />
Last month, the S1ngularity supply chain attack exploited a flawed GitHub Actions workflow in the Nx repo to publish a malicious version of the package on npm, which included a postinstall malware script.
              <br />
              <br />
This script attempted to steal GitHub tokens, npm tokens, SSH keys, .env files, crypto wallets, and upload the secrets to public GitHub repositories.
    <br />
                <br />
                What made this attack stand out was that the attacker used installed cli coding agents (Claude Code/Gemini etc) to search for and harvest sensitive credentials and secrets using prompts.
                <br />
                <br />
                This forces us to ask what’s more secure, the latest package that has new security fixes, or the latest package that was compromised in a supply chain attack?
                <br />
                <br />
                There is no simple solution. One possible approach is to use packages that adopt the trusted publisher model and manually verify things before updating dependencies.
                <br />
                <br />
                References:
                <br />
                Phishing email attack (https://socket.dev/blog/npm-author-qix-compromised-in-major-supply-chain-attack)
                <br />
                S1ngularity attack (https://nx.dev/blog/s1ngularity-postmortem)
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;