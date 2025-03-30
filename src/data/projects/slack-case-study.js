export default {
  id: "slack-case-study",
  title: "Slack Case Study",
  subtitle: "Research holds the answers.",
  thumbnail: "/assets/imgs/slack/slack01.jpg",
  components: [
    {
      type: "CaseSummary",
      data: {
        panels: [
          {
            label: "My Role",
            text: "Conducted user research and usability testing to identify and address key UX issues in Slack."
          },
          {
            label: "Impact",
            text: "Redesign proposals addressed top pain points, validated through usability tests with 100% task success."
          }
        ]
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "1. Context",
        content: [
          {
            type: "paragraph",
            text: "Slack is a channel-based messaging platform designed to help people collaborate more effectively, integrate their tools and services, and quickly access the information they need—all within a secure, enterprise-grade environment. This case study identifies key pain points in Slack's usability and suggests improvements using the double diamond design process."
          }
        ]
      }
    },
    {
      type: "CaseMedia",
      data: {
        images: [
          {
            src: "/assets/imgs/slack/slack01.jpg",
            alt: "Slack platform"
          }
        ],
        caption: "Slack platform."
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "2. User Feedback",
        content: [
          {
            type: "paragraph",
            text: "The initial step involved a round of <span class='bold'>user interviews</span> to pinpoint specific frustrations and expectations. Key pain points identified included:"
          },
          {
            type: "list",
            listType: "ul",
            items: [
              "Difficulty finding specific information or recent conversations.",
              "Challenges managing multiple open channels, particularly in locating direct messages due to excessive scrolling.",
              "Some conversations appearing to “disappear” over time.",
              "Frustration when important files or messages get lost within conversations.",
              "Feeling overwhelmed and fatigued by lengthy messages.",
              "Dissatisfaction with the organization of conversations, with a desire for better grouping options."
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
            src: "/assets/imgs/slack/slack02.jpg",
            alt: "Design process"
          }
        ],
        caption: "Design process."
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "3. Going Beyond a Spreadsheet",
        content: [
          {
            type: "paragraph",
            text: "<span class='bold'>A survey was also conducted</span> to further explore usability issues, focusing on Slack's interface and workflow. It assessed reactions to a possible new contacts column and the features users find most valuable."
          }
        ]
      }
    },
    {
      type: "CaseMedia",
      data: {
        images: [
          {
            src: "/assets/imgs/slack/slack03.jpg",
            alt: "Results of usability test"
          }
        ],
        caption: "Results of usability test."
      }
    },
    {
      type: "CaseBlock",
      data: {
        content: [
          {
            type: "paragraph",
            text: "Survey results indicated several usability concerns. For example, <span class='bold'>62% of respondents supported adding a new column</span> for contacts, suggesting the current layout felt cluttered. Direct messaging and search were rated essential, emphasizing the importance of efficient communication and information retrieval."
          }
        ]
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "4. Additional Research",
        content: [
          {
            type: "paragraph",
            text: "I explored further by reviewing articles such as The Definitive Guide to Slack for Organizing and While Working from Home? 4 Tips for Staying Productive. These resources emphasized Slack's role in increasing productivity, particularly in cases where users need quick responses or personalized video calls—both of which save time over traditional email."
          },
          {
            type: "list",
            listType: "ul",
            items: [
              "<a class='text-link text large' href='https://medium.com/the-definitive-guide-to-slack-for-organizing'>The Definitive Guide to Slack for Organizing</a>",
              "<a class='text-link text large' href='https://www.thinkwithgoogle.com/working-from-home-4-tips-for-staying-productive'>Working from home? 4 tips for staying productive</a>"
            ]
          }
        ]
      }
    },
    {
      type: "CaseBlock",
      data: {
        content: [
          {
            type: "heading",
            text: "Affinity Diagram & Benchmark"
          },
          {
            type: "paragraph",
            text: "Using the data gathered, <span class='bold'>I developed an affinity diagram</span> to map out key patterns and pain points. I also analyzed Slack's competitors to see how they address similar issues."
          }
        ]
      }
    },
    {
      type: "CaseMedia",
      data: {
        images: [
          {
            src: "/assets/imgs/slack/slack04.jpg",
            alt: "Affinity diagram"
          }
        ],
        caption: "Affinity diagram."
      }
    },
    {
      type: "CaseBlock",
      data: {
        content: [
          {
            type: "heading",
            text: "Findings from the Benchmark"
          },
          {
            type: "list",
            listType: "ul",
            items: [
              "Competitors commonly use <span class='bold'>multiple sidebars</span> to better organize elements, sometimes up to five distinct sections.",
              "UI trends favor <span class='bold'>light colors</span>, spacious layouts, and bold text for improved readability."
            ]
          }
        ]
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "5. Approach",
        content: [
          {
            type: "paragraph",
            text: "User feedback indicated difficulties with messaging and conversation retrieval. My approach was to introduce <span class='bold'>a new right sidebar for contacts</span>, making it easier to send direct messages and organize group chats, while maintaining the core look and feel. Key principles included:"
          },
          {
            type: "list",
            listType: "ul",
            items: [
              "Preserving the current design's aesthetics to avoid intrusiveness.",
              "Retaining all existing functionalities.",
              "Adopting familiar UI elements to ensure a seamless transition for users."
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
            src: "/assets/imgs/slack/slack05.jpg",
            alt: "New Design"
          },
          {
            src: "/assets/imgs/slack/slack06.jpg",
            alt: "Details"
          }
        ],
        caption: "Direct messages."
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "6. Key Changes and Rationale",
        content: [
          {
            type: "list",
            listType: "ul",
            items: [
              "<span class='bold'>New right sidebar</span>: The new sidebar provides quick access to individual and group chats, reducing the cognitive load in the main sidebar.",
              "<span class='bold'>Chronological chat organization</span>: Recent chats (top five) are shown, with a “View more” option for older conversations.",
              "<span class='bold'>Group chats section</span>: Below “Recent,” users can find “Groups,” clearly separated for easy access.",
              "<span class='bold'>Direct message actions</span>: These are accessible via a dropdown from a “+” icon, streamlining common actions."
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
            src: "/assets/imgs/slack/slack07.jpg",
            alt: "Direct messages"
          },
          {
            src: "/assets/imgs/slack/slack08.jpg",
            alt: "Sidebar"
          }
        ]
      }
    },
    {
      type: "CaseBlock",
      data: {
        content: [
          {
            type: "list",
            listType: "ul",
            items: [
              "<span class='bold'>Chat shortcuts</span>: Important shortcuts are grouped in a new tab, allowing users to focus on active conversations.",
              "<span class='bold'>Menu-driven options</span>: Additional options are accessible via the chat menu, with modal pop-ups for details—keeping with Slack's existing interaction design."
            ]
          }
        ]
      }
    },
    {
      type: "CaseBlock",
      data: {
        content: [
          {
            type: "heading",
            text: "Actions by Type"
          },
          {
            type: "paragraph",
            text: "Access to <span class='bold'>certain actions varies by chat type</span>. For example, channels display a participant count icon, and different actions are available in dropdowns. Profile, Settings, and Help have been moved to the bottom of the left sidebar, reducing visual load at the top."
          }
        ]
      }
    },
    {
      type: "CaseMedia",
      data: {
        images: [
          {
            src: "/assets/imgs/slack/slack09.jpg",
            alt: "More details"
          },
          {
            src: "/assets/imgs/slack/slack10.jpg",
            alt: "Channel and Contact"
          }
        ],
        caption: "Chat shortcuts and actions by type."
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "7. Validation",
        content: [
          {
            type: "paragraph",
            text: "Once the design was complete, I conducted usability testing with four participants who completed three tasks:"
          },
          {
            type: "list",
            listType: "ul",
            items: [
              "Send a DM to Sophia.",
              "Create a group chat.",
              "Add a new member to a conversation."
            ]
          },
          {
            type: "paragraph",
            text: "All participants completed these tasks successfully."
          }
        ]
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "8. Learnings",
        content: [
          {
            type: "paragraph",
            text: "The research data highlights a clear trend: users are more time-conscious than ever. They value features that streamline tasks and improve workflow efficiency. Slack is actively working to meet Microsoft Teams’ level in this competitive space. I’m confident we’ll see major design advances in the coming months that align with these findings."
          }
        ]
      }
    } 
  ]
};