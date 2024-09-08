import {  RiTeamFill , RiSettings4Line } from 'react-icons/ri';
import { IoMdSettings } from "react-icons/io";
import { MdContactPhone } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import {AiOutlineAppstore} from 'react-icons/ai';
import { VscLayoutSidebarRight } from "react-icons/vsc";
import { PiClockCounterClockwiseBold } from "react-icons/pi";
import { IoMdAdd } from "react-icons/io";
import { IoMdChatboxes } from "react-icons/io";
export const sidebar=[
    { name: 'Chats', icon: FaDownload , path: '/chats' },
    { name: 'Business Leads', icon: MdContactPhone , path: '/leads' },
    { name: 'View Mind Map', icon: VscLayoutSidebarRight, path: '/mind-map' },
    { name: 'Manage Team', icon: RiTeamFill , path: '/team' },
    { name: 'Configure Chatbot', icon:IoMdSettings , path: '/configure' },
]
export const navbar=[
    {heading:'Chatbot Mind Map', pragraph:'This is the brain and the memory of the chatbot. You can add, edit and analyse the source data being used to answer user queries from here'},
]
export const headerButtons =[
    {
      "id": 1,
      "label": "ADD DATA",
      "bgColor": "bg-blue-500",
      "hoverColor": "hover:bg-blue-700",
      "textColor": "text-white",
      icon:IoMdAdd
    },
    {
      "id": 2,
      "label": "DATA TRAINING STATUS",
      "bgColor": "bg-pink-600",
      "hoverColor": "hover:bg-pink-800",
      "textColor": "text-white",
      icon: PiClockCounterClockwiseBold
    },
    {
        "id": 3,
        "label": "GROUND TRUTHS",
        "bgColor": "bg-transparent",
        "borderColor": "border border-pink-600", 
        "hoverBgColor": "hover:bg-pink-800",
        "hoverTextColor": "hover:text-white",
        "textColor": "text-pink-600",
        icon: IoMdChatboxes
      }
  ]
export  const tableData = [
    { id: 1, text: "Do you work on WhatsApp? Yes, we do offer our services on WhatsApp!", created: "03/08/2024", type: "TEXT" },
    { id: 2, text: "I want to test your chatbot That's great to hear! You can continue chatting with me to test BeyondChats AI responses! I am one of the AIs! 😏 Else, you can also book a demo call with my team: ", created: "28/03/2024", type: "TEXT" },
    { id: 3, text: "Will the Startup Plan address the concern I mentioned earlier? Yes, the Startup Plan will definitely help address your concerns! With this plan, you'll have access to advanced analytics and features that can enhance customer interactions while ensuring data security.",created: "31/07/2024", type: "TEXT" },
    { id: 4, text: "What is the cost of IVF? I can’t provide specific information on IVF costs, but I can tell you about how our chatbot services can enhance your business by generating high-quality leads and providing 24/7 support to your",created: "31/07/2024", type: "TEXT" },
    { id: 6, text: "Will the Startup Plan address the concern I mentioned earlier? Yes, the Startup Plan will definitely help address your concerns! With this plan, you'll have access to advanced analytics and features that can enhance customer ", created: "31/07/2024", type: "TEXT" },
    { id: 7, text: "Which languages can you talk in? Multilingual support is the core of my AI!  I can speak many popular languages.  Just talk in the language you are comfortable in! Supported languages include: Regional Indian languages like", created: "13/03/2024", type: "TEXT" },
    { id: 8, text: "who are you My name is Bech! I am an AI chatbot and my job is to help you with any questions you may have about BeyondChats or our services.", created:"13/03/2024", type: "TEXT" },
    { id: 9, text: "Do you have live chat support? Yes, we do have live chat support, but we primarily focus on providing chatbot solutions that enhance customer interactions and offer instant responses 24/7.", created: "31/07/2024", type: "TEXT" },
    { id: 10, text: "I want to freeze my eggs. That's great, please choose from one of these 3 options.", created: "14/08/2024", type: "TEXT" },
    { id: 11, text: "I am trying to get pregnant.We have helped thousands of couples over the years, and we would love to support you too. Please choose from ", created: "20/02/2024", type: "TEXT" },
    { id: 12, text: "Who founded beyondchats? The founders of BeyondChats are Pankaj Baranwal and Simran Jain.", created: "17/02/2024", type: "TEXT" },
    { id: 13, text: "How do I get started? To get started schedule an onboarding connect with our experts. They will understand your business and help you ", created: "20/02/2024", type: "TEXT" },
    { id: 14, text: "Why chose you We are not just a conversational chatbot. Our AI builds trust with users and nudges them towards business actions like buying product, requesting demo, etc.", created: "20/02/2024", type: "TEXT" },
    { id: 15, text: "What will happen during the onboarding process? During the onboarding process, our experts will understand your business needs and try to understand how you want your chatbot to respond. Then they will build the chatbot and", created: "20/02/2024", type: "TEXT" },
    { id: 16, text: "Registration link? To register for the free trial book an onboarding call with our team. The team will share the next steps of the registration in the call. Book Call Now", created: "08/06/2024", type: "TEXT" },
    { id: 17, text: "What kind of analytics and reporting features does the chatbot offer? Daily: Leads stats + audience segmentation based on buying intent of users", created: "15/02/2024", type: "TEXT" },
    { id: 18, text: "in which company you have provided your chatbot We have provided our chatbot services to various companies across different industries.  These include: MultiBhashi, Selligion, drmalpani. com, indianangel. in May I know which", created: "15/02/2024", type: "TEXT" },
    { id: 19, text: "Can I cancel my subscription at any time?  You may cancel your subscription to BeyondChats at any time.  The cancellation will become effective at the end of your current billing cycle.  Upon cancellation, your service will remain active until the end of your paid billing term.", created: "08/06/2024", type: "TEXT" },
    { id: 20, text: "What are the pricing plans of BeyondChats? We offer 3 different plans: Individual Plan at Rs 1,000 only, Startup Plan at Rs 8,000 only, and Enterprise Plan price based on your requirements. You can subscribe to the paid plans in a ", created:"20/02/2024", type: "TEXT" },
    { id: 21, text: "Contact Details Please write to contactbeyondchats@gmail.com and we'll get back to you real soon!", created: "13/03/2024", type: "TEXT" },
    { id: 22, text: "Can the chatbot integrate with our existing CRM system? We already have integrations available for many popular CRMs. For our Success plan users, we also support ", created: "13/02/2024", type: "TEXT" },
    { id: 23, text: "Do you have a free plan? No, we don't have a free plan but you get 14-days free trial with all our plans. You can pay once you are satisfied with the chatbot.", created: "13/02/2024", type: "TEXT" },
    { id: 24, text: "Who built you? I was created by a team of researchers and engineers dedicated to helping businesses build trust and grow their sales.", created: "09/02/2024", type: "TEXT" },
    { id: 25, text: "How can the chatbot help in converting website visitors into leads? From the very second that a user comes to your website, BeyondChats tries to understand what the user wants, ", created: "13/02/2024", type: "TEXT" },
    { id: 26, text: "Do you offer Live agents? Our chatbot AI has been able to satisfactorily handling 97% of all user queries in real-time! Much faster and more ", created:  "13/02/2024", type: "TEXT" },
    { id: 27, text: "Is the chatbot customizable to match our brand and website design? YES!  Our chatbot is fully customizable. You will get access to the admin dashboard where you can control the look ", created: "13/02/2024", type: "TEXT" },
    { id: 28, text: "How does BeyondChats work? From the very second that a user comes to your website, BeyondChats tries to understand what the user wants, ", created: "09/02/2024", type: "TEXT" },
    { id: 29, text: "I want to talk to real person / live agent Unfortunately, we don't have a live agent availabe at the moment. Please share your contact details and my team will reach out to you within the next 24 hours!", created: "13/02/2024", type: "TEXT" },
    { id: 30, text: "Contact Details Email ID, Phone number, Website, Address", created: "13/03/2024", type: "TEXT" },
    { id: 31, text: "How are you different from ChatGPT? ChatGPT is amazing for general conversations.", created: "09/02/2024", type: "TEXT" },
  ];
    

