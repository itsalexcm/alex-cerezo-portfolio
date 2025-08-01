export default {
  id: "dashboard",
  title: "Improving the dashboard experience",
  subtitle: "This case study explores how we improved the clarity and usability of Finsit’s dashboard, a tool used by accountants and their clients to visualize financial data.",
  thumbnail: "/assets/imgs/wk/test01.png",
  components: [
    {
      type: "CaseMedia",
      data: {
        transparent: "yes",
        images: [
          {
            src: "/assets/imgs/wk/test01.png",
            alt: "Finsit"
          }
        ],
      },
    },
    {
      type: "CaseMeta",
      data: {
        content: [
          {
            label: "My Role",
            text: "Lead Product Designer — Research, Interaction Design, Visual Design, Design System, Prototyping"
          },
          {
            label: "Team",
            list: [
              "Product Designer (Me)",
              "Product Manager",
              "CTO",
              "Engineer",
              "QA"
            ]
          },
          {
            label: "Timeline",
            text: "4 months"
          },
          {
            label: "Tools",
            text: "Figma, Google Spreadsheet, Slack, Miro, Maze, Basecamp, Zoom"
          }
        ]
      }
    },
    {
      type: "CaseLine"
    },
    {
      type: "CaseBlock",
      data: {
        title: "01. Context",
        direction: "direction-column",
        directionContent: "direction-column",
        content: [
          {
            customWidth: "custom-width",
            title: "What is Finsit?",
            text:
              `Finsit is Wolters Kluwer's online solution that <span class="bold">simplifies complex financial data into easy-to-understand infographics</span>. It presents accounting information visually, with comparisons and trends, enabling users to analyze data more effectively.
              <br /><br />
              The platform is built around three core pillars:`
          },
          {
            pilars: [
              {
                icon:
                  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="3.4" fill="var(--social-color)" stroke="var(--text-primary)" stroke-width="1.2"/>
                  <path d="M12 5V3" stroke="var(--text-primary)" stroke-width="1.2" stroke-linecap="round"/>
                  <path d="M12 21V19" stroke="var(--text-primary)" stroke-width="1.2" stroke-linecap="round"/>
                  <path d="M16.95 7.05025L18.3643 5.63603" stroke="var(--text-primary)" stroke-width="1.2" stroke-linecap="round"/>
                  <path d="M5.63559 18.364L7.0498 16.9498" stroke="var(--text-primary)" stroke-width="1.2" stroke-linecap="round"/>
                  <path d="M19 12L21 12" stroke="var(--text-primary)" stroke-width="1.2" stroke-linecap="round"/>
                  <path d="M3 12L5 12" stroke="var(--text-primary)" stroke-width="1.2" stroke-linecap="round"/>
                  <path d="M16.95 16.9497L18.3643 18.364" stroke="var(--text-primary)" stroke-width="1.2" stroke-linecap="round"/>
                  <path d="M5.63559 5.63603L7.0498 7.05025" stroke="var(--text-primary)" stroke-width="1.2" stroke-linecap="round"/>
                  </svg>`,
                label: "Clarity",
                text: "Visually intuitive dashboards that help business owners easily understand their numbers."
              },
              {
                icon:
                  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="4" width="14" height="17" rx="2" fill="var(--social-color)" stroke="var(--text-primary)" stroke-width="1.2"/>
                  <path d="M9 9H15" stroke="var(--text-primary)" stroke-width="1.2" stroke-linecap="round"/>
                  <path d="M9 13H15" stroke="var(--text-primary)" stroke-width="1.2" stroke-linecap="round"/>
                  <path d="M9 17H13" stroke="var(--text-primary)" stroke-width="1.2" stroke-linecap="round"/>
                  </svg>`,
                label: "Reporting",
                text: "Customizable reports with flexible settings tailored to each client’s and business needs."
              },
              {
                icon:
                  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.3259 5.77772C20 6.78661 20 8.19108 20 11C20 13.8089 20 15.2134 19.3259 16.2223C19.034 16.659 18.659 17.034 18.2223 17.3259C17.3409 17.9148 16.1577 17.9892 14 17.9986V18L12.8944 20.2111C12.5259 20.9482 11.4741 20.9482 11.1056 20.2111L10 18V17.9986C7.8423 17.9892 6.65907 17.9148 5.77772 17.3259C5.34096 17.034 4.96596 16.659 4.67412 16.2223C4 15.2134 4 13.8089 4 11C4 8.19108 4 6.78661 4.67412 5.77772C4.96596 5.34096 5.34096 4.96596 5.77772 4.67412C6.78661 4 8.19108 4 11 4H13C15.8089 4 17.2134 4 18.2223 4.67412C18.659 4.96596 19.034 5.34096 19.3259 5.77772Z" fill="var(--social-color)" stroke="var(--text-primary)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9 9L15 9" stroke="var(--text-primary)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9 13H12" stroke="var(--text-primary)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>`,
                label: "Advisory",
                text: "A unique built-in consulting layer that enables accountants to provide contextual insights."
              }
            ]
          }
        ]
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "02. Summary",
        direction: "direction-column",
        content: [
          {
            title: "The challenge",
            text:
              `With Finsit preparing to launch in Spain and Denmark, <span class="bold">we were asked to improve the Overview Dashboard</span> (the entry point for most users).
              <br /><br />
              Rather than starting from scratch, the goal was to refine and simplify what mattered most, making the experience clearer and more welcoming for new markets.`
          },
          {
            title: "Project planning",
            text: "As Lead Designer, I led the end-to-end design process:",
            panels: [
              {
                label: "Discovery",
                text: `<span class="bold">Consolidated prior research</span>, captured new user insights, and clarified business needs.`
              },
              {
                label: "Design",
                text: `<span class="bold">Identified main opportunities</span>, built prototypes, and refined them through testing.`
              },
              {
                label: "Handoff",
                text: `<span class="bold">Polished the UI and partnered with devs</span> to ensure a high-quality implementation.`
              }
            ],
            panelStyle: "alpha"
          }
        ]
      }
    },
    {
      type: "CaseBlock",
      data: {        
        title: "03. Impact",
        direction: "direction-column",
        content: [
          {
            panels: [
              {
                label: `+197%`,
                text: "Revenue growth over 2 years."
              },
              {
                label: "2+",
                text: "New markets launched."
              },
              {
                label: `+25%`,
                text: "Organic growth driven by product adoption."
              }
            ],
            panelStyle: "beta"
          }
        ]
      }
    },
    {
      type: "CaseLine"
    },
    {
      type: "CaseTitle",
      data: {
        title: "From data to clarity",
        text: "We redesigned the dashboard layout and visuals to help users focus on what matters most, removing noise and surfacing insights more intuitively."
      }
    },
    {
      type: "CaseMedia",
      data: {
        images: [
          {
            src: "/assets/imgs/wk/test02.png",
            alt: "Finsit"
          }
        ]
      }
    },
    {
      type: "CaseBlock",
      data: {
        align: "justify-center",
        content: [
          {
            customWidth: "custom-width",
            listType: "ol",
            start: 1,
            list: [
              `<span class="bold">Graph legends & indicators</span>: Added clear legends and color indicators to help users understand each data point at a glance.`,
              `<span class="bold">Detail tooltips</span>: Included informative tooltips that appear on hover, improving clarity without clutter.`
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
          {
            src: "/assets/imgs/wk/test03.png",
            alt: "Typography"
          },
          {
            src: "/assets/imgs/wk/test04.png",
            alt: "Iconography"
          }
        ],
        caption: "Zoom detail."
      }
    },
    {
      type: "CaseBlock",
      data: {
        align: "justify-center",
        content: [
          {
            customWidth: "custom-width",
            listType: "ol",
            start: 3,
            list: [
              `<span class="bold">Business Breakdown section</span>: Introduced a new area that displays performance by business segment, highlighting top categories and trends.`,
              `<span class="bold">Clearer date labeling</span>: Each month now includes its corresponding year, improving clarity when reviewing long-term data. Especially across fiscal boundaries.`
            ]
          }
        ]
      }
    },
    {
      type: "CaseLine"
    },
    {
      type: "CaseTitle",
      data: {
        title: "How I got there",
        text: "Each step—from research to final visuals—was carefully designed to make Finsit’s dashboard clearer, more focused, and easier to use."
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "04. Discovery",
        content: [
          {
            customWidth: "custom-width",
            title: "Research approach",
            text:
              `<span class="bold">I did a full site audit recently</span> as part of a previous project focused on introducing a new design system. That audit already highlighted key areas for improvement, including the structure of the main navigation and overall content hierarchy.
              <br /><br />
              Building on that foundation, I complemented the research with:
              <br /><br />`,
            listType: "ul",
            start: 1,
            list: [
              `A series of <span class="bold">5-6 user interviews</span>.`,
              `<span class="bold">An internal survey</span> across the Finsit team.`,
              `A focused <span class="bold">heuristic evaluation</span> of the existing dashboard.`
            ]
          }
        ]
      }
    },
    {
      type: "CaseMedia",
      data: {
        images: [
          {
            src: "/assets/imgs/wk/test05.png",
            alt: "Finsit"
          }
        ],
        caption: "UX Audit."
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "05. Findings",
        direction: "direction-column",
        directionContent: "direction-column",
        content: [
          {
            title: "What stood out",
            text: "These were the main pain points in the current design:"
          },
          {
            panels: [
              {
                label: "Business Side",
                list: [
                  "Entry point design influenced new user trust.",
                  "Fragmented UI reduced perceived reliability.",
                  "Rigid layouts didn’t scale across client needs."
                ]
              },
              {
                label: "User Side",
                list: [
                  "Data visuals lacked clarity in key moments.",
                  "Excessive info density led to cognitive strain.",
                  "Users got lost navigating to essential features."
                ]
              },
            ],
            panelStyle: "gamma"
          }
        ]
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "06. Design",
        content: [
          {
            customWidth: "custom-width",
            title: "Ideation time",
            text:
              `Through a series of <span class="bold">workshops with key stakeholders</span>, we aligned on business priorities, clarified the most valuable opportunities, and defined both user and functional needs for <span class="bold">a focused MVP</span>.`
          }
        ]
      }
    },
    {
      type: "CaseMedia",
      data: {
        images: [
          {
            src: "/assets/imgs/wk/test06.png",
            alt: "Finsit"
          }
        ],
        caption: "UI Color system."
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "06. Design",
        content: [
          {
            customWidth: "custom-width",
            title: "Ideation time",
            text:
              `Through a series of <span class="bold">workshops with key stakeholders</span>, we aligned on business priorities, clarified the most valuable opportunities, and defined both user and functional needs for <span class="bold">a focused MVP</span>.`
          }
        ]
      }
    },
    {
      type: "CaseMedia",
      data: {
        images: [
          {
            src: "/assets/imgs/wk/test07.png",
            alt: "Finsit",
            borderRadius: "custom-01"
          }
        ]
      }
    },
    {
      type: "CaseMedia",
      data: {
        images: [
          {
            src: "/assets/imgs/wk/test08.png",
            alt: "Finsit",
            borderRadius: "custom-02"
          }
        ]
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "07. Impact vs. learnings",
        direction: "direction-column",
        content: [
          {
            title: "Outcomes",
            text:
              `The results of the redesign and the introduction of a new design system were substantial, driving both user satisfaction and measurable business growth:
              <br /><br />`,
            listType: "ul",
            start: 1,
            list: [
              `<span class="bold">Revenue</span>: Revenue grew from €1.5M to €4.5M in 2 years.`,
              `<span class="bold">Organic growth</span>: Jumped from 10% to 35%.`,
              `<span class="bold">Expansion</span>: Successfully launched in Spain and Denmark.`
            ]
          },
          {
            title: "Smarter, not bigger",
            text:
              `
              This project reinforced the value of designing with constraints. Instead of overhauling the entire dashboard, we focused on refining what truly mattered to users.
              <br /><br />
              Aligning early with business goals helped us prioritize and move faster. Combining previous audits with light research kept things efficient throughout.
              `
          }
        ]
      }
    },
    {
      type: "CaseLine"
    },
    {
      type: "CaseTitle",
      data: {
        thanks: "Thanks to Ben, Lotta, Sara, Johan, Nico and the rest of the team."
      }
    },
  ]
}