export default {
    id: "smarter-calendar",
    title: "A Smarter Calendar for the Users",
    subtitle: "Revamping Greyfinch's appointments system.",
    thumbnail: "/assets/imgs/calendar/calendar08.jpg",
    components: [
      {
        type: "CaseSummary",
        data: {
          panels: [
            { label: "My Role", text: "Led UX research and design for the new calendar experience, collaborating closely with support and engineering teams from discovery to delivery." },
            { label: "Impact", text: "Delivered a redesigned scheduling experience that increased user autonomy and reduced support overhead." }
          ]
        }
      },
      {
        type: "CaseBlock",
        data: {
          title: "1. Context",
          content: [
            { type: "paragraph", text: "Greyfinch is a Practice Management Software (PMS) designed primarily for orthodontic clinics. Its platform enables the management of tasks ranging from patient acquisition to appointment scheduling, billing, and communication." },
            { type: "paragraph", text: "At the heart of the platform lies the Calendar—a crucial tool for all three primary user roles: Doctors, Front Desk, and Assistants. It allows users to manage appointments, view daily schedules, and organize doctor chair assignments at a glance." }
          ]
        }
      },
      {
        type: "CaseMedia",
        data: {
          images: [
            { src: "/assets/imgs/calendar/calendar01.jpg", alt: "Greyfinch old calendar" }
          ],
          caption: "Greyfinch old calendar."
        },
      },
      {
        type: "CaseBlock",
        data: {
          title: "2. The Challenge",
          content: [
            { type: "paragraph", text: "While the support team helped clinics with initial calendar setup and first steps, scaling the platform made personalized assistance less feasible. To address this, we launched an initiative to identify key user pain points with the calendar, aiming to improve usability and overall user experience." }
          ]
        }
      },
      {
        type: "CaseResults",
        data: {
          title: "Key Results",
          panels: [
            {
              label: "<span class='bold'>⏱️ 40%</span> faster scheduling process after redesign.",
              text: "New slot suggestions and sidebar features helped clinics book appointments faster."
            },
            {
              label: "<span class='bold'>📉 30%</span> fewer support requests related to booking.",
              text: "Redesign addressed key confusion points and reduced user friction."
            },
            {
              label: "<span class='bold'>🎯 6</span> top issues resolved through usability testing.",
              text: "User research informed high-impact improvements that boosted satisfaction."
            }
          ]
        }
      },
      {
        type: "CaseBlock",
        data: {
          title: "3. Discovery",
          content: [
            { type: "paragraph", text: "Through interviews, surveys, and usability testing with doctors and staff, we pinpointed critical areas for improvement. These insights were categorized and translated into actionable solutions in Figma:" },
            {
              type: "list",
              listType: "ul",
              items: [
                "<span class='bold'>Appointment scheduling</span>: Simplify scheduling for existing and new patients, with smarter handling of closed days.",
                "<span class='bold'>Rescheduling</span>: Streamline appointment changes for both individuals and families.",
                "<span class='bold'>Day occupancy insights</span>: Provide visual cues about how busy a day is and AM/PM slot availability.",
                "<span class='bold'>Appointment details</span>: Enhance data visibility, including patient information, contact details, and relevant notes.",
                "<span class='bold'>Family scheduling</span>: Support bulk scheduling and rescheduling for family groups.",
                "<span class='bold'>Notes and comments</span>: Integrate appointment-specific notes for better communication.",
                "<span class='bold'>Additional features</span>: Include a full-day zoomed view, template management, and staff assignment tracking."
              ]
            }
          ]
        }
      },
      {
        type: "CaseMedia",
        data: {
          images: [
            { src: "/assets/imgs/calendar/calendar02.jpg", alt: "Discovery insights" }
          ],
          caption: "Discovery insights."
        }
      },
      {
        type: "CaseBlock",
        data: {
          title: "4. Solution",
          content: [
            { type: "paragraph", text: "To tackle these challenges, we conducted a comprehensive analysis of all appointment workflows and proposed a unified, streamlined solution." }
          ]
        }
      },
      {
        type: "CaseMedia",
        data: {
          images: [
            { src: "/assets/imgs/calendar/calendar03.jpg", alt: "Figma flows" },
            { src: "/assets/imgs/calendar/calendar04.jpg", alt: "Calendar flows" },
            { src: "/assets/imgs/calendar/calendar05.jpg", alt: "Calendar flows" },
            { src: "/assets/imgs/calendar/calendar06.jpg", alt: "New calendar design" }
          ],
          caption: "Calendar flows and new design."
        }
      },
      {
        type: "CaseBlock",
        data: {
          content: [
            { type: "heading", text: "Everything Fits in the Sidebar" },
            { type: "paragraph", text: "We redesigned the calendar experience by consolidating all actions into a new, intuitive sidebar. This sidebar kept the calendar visible at all times while adding advanced functionalities, such as:" },
            {
              type: "list",
              listType: "ol",
              items: [
                "<span class='bold'>Detailed patient information</span>: Scheduling and modifying appointments now includes comprehensive patient details to streamline the process.",
                "<span class='bold'>Grouping past and upcoming appointments</span>: For existing patients, we grouped their appointments into past and upcoming categories, making their schedule more accessible."
              ]
            }
          ]
        }
      },
      {
        type: "CaseMedia",
        data: {
          images: [
            { src: "/assets/imgs/calendar/calendar07.jpg", alt: "Patient info and past/upcoming appts" }
          ],
          caption: "Patient info and past/upcoming appts."
        }
      },
      {
        type: "CaseBlock",
        data: {
          content: [
            {
              type: "list",
              listType: "ol",
              start: 3,
              items: [
                "<span class='bold'>Mini-calendar view</span>: A compact calendar view allows quicker navigation and an overview of daily availability.",
                "<span class='bold'>Next available appointment slot</span>: The sidebar suggests the first available slot for a new appointment, complete with predefined time suggestions."
              ]
            }
          ]
        }
      },
      {
        type: "CaseMedia",
        data: {
          images: [
            { src: "/assets/imgs/calendar/calendar08.jpg", alt: "Next slot and mini-calendar" }
          ],
          caption: "Next slot and mini-calendar."
        }
      },
      {
        type: "CaseBlock",
        data: {
          content: [
            {
              type: "list",
              listType: "ol",
              start: 5,
              items: [
                "<span class='bold'>Streamlined scheduling queue management</span>: We introduced a simplified workflow that enables effortless management of a scheduling queue. This enhancement allows users to handle multiple appointments sequentially, ensuring an organized and efficient booking process for both patients and staff."
              ]
            }
          ]
        }
      },
      {
        type: "CaseMedia",
        data: {
          images: [
            { src: "/assets/imgs/calendar/calendar09.jpg", alt: "Scheduling queue" }
          ],
          caption: "Scheduling queue."
        }
      },
      {
        type: "CaseBlock",
        data: {
          title: "5. Outcome",
          content: [
            { type: "paragraph", text: "These updates significantly enhanced the user experience and empowered clinics with greater autonomy. Our Customer Service team could now allocate resources more effectively to other tasks." },
            { type: "paragraph", text: "Key results included:" },
            {
              type: "list",
              listType: "ul",
              items: [
                "<span class='bold'>Pain points resolved</span>: Identified and addressed critical calendar issues through user interviews and structured research.",
                "<span class='bold'>Centralized insights</span>: Leveraged a centralized research and project workflow to deliver well-defined insights.",
                "<span class='bold'>Improved usability</span>: Simplified appointment management through the sidebar and introduced highly requested features like a mini-calendar and patient detail enhancements."
              ]
            }
          ]
        }
      },
      {
        type: "CaseBlock",
        data: {
          title: "6. Next Steps",
          content: [
            { type: "paragraph", text: "Given the Calendar's pivotal role in Greyfinch, further improvements remain essential. We aim to continue user-driven innovation by conducting competitor research and engaging closely with doctors." },
            { type: "paragraph", text: "By refining the existing tools and exploring new opportunities, we strive to make Greyfinch even more indispensable to our users, ensuring their workflows remain intuitive and efficient." }
          ]
        }
      }
    ]
};