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
        title="Naming is hard"
        description={`Naming things in programming is tough. It's something we all do every day, whether we're naming variables, functions, or entire systems. But why is it so hard?`}
        image={"/naming.png"}
      />
      <div
        class="main-content"
        style={{
          minHeight: "100vh",
        }}
      >
        <SectionBox
          heading="Naming is hard"
          headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"
          bodyClass="col-12 mw-100 center"
          className="pt16"
        />
        <div className=" pt0 pb5 pt10-ns pb20-ns">
          <div className="mw-l center">
            <p className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey">
              Naming things in programming is tough. It's something we all do
              every day, whether we're naming variables, functions, or entire
              systems. But why is it so hard?
              <br />
              <br />

                {<Icon name="naming.png" />}
                <br />
                <br />
              Let's start with a quote that's pretty famous in the programming
              world: "There are only two hard things in Computer Science: cache
              invalidation and naming things." It’s by Phil Karlton, and while
              most people focus on the cache invalidation part, today we’re
              talking about the other half—naming things.
              <br />
              <br />
              Naming is something we do all the time, not just in code. We give
              names to people, places, feelings, and even the tools we use.
              Naming is a fundamental part of how we communicate. But in
              programming, naming things gets tricky.
              <br />
              <br />
              One reason is that names need to be clear and meaningful. When
              you’re naming a variable or a function, it’s not just about
              picking something that works for you. You’re choosing a name that
              needs to make sense to everyone else who might read or work with
              your code later. If you pick a name that’s too vague, or worse,
              misleading, it can cause confusion and mistakes.
              <br />
              <br />
              Another challenge is consistency. You want names that follow some
              pattern to be easier to remember and understand. But sticking to a
              pattern can be hard, especially as your codebase grows and
              changes. It’s easy to end up with names that are all over the
              place, making your code harder to read and maintain.
              <br />
              <br />
              Then there’s the issue of avoiding conflicts. In programming,
              everything needs a unique name. However, as more people work on a
              project, the chances of accidentally giving two different things
              the same or similar names go up. This can lead to bugs that are
              tough to track down.
              <br />
              <br />
              Even outside of code, naming is a big deal. Think about domain
              names on the internet. There are only so many good ones, and a lot
              of them are already taken. This has led to all sorts of weird and
              creative names for companies and websites because the simple,
              straightforward ones were snapped up a long time ago.
              <br />
              <br />
              So, why do we put ourselves through this? Because naming is
              important. Good names make our code easier to read and understand.
              They help us communicate what our code is supposed to do, not just
              to the computer, but to other people—and even our future selves.
              <br />
              <br />
              In the end, naming might always be one of the tough parts of
              programming, but it’s worth the effort. The better we get at
              naming things, the better our code—and our communication—becomes.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
