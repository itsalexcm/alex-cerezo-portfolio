export default {
    id: "scaling-design",
    title: "Scaling Product Design",
    subtitle: "Redefining workflows at Greyfinch to boost efficiency.",
    thumbnail: "/assets/imgs/greyfinch/greyfinch11.jpg",
    components: [
      {
        type: "CaseSummary",
        data: {
          panels: [
            {
              label: "My Role",
              text: "Introduced scalable design and documentation systems, redesigned components and led team workflows."
            },
            {
              label: "Impact",
              text: "Standardized design and research practices empowered faster delivery, scalability, and team alignment."
            }
          ]
        }
      },
      {
        type: "CaseBlock",
        data: {
          title: "1. Context",
          content: [
            { type: "paragraph", text: "Greyfinch is a Practice Management Software (PMS) designed primarily for orthodontic clinics. Its platform enables the management of tasks ranging from patient acquisition to appointment scheduling, billing, and communication." },
            { type: "paragraph", text: "Helps clinics improve operational efficiency and focus more on patient care. Additionally, its flexibility allows it to cater to other healthcare practices, providing customized solutions to meet their unique needs." }
          ]
        }
      },
      {
        type: "CaseMedia",
        data: {
          images: [
            { src: "/assets/imgs/greyfinch/greyfinch01.jpg", alt: "Greyfinch" }
          ],
          caption: "Greyfinch."
        },
      },
      {
        type: "CaseBlock",
        data: {
          title: "2. The Challenge",
          content: [
            { type: "paragraph", text: "Before I joined, the team developed directly in production, a philosophy with initial benefits but challenges as interface elements scaled." },
            { type: "paragraph", text: "The lack of a structured Product Design framework led to inconsistencies. Experimentation happened in Figma, but implementation went straight to code, with inflexible components like “blue-button” and “big-card” requiring a complete overhaul." }
          ]
        }
      },
      {
        type: "CaseResults",
        data: {
          title: "Key Results",
          panels: [
            { label: "<span class='bold'>🧱 50+ components</span> built for consistency.", text: "Redesigned and documented components for consistency and scalability." },
            { label: "<span class='bold'>📚 Centralised docs</span> with research and specs.", text: "Established centralized Notion-based documentation for all team projects." },
            { label: "<span class='bold'>⚡ Fast onboarding</span> through clear workflows.", text: "New designers integrated faster thanks to clear processes and file structures." }
          ]
        }
      },
      {
        type: "CaseBlock",
        data: {
          title: "3. Defining the Vision",
          content: [
            { type: "paragraph", text: "The first step was <span class='bold'>to dive into the core repository</span>, as we lacked a structured file system in Figma. I also mapped all platform views to gain a clear understanding of the interface." },
          ]
        }
      },
      {
        type: "CaseMedia",
        data: {
          images: [
            { src: "/assets/imgs/greyfinch/greyfinch02.jpg", alt: "Mapping all the views" }
          ],
          caption: "Mapping all the views."
        }
      },
      {
        type: "CaseBlock",
        data: {
          content: [
            { type: "paragraph", text: "A structured <span class='bold'>design sctructure in Figma</span> became essential at this stage. Leveraging past experiences and the platform's features, I began creating a project index. Each project included its own folder structure, with specific files and a defined page hierarchy within each file." }
          ]
        }
      },
      {
        type: "CaseMedia",
        data: {
          images: [
            { src: "/assets/imgs/greyfinch/greyfinch03.jpg", alt: "Design structure in Figma" }
          ],
          caption: "Design structure in Figma."
        }
      },
      {
        type: "CaseBlock",
        data: {
          content: [
            { type: "heading", text: "A Cover to Rule Them All" },
            { type: "paragraph", text: "The next step involved defining task and file organization through a system of covers. I created four types for every project:" },
            {
                type: "list",
                listType: "ul",
                items: [
                  "<span class='bold'>WIP</span>: For ongoing work.",
                  "<span class='bold'>Ready to Dev</span>: Files ready for handoff to developers.",
                  "<span class='bold'>Archived</span>: Once implemented and approved, files were marked as archived.",
                  "<span class='bold'>Declined</span>: For projects rejected during implementation for any reason."
                ]
              }
          ]
        }
      },
      {
        type: "CaseMedia",
        data: {
          images: [
            { src: "/assets/imgs/greyfinch/greyfinch04.jpg", alt: "Files cover system" },
            { src: "/assets/imgs/greyfinch/greyfinch11.jpg", alt: "Figma" },
            { src: "/assets/imgs/greyfinch/greyfinch05.jpg", alt: "Cover workflow" }
          ],
          caption: "Files cover system and workflow."
        }
      },
      {
        type: "CaseBlock",
        data: {
          content: [
            { type: "paragraph", text: "Within each file, I established three types of pages:" },
            {
              type: "list",
              listType: "ul",
              items: [
                "<span class='bold'>Experimentation</span>: A space for exploring and testing ideas.",
                "<span class='bold'>Design</span>: The main workspace for finalizing design work.",
                "<span class='bold'>Proposal</span>: The polished version to be shared with stakeholders."
              ]
            },
            { type: "paragraph", text: "Simultaneously, we started building a documentation and research system hosted in Notion. Together, these tools allowed for precise tracking of all team projects." },
          ]
        }
      },
      {
        type: "CaseBlock",
        data: {
          title: "4. Growing our Mission",
          content: [
            { type: "paragraph", text: "The standardized structure for every project in Notion included six key sections:" },
            {
              type: "list",
              listType: "ul",
              items: [
                "<span class='bold'>Changelog</span>: Record of changes and updates throughout the project.",
                "<span class='bold'>Background</span>: Summary of the project context, goals, and origin.",
                "<span class='bold'>User & business value proposition</span>: Benefits of the project for both users and the business.",
                "<span class='bold'>User stories</span>: Descriptions of features from the user's perspective.",
                "<span class='bold'>Research</span>: Data and information gathered to support design decisions.",
                "<span class='bold'>Link to the Figma project</span>: Link to the Figma file containing designs and prototypes."
              ]
            }
          ]
        }
      },
      {
        type: "CaseBlock",
        data: {
          content: [
            { type: "heading", text: "For Designers, for Developers" },
            { type: "paragraph", text: "This well-defined workflow allowed us to create and standardize design decisions through design tokens." },
            { type: "paragraph", text: "In collaboration with the development team and other stakeholders, we integrated the token structure into a system consumable by Greyfinch's internal teams and external clients." }
          ]
        }
      },
      {
        type: "CaseMedia",
        data: {
          layout: "wrap",
          images: [
            { src: "/assets/imgs/greyfinch/greyfinch06.jpg", alt: "Design tokens JSON" },
            { src: "/assets/imgs/greyfinch/greyfinch07.jpg", alt: "Tokens at component level" }
          ]
        }
      },
      {
        type: "CaseBlock",
        data: {
          content: [
            { type: "paragraph", text: "This system enabled faster and more consistent development. Over time, it evolved to support token definitions at the component level, making it highly scalable." }
          ]
        }
      },
      {
        type: "CaseBlock",
        data: {
          content: [
            { type: "heading", text: "Now We Are Talking" },
            { type: "paragraph", text: "In parallel, I began <span class='bold'>redesigning existing interface elements</span> using this new system while also creating new components." }
          ]
        }
      },
      {
        type: "CaseMedia",
        data: {
          images: [
            { src: "/assets/imgs/greyfinch/greyfinch08.jpg", alt: "Interface items" },
            { src: "/assets/imgs/greyfinch/greyfinch09.jpg", alt: "Greyfinch platform" },
            { src: "/assets/imgs/greyfinch/greyfinch10.jpg", alt: "Greyfinch calendar" }
          ],
          caption: "New interface components and Greyfinch platform."
        }
      },
      {
        type: "CaseBlock",
        data: {
          title: "5. Exploration Drives Success",
          content: [
            { type: "paragraph", text: "With the new workflow in place, we could shift our focus to user-centric design. This enabled us to increase qualitative and quantitative research efforts, including:" },
            {
              type: "list",
              listType: "ul",
              items: [
                "Interviews with doctors.",
                "Persona videos with users.",
                "Creation of the patient journey.",
                "Competitor research."
              ]
            }
          ]
        }
      },
      {
        type: "CaseBlock",
        data: {
          title: "6. Outcome",
          content: [
            { type: "paragraph", text: "The improvements implemented over the span of a year had a transformative impact:" },
            {
              type: "list",
              listType: "ul",
              items: [
                "<span class='bold'>Design tokens as a foundation</span>: Centralized design decisions enabled rapid scaling while maintaining consistency.",
                "<span class='bold'>Streamlined project management</span>: The introduction of a unified project archive allowed us to track progress, features, and maintain a comprehensive history.",
                "<span class='bold'>Enhanced user research</span>: Tools like persona videos and user testing provided deeper insights, improving both user and business outcomes.",
                "<span class='bold'>Scalable design library</span>: The updated components and Figma file structure allowed us to iterate faster and with greater precision."
              ]
            }
          ]
        }
      },
      {
        type: "CaseBlock",
        data: {
          title: "7. Next Steps",
          content: [
            { type: "paragraph", text: "The foundation is now in place for scalable growth. New designers joining the team will find clear tools and workflows to integrate quickly and contribute effectively. Moving forward, we'll refine these processes to ensure they adapt to the team's evolving needs." },
            { type: "paragraph", text: "Educating the team on best practices will remain a priority to maximize efficiency and maintain consistency. This commitment will help Greyfinch scale seamlessly while continuing to deliver exceptional value to its users." }
          ]
        }
      }
    ]
};