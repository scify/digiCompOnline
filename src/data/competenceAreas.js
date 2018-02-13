import {CompetenceArea} from '../model/competenceArea.js';
import {Competence} from '../model/competence.js';
import {IdeasAndProperties} from "./ideasAndProperties";
import {Resources} from "./resources.js";
import {IntoAction} from "./intoAction";
import {SkillLevel} from "../model/skillLevel";

const competenceArea1 =new CompetenceArea(
  1,
  "information and data literacy",
  [
    new Competence(
      1,
      "Browsing, searching and filtering data, information and digital content",
      "The citizen is able to articulate information needs, to search for data, information and content in digital environments, to access and navigate between them. To create and update personal search strategies",
      [
      new SkillLevel(1, [
                     "identify my information needs",
                     "find data, information and content through a simple search in digital environments",
                     "find how to access these data, information and content and navigate between them",
                     "identify simple personal search strategies",
      ], 1),
      new SkillLevel(2, [
                     "identify my information needs",
                     "find data, information and content through a simple  search in digital environments", 
                     "find how to access these data, information and content and navigate between them.",
                     "identify simple personal search strategies.",
      ], 2),
      new SkillLevel(3, [
                     "explain my information needs,",
                     "perform well-defined and routine searches to find data, information and content in digital environments,",
                     "explain how to access them and  navigate between them.",
                     "explain well-defined and routine personal search strategies.",
      ], 3),
      new SkillLevel(4, [
                     "illustrate information needs,",
                     "organise the searches of  data, information and content in digital environments,",
                     "describe how to access to these data, infor-mation and content, and navigate between them.",
                     "organise personal search strategies.",
      ], 4),
      new SkillLevel(5, [
                     "respond to information needs,",
                     "apply searches to obtain data, information and content in digital environments,",
                     "show how to access to these data, information and content and navigate between them.",
                     "propose personal search strategies.",
      ], 5),
      new SkillLevel(6, [
                     "assess information needs,",
                     "adapt my searching strategy to find the most appropriate data, information and content in digital environments,",
                     "explain how to access to these most appropriate data, information and content and navigate among them.",
                     "vary personal search strategies.",
      ], 6),
      new SkillLevel(7, [
                     "create solutions to complex problems with limited definition that are related to browsing, searching and filtering of data, information and digital content.",
                     "integrate my knowledge to contribute to professional practice and knowledge and guide others in browsing, searching and filtering data, information and digital content.",
      ], 7),
      new SkillLevel(8, [
                     "create solutions to solve complex problems with many interacting factors that are related to browsing, searching and filtering data, information and digital content.",
                     "propose new ideas and processes to the field.",
      ], 8),
      ]
    ),
    new Competence(
      2,
      "Evaluating data, information and digital content",
      "The citizen is able to analyse, compare and critically evaluate the credibility and reliability of sources of data, information and digital content. To analyse, interpret and critically evaluate the data, information and digital content",
      [
      new SkillLevel(1, [
                     "detect the credibility and reliability of common sources of data, information and their digital content.",
      ], 1),
      new SkillLevel(2, [
                     "detect the credibility and reliability of common sources of data, information and their digital content.",
      ], 2),
      new SkillLevel(3, [
                     "perform the analysis, comparison and evaluation of the credibility and reliability of well-defined sources of data, information and digital content.",
                     "perform the analysis, interpretation and evaluation of well-defined data, information and digital content",
      ], 3),
      new SkillLevel(4, [
                     "perform the analysis, comparison and evaluation of sources of data, information and digital content.",
                     "perform the analysis, interpretation and evaluation of data, information and digital content.",
      ], 4),
      new SkillLevel(5, [
                     "carry out an evaluation of the credibility and reliability of different sources of data, information and digital content.",
                     "carry out an evaluation of different data, information and digital content.",
      ], 5),
      new SkillLevel(6, [
                     "critically assess the credibility and reliability of sources of data, information and digital content.",
                     "critically assess data, information and digital content.",
      ], 6),
      new SkillLevel(7, [
                     "create solutions to complex problems with limited definition that are related to analysing and evaluating credible and reliable sources of data, information and content in digital environments.",
                     "integrate my knowledge to contribute to professional practices and knowledge and to guide others in the analysis and evaluation of the credibility and reliability of data, information and digital content and their sources.",
      ], 7),
      new SkillLevel(8, [
                     "create solutions to solve complex problems with many interacting factors that are related to analysing and evaluating credible and reliable sources of data, information and content in digital environments.",
                     "propose new ideas and processes to the field.",
      ], 8),
      ]
    ),
    new Competence(
      3,
      "Managing data, information and digital content",
      "The citizen is able to organise, store and retrieve data, information, and content in digital environments. To organise and process them in a structured environment",
      [
      new SkillLevel(1, [
                     "identify how to organise, store and retrieve data, information and content in a simple way in digital environments.",
                     "recognise where to organise them in a simple way in a structured environment.",
      ], 1),
      new SkillLevel(2, [
                     "identify how to organise, store and retrieve data, information and content in a simple way in digital environments.",
                     "recognise where to organise them in a simple way in a structured environment.",
      ], 2),
      new SkillLevel(3, [
                     "select data, information and content in order to organise, store and retrieve in a routine wayin digital environments.",
                     "organise them in a routine way in a structured environment.",
      ], 3),
      new SkillLevel(4, [
                     "organise information, data and content to be easily stored and retrieved.",
                     "organise information, data and content in a structured environment.",
      ], 4),
      new SkillLevel(5, [
                     "manipulate information, data and content for their easier organisation, storage and retrieval.",
                     "carry out their organisation and processing in a structured environment.",
      ], 5),
      new SkillLevel(6, [
                     "adapt the management of information, data and content for the most appropriate easy retrieval and storage.",
                     "adapt them to be organised and processed in the most appropriate structured environment.",
      ], 6),
      new SkillLevel(7, [
                     "create solutions to complex problems with limited definition that are related to managing data, information, and content for their organisation, storage and retrieval in a structured digital environment.",
                     "integrate my knowledge to contribute to professional practices and knowledge and to guide others in managing data, information and digital content in a structured digital environment.",
      ], 7),
      new SkillLevel(8, [
                     "create solutions to solve  complex problems with many interacting factors that are  related to managing data, information, and content for their organisation, storage and retrieval in a structured digital environment.",
                     "propose new ideas and processes to the field.",
      ], 8),
      ],
      IdeasAndProperties.mapVisionSkills()
    ),
  ]
);

const competenceArea2 =new CompetenceArea(2,
  "Communication and collaboration",
  [
    new Competence(
                   4,
                   "Interacting through digital technologies",
                   "The citizen is able to interact through a variety of digital technologies and to understand appropriate digital communication means for a given context",
                   [
      new SkillLevel(1, [
                     "select simple digital technologies to interact,",
                     "identify appropriate simple communication means  for a given context.",
      ], 1),
      new SkillLevel(2, [
                     "select simple digital technologies to interact,",
                     "identify appropriate simple communication means for a given context.",
      ], 2),
      new SkillLevel(3, [
                     "perform well-defined and routine interactions with digital technologies,",
                     "select well-defined and routine appropriate digital communication means for a given context.",
      ], 3),
      new SkillLevel(4, [
                     "select a variety of digital technologies to interact,",
                     "select a variety of appropriate digital communication means for a given context.",
      ], 4),
      new SkillLevel(5, [
                     "use a variety of digital technologies in order to interact,",
                     "show others the most appropriate digital communication means for a given context",
      ], 5),
      new SkillLevel(6, [
                     "adapt a variety of digital technologies for the most appropriate interaction,",
                     "adapt the most appropriate communication means for a given context.",
      ], 6),
      new SkillLevel(7, [
                     "create solutions to complex problems with limited definition that are related to interacting through digital technologies and digital communication means.",
                     "integrate my knowledge to contribute to professional practices and knowledge and to guide others in the interaction through digital technologies.",
      ], 7),
      new SkillLevel(8, [
                     "create solutions to solve complex problems with many interacting factors that are related to interacting through digital technologies and digital communication means",
                     "propose new ideas and processes to the field.",
      ], 8),
      ],
      Resources.mapSelfAwarenessAndSelfEfficacy()
    ),
    new Competence(
      5,
      "Sharing through digital technologies",
      "The citizen is able to share data, information and digital content with others through appropriate digital technologies. To act as an intermediary, to know about referencing and attribution practices",
      [
      new SkillLevel(1, [
                     "recognise simple appropriate digital technologies to share data, information and digital content.",
                     "identify simple referencing and attribution practices.",
      ], 1),
      new SkillLevel(2, [
                     "recognise simple appropriate digital technologies to share data, information and digital content.",
                     "identify simple referencing and attribution practices.",
      ], 2),
      new SkillLevel(3, [
                     "select well-defined and routine appropriate digital technologies to share data, information and digital content.",
                     "explain how to act as an intermediary for sharing information and content through well-defined and routine digital technologies,",
                     "illustrate well-defined and routine referencing and attribution practices.",
      ], 3),
      new SkillLevel(4, [
                     "manipulate appropriate digital technologies to share data, information and digital content.",
                     "explain how to act as an intermediary for sharing information and content through digital technologies, ",
                     "illustrate referencing and attribution practices.",
      ], 4),
      new SkillLevel(5, [
                     "share data, information and digital content through a variety of appropriate digital tools,",
                     "show others how to act as an intermediary for sharing information and content through  digital technologies.",
                     "apply a variety of referencing and attribution practices.",
      ], 5),
      new SkillLevel(6, [
                     "assess the most appropriate digital technologies to share information and content.",
                     "adapt my intermediation role,",
                     "vary the use of the more appropriate referencing and attribution practices.",
      ], 6),
      new SkillLevel(7, [
                     "create solutions to complex problems with limited definition that are related to sharing through digital technologies.",
                     "integrate my knowledge to contribute to professional practices and knowledge and guide others in sharing through digital technologies.",
      ], 7),
      new SkillLevel(8, [
                     "create solutions to solve complex problems with many interacting factors that are related to sharing through digital technologies.",
                     "propose new ideas and processes to the field.",
      ], 8),
      ],
      Resources.mapMotivationandPerseverance()
    ),
    new Competence(
      6,
      "Engaging in citizenship through digital technologies",
      "The citizen is able to participate in society through the use of public and private digital services. To seek opportunities for self-empowerment and for participatory citizenship through appropriate digital technologies.",
      [
      new SkillLevel(1, [
                     "identify simple digital services in order to participate in society.",
                     "I can recognise simple appropriate digital technologies to empower myself and to participate in society as a citizen.",
      ], 1),
      new SkillLevel(2, [
                     "identify simple digital services in order to participate in society.",
                     "recognise simple appropriate digital technologies to empower myself and to participate in society as a citizen.",
      ], 2),
      new SkillLevel(3, [
                     "select well-defined and routine digital services in order to participate in society.",
                     "indicatewell-defined and routine appropriate digital technologies to empower myself and to participate in society as a citizen.",
      ], 3),
      new SkillLevel(4, [
                     "select digital services in order to participate in society.",
                     "discuss appropriate digital technologies to empower myself and to participate in society as a citizen.",
      ], 4),
      new SkillLevel(5, [
                     "propose different digital services to participate in society.",
                     "use appropriate digital technologies to empower myself and to participate in society as a citizen.",
      ], 5),
      new SkillLevel(6, [
                     "vary the use of the most appropriate digital services in order to participate in society.",
                     "vary the use of the most appropriate digital technologies to empower myself and to participate in society as a citizen.",
      ], 6),
      new SkillLevel(7, [
                     "create solutions to complex problems with limited definition that are related to engaging in citizenship through digital technologies.",
                     "integrate my knowledgeto contribute to professional practices and knowledge and guide others in engaging in citizenship through digital technologies.",
      ], 7),
      new SkillLevel(8, [
                     "create solutions to solve  complex problems with many interacting factors that are related to engaging in citizenship through digital technologies.",
                     "propose new ideas and processes to the field.",
      ], 8),
      ],
      Resources.mapMobilisingResources()

    ),
    new Competence(
      7,
      "Collaborating through digital technologies",
      "The citizen is able to use digital tools and technologies for collaborative processes, and for co-construction and co-creation of data, resources and knowledge",
      [
      new SkillLevel(1, [
                     "choose simple digital tools and technologies for collaborative processes.",
      ], 1),
      new SkillLevel(2, [
                     "choose simple digital tools and technologies for collaborative processes.",
      ], 2),
      new SkillLevel(3, [
                     "select well-defined and routine digital tools and technologies for collaborative processes.",
      ], 3),
      new SkillLevel(4, [
                     "select digital tools and technologies for collaborative processes.",
      ], 4),
      new SkillLevel(5, [
                     "propose different digital tools and technologies for collaborative processes.",
      ], 5),
      new SkillLevel(6, [
                     "vary the use of the most appropriate digital tools and technologies for collaborative processes.",
                     "choose the most appropriate digital tools and technologies for co-constructing and co-creating data, resources and knowledge.",
      ], 6),
      new SkillLevel(7, [
                     "create solutions to complex problems with limited definition that are related to using collaborative processes and co-construction and co-creation of data, resources and knowledge through digital tools and technologies.",
                     "integrate my knowledge to contribute to professional practice and knowledge and guide others in collaborating through digital technologies.",
      ], 7),
      new SkillLevel(8, [
                     "create solutions to solve complex problems with many interacting factors that are related to using collaborative processes and co-construction and co-creation of data, resources and knowledge through digital tools and technologies.",
                     "propose new ideas and processes to the field.",
      ], 8),
      ],
      Resources.mapFinancialAndEconomicLiteracy()
    ),
    new Competence(
      8,
      "Netiquette",
      "The citizen is able to be aware of behavioural norms and know-how while using digital technologies and interacting in digital environments. To adapt communication strategies to the specific audience and to be aware of cultural and generational diversity in digital environments.",
      [
      new SkillLevel(1, [
                     "differentiate simple behavioural norms and know-how while using digital technologies and interacting in digital environments.",
                     "choose simple communication modes and strategies adapted to an audience and",
                     "differentiate simple cultural and generational diversity aspects to consider in digital environments.",
      ], 1),
      new SkillLevel(2, [
                     "differentiate simple behavioural norms and know-how while using digital technologies and interacting in digital environments.",
                     "choose simple communication modes and strategies adapted to an audience and",
                     "differentiate simple cultural and generational diversity aspects to consider in digital environments.",
      ], 2),
      new SkillLevel(3, [
                     "clarify well-defined and routine behavioural norms and know-how while using digital technologies and interacting in digital environments.",
                     "express well-defined and routine communication strategies adapted to an audience and",
                     "describe well-defined and routine cultural and generational diversity aspects to consider in digital environments.",
      ], 3),
      new SkillLevel(4, [
                     "discuss behavioural norms and know-how while using digital technologies and interacting in digital environments.",
                     "discuss communication strategies adapted to an audience and",
                     "discuss cultural and generational diversity aspects to consider in digital environments.",
      ], 4),
      new SkillLevel(5, [
                     "apply different behavioural norms and know-how while using digital technologies and interacting in digital environments.",
                     "apply different communication strategies in digital environments adapted to an audience and",
                     "apply different cultural and generational diversity aspects to consider in digital environments.",
      ], 5),
      new SkillLevel(6, [
                     "adapt the most appropriate behavioural norms and know-how while using digital technologies and interacting in digital environments.",
                     "adapt the most appropriate communication strategies in digital environments to an audience and",
                     "apply different cultural and generational diversity aspects in digital environments.",
      ], 6),
      new SkillLevel(7, [
                     "create solutions to complex problems with limited definition that are related to digital etiquettes respectful to different audiences and cultural and generational diversity.",
                     "integrate my knowledge to contribute to professional practice and knowledge and guide others in digital etiquette.",
      ], 7),
      new SkillLevel(8, [
                     "create solutions to solve  complex problems with many interacting factors that are  related to digital etiquettes respectful to different audiences and cultural and generational diversity.",
                     "propose new ideas and processes to the field.",
      ], 8),
      ],
      Resources.mapMobilisingOthers()
    ),
    new Competence(
                   9,
                   "Managing digital identity",
                   "The citizen is able to create, and manage one or multiple digital identities, to be able to protect one’s own reputation, to deal with the data that one produces through several digital tools, environments and services.",
                   [
                   new SkillLevel(1, [
                                  "identify a digital identity,",
                                  "describe simple ways to protect my reputation online,",
                                  "recognise simple data I produce through digital tools, environments or services.",
                   ], 1),
                   new SkillLevel(2, [
                                  "identify a digital identity,",
                                  "describe simple ways to protect my reputation online,",
                                  "recognise simple data I produce through  digital tools, environments or services.",
                   ], 2),
                   new SkillLevel(3, [
                                  "discriminate a range of well-defined and routine digital identities,",
                                  "explain well-defined and routine ways to protect my reputation online,",
                                  "describe well-defined data I routinely produce through  digital tools, environments or services.",
                   ], 3),
                   new SkillLevel(4, [
                                  "display a variety of specific digital identities,",
                                  "discuss specific ways to protect my reputation online,",
                                  "manipulate data I produce through digital tools, environments or services.",
                   ], 4),
                   new SkillLevel(5, [
                                  "use a variety of digital identities,",
                                  "apply different ways to protect my reputation online,",
                                  "use data I produce through several digital tools environment and services.",
                   ], 5),
                   new SkillLevel(6, [
                                  "discriminate multiple digital identities,",
                                  "explain the more appropriate ways to protect one’s own reputation,",
                                  "change the data produced  through several tools, environments and services.",
                   ], 6),
                   new SkillLevel(7, [
                                  "create solutions to complex problems with limited definition that are related to managing digital identities and protection of people’s online reputation.",
                                  "integrate my knowledge to contribute to professional practice and knowledge and guide others in managing digital identity.",
                   ], 7),
                   new SkillLevel(8, [
                                  "create solutions to solve complex problems with many interacting factors that are related to managing digital identities and protection of people’s online reputation.",
                                  "propose new ideas and processes to the field.",
                   ], 8),
                   ],
      Resources.mapMobilisingOthers()
                  ),
                  ]
                  );

const competenceArea3 = new CompetenceArea(3,
                                           "Digital content creation",
                                           [
      new Competence(
       10,
      "Developing content",
      "The citizen is able to create and edit digital content in different formats, to express oneself through digital means.",
      [
      new SkillLevel(1, [
                     "identify ways to create and edit simple content in simple formats,",
                     "choose how I express myself through the creation of simple digital means.",
      ], 1),
      new SkillLevel(2, [
                     "identify ways to create and edit simple content in simple formats,",
                     "choose how I express myself through the creation of simple digital means.",
      ], 2),
      new SkillLevel(3, [
                     "indicate ways to create and edit well-defined and routine content in well-defined and routine formats,",
                     "express myself through the creation of well-defined and routine digital means.",
      ], 3),
      new SkillLevel(4, [
                     "indicate ways to create and edit content in different formats,",
                     "express myself through the creation of digital means.",
      ], 4),
      new SkillLevel(5, [
                     "apply ways to create and edit content in different formats,",
                     "show ways to express myself  through the creation of digital means.",
      ], 5),
      new SkillLevel(6, [
                     "change content using the most appropriate formats,",
                     "adapt the expression of myself through the creation of the most appropriate digital means.",
      ], 6),
      new SkillLevel(7, [
                     "create solutions to complex problems with limited definition that are related to content creation and edition in different formats, and self-expression through digital means.",
                     "integrate my knowledge to contribute to professional practice and knowledge and guide others in developing content.",
      ], 7),
      new SkillLevel(8, [
                     "create solutions to solve complex problems with many interacting factors that are related to content creation and edition in different formats, and self-expression through digital means.",
                     "propose new ideas and processes to the field.",
      ], 8),
       ],
      Resources.mapMobilisingOthers()
      ),



    new Competence(
      11,
      "Integrating and re-elaborating digital content",
      "The citizen is able to modify, refine, improve and integrate information and content into an existing body of knowledge to create new, original and relevant content and knowledge.",
      [
      new SkillLevel(1, [
"select ways to modify, refine, improve and integrate simple items of new content and information to create new and original ones.",
      ], 1),
      new SkillLevel(2, [
"select ways to modify, refine, improve and integrate simple items of new content and information to create new and original ones",
      ], 2),
      new SkillLevel(3, [
"explain ways to modify, refine, improve and integrate well-defineditems of new content and information to create new and original ones.",
      ], 3),
      new SkillLevel(4, [
"discuss ways to modify, refine, improve and integrate new content and information to create new and original ones.",
      ], 4),
      new SkillLevel(5, [
"operate with new different items of content and information, modifying, refining, improving and integrating them in order to create new and original ones.",
      ], 5),
      new SkillLevel(6, [
"assess the most appropriate ways to modify, refine, improve and integrate specific new items of content and information to create new and original ones.",
      ], 6),
      new SkillLevel(7, [
"create solutions to complex problems with limited definition that are related to modifying, refining, improving and integrating new content and information into existing knowledge to create new and original ones.",
"integrate my knowledge to contribute to professional practice and knowledge and guide others in integrating and re-elaborating content",
      ], 7),
      new SkillLevel(8, [
"create solutions to solve  complex problems with many interacting factors that are  related to modifying, refining, improving and integrating new content and information into existing knowledge  to create new and original ones.",
"propose new ideas and processes to the field.",
      ], 8),
      ],
      IntoAction.mapPlanningAndManagement()
    ),



      new Competence(
       12,
       "Copyright and licenses",
       "The citizen is able to understand how copyright and licenses apply to data, digital information and content.",
       [
       new SkillLevel(1, [
"identify simple rules of copyright and licenses that apply to data, digital information and content.",
       ], 1),
       new SkillLevel(2, [
"identify simple rules of copyright and licenses that apply to data, digital information and content.",
       ], 2),
       new SkillLevel(3, [
"indicate well-defined and routine rules of copyright and licenses that apply to data, digital information and content.",
       ], 3),
       new SkillLevel(4, [
"discuss rules of copyright and licenses that apply to digital information and content.",
       ], 4),
       new SkillLevel(5, [
"apply different rules of copyright and licenses that apply to data, digital information and content.",
       ], 5),
       new SkillLevel(6, [
"choose the most appropriate rules that apply copyright and licences to data, digital information and content.",
       ], 6),
       new SkillLevel(7, [
"create solutions to complex problems with limited definition that are related to applying copyright and licenses to data, digital information and content.",
"integrate my knowledge to contribute to professional practice and knowledge and guide others in applying copyright and licenses.",
       ], 7),
       new SkillLevel(8, [
"create solutions to solve complex problems with many interacting factors that are related to applying copyright and licenses to data, digital information and content.",
"propose new ideas and processes to the field.",
       ], 8),
       ],
      Resources.mapMobilisingOthers()
      ),

      new Competence(
                     13,
                     "Programming",
                     "The citizen is able to plan and develop a sequence of understandable instructions for a computing system to solve a given problem or perform a specific task",
                     [
                     new SkillLevel(1, [
"list simple instructions for a computing system to solve a simple problem or perform a simple task.",
                     ], 1),
                     new SkillLevel(2, [
"list simple instructions for a computing system to solve a simple problem or perform a simple task.",
                     ], 2),
                     new SkillLevel(3, [
"list well-defined and routine instructions for a computing system to solve routine problems or perform routine tasks.",
                     ], 3),
                     new SkillLevel(4, [
"list instructions for a computing system to solve a given problem or perform a specific task.",
                     ], 4),
                     new SkillLevel(5, [
"operate with instructions for a computing system to solve a different problem or perform different tasks.",
                     ], 5),
                     new SkillLevel(6, [
"determine the most appropriate instructions for a computing system to solve a given problem and perform specific tasks.",
                     ], 6),
                     new SkillLevel(7, [
"create solutions to complex problems with limited definition that are related to planning and developing instructions for a computing system and performing a task using a computing system.",
"integrate my knowledge to contribute to professional practice and knowledge and guide others in programming.",
                     ], 7),
                     new SkillLevel(8, [
"create solutions to solve complex problems with many interacting factors that are related  to planning and developing instructions for a computing system and performing a task using a computing system.",
"propose new ideas and processes to the field.",
                     ], 8),
                     ],
      Resources.mapMobilisingOthers()
                    ),
  ]
);

const competenceArea4 =new CompetenceArea(4,
  "Safety",
  [
    new Competence(
      14,
      "Protecting devices",
      "The citizen is able to protect devices and digital content, and to understand risks and threats in digital environments. To know about safety and security measures and to have a due regard to reliability and privacy.",
      [
      new SkillLevel(1, [
"identify simple ways to protect my devices and digital content",
"differentiate simple risks and threats in digital environments,",
"choose simple safety and security measures,",
"identify simple ways to have due regard to reliability and privacy",
      ], 1),
      new SkillLevel(2, [
"identify simple ways to protect my devices and digital content",
"differentiate simple risks and threats in digital environments,",
"follow simple safety and security measures.",
"identify simple ways to have due regard to reliability and privacy",
      ], 2),
      new SkillLevel(3, [
"indicate well-defined and routine ways to protect my devices and digital content",
"differentiate well-defined and routine risks and threats in digital environments,",
"select well-defined and routine safety and security measures.",
"indicate well-defined and routine ways to have due regard to reliability and privacy",
      ], 3),
      new SkillLevel(4, [
"organise ways to protect my devices and digital content",
"differentiate risks and threats in digital environments,",
"select safety and security measures.",
"explain ways to have due regard to reliability and privacy",
      ], 4),
      new SkillLevel(5, [
"apply different ways to protect devices and digital content",
"differentiate a variety of risks and threats in digital environments,",
"apply safety and security measures.",
"employ different ways to have due regard to reliability and privacy",
      ], 5),
      new SkillLevel(6, [
"choose the most appropriate protection for devices and digital content",
"discriminate risks and threats in digital environments,",
"choose the most appropriate safety and security measures.",
"assess the most appropriate ways to have due regard to reliability and privacy",
      ], 6),
      new SkillLevel(7, [
"create solutions to complex problems with limited definition that are related to protecting devices and digital content, managing risks and threats, applying safety and security measures, and reliability and privacy in digital environments.",
"integrate my knowledge to contribute to professional practice and knowledge and guide others in protecting devices.",
      ], 7),
      new SkillLevel(8, [
"create solutions to solve complex problems with many interacting factors that are related to protecting devices and digital content, managing risks and threats, applying safety and security measures, and reliability and privacy in digital environments.",
"propose new ideas and processes to the field.",
      ], 8),
      ],
      IntoAction.mapTakingTheInitiative()
    ),
    new Competence(
      15,
      "Protecting personal data and privacy",
      "The citizen is able to protect personal data and privacy in digital environments.  To understand how to use and share personally identifiable information while being able to protect oneself and others from damages. To understand that digital services use a “Privacy policy” to inform how personal data is used.",
      [
      new SkillLevel(1, [
"select simple ways to protect my personal data and privacy in digital environments",
"identify simple ways to use and share personally identifiable information while protecting myself and others from damages.",
"identify simple privacy policy statements of how personal data is used in digital services.",
      ], 1),
      new SkillLevel(2, [
"select simple ways to protect my personal data and privacy in digital environments",
"identify simple ways to use and share personally identifiable information while protecting myself and others from damages.",
"identify simple privacy policy statements of how personal data is used in digital services.",
      ], 2),
      new SkillLevel(3, [
"explain well-defined and routine ways to protect my personal data and privacy in digital environments",
"explain well-defined and routine ways to use and share personally identifiable information while protecting myself and others from damages.",
"indicate well-defined and routine privacy policy statements of how personal data is used in digital services.",
      ], 3),
      new SkillLevel(4, [
"discuss ways to protect my personal data and privacy in digital environments",
"discuss ways to use and share personally identifiable information while protecting myself and others from damages.",
"indicate privacy policy statements of how personal data is used in digital services.",
      ], 4),
      new SkillLevel(5, [
"apply different ways to protect my personal data and privacy in digital environments",
"apply different specific ways to share my data while protecting myself and others from dangers.",
"explain privacy policy statements of how personal data is used in digital services.",
      ], 5),
      new SkillLevel(6, [
"choose the more appropriate ways to protect personal data and privacy in digital environments",
"evaluate the most appropriate ways of using and sharing personally identifiable information while protecting myself and others from damages.",
"evaluate the appropriateness of privacy policy statements on how personal data are used.",
      ], 6),
      new SkillLevel(7, [
"create solutions to complex problems with limited definition that are related to protecting personal data and privacy in digital environments, using and sharing personally identifiable information protecting self and others from dangers, and privacy policies to use my personal data.",
"integrate my knowledge to contribute to professional practice and knowledge and guide others in protecting personal data and privacy.",
      ], 7),
      new SkillLevel(8, [
"create solutions to solve complex problems with many interacting factorsthat are related  to protecting personal data and privacy in digital environments, using and sharing personally identifiable information protecting self and others from dangers, and privacy policies to use my personal data.",
"propose new ideas and processes to the field.",
      ], 8),
      ],
      IntoAction.mapCopyingwithUncertaintyAmbiguityAndRisk()
    ),
    new Competence(
      16,
      "Protecting health and well-being",
      "The citizen is able to be able to avoid health-risks and threats to physical and psychological well-being while using digital technologies. To be able to protect oneself and others from possible dangers in digital environments (e.g. cyber bullying). To be aware of digital technologies for social well-being and social inclusion.",
      [
      new SkillLevel(1, [
"differentiate simple ways to avoid health -risks and threats to physical and psychological well-being while using digital technologies.",
"select simple ways to protect myself from possible dangers in digital environments.",
"identify simple digital technologies for social well-being and social inclusion.",
      ], 1),
      new SkillLevel(2, [
"differentiate simple ways to avoid health-risks and threats to physical and psychological well-being while using digital technologies.",
"select simple ways to protect myself from possible dangers in digital environments.",
"identify simple digital technologies for social well-being and social inclusion.",
      ], 2),
      new SkillLevel(3, [
"explain well-defined and routine ways to how to avoid health -risks and threats to physical and psychological well-being while using digital technologies.",
"select well-defined and routine ways to protect myself from dangers in digital environments.",
"indicate well-defined and routine digital technologies for social well-being and social inclusion.",
      ], 3),
      new SkillLevel(4, [
"explain ways to how to avoid threats to my physical and psychological health related with the use of technology.",
"select ways to protect self and others from dangers in digital environments.",
"discuss on digital technologies for social well-being and inclusion.",
      ], 4),
      new SkillLevel(5, [
"show different ways to avoid health -risks and threats to physical and psychological well-being while using digital technologies.",
"apply different ways to protect myself and others from dangers in digital environments.",
"show different digital technologies for social well-being and social inclusion.",
      ], 5),
      new SkillLevel(6, [
"discriminate the most appropriate ways to avoid health -risks and threats to physical and psychological well-being while using digital technologies.",
"adapt the most appropriatee ways to protect myself and others from dangers in digital environments.",
"vary the use of digital technologies for social well-being and social inclusion.",
      ], 6),
      new SkillLevel(7, [
"create solutions to complex problems with limited definition that are related to avoiding health -risks and threats to well-being while using digital technologies, to protect self and others from dangers in digital environments, and to the use of digital technologies for social well-being and social inclusion.",
"integrate my knowledge to contribute to professional practice and knowledge and guide others in protecting health.",
      ], 7),
      new SkillLevel(8, [
"create solutions to solve complex problems with many interacting factors that are  related to avoiding health -risks and threats to well-being while using digital technologies, to protect self and others from dangers in digital environments, and to the use of digital technologies for social well-being and social inclusion.",
"propose new ideas and processes to the field.",
      ], 8),
      ],
      IntoAction.mapCopyingwithUncertaintyAmbiguityAndRisk()
                  ),


    new Competence(
      17,
      "Protecting the environment",
      "The citizen is able to be aware of the environmental impact of digital technologies and their use",
      [
      new SkillLevel(1, [
"recognise simple environmental impacts of digital technologies and their use.",
      ], 1),
      new SkillLevel(2, [
"recognise simple environmental impacts of digital technologies and their use.",
      ], 2),
      new SkillLevel(3, [
"indicate well-defined and routine environmental impacts of digital technologies and their use.",
      ], 3),
      new SkillLevel(4, [
"discuss ways to protect the environment from the impact of digital technologies and their use.",
      ], 4),
      new SkillLevel(5, [
"show different ways to protect the environment from the impact of digital technologies and their use.",
      ], 5),
      new SkillLevel(6, [
"choose the most appropriate solutions to protect the environment from the impact of digital technologies and their use.",
      ], 6),
      new SkillLevel(7, [
"create solutions to complex problems with limited definition that are related to protecting the environment from the impact of digital technologies and their use.",
"integrate my knowledge to contribute to professional practice and knowledge and guide others in protecting the environment.",
      ], 7),
      new SkillLevel(8, [
"create solutions to solve complex problems with many interacting factors that are related to protecting the environment from the impact of digital technologies and their use.",
"propose new ideas and processes to the field.",
      ], 8),
      ],
      IntoAction.mapCopyingwithUncertaintyAmbiguityAndRisk()
                  ),

  ]
);

const competenceArea5 = new CompetenceArea(5,
  "Problem solving",
  [
  new Competence(
    18,
    "Solving technical problems",
    "The citizen is able to identify technical problems when operating devices and using digital environments, and to solve them (from trouble-shooting to solving more complex problems).",
    [
    new SkillLevel(1, [
"identify simple technical problems when operating devices and using digital environments",
"identify simple  solutions to solve them.",
    ], 1),
    new SkillLevel(2, [
"identify simple technical problems when operating devices and using digital environments",
"identify simple solutions to solve them.",
    ], 2),
    new SkillLevel(3, [
"indicate well-defined and routine technical problems when operating devices and using digital environments",
"select well-defined and routine solutions to them.",
    ], 3),
    new SkillLevel(4, [
"differentiate technical problems when operating devices and using digital environments",
"select solutions to them.",
    ], 4),
    new SkillLevel(5, [
"assess technical problems when using digital environments and operating digital devices",
"apply different solutions to them. ",
    ], 5),
    new SkillLevel(6, [
"appraise technical problems when operating devices and using digital environments",
"resolve them with the most appropriate solutions",
    ], 6),
    new SkillLevel(7, [
"create solutions to complex problems with limited definition that are related to technical problems when operating devices and using digital environments.",
"integrate my knowledge to contribute to professional practice and knowledge and to guide others in solving technical problems.",
    ], 7),
    new SkillLevel(8, [
"create solutions to solve complex problems with many interacting factors that are related to technical problems when operating devices and using digital environments.",
"propose new ideas and processes to the field.",
    ], 8),
    ]
                ),

    new Competence(
      19,
      "Identifying needs and technological responses",
      "The citizen is able to assess needs and to identify, evaluate, select and use digital tools and possible technological responses and to solve them. To adjust and customise digital environments to personal needs (e.g. accessibility).",
      [
      new SkillLevel(1, [
"identify needs",
"recognise simple digital tools and possible technological responses to solve those needs.",
"choose simple ways to adjust and customise digital environments to personal needs.",
      ], 1),
      new SkillLevel(2, [
"identify needs",
"recognise simple digital tools and possible technological responses to solve those needs.",
"choose simple ways to adjust and customise digital environments to personal needs.",
      ], 2),
      new SkillLevel(3, [
"indicate well-defined and routine needs",
"select well-define and routine digital tools and possible technological responses to solve those needs.",
"select well-defined and routine ways to adjust and customise digital environments to personal needs.",
      ], 3),
      new SkillLevel(4, [
"explain needs",
"select digital tools and possible technological responses to solve those needs.",
"select ways to adjust and customise digital environments  to personal needs.",
      ], 4),
      new SkillLevel(5, [
"assess needs,",
"apply different digital tools and possible technological responses to solve those needs.",
"use different ways to adjust and customise digital environments to personal needs.",
      ], 5),
      new SkillLevel(6, [
"assess needs,",
"choose the most appropriate digital tools and possible technological responses to solve those needs.",
"decide the most appropriate ways to adjust and customise digital environments to personal needs",
      ], 6),
      new SkillLevel(7, [
"create solutions to complex problems with limited definition using digital tools and possible technological responses, and to adapt and customise digital environments to personal needs.",
"integrate my knowledge to contribute to professional practice and knowledge and guide others in identifying needs and technological responses.",
      ], 7),
      new SkillLevel(8, [
"create solutions to solve complex problems with many interacting factors using digital tools and possible technological responses, and to adapt and customise digital environments to personal needs.",
"I can propose new ideas and processes to the field.",
      ], 8),
      ]
                  ),

    new Competence(
      20,
      "Creatively using digital technology",
      "The citizen is able to use digital tools and technologies to create knowledge and to innovate processes and products. To engage individually and collectively in cognitive processing to understand and resolve conceptual problems and problem situations in digital environments.",
      [
      new SkillLevel(1, [
"identify simple digital tools and technologies that can be used to create knowledge and  to innovate processes and products.",
"show interest individually and collectively in simple cognitive processing to understand and resolve simple conceptual problems and problem situations in digital environments.",
      ], 1),
      new SkillLevel(2, [
"identify simple digital tools and technologies that can be used to create knowledge and to innovate processes and products",
"follow individually and collectively simple cognitive processing to understand and resolve simple conceptual problems and problem situations in digital environments.",
      ], 2),
      new SkillLevel(3, [
"select digital tools and technologies that can be used to create well-defined knowledge and well-defined innovative processes and products.",
"engage individually and collectively in some cognitive processing to understand and resolve well-defined and routine conceptual problems and problem situations in digital environments.",
      ], 3),
      new SkillLevel(4, [
"differentiate digital tools and technologies that can be used to create knowledge and to innovate processes and products.",
"engage individually and collectively in cognitive processing to understand and resolve conceptual problems and problem situations in digital environments.",
      ], 4),
      new SkillLevel(5, [
"apply different digital tools and technologies to create knowledge and innovative processes and products.",
"apply individually and collectively cognitive processing to resolve different conceptual problems and problem situations in digital environments.",
      ], 5),
      new SkillLevel(6, [
"adapt the most appropriate digital tools and technologies to create knowledge and to innovate processes and products.",
"resolve individually and collectively conceptual problems and problem situations in digital environments.",
      ], 6),
      new SkillLevel(7, [
"create solutions to complex problems with limited definition using digital tools and technologies.",
"integrate my knowledge to contribute to professional practice and knowledge and guide others in creatively using digital technologies.",
      ], 7),
      new SkillLevel(8, [
"create solutions to solve complex problems with many interacting factors using digital tools and technologies.",
"propose new ideas and processes to the field.",
      ], 8),
      ]
                ),

    new Competence(
      21,
      "Identifying digital competence gaps",
      "The citizen is able to understand where one’s own digital competence needs to be improved or updated. To be able to support others with their digital competence development. To seek opportunities for self-development and to keep up-to-date with the digital evolution.",
      [
      new SkillLevel(1, [
"recognise where my own digital competence needs to be improved or updated.",
"identify where to seek opportunities for self-developments and to keep up-to-date with the digital evolution.",
      ], 1),
      new SkillLevel(2, [
"recognise where my own digital competence needs to be improved or updated,",
"identify where to seek opportunities for self-developments and to keep up-to-date with the digital evolution.",
      ], 2),
      new SkillLevel(3, [
"explain where my digital competence needs to be improved or updated,",
"indicate where to seek well-defined opportunities for self-developments and to keep up-to-date with the digital evolution.",
      ], 3),
      new SkillLevel(4, [
"discuss on where my digital competence needs to be improved or updated,",
"indicate how to support of others to develop  their digital competence.",
"indicate where to seek opportunities for self-developments and to keep up-to-date with the digital evolution.",
      ], 4),
      new SkillLevel(5, [
"demonstrate where my own digital competence needs to be improved or updated,",
"illustrate different ways to support others in the development of their digital competence.",
"propose different opportunities found for self-development and to keep up-to-date with the digital evolution.",
      ], 5),
      new SkillLevel(6, [
"decide which are the most appropriate ways to improve or update one’s own digital competence needs,",
"assess the development of others’ digital competence.",
"choose the most appropriate opportunities for self-development and to keep up-to date with new developments.",
      ], 6),
      new SkillLevel(7, [
"create solutions to complex problems with limited definition that are related to improving digital competence, and to find opportunities for self-development and to keep up-to-date with new developments.",
"integrate my knowledge to contribute to professional practice and knowledge and to guide others in identifying digital competence gaps.",
      ], 7),
      new SkillLevel(8, [
"create solutions to solve  complex problems with many interacting factors that are  related to improving digital competence, and to find opportunities for self-development and to keep up-to-date with the digital evolution.",
"propose new ideas and processes to the field.",
      ], 8),
      ]
                ),
  ]
);

export const competenceAreas = [competenceArea1,competenceArea2,competenceArea3,competenceArea4,competenceArea5];
