export const projects = [
  {
    id: "design-system",
    title: "Proyecto 1",
    components: [
      {
        type: "CaseBlock",
        data: {
          title: "1. Context",
          content: [
            { type: "paragraph", text: "eDreams ODIGEO is one of the world's largest online travel agencies and Europe's leader in terms of sales. The company provides services for planning and booking travel, including flights, hotels, car rentals, and vacation packages." },
            { type: "paragraph", text: "The group includes five brands—eDreams, Go Voyages, Opodo, Travellink, and Liligo—and has been operating since 2011. eDreams ODIGEO focuses on technological innovation to simplify the traveler's booking experience." }
          ]
        }
      },
      {
        type: "CaseMedia",
        data: {
          images: [
            { src: "/assets/imgs/design/design01.jpg", alt: "eDreams" }
          ]
        }
      },
      {
        type: "CaseBlock",
        data: {
          title: "2. The Challenge",
          content: [
            { type: "paragraph", text: "The eDreams Design System is a comprehensive set of standards, documentation and components aimed at creating a more efficient, consistent, and accessible development process and user experience." },
            { type: "paragraph", text: "As a founding member of the team, I worked closely with designers and engineers across the organization to create solutions. My role involved designing tools, building foundational systems and leading the product roadmap and design strategy for the Design System." }
          ]
        }
      },
      {
        type: "CaseMedia",
        data: {
          images: [
            { src: "/assets/imgs/design/design02.jpg", alt: "Design System team" }
          ],
          caption: "Setting up the Design System team."
        }
      },
      {
        type: "CaseBlock",
        data: {
          title: "3. Why We Did This",
          content: [
            { type: "paragraph", text: "With a product team of over <span class='bold'>20 designers</span> and <span class='bold'>60 engineers</span>, collaboration became increasingly difficult. As the product scaled, we started to observe:" },
            {
              type: "list",
              listType: "ul",
              items: [
                "<span class='bold'>Inconsistencies</span> in visual elements and user experiences.",
                "Poor usage of design patterns across the platform."
              ]
            },
            { type: "paragraph", text: "We needed to improve not only the end-user experience but also the workflows for designers and developers across the company." }
          ]
        }
      },
      {
        type: "CaseBlock",
        data: {
          title: "4. Building the Foundations",
          content: [
            { type: "paragraph", text: "We began by conducting a <span class='bold'>full product audit</span>, uncovering a heavy overload of fonts, colors, and other design assets. This laid the groundwork for our <span class='bold'>design tokens</span>, forming the foundation of the new Design System." }
          ]
        }
      },
      {
        type: "CaseMedia",
        data: {
          images: [
            { src: "/assets/imgs/design/design04.jpg", alt: "Typography" },
            { src: "/assets/imgs/design/design05.jpg", alt: "Iconography" },
            { src: "/assets/imgs/design/design06.jpg", alt: "Colors" },
            { src: "/assets/imgs/design/design07.jpg", alt: "Spacing" }
          ],
          caption: "Foundations are the core elements of every Design System.",
          layout: "column"
        }
      },
      {
        type: "CaseBlock",
        data: {
          title: "4. Building the Foundations",
          content: [
            { type: "heading", text: "Color System" },
            { type: "paragraph", text: "Given that we were designing for <span class='bold'>5 brands</span>, we paid particular attention to standardizing the color system:" },
            {
              type: "list",
              listType: "ol",
              items: [
                "Each brand was assigned <span class='bold'>primary</span> and <span class='bold'>secondary colors</span>.",
                "Semantic (e.g., success, error) and neutral colors were <span class='bold'>unified</span> across the group.",
                "Variations were strictly limited to ensure <span class='bold'>consistency</span> and <span class='bold'>accessibility</span>."
              ]
            }
          ]
        }
      }
    ]
  }
];