var config = {
  style: "mapbox://styles/shahadan/ck67dvtcr0as61iqhxtbyy732",
  accessToken:
    "pk.eyJ1Ijoic2hhaGFkYW4iLCJhIjoiY2s0MHlheHEyMDJ5eDNtcGsxMnFqMjVlNSJ9.AmWFbv3mw6Bo7aiJRBvVKQ",
  showMarkers: true,
  theme: "dark",
  alignment: "left",
  title: "Unresolved Disputes in Southeast Asia",
  subtitle: "9 Dash Line Disputed over South China Sea",
  byline: "By a Shahadan Shaari",
  footer: "Source: 9 Dash Line, etc.",
  chapters: [
    {
      id: "chap-1",
      title: "China 9 Dash Line Claimed ",
      image: "https://raw.githubusercontent.com/secondteacher/9-dah-line/master/image2.png",
      description:
        "<p>The claims are based on wholly fictitious “historic rights” to seas of which China occupies only about 30 percent of the littoral and which were regularly sailed by the peoples of what are now Vietnam, the Philippines, Malaysia and Indonesia long before the Chinese ventured into the seas to its south and west.</p>",
      location: {
        center: { lon: 111.76650, lat: 11.73058 },
        zoom: 4.86,
        pitch: 0.00,
        bearing: 0.00
      },
      onChapterEnter: [
         {
             layer: '9dash',
             opacity: 1
         }
      ],
      onChapterExit: [
         {
             layer: '9dash',
             opacity: 0
         }
      ]
    },
    {
      id: "other-identifier",
      title: "Asean Teritorial by conduct",
      image: "https://raw.githubusercontent.com/secondteacher/9-dah-line/master/border.jpg",
      description: "We reaffirmed the importance of maintaining and promoting peace, security, stability, safety and freedom of navigation in and overflight above the South China Sea and recognised the benefits of having the South China Sea as a sea of peace, stability and prosperity,the Chairman's statement read.",
      location: {
        center: { lon: 111.76650, lat: 11.73058 },
        zoom: 4.86,
        pitch: 0.00,
        bearing: 0.00
      },
      onChapterEnter: [
          {
            layer: 'All_state',
            opacity: 1
          }

      ],
      onChapterExit: [
          {
            layer: 'All_state',
            opacity: 0
          }

      ]
    },
    {
      id: "chap-3",
      title: "Disputed territories in Southeast Asia",
      image: "https://raw.githubusercontent.com/secondteacher/9-dah-line/master/spratly.jpg",
      description:
        "<p>The Spratly Islands are a disputed archipelago in the South China Sea. Composed of islands, islets and cays and more than 100 reefs, sometimes grouped in submerged old atolls, the archipelago lies off the coasts of the Philippines, Malaysia, and southern Vietnam.</p>",
      location: {
        center: { lon: 111.76650, lat: 11.73058 },
        zoom: 4.86,
        pitch: 0.00,
        bearing: 0.00
      },
      onChapterEnter: [
         {
             layer: 'disputed',
             opacity: 1
         }
      ],
      onChapterExit: [
         {
             layer: 'disputed',
             opacity: 0
         }
      ]
    },
    {
      id: "chap-4",
      title: "spratly",
      image: "https://raw.githubusercontent.com/secondteacher/9-dah-line/master/spratly.jpg",
      description:
        "<p>Malaysia’s seriousness on the Spratlys issue was expressed by Dr Mahathir during his first term as prime minister, said Thanabalasingam, who had assisted the federal government at the International Court of Justice (ICJ) in The Hague during Malaysia’s dispute with Singapore over Pedra Branca (Pulau Batu Puteh), Middle Rocks and South Ledge, in the east of the Singapore Straits.</p>",
      location: {
        center: { lon: 111.62958, lat: 8.02713 },
        zoom: 6.28,
        pitch: 60.00,
        bearing: 0.00
      },
      onChapterEnter: [
         {
             layer: '',
             opacity: 1
         }
      ],
      onChapterExit: [
         {
             layer: '',
             opacity: 0
         }
      ]
    },
    {
      id: "chap-5",
      title: "Indonesia’s Latest Natuna Islands Spat With China",
      image: "https://raw.githubusercontent.com/secondteacher/9-dah-line/master/natuna.jpg",
      description:
        "<p>The 2019-2020 round of tensions in the waters around the Natuna islands aren’t Indonesia’s first crack at dealing with Chinese coercion. Jokowi, during his first term, contended with multiple incidents in 2016 – the same year the Philippines received a favorable judgment from The Hague-based international tribunal invalidating China’s nine-dash line claim in the South China Sea.</p>",
      location: {
        center: { lon: 111.76650, lat: 11.73058 },
        zoom: 4.86,
        pitch: 0.00,
        bearing: 0.00
      },
      onChapterEnter: [
         {
             layer: 'natuna',
             opacity: 1
         }
      ],
      onChapterExit: [
         {
             layer: 'natuna',
             opacity: 0
         }
      ]
    },
    {
      id: "chap-6",
      title: "Unresolved Disputes in Southeast Asia",
      image: "https://raw.githubusercontent.com/secondteacher/9-dah-line/master/images3.jpg",
      description:
        "<p>Ultimately, China presents both geopolitical challenges and potential economic benefits to Southeast Asian countries. Their individual responses to China’s rise will depend on geographic proximity, economic opportunity, threat perceptions, historical experience, and other factors</p>",
      location: {
        center: { lon: 111.76650, lat: 11.73058 },
        zoom: 4.86,
        pitch: 0.00,
        bearing: 0.00
      },
      onChapterEnter: [
         {
             layer: 'All_state',
             opacity: 1
         },
         {
             layer: '9dash',
             opacity: 1
         }
      ],
      onChapterExit: [
         {
             layer: 'All_state',
             opacity: 0
         },
         {
             layer: '9dash',
             opacity: 0
         }
      ]
    },
    {
      id: "chap-7",
      title: "Overall Disputed",
      image: "https://raw.githubusercontent.com/secondteacher/9-dah-line/master/image1.jpg",
      description:
        "<p>The relations between ASEAN and China occupy a unique and important position in the foreign relations of the Asia-Pacific region. China and Southeast Asia's political, strategic and economic importance in the realm of international relations has been transformed by the regions unprecedented economic growth, unexpected financial crisis, and turbulent political changes.</p>",
      location: {
        center: { lon: 111.76650, lat: 11.73058 },
        zoom: 4.86,
        pitch: 0.00,
        bearing: 0.00
      },
      onChapterEnter: [
         {
             layer: 'All_state',
             opacity: 1
         },
         {
             layer: '9dash',
             opacity: 1
         },
         {
             layer: 'natuna',
             opacity: 1
         },
         {
             layer: 'disputed',
             opacity: 1
         }
      ],
      onChapterExit: [
         {
             layer: 'All_state',
             opacity: 0
         },
         {
             layer: '9dash',
             opacity: 0
         },
         {
             layer: 'natuna',
             opacity: 0
         },
         {
             layer: 'disputed',
             opacity: 0
         }
      ]
    }

  ]
};
