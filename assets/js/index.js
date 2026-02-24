if (document.getElementById("signUpForm")) {
  document.getElementById("signUpForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const service = e.target.service.value;
    const phone = e.target.phone.value;
    const brief = e.target.brief.value;

    const objToSend = {
      name: fullName,
      email,
      service,
      phone,
      brief,
      budget: "Not Provided",
      submitted_at: new Date().toLocaleString()
    }

    try {
      await fetch("https://form-submission-google-sheet.vercel.app/publishyourebook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objToSend),
      });
      e.target.reset();
      alert("Form Submitted Successfully");
    } catch (error) {
      console.error("Error during API call:", error);
      alert("An error occurred while submitting the form. Please try again.");
    }

  });
}

if (document.getElementById("footerForm")) {
  document.getElementById("footerForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const service = e.target.service.value;
    const phone = e.target.phone.value;
    const brief = e.target.brief.value;
    const budget = e.target.budget.value;

    const objToSend = {
      name,
      email,
      service,
      phone,
      brief,
      budget,
      submitted_at: new Date().toLocaleString()
    }

    try {
      await fetch("https://form-submission-google-sheet.vercel.app/publishyourebook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objToSend),
      });
      e.target.reset();
      alert("Form Submitted Successfully");
    } catch (error) {
      console.error("Error during API call:", error);
      alert("An error occurred while submitting the form. Please try again.");
    }

  });
}

if (document.getElementById("newsletter")) {
  document.getElementById("newsletter").addEventListener("submit", async function (e) {
    e.preventDefault();

    const objToSend = {
      email: e.target.email.value,
      submitted_at: new Date().toLocaleString()
    }

    try {
      await fetch("https://form-submission-google-sheet.vercel.app/publishyourebook/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objToSend),
      });
      e.target.reset();
      alert("Form Submitted Successfully");
    } catch (error) {
      console.error("Error during API call:", error);
      alert("An error occurred while submitting the form. Please try again.");
    }

  });
}

let mobileMenu = document.getElementById("mobileMenu");

function handleMobileMenu() {
  if (mobileMenu.classList.contains("!h-0")) {
    // If currently collapsed (!h-0), open it (!h-96)
    mobileMenu.classList.remove("!h-0", "!overflow-hidden");
    mobileMenu.classList.add("!h-96", "!overflow-visible");
  } else if (mobileMenu.classList.contains("!h-96")) {
    // If currently open (!h-96), collapse it (!h-0)
    mobileMenu.classList.remove("!h-96", "!overflow-visible");
    mobileMenu.classList.add("!h-0", "!overflow-hidden");
  } else {
    // If neither class is present, default to opening it
    mobileMenu.classList.add("!h-96", "!overflow-visible");
  }
}

let dropCont = document.getElementById("dropCont");
let dropMob = document.getElementById("dropMob");

dropCont.addEventListener("click", () => {
  if (dropMob.classList.contains("!hidden")) {
    dropMob.classList.remove("!hidden");
    dropMob.classList.add("!flex");
  } else if (dropMob.classList.contains("!flex")) {
    dropMob.classList.remove("!flex");
    dropMob.classList.add("!hidden");
  } else {
    // If neither class is present, you can choose to add one by default.
    dropMob.classList.add("!flex");
  }
});

function toggleFAQ(faqId) {
  // Get the clicked FAQ answer and icon
  const answerToToggle = document.getElementById(`faq-${faqId}`);
  const iconToToggle = document.getElementById(`icon-${faqId}`);

  // Get all FAQ answers and icons
  const allAnswers = document.querySelectorAll(".faq-answer");
  const allIcons = document.querySelectorAll('.faq-item span[id^="icon-"]');

  // Close all other FAQ answers and reset their icons
  allAnswers.forEach((answer) => {
    if (answer !== answerToToggle) {
      answer.classList.remove("open");
    }
  });

  allIcons.forEach((icon) => {
    if (icon !== iconToToggle) {
      icon.textContent = "+";
    }
  });

  // Toggle the clicked FAQ
  if (answerToToggle.classList.contains("open")) {
    // If it's already open, close it
    answerToToggle.classList.remove("open");
    iconToToggle.textContent = "+";
  } else {
    // If it's closed, open it
    answerToToggle.classList.add("open");
    iconToToggle.textContent = "-";
  }
}

const tabData = [
  {
    title: "Creative Vision and Tactical Execution",
    description:
      "We have a board of well-versed book publishers who conduct thorough research when it comes to book publishing solutions. In order to understand the requirements of the client properly, we ask several questions, then add our creative vision and execute it tactically.",
  },
  {
    title: "Strategic Planning and Blueprinting",
    description:
      "Understanding the pivotal role of a strategic approach in book publishing, we emphasize the significance of a well-structured plan...",
  },
  {
    title: "Dedicated Consultation Support",
    description:
      "Our book publishing experts are available round-the-clock to clarify any confusion or concerns you may have regarding your order.",
  },
  {
    title: "Iterative Revisions",
    description:
      "The philosophy behind our revision process is to guarantee the rendering of high-quality best publishing services...",
  },
  {
    title: "Precision Book Publishing",
    description:
      "Recognizing the utmost significance of excellence in book publishing, our proficient team dedicates itself to a thorough publishing process.",
  },
  {
    title: "Striking Book Cover Design",
    description:
      "Our book designers meticulously craft aesthetically pleasing covers aligned with the book's theme...",
  },
];

function setActiveTab(index) {
  // Reset all images
  try {
    document.querySelectorAll(".tab-image").forEach((img, i) => {
      img.classList.remove("border", "border-black");
    });

    // Set active image
    const activeImage = document.querySelectorAll(".tab-image")[index];
    activeImage.classList.add("border", "border-black");

    // Update tab content
    document.getElementById("tab-title").textContent = tabData[index].title;
    document.getElementById("tab-description").textContent =
      tabData[index].description;
  } catch (error) { }
}

// Initialize the first tab as active
setActiveTab(0);

const tabData2 = [
  {
    title: "Smart Execution and Innovative Strategy",
    description:
      "When it comes to book writing services, we have a board of experienced authors that undertake extensive research. To adequately grasp the client's requirements, we ask various questions, then add our creative vision and implement it tactically.",
  },
  {
    title: "Strategic Planning and Outlining",
    description:
      "Recognizing the pivotal role of a well-constructed outline, we consider it the foundational step in our book writing process. Each chapter's core points are meticulously addressed through customized questionnaires, ensuring alignment with the client's brief.",
  },
  {
    title: "Dedicated Consultation Support",
    description:
      "Our 24/7 customer support is committed to eliminating any confusion or concerns you may have about your order. This unwavering support aims to keep both parties on the same page, fostering a collaborative journey without deviation from the intended direction.",
  },
  {
    title: "Thoughtful Revisions",
    description:
      "Embracing the philosophy that revisions are integral to crafting quality content, we offer unlimited revisions. Whether it's a sentence, paragraph, or entire chapter, we welcome changes to ensure the final manuscript meets and exceeds your expectations.",
  },
  {
    title: "Thorough Editing and Formatting:",
    description:
      "Understanding the paramount importance of quality, our expert team engages in rigorous editing and proofreading. This meticulous process ensures the elimination of grammatical errors and enhances the overall structure of the book content.",
  },
  {
    title: "Captivating Book Cover Design:",
    description:
      "We recognize that an enticing book cover is the gateway to attracting readers. Our designers craft aesthetically pleasing covers aligned with the book's theme, strategically designed to draw in more online visitors and encourage book exploration and purchase.",
  },
];

function setActiveTab2(index) {
  // Reset all images
  try {
    document.querySelectorAll(".tab-image").forEach((img, i) => {
      img.classList.remove("border", "border-black");
    });

    // Set active image
    const activeImage = document.querySelectorAll(".tab-image")[index];
    activeImage.classList.add("border", "border-black");

    // Update tab content
    document.getElementById("tab-title").textContent = tabData2[index].title;
    document.getElementById("tab-description").textContent =
      tabData2[index].description;
  } catch (error) { }
}

// Initialize the first tab as active
setActiveTab2(0);

const tabData3 = [
  {
    title: "Assessing",
    description:
      "In this crucial phase, our experienced team evaluates the manuscript's content, structure, and overall coherence, laying the foundation for a targeted and effective editing process.",
  },
  {
    title: "Editing",
    description:
      "Our skilled editors meticulously refine the manuscript, addressing grammar, syntax, and stylistic elements to enhance clarity and coherence, ensuring a polished and professional final product.",
  },
  {
    title: "Reviewing",
    description:
      "Engaging in a comprehensive review, our team collaborates with authors to incorporate feedback, ensuring that the edited manuscript aligns seamlessly with their vision and goals for the book.",
  },
  {
    title: "Finalizing",
    description:
      "In the concluding stage, we meticulously ensure that all edits and revisions have been integrated seamlessly, presenting authors with a finalized manuscript ready for publication, reflecting the highest standards of quality.",
  },
];

function setActiveTab3(index) {
  // Reset all images
  try {
    document.querySelectorAll(".tab-image").forEach((img, i) => {
      img.classList.remove("border", "border-black");
    });

    // Set active image
    const activeImage = document.querySelectorAll(".tab-image")[index];
    activeImage.classList.add("border", "border-black");

    // Update tab content
    document.getElementById("tab-title").textContent = tabData3[index].title;
    document.getElementById("tab-description").textContent =
      tabData3[index].description;
  } catch (error) { }
}

// Initialize the first tab as active
setActiveTab3(0);

const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("ghgf");

    // Remove active class from all buttons and panels
    tabButtons.forEach((btn) => {
      btn.classList.remove("active", "text-white", "bg-[var(--theme)]");
      btn.classList.add("text-gray-700", "bg-gray-300");
    });
    tabPanels.forEach((panel) => panel.classList.add("hidden"));

    // Add active class to the clicked button and corresponding panel
    const targetPanel = document.getElementById(
      button.getAttribute("data-tab")
    );
    targetPanel.classList.remove("hidden");
    button.classList.add("active", "text-white", "bg-[var(--theme)]");
    button.classList.remove("text-gray-700", "bg-gray-300");
  });
});


// Chat


var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/690144085d2b45194d82fdc4/1j8mf3gg6';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();