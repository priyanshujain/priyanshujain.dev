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
                title="Multi-Agent Systems: When AI Agents Work Together"
                description={`How multi-agent systems enable AI to collaborate like human teams, with practical applications in infrastructure debugging`}
                image={"/multi-agent-systems.jpg"}
            />
            <div
                className="main-content"
                style={{
                    minHeight: "100vh",
                }}
            >
                <SectionBox
                    heading="Multi-Agent Systems: When AI Agents Work Together"
                    headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"
                    bodyClass="col-12 mw-100 center"
                    className="pt16"
                />
                <div className=" pt0 pb5 pt10-ns pb20-ns">
                    <div className="mw-l center">
                        <p className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey">
                            What if an AI agent could spin up another AI agent?
                            <br />
                            <br />
                            A "multi-agent" system is exactly that. It consists of multiple agents (LLMs using tools in a loop) working together in an orchestrator-worker pattern.
                            <br />
                            <br />
                            There is a main agent that can spin up a sub-agent to perform a specific task, and then the main agent can use the results of the sub-agent to inform its next steps.
                            <br />
                            <br />
                            This is similar to how we humans work together in teams, where one person might delegate a task to another. Human society is built on the idea of specialization, where individuals focus on specific tasks and collaborate to achieve a common goal.
                            <br />
                            <br />
                            Let's consider an example in the context of debugging infrastructure problems.
                            <br />
                            <br />
                            Infrastructure problems are open-ended debugging problems where it's very difficult to predict the required step in advance. We can't hardcode a fixed path for exploring a solution. Process is inherently dynamic and path-dependent.
                            <br />
                            <br />
                            When engineers debug they tend to continuously update their approach based on new discoveries from the system. Following those leads is the only way to make progress in the investigation.
                            <br />
                            <br />
                            This unpredictability makes multi-agent systems particularly well-suited for infrastructure tasks. Now the difficulty is that the main agent needs to be able to dynamically invoke sub-agents.
                            <br />
                            <br />
                            A lot of this depends on the ability of the model to invoke sub-agents based on the context of the problem at hand. Claude 3.7 Sonnet, simply didn't invoke them and instead did the work on its own.
                            <br />
                            <br />
                            Then Claude Sonnet 4 came along.
                            <br />
                            <br />
                            Turns out that Sonnet 4 really likes delegating work to sub-agents and invokes them whenever it can spot clearly defined tasks.
                            <br />
                            <br />
                            These sub-agents are not just simple tools, but rather full-fledged agents that can perform complex tasks and make decisions on their own.
                            <br />
                            <br />
                            One of the hardest things in agent development is context window management. But because of sub-agents, this has now been made easy to do as the main agent can simply pass the relevant context to the sub-agent. Sub-agents can run in parallel with their own context window and handle the task independently.
                            <br />
                            <br />
                            For example an agent debugging production issues needs to find context from a series of decisions made by the development team that lead to the issue. But it can't just look at every data point in the system, as that would be too much information to process. But now it can delegate the task of finding relevant context to a sub-agent that specializes in searching through specific data sources. One sub-agent can look into logs and the other on slack. It turns out that context only exists in slack thread. Once the sub-agent finds the relevant context, it can pass it back to the main agent, which can then use that information to inform its next steps in the debugging process.
                            <br />
                            <br />
                            This is a powerful pattern that allows the main agent to focus on planning and high-level decision making, while the sub-agents handle the details of specific tasks.
                            <br />
                            <br />
                            {<Icon name="multi-agent-systems.jpg" />}
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Page;