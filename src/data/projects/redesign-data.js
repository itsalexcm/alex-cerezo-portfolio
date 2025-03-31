export default {
    id: "redesign-data",
    title: "Redesigning Data Visualization",
    subtitle: "Enhancing Wolters Kluwer's charts and user experience.",
    thumbnail: "/assets/imgs/wk/wk01.jpg",
    components: [
      {
        type: "CaseSummary",
        data: {
          panels: [
            {
              label: "My Role",
              text: "Led the UI redesign and introduced forecasting features, based on audits, surveys and heuristic evaluation."
            },
            {
              label: "Impact",
              text: "Enabled major revenue and market growth by improving data clarity and unlocking strategic features."
            }
          ]
        }
      },
      {
        type: "CaseBlock",
        data: {
          title: "1. Context",
          content: [
            { type: "paragraph", text: "Finsit is Wolters Kluwer's online solution that simplifies complex financial data into easy-to-understand infographics. It presents accounting information visually, with comparisons and trends, enabling users to analyze data more effectively and make informed decisions." },
            { type: "paragraph", text: "As the platform grew in complexity, users began struggling with limited forecasting tools and overly complex visualizations. My role focused on addressing these challenges to ensure Finsit remained intuitive and effective for its diverse user base." }
          ]
        }
      },
      {
        type: "CaseMedia",
        data: {
          images: [
            { src: "/assets/imgs/wk/wk01.jpg", alt: "Finsit" }
          ]
        },
      },
      {
        type: "CaseBlock",
        data: {
          title: "2. The Challenge",
          content: [
            { type: "paragraph", text: "At Finsit, I took on two major projects:" },
            {
              type: "list",
              listType: "ol",
              items: [
                "<span class='bold'>Redesigning the user interface (UI)</span>: Overhauling the UI of an already complex product to enhance usability and adaptability.",
                "<span class='bold'>Introducing forecasting features</span>: Implementing a highly requested feature to provide predictive insights for users."
              ]
            },
            { type: "paragraph", text: "As the lead responsible for the UI redesign, I aimed to ensure that all potential use cases were addressed. To achieve this, I conducted a comprehensive audit of the product and several analyses to uncover opportunities for improvement." },
          ]
        }
      },
      {
        type: "CaseMedia",
        data: {
          images: [
            { src: "/assets/imgs/wk/wk02.jpg", alt: "Roadmap" }
          ],
          caption: "Finsit roadmap."
        }
      },
      {
        type: "CaseBlock",
        data: {
          title: "3. Discovery",
          content: [
            { type: "paragraph", text: "Understanding the current state of Finsit was crucial to identify opportunities for improvement. I began by engaging with the team and analyzing the product to uncover its strengths and weaknesses." },
            { type: "heading", text: "Team Survey" },
            { type: "paragraph", text: "I started by gathering insights directly from the Finsit team. Many team members had years of experience with the product, so I designed a survey to identify:" },
            {
              type: "list",
              listType: "ul",
              items: [
                "Features they believed were working well.",
                "Areas they felt needed improvement."
              ]
            },
            { type: "heading", text: "Heuristic Evaluation" },
            { type: "paragraph", text: "To complement the survey, I conducted a heuristic evaluation, uncovering:" },
            {
              type: "list",
              listType: "ul",
              items: [
                "Issues with the visualization of information.",
                "Challenges in the overall structure of data."
              ]
            }
          ]
        }
      },
      {
        type: "CaseMedia",
        data: {
          images: [
            { src: "/assets/imgs/wk/wk03.jpg", alt: "Heuristic evaluation" }
          ]
        }
      },
      {
        type: "CaseBlock",
        data: {
          content: [
            { type: "heading", text: "Audit Findings" },
            { type: "paragraph", text: "The audit revealed a lack of cohesion in the internal structure of the platform:" },
            {
              type: "list",
              listType: "ul",
              items: [
                "Overuse of elements, colors, and fonts, many of which lacked a clear purpose.",
                "Essential charts and data were difficult to understand or missing entirely."
              ]
            }
          ]
        }
      },
      {
        type: "CaseMedia",
        data: {
          images: [
            { src: "/assets/imgs/wk/wk04.jpg", alt: "Audit" }
          ],
          caption: "Heuristic evaluation and audit."
        }
      },
      {
        type: "CaseBlock",
        data: {
          content: [
            { type: "paragraph", text: "Visual clarity was crucial for a platform like Finsit, but the existing graphs failed to deliver. Users frequently reported the need for additional options and more meaningful data visualizations." }
          ]
        }
      },
      {
        type: "CaseBlock",
        data: {
          title: "4. Solution",
          content: [
            { type: "paragraph", text: "We began by conducting a <span class='bold'>full product audit</span>, uncovering a heavy overload of fonts, colors, and other design assets. This laid the groundwork for our <span class='bold'>design tokens</span>, forming the foundation of the new Design System." },
            {
              type: "list",
              listType: "ul",
              items: [
                "<span class='bold'>Improved menu architecture</span>: Redesigned navigation to streamline access to core functionalities.",
                "<span class='bold'>Enhanced data visualization options</span>: Introduced more detailed and customizable graphs, improving data clarity and usability.",
                "<span class='bold'>Business vreakdown view</span>: Developed a new feature that allowed users to drill down into the details of their financial data.",
                "<span class='bold'>Fiscal period selection improvements</span>: Simplified the process of selecting and comparing fiscal periods.",
                "<span class='bold'>Customizable color palettes</span>: Added options for users to personalize colors in their infographics, a highly requested feature.",
              ]
            }
          ]
        }
      },
      {
        type: "CaseMedia",
        data: {
          images: [
            { src: "/assets/imgs/wk/wk05.jpg", alt: "Finsit new UI" },
            { src: "/assets/imgs/wk/wk07.jpg", alt: "Finsit new UI" },
            { src: "/assets/imgs/wk/wk06.jpg", alt: "Finsit new UI" }
          ]
        }
      },
      {
        type: "CaseBlock",
        data: {
          content: [
            { type: "heading", text: "Additional Functionalities" },
            {
              type: "list",
              listType: "ul",
              items: [
                "Compare data across multiple periods.",
                "View complete activity logs.",
                "Generate detailed reports for deeper insights."
              ]
            }
          ]
        }
      },
      {
        type: "CaseMedia",
        data: {
          images: [
            { src: "/assets/imgs/wk/wk10.jpg", alt: "Finsit new UI" }
          ]
        }
      },
      {
        type: "CaseMedia",
        data: {
          images: [
            { src: "/assets/imgs/wk/wk11.jpg", alt: "Finsit new UI" }
          ],
          caption: "Finsit new UI."
        }
      },
      {
        type: "CaseBlock",
        data: {
          title: "5. Outcome",
          content: [
            { type: "paragraph", text: "The results of the redesign and the introduction of forecasting features were remarkable:" },
            {
              type: "list",
              listType: "ul",
              items: [
                "<span class='bold'>Revenue growth</span>: Finsit's revenue increased from €1.504M to €4.476M in just two years.",
                "<span class='bold'>Organic growth</span>: Jumped from 10.2% to 35.1%, solidifying Finsit's market position.",
                "<span class='bold'>Market expansion</span>: The platform was successfully launched in new markets, including Spain and Denmark.",
                "<span class='bold'>Industry recognition</span>: Finsit became one of Europe's top choices for financial infographic solutions."
              ]
            }
          ]
        }
      },
      {
        type: "CaseMedia",
        data: {
          layout: "wrap",
          images: [
            { src: "/assets/imgs/wk/wk08.jpg", alt: "Finsit new UI" },
            { src: "/assets/imgs/wk/wk09.jpg", alt: "Finsit new UI" }
          ]
        }
      },
      {
        type: "CaseBlock",
        data: {
          title: "6. Next Steps",
          content: [
            { type: "paragraph", text: "Looking ahead, the focus was on leveraging AI to deliver smarter forecasting and personalized insights. Expanding third-party integrations and enhancing accessibility standards were essential for driving adoption. Additionally, we planned to provide more educational resources to empower users and position Finsit as the go-to platform for financial data visualization across Europe." }
          ]
        }
      }
    ]
};