export default {
  id: "calendar",
  title: "Simplifying the scheduling process",
  subtitle: "The scheduling experience at Greyfinch was redesigned to make appointment management faster, clearer and less error-prone for clinic staff.",
  thumbnail: "/assets/imgs/greyfinch/test01.png",
  components: [
    {
      type: "CaseMedia",
      data: {
        transparent: "yes",
        images: [
          {
            src: "/assets/imgs/greyfinch/test01.png",
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
            text: "Lead Product Designer — Research, Interaction Design, Visual Design, User Flows, Design System, Prototyping"
          },
          {
            label: "Team",
            list: [
              "Product Designer (Me)",
              "Product Manager",
              "CTO",
              "Engineer x 2"
            ]
          },
          {
            label: "Timeline",
            text: "6 months"
          },
          {
            label: "Tools",
            text: "Figma, Google Spreadsheet, Miro, Notion, Maze, Loom, Zoom"
          }
        ]
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "01. Context",
        content: [
          {
            customWidth: "custom-width",
            title: "About Greyfinch",
            text:
            `Greyfinch is a <span class="bold">Practice Management Software (PMS) for orthodontic clinics</span>, with a core Calendar feature that helps doctors, front-desk, and assistants manage appointments, daily schedules, and chair assignments efficiently.
            <br /><br />
            <span class="bold">Improving the scheduling experience</span> became essential, as the calendar sits at the heart of daily operations. Making it faster, clearer, and more reliable directly impacted staff performance and reduced friction.`
          }
        ]
      }
    },
    {
      type: "CaseMedia",
      data: {
        transparent: "yes",
        images: [
          {
            src: "/assets/imgs/greyfinch/test02.png",
            alt: "Finsit"
          }
        ],
        caption: "Greyfinch PMS"
      }
    },
    {
      type: "CaseBlock",
      data: {        
        title: "02. Summary",
        direction: "direction-column",
        content: [
          {
            title: "The problem",
            text:
              `The original scheduling flow relied on <span class="bold">two separate panels</span>—one for patient info, another for appointment settings—making the process fragmented, and hard to follow for staff.
              <br /><br />
              More critically, completing a booking required navigating through disconnected panels, increasing friction and confusion.`
          },
          {
            title: "The solution",
            text: `In under six months, we redesigned the scheduling experience to fix major usability issues and make daily workflows smoother for staff.
            <br /><br />
            <span class="bold">I led the effort from discovery to delivery</span>—aligning with stakeholders, running research sessions, shaping design directions, and validating improvements with real users.`
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
                label: `+40%`,
                text: "Faster scheduling process."
              },
              {
                label: "-28%",
                text: "Fewer support requests."
              },
              {
                label: `5+`,
                text: "Top issues resolved."
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
        title: "Key features",
        text: "Scheduling tasks were consolidated into a streamlined interface, improving speed, clarity, and overall confidence across roles."
      }
    },
    {
      type: "CaseMedia",
      data: {
        images: [
          {
            src: "/assets/imgs/greyfinch/test03.png",
            alt: "Finsit"
          }
        ],
        caption: "Sidebar scheduling wizard. Step 1/2 (Patient info)"
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
              `<span class="bold">Grouping Next and Completed appointments</span>: Appointments were split into upcoming and past, making schedules easier to scan.`,
              `<span class="bold">Detailed patient information</span>: Key patient info was added to the flow, removing the need to switch sidebars.`
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
            src: "/assets/imgs/greyfinch/test03B.png",
            alt: "Typography"
          }
        ],
        caption: "Sidebar scheduling wizard. Step 2/2 (Scheduling options)"
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
              `I added a dedicated section for <span class="bold">appointment notes</span>, giving staff a simple, consistent way to capture important context.`
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
        title: "Design process",
        text: "The process followed a clear path: understanding real-world usage, identifying key pain points, prioritizing ideas based on impact, and validating solutions with users."
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "04. Research and Analysis",
        direction: "direction-column",
        content: [
          {
            customWidth: "custom-width",
            title: "Understanding the problem",
            text:
              `I reviewed past research, support logs, and ran short surveys. <span class="bold">Most insights came from interviews</span> with front-desk staff and doctors. This is what I did so far:
              <br/><br/>
              `,
            listType: "ul",
            list: [
              `<span class="bold">5 shadowing sessions</span> with front-desk staff.`,
              `<span class="bold">7 – 8 user interviews</span> across different roles.`,
              // `<span class="bold">A short survey</span> to collect broader input.`,
              `<span class="bold">A competitive benchmark</span> to assess how other platforms approached appointment scheduling.`,
            ]
          },
          {
            panels: [
              {
                text: `<span class="bold">The options are split between different panels</span>, and sometimes I’m not sure if I’ve completed all the steps correctly.
                <br/><br/>
                <span class="bold">Front-desk staff</span>`
              }
            ],
            panelStyle: "zeta"
          }
        ]
      }
    },
    {
      type: "CaseBlock",
      data: {
        direction: "direction-column",
        content: [
          {
            customWidth: "custom-width",
            title: "Focusing on what matters",
            text: `We captured all findings in a shared spreadsheet, organized by product areas—especially the Schedule. <span class="bold">I also mapped the scheduling journey</span> to pinpoint delays and friction.
            <br /><br />
            Then, we used effort–value analysis to help us <span class="bold">prioritize quick wins and high-impact fixes</span> aligned with both user needs and business goals.
            <br /><br />`
          },
          {
            panels: [
              {
                label: "Key Insights",
                list: [
                  "Disconnected steps made the process harder.",
                  "Redundant actions slowed down daily tasks.",
                  "The interface lacked guidance for confident use."
                ]
              }
            ],
            panelStyle: "gamma",
          }
        ]
      }
    },
    {
      type: "CaseMedia",
      data: {
        images: [
          {
            src: "/assets/imgs/greyfinch/test10.png",
            alt: "Finsit"
          }
        ],
        caption: "User journey."
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "05. Ideation & Exploration",
        content: [
          {
            customWidth: "custom-width",
            title: "Reimagining the experience",
            text:
              `Based on the research, <span class="bold">the main idea was to merge the two-panel flow into one simplified view</span>. I reorganized the layout, removed clutter, and added features like editable notes and better patient context.
              <br /><br />
              This helped reducing friction without adding complexity. Here’s the original setup: patient info and appointment details lived in separate panels, causing confusion, missed steps, and slower bookings.`
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
            src: "/assets/imgs/greyfinch/test09A.png",
            alt: "Typography"
          },
          {
            src: "/assets/imgs/greyfinch/test09B.png",
            alt: "Iconography"
          }
        ],
        caption: "Old structure. 2 sidebars."
      }
    },
    {
      type: "CaseBlock",
      data: {
        align: "justify-center",
        content: [
          {
            customWidth: "custom-width",
            text: `In contrast, the redesigned sidebar <span class="bold">l necessary actions into a single, streamlined wizard</span>. This new structure reduced ambiguity, improved visibility of key information, and created a more linear and confident scheduling flow for users across roles.`
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
            src: "/assets/imgs/greyfinch/test09C.png",
            alt: "Typography"
          },
          {
            src: "/assets/imgs/greyfinch/test09D.png",
            alt: "Iconography"
          }
        ],
        caption: "New structure. 1 wizard sidebar."
      }
    },
    // {
    //   type: 'SliderComponent',
    //   data: {
    //     images: [
    //       {
    //         src: "/assets/imgs/greyfinch/test09C.png",
    //         alt: "Iconography"
    //       },
    //       {
    //         src: "/assets/imgs/greyfinch/test09D.png",
    //         alt: "Iconography"
    //       }
    //     ],
    //     caption: "Before"
    //   }
    // },
    {
      type: "CaseBlock",
      data: {
        title: "06. Exploring solutions",
        content: [
          {
            customWidth: "custom-width",
            title: "Shaping through iteration",
            text:
              `Before finalizing the redesign, I explored different layout directions to balance structure, clarity, and ease of use. These early concepts helped shape the interface that followed.`
          }
        ]
      }
    },
    {
      type: 'CarouselComponent',
      data: {
        images: [
          { src: '/assets/imgs/greyfinch/carousel01.png', alt: 'Image 1' },
          { src: '/assets/imgs/greyfinch/carousel02.png', alt: 'Image 2' },
          { src: '/assets/imgs/greyfinch/carousel03.png', alt: 'Image 3' },
          { src: '/assets/imgs/greyfinch/carousel04.png', alt: 'Image 4' },
          { src: '/assets/imgs/greyfinch/carousel05.png', alt: 'Image 5' },
          { src: '/assets/imgs/greyfinch/carousel06.png', alt: 'Image 6' },
          { src: '/assets/imgs/greyfinch/carousel07.png', alt: 'Image 7' }
        ]
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "07. Final UI",
        content: [
          {
            customWidth: "custom-width",
            title: "A refined interface",
            text:
              `After several iterations, the final design brought <span class="bold">clarity to core scheduling actions</span>. Key views were simplified, context stayed visible, and the layout adapted smoothly—whether reviewing info, editing, or creating appointments:
              <br /><br />`,
            list: [
              `<span class="bold">Patient</span> shows key details at a glance.`,
              `<span class="bold">Scheduling</span> focuses on selecting time, provider, and type.`
            ]
          }
        ]
      }
    },
    {
      type: "CaseBlock",
      data: {        
        direction: "direction-column",
        alignContent: "align-center",
        content: [
          {
            image:  {
              src: "/assets/imgs/greyfinch/test05.png",
              class: "case-img-inline"
            }
          },
          {
            panels: [
              {
                label: "Patient",
                text: "Shows key patient info like contact details and appointment history for quick context."
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
        direction: "direction-column",
        alignContent: "align-center",
        content: [
          {
            image:  {
              src: "/assets/imgs/greyfinch/test06.png",
              class: "case-img-inline"
            }
          },
          {
            panels: [
              {
                label: "Scheduling",
                text: "Lets staff choose date, slot, provider, and filters with clear availability indicators."
              }
            ],
            panelStyle: "alpha"
          }
        ]
      }
    },
    // {
    //   type: "CaseBlock",
    //   data: {        
    //     direction: "direction-column",
    //     alignContent: "align-center",
    //     content: [
    //       {
    //         panels: [
    //           {
    //             label: "New Appt. (Existing Patient)",
    //             text: "Combines patient data and scheduling inputs to speed up appointment creation."
    //           }
    //         ],
    //         panelStyle: "alpha"
    //       },
    //       {
    //         image:  {
    //           src: "/assets/imgs/greyfinch/test07.png",
    //           class: "case-img-inline"
    //         }
    //       }
    //     ]
    //   }
    // },
    {
      type: "CaseBlock",
      data: {
        title: "08. Validating the Idea",
        content: [
          {
            customWidth: "custom-width",
            title: "Early feedback on core concepts",
            text: `I created a prototype ranging from wireframes to near-final UI states. Each iteration was designed to test a specific part of the experience, from layout hierarchy to interaction logic. And to evaluate clarity, speed, and ease of use.
            <br /><br />
            <span class="bold">We tested the redesign</span> with front-desk staff, doctors, and new users. Creating, editing, and rescheduling tasks showed the sidebar improved speed and reduced errors. Minor issues were addressed before launch.`
          }
        ]
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "09. Impact vs. learnings",
        direction: "direction-column",
        content: [
          {
            title: "Outcomes",
            text:
              `The redesign led to measurable improvements across key metrics, while remaining intuitive enough to require virtually no additional training for clinic staff.
              <br /><br />`,
            listType: "ul",
            list: [
              `<span class="bold">+40%</span> faster appointment creation.`,
              `<span class="bold">-28%</span> support requests.`,
              `<span class="bold">5+</span> top usability issues resolved.`
            ]
          },
          {
            title: "From friction to focus",
            text: `This project underscored the value of clarity over complexity. Small design tweaks drove meaningful gains in efficiency and confidence.
            <br /><br />
            Building on past audits and support insights helped us move fast without sacrificing quality. Close collaboration with engineering ensured scalable, realistic implementation.`

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
        thanks: "Thanks to Alfre, Neil, Garvan, Darío, Jake and the rest of the team."
      }
    }
  ]
}