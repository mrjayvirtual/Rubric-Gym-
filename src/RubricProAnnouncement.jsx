import React from "react";
import "./rubric-pro-announcement.css";

const learningTracks = [
  {
    number: "01",
    title: "AI & intelligent systems",
    description:
      "Learn to work with AI tools, prompts, agents and practical workflows—then apply them to real problems.",
    outcome: "From AI user to confident AI builder",
    icon: "✳",
  },
  {
    number: "02",
    title: "Build your own software",
    description:
      "Turn an idea or everyday need into a custom utility, website, dashboard, automation, tool or app—with guided, AI-assisted development.",
    outcome: "Your idea, engineered into a working product",
    icon: "⌘",
  },
  {
    number: "03",
    title: "Animation & visual creation",
    description:
      "Explore animation, visual storytelling and AI-assisted production, from the first concept to a polished creative output.",
    outcome: "Learn to create, not just consume",
    icon: "◈",
  },
];

const nextSteps = [
  ["Discover", "Define the problem, audience and outcome you want."],
  ["Design", "Shape the features, workflow and experience around your needs."],
  ["Build", "Use AI-assisted tools and practical engineering to create it."],
  ["Test & launch", "Validate, improve and prepare your project for real use."],
];

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 15 15 5M6 5h9v9" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function RubricProAnnouncement() {
  return (
    <section className="rg-pro" aria-labelledby="rg-pro-title">
      <div className="rg-pro__ambient" aria-hidden="true" />
      <div className="rg-pro__inner">
        <div className="rg-pro__eyebrow">
          <span className="rg-pro__pulse" />
          THE NEXT EVOLUTION OF RUBRIC GYM
          <span className="rg-pro__soon">PRO · IN DEVELOPMENT</span>
        </div>

        <div className="rg-pro__hero">
          <div className="rg-pro__hero-copy">
            <p className="rg-pro__kicker">LEARN IT. BUILD IT. PUT IT TO WORK.</p>
            <h2 id="rg-pro-title">
              Your ideas deserve
              <span> to become real things.</span>
            </h2>
            <p className="rg-pro__intro">
              Rubric Gym Pro is being shaped into a practical learning and
              creation ecosystem. Go beyond learning how AI works: learn how
              to use it to solve problems, engineer useful products and create
              opportunities with the skills you develop.
            </p>
            <a
              className="rg-pro__social"
              href="https://www.linkedin.com/in/joshua-ikpendu/"
              target="_blank"
              rel="noreferrer"
            >
              Follow JayVirtual for updates <ArrowUpRight />
            </a>
          </div>

          <div className="rg-pro__visual" aria-hidden="true">
            <div className="rg-pro__orbit rg-pro__orbit--one" />
            <div className="rg-pro__orbit rg-pro__orbit--two" />
            <div className="rg-pro__core">
              <span className="rg-pro__core-mark">RG</span>
              <span>IDEA → IMPACT</span>
            </div>
            <span className="rg-pro__node rg-pro__node--a">AI</span>
            <span className="rg-pro__node rg-pro__node--b">BUILD</span>
            <span className="rg-pro__node rg-pro__node--c">CREATE</span>
            <span className="rg-pro__visual-caption">A new way to learn by making</span>
          </div>
        </div>

        <div className="rg-pro__tracks">
          {learningTracks.map((track) => (
            <article className="rg-pro__track" key={track.number}>
              <div className="rg-pro__track-top">
                <span className="rg-pro__track-icon">{track.icon}</span>
                <span className="rg-pro__track-number">{track.number}</span>
              </div>
              <h3>{track.title}</h3>
              <p>{track.description}</p>
              <div className="rg-pro__outcome">{track.outcome}</div>
            </article>
          ))}
        </div>

        <div className="rg-pro__builder">
          <div className="rg-pro__builder-heading">
            <span className="rg-pro__section-label">THE BUILD-YOUR-IDEA PATHWAY</span>
            <h3>Don't just take a course. Build something that matters to you.</h3>
            <p>
              Whether it is a personal productivity tool, a business workflow,
              a niche calculator, a client portal, a mobile-friendly app or a
              completely original software idea, learn how to shape and build
              a solution around the way you actually need it to work.
            </p>
          </div>
          <div className="rg-pro__steps">
            {nextSteps.map(([title, description], index) => (
              <div className="rg-pro__step" key={title}>
                <span className="rg-pro__step-index">0{index + 1}</span>
                <div>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
                {index < nextSteps.length - 1 && (
                  <span className="rg-pro__step-arrow" aria-hidden="true">↗</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="rg-pro__support">
          <div>
            <span className="rg-pro__section-label">LEARN WITH THE COMMUNITY</span>
            <h3>Guidance should be part of the journey.</h3>
            <p>
              Planned free mentorship sessions for AI courses and learning
              paths, alongside free animation and creative-production
              sessions—so learners can get direction, ask questions and keep
              moving forward.
            </p>
          </div>
          <div className="rg-pro__support-note">
            <span className="rg-pro__support-symbol">✳</span>
            <strong>Learn together.</strong>
            <span>Make useful things. Grow your capability.</span>
          </div>
        </div>

        <div className="rg-pro__footer">
          <div>
            <span className="rg-pro__section-label">COMING SOON</span>
            <h3>Learn skills. Build solutions. Unlock new possibilities.</h3>
            <p>
              Pro programmes, features and practical earning pathways are in
              development. Opportunities to earn will depend on skills,
              completed work and available opportunities—not guaranteed
              income.
            </p>
          </div>
          <a
            className="rg-pro__footer-link"
            href="https://www.linkedin.com/in/joshua-ikpendu/"
            target="_blank"
            rel="noreferrer"
          >
            Stay connected <ArrowUpRight />
          </a>
        </div>

        <div className="rg-pro__signature">
          <span>RUBRIC GYM</span>
          <span>CREATIVITY MEETS TECHNOLOGY · JAYVIRTUAL</span>
        </div>
      </div>
    </section>
  );
}
