import React from "react";

const FaqAccordion = () => {
  return (
    <div className="text-black ">
      <div className="bg-amber-50 collapse collapse-arrow border border-base-300 mb-4">
        <input type="radio" name="my-accordion-2" defaultChecked />

        <div className="collapse-title font-semibold ">
          What is Frontend Practice?
        </div>
        <div className="collapse-content text-sm">
          Frontend Practice offers developers the opportunity to practice and
          improve their skills in design, interactions, animations,
          responsiveness, troubleshooting, and more by providing a selection of
          real websites for them to recreate from scratch. This hands-on
          approach allows developers to gain a diverse set of valuable skills
          that will make them more employable in the industry.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-amber-50 border border-base-300  mb-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Where can I find images and icons?
        </div>
        <div className="collapse-content text-sm">
          <u>Pexels</u> and Pixabay are excellent sources for free stock photos,
          while Boxicons and Font Awesome offer a variety of free icons. Links
          to these resources can be found at the top of every project page on
          Frontend Practice.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-amber-50 border border-base-300  mb-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">Where is the code?</div>
        <div className="collapse-content text-sm">
          Frontend Practice does not provide any pre-written code, but we do
          offer a few resources to assist with each project. However, there will
          always be unexpected challenges that arise during the learning
          process, which is where the true learning begins.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-amber-50 border border-base-300  mb-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Where can I learn to code?
        </div>
        <div className="collapse-content text-sm">
          If you want a more structured approach to learning coding, consider
          taking Frontend Masters' "Complete Intro to Web Development" or
          "Getting Started With CSS" courses, which are completely free.
          Frontend Masters offers a variety of programming courses that are
          perfect for developers looking to improve their skills. From
          foundational concepts to advanced techniques, these courses cover a
          wide range of topics and are suitable for developers at all levels.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-amber-50 border border-base-300  mb-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Which languages do I use for these projects?
        </div>
        <div className="collapse-content text-sm">
          In short, you can use any programming language you desire for these
          practice projects. The beauty of recreating websites for practice is
          that you can utilize any tech stack, such as HTML, CSS, JavaScript,
          React, Vue, Angular, Svelte, or any other language, framework, or
          library.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-amber-50 border border-base-300  mb-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Why did you pick these websites?
        </div>
        <div className="collapse-content text-sm">
          The selection of websites featured on Frontend Practice is based on
          personal preference and takes into consideration various factors,
          including design and style, difficulty to recreate, and elements and
          features that offer a learning opportunity through recreation. It is
          important to note that some projects may be more challenging to
          recreate than others.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-amber-50 border border-base-300  mb-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Can I use these in my portfolio?
        </div>
        <div className="collapse-content text-sm">
          We encourage you to make these projects your own by incorporating your
          own colors, content, and images. If you choose to use these projects
          for your portfolio, please clearly state that it is an "unofficial"
          version. It is important to note that these are practice projects and
          all materials owned by companies and individuals whose websites are
          featured on Frontend Practice are intended for practice purposes only.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-amber-50 border border-base-300  mb-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Why does the live website not look like the project anymore?
        </div>
        <div className="collapse-content text-sm">
          How dare they update the website! We will talk with their manager
          right away. If they don't respond, we'll periodically check the
          websites we feature and make the necessary updates. In some cases, if
          we really love the previous design, we may keep it and link to an
          archived page if possible. If not, please see the reference image on
          the project page.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-amber-50 border border-base-300  mb-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Where did some of the projects go?
        </div>
        <div className="collapse-content text-sm">
          Occasionally we will retire projects from the main collection if the
          design is no longer up to date or an archived version is not
          available. You can still find the retired projects at the bottom of
          our Projects page.
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
