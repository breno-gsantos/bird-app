import { Check, CheckCircle2, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

export const NavLinks = [
    {
        id:1,
        href: '/sign-in',
        label: 'Sign In'
    },
    {
        id:2,
        href: '/',
        label: 'Get Started'
    },
    {
        id:3,
        href: '/',
        label: 'Pricing'
    },
    {
        id:4,
        href: '/',
        label: 'Features'
    },
    {
        id:5,
        href: '/contact',
        label: 'Contact'
    },
    {
        id:6,
        href: '/',
        label: 'About'
    }
]

export const MotionImages = [
    {
        id: 1,
        src: '/images/tab-1.webp',
        alt: 'illustration'
    },
    {
        id: 2,
        src: '/images/tab-2.webp',
        alt: 'illustration'
    },
    {
        id: 3,
        src: '/images/tab-3.webp',
        alt: 'illustration'
    }
]

export const tabs = [
    {
        id: 1,
        name: 'Marketing Teams',
        title: 'Deliver impactful marketing strategies',
        feature_one: 'Campaign planning',
        feature_two: 'Help teams quickly refocus and reprioritize work as goals change',
        feature_three: 'Automate processes for approvals',
        src: '/images/tab-1.webp'
    },
    {
        id: 2,
        name: 'IT Teams',
        title: 'Automate and streamline IT requests',
        feature_one: 'Reduce digital friction for better team velocity',
        feature_two: 'Track and manage work access teams',
        feature_three: 'Automate processes for approvals',
        src: '/images/tab-2.webp'
    },
    {
        id: 3,
        name: 'Operations Teams',
        title: 'Drive operational efficiency',
        feature_one: 'Track work and see progress in real time',
        feature_two: 'Standardize and automate processes',
        feature_three: 'Unblock teams to hit revenue goals',
        src: '/images/tab-3.webp'
    },
    {
        id: 4,
        name: 'Project Management',
        title: 'Drive operational efficiency',
        feature_one: 'Track work and see progress in real time',
        feature_two: 'Standardize and automate processes',
        feature_three: 'Track resources, goals and progress in one place',
        src: '/images/tab-4.webp'
    },
    {
        id: 5,
        name: 'Strategic Planning',
        title: 'Align teams to execute winning strategies',
        feature_one: 'Track work and see progress in real time',
        feature_two: 'Set annual plans to deliver results',
        feature_three: 'See real-time insights to stay on track and on budget',
        src: '/images/tab-5.webp'
    },
]

export const MotionLogo = [
    {
        id: 1,
        src: '/images/logo/logo-5.svg',
        alt: 'logo'
    },
    {
        id: 2,
        src: '/images/logo/logo-13.svg',
        alt: 'logo'
    },
    {
        id: 3,
        src: '/images/logo/logo-8.svg',
        alt: 'logo'
    },
    {
        id: 4,
        src: '/images/logo/logo-9.svg',
        alt: 'logo'
    }
]

export const SectionThree = [
    {
        id: 1,
        icon: CheckCircle2,
        title: 'The only platform that brings together your content and conversations',
        text: 'See related tasks, collaborators and progress to quickly achieve business goals.'
    },
    {
        id: 2,
        icon: CheckCircle2,
        title: 'Rated best for cross-team collaboration',
        text: 'Bird is rated as a leader in work management by industry experts.'
    },
    {
        id: 3,
        icon: CheckCircle2,
        title: 'Simple adoption, with less downtime',
        text: 'Get tailored support to help your teams easily migrate existing data and adopt Bird.'
    }
]

export const SectionFour = [
    {
        id: 1,
        src: '/images/tab-1.webp',
        paragraph: 'See how work maps out over time. Manage dependent, overlapping, and unscheduled tasks and create plans your team can count on',
        title: 'Timeline'
    },
    {
        id: 2,
        src: '/images/tab-2.webp',
        paragraph: 'Make it easy for your team to focus on tasks currently at hand. Define each stage of work to see what is important and where things are getting stuck.',
        title: 'Boards'
    },
    {
        id: 3,
        src: '/images/tab-3.webp',
        paragraph: 'See how work maps out over time. Manage dependent, overlapping, and unscheduled tasks—and create plans your team can count on.',
        title: 'Organization'
    },
]

export const Accordions = [
    {
        id: 1,
        title: 'Automate your workflows',
        paragraph: 'Put tasks on autocopilot like assigning work, setting due dates, and more.',
        classNameTrigger: 'text-blue-400',
        classNameContent: 'border-b border-blue-500',
        buttonClassName: 'flex text-lg px-0 mt-4 hover:bg-blue-500'
    },
]

export const SliderLogos = [
    {
        src: '/images/logo/logo-15.svg'
    },
    {
        src: '/images/logo/logo-13.svg'
    },
    {
        src: '/images/logo/logo-16.svg'
    },
    {
        src: '/images/logo/logo-17.svg'
    },
    {
        src: '/images/logo/logo-18.svg'
    },
    {
        src: '/images/logo/logo-19.svg'
    },
    {
        src: '/images/logo/logo-14.svg'
    },
    {
        src: '/images/logo/logo-13.svg'
    },
    {
        src: '/images/logo/logo-15.svg'
    },
    {
        src: '/images/logo/logo-13.svg'
    },
]

export const ImagesSeventh = [
    {   
        id: 1,
        src: '/images/tab-1.webp'
    },
    {   
        id: 2,
        src: '/images/tab-2.webp'
    },
    {   
        id: 3,
        src: '/images/tab-3.webp'
    },
]

export const socialLinks = [
    {
        id: 1,
        social: Twitter  
    },
    {
        id: 2,
          social: Linkedin  
      },
      {
        id: 3,
          social: Instagram  
      },
      {
        id: 4,
          social: Facebook  
      },
      {
        id: 5,
          social: Youtube  
      },
]

export const options = [
    {
      index: 0,
      title: "Marketing",
      description: "Plan and execute your campaigns with Timeline view. Align your team on top priorities and deliver fast results.",
      action: "Explore Marketing ",
      image: "/images/tab-3.webp"
    },
    {
      index: 1,
      title: "Operations",
      description: "Plan and execute your campaigns with Timeline view. Align your team on top priorities and deliver fast results.",
      action: "Explore Operations ",
      image: "/images/tab-2.webp"
    },
    {
      index: 2,
      title: "IT",
      description: "Plan and execute your campaigns with Timeline view. Align your team on top priorities and deliver fast results.",
      action: "Explore IT  ",
      image: "/images/tab-3.webp"
    },
    {
      index: 3,
      title: "Product",
      description: "Plan and execute your campaigns with Timeline view. Align your team on top priorities and deliver fast results.",
      action: "Explore Product ",
      image: "/images/tab-1.webp"
    },
    {
      index: 4,
      title: "Sales",
      description: "Plan and execute your campaigns with Timeline view. Align your team on top priorities and deliver fast results.",
      action: "Explore Sales ",
      image: "/images/tab-2.webp"
    }
]

export const LogoSection = [
    {
        id: 1,
        src: '/images/logo/logo-6.svg'
    },
    {
        id: 2,
        src: '/images/logo/logo-4.svg'
    },
    {
        id: 3,
        src: '/images/logo/logo-5.svg'
    },
    {
        id: 4,
        src: '/images/logo/logo-3.svg'
    }
]

export const CheckSection = [
    {
        id: 1,
        icon: Check,
        label: 'Timeline'
    },
    {
        id: 2,
        icon: Check,
        label: 'Unlimited free viewers'
    },
    {
        id: 3,
        icon: Check,
        label: '5 Participants'
    },
    {
        id: 4,
        icon: Check,
        label: '5 GB Storage'
    },
    {
        id: 5,
        icon: Check,
        label: 'Unlimited Projects'
    },
    {
        id: 6,
        icon: Check,
        label: 'Unlimited Project boards'
    },
    {
        id: 7,
        icon: Check,
        label: '2 Factor Authentication'
    },
    {
        id: 8,
        icon: Check,
        label: '24/7 Customer Support'
    },
    {
        id: 9,
        icon: Check,
        label: '1 Company'
    },
    {
        id: 10,
        icon: Check,
        label: '1 Team'
    },
    {
        id: 11,
        icon: Check,
        label: '1 Owner'
    },
    {
        id: 12,
        icon: Check,
        label: 'Custom Domain'
    },
]

export const CheckSection2 = [
    {
        id: 1,
        icon: Check,
        label: 'Unlimited free viewers'
    },
    {
        id: 2,
        icon: Check,
        label: 'Unlimited Participants'
    },
    {
        id: 3,
        icon: Check,
        label: '100 GB Storage'
    },
    {
        id: 4,
        icon: Check,
        label: 'Unlimited Projects'
    },
    {
        id: 5,
        icon: Check,
        label: 'Unlimited Project boards'
    },
    {
        id: 6,
        icon: Check,
        label: 'Forms'
    },
    {
        id: 7,
        icon: Check,
        label: 'Rules'
    },
    {
        id: 8,
        icon: Check,
        label: 'Permissions'
    },
    {
        id: 9,
        icon: Check,
        label: 'Templates'
    },
    {
        id: 10,
        icon: Check,
        label: 'Builder'
    },
    {
        id: 11,
        icon: Check,
        label: 'Search'
    },
    {
        id: 12,
        icon: Check,
        label: 'Milestones'
    },
]

export const CheckSection3 = [
    {
        id: 1,
        icon: Check,
        label: 'Portfolios'
    },
    {
        id: 2,
        icon: Check,
        label: 'Product Roadmap'
    },
    {
        id: 3,
        icon: Check,
        label: 'Calendar'
    },
    {
        id: 4,
        icon: Check,
        label: 'Timeline'
    },
    {
        id: 5,
        icon: Check,
        label: 'Gantt Chart'
    },
    {
        id: 6,
        icon: Check,
        label: 'Advanced Integrations'
    },
    {
        id: 7,
        icon: Check,
        label: 'Forms'
    },
    {
        id: 8,
        icon: Check,
        label: 'Rules'
    },
    {
        id: 9,
        icon: Check,
        label: 'Permissions'
    },
    {
        id: 10,
        icon: Check,
        label: 'Templates'
    },
    {
        id: 11,
        icon: Check,
        label: 'Builder'
    },
    {
        id: 12,
        icon: Check,
        label: 'Search'
    },
]



