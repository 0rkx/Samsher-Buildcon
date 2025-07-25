
import { NavLink, Service, AccordionItem, StrengthItem, Work, Client } from './types';

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/#services', label: 'Services' },
  { href: '/#clients', label: 'Clients' },
  { href: '/hse-policy', label: 'HSE Policy' },
  { href: '/#contact', label: 'Contact Us' },
];

export const SERVICES: Service[] = [
  {
    imgSrc: '/images/png-transparent-cement-mixers-machine-industry-concrete-maquinaria-gunny-sack-industry-agricultural-machinery-removebg-preview.png',
    title: 'Mixture Machines',
    description: 'Reliable and efficient machines for consistent concrete and mortar mixing on-site.',
  },
  {
    imgSrc: '/images/Untitled-design-5.png',
    title: 'Water Tankers',
    description: 'Ensuring a steady supply of water for all construction needs, from dust control to concrete mixing.',
  },
  {
    imgSrc: '/images/Untitled-design-6.png',
    title: 'Hydraulic Machines',
    description: 'Versatile machinery for various construction tasks, delivering power and precision.',
  },
  {
    imgSrc: '/images/Untitled-design-7.png',
    title: 'Rod Cutting and Binding Machines',
    description: 'High-precision machines for cutting and binding reinforcement rods, ensuring structural integrity.',
  },
  {
    imgSrc: '/images/Untitled-design-8.png',
    title: 'Comprehensive Civil Construction Tools',
    description: 'A complete arsenal of tools and equipment to tackle any civil construction challenge, big or small.',
  },
  {
    imgSrc: '/images/Untitled-design-10.png',
    title: 'Scaffolding Materials',
    description: 'High-quality, safe, and reliable scaffolding systems to support workers and materials at any height.',
  },
];

export const MANPOWER_ACCORDION_ITEMS: AccordionItem[] = [
    { title: 'Project Estimators', content: 'Our estimators provide accurate and reliable cost and time assessments, helping to plan and budget your project effectively.' },
    { title: 'Architects', content: 'Professional architects who design innovative and functional structures, ensuring aesthetic appeal and structural integrity in every project.' },
    { title: 'Accountants', content: 'Expert financial management and budgeting ensure that all aspects of your project are financially sound and well-organized.' },
    { title: 'Skilled & Experienced Supervisors', content: 'Our supervisors oversee each project with a focus on quality and safety, ensuring that all work meets our high standards.' },
    { title: 'Skilled Craftsmen', content: 'Proficient masons and tradespeople who are dedicated to delivering excellent craftsmanship on every task.' },
    { title: 'Night Guards', content: 'Providing security and peace of mind by safeguarding the construction site around the clock.' },
    { title: 'Experienced Helpers', content: 'Support staff with hands-on experience who assist in various construction activities, enhancing efficiency and productivity.' },
];

export const DOCUMENT_STRENGTHS: StrengthItem[] = [
  { title: 'ESIC Registered' },
  { title: 'GST' },
  { title: 'Labour License' },
  { title: 'Udyam Aadhar' },
  { title: 'BOCW' },
  { title: 'MSME' },
  { title: 'NIBOSH' },
  { title: 'IOSH' },
  { title: 'OSHA' },
];

export const WORKS: Work[] = [
  { 
    imgSrc: '/images/WhatsApp-Image-2024-07-25-at-12.57.21-PM-scaled.jpeg', 
    title: 'CKP Bazaar',
    category: 'Commercial',
    description: 'A landmark multi-functional commercial complex featuring state-of-the-art retail spaces and a magnificent banquet hall. The project showcases modern architectural principles with a focus on user experience and high footfall management.'
  },
  { 
    imgSrc: '/images/photo_2024-01-29_22-42-42.jpg', 
    title: 'Eco-Friendly Site Barricading',
    category: 'Infrastructure',
    description: 'Implementation of sustainable and robust bamboo barricades for large-scale project sites. This eco-friendly solution provides effective site control while minimizing environmental impact.'
  },
  { 
    imgSrc: '/images/247792f9-b6cc-4e34-9c9a-78705af5a0e6.jpeg', 
    title: 'National Highway Safety Enhancement',
    category: 'Infrastructure',
    description: 'Precision installation of highway crash barriers along key national routes. This critical infrastructure project significantly enhances road safety and prevents accidents through meticulous engineering and execution.'
  },
  {
    imgSrc: '/images/work/commercial 1.jpeg',
    title: 'Office Building Construction, Jharkhand',
    category: 'Commercial',
    description: 'A comprehensive office building project in Jharkhand featuring modern architectural design, efficient space utilization, and contemporary amenities to support business operations and professional growth.'
  },
  {
    imgSrc: '/images/work/industrial 1.jpeg',
    title: 'Water Tower Construction, Bokaro, Jharkhand',
    category: 'Industrial',
    description: 'Strategic construction of a high-capacity water tower in Bokaro, Jharkhand, engineered to provide reliable water supply infrastructure with advanced storage systems and distribution capabilities for the local community.'
  },
  {
    imgSrc: '/images/work/industrial 2.jpeg',
    title: 'Boundary Wall Construction, Orissa',
    category: 'Infrastructure',
    description: 'Robust boundary wall construction project in Orissa featuring reinforced concrete structure, security enhancements, and weather-resistant design to provide long-lasting perimeter protection and property demarcation.'
  },
  {
    imgSrc: '/images/work/industrial 3.jpeg',
    title: 'Warehouse Construction, Orissa',
    category: 'Industrial',
    description: 'Large-scale warehouse facility construction in Orissa designed for optimal storage capacity, efficient logistics operations, and modern material handling systems to support industrial and commercial distribution needs.'
  },
  {
    imgSrc: '/images/work/industrial 4.jpeg',
    title: 'Oxygen Plant, Orissa',
    category: 'Industrial',
    description: 'Critical oxygen plant construction in Orissa featuring advanced gas production technology, safety systems, and quality control measures to ensure reliable medical and industrial oxygen supply for healthcare and manufacturing sectors.'
  },
  {
    imgSrc: '/images/work/infra 1.jpeg',
    title: 'Colvet Bridge Construction, Saraileka',
    category: 'Infrastructure',
    description: 'Engineering excellence in bridge construction at Saraileka featuring reinforced concrete design, load-bearing capacity optimization, and weather-resistant construction to enhance regional connectivity and transportation infrastructure.'
  },
  {
    imgSrc: '/images/work/infra 2.jpeg',
    title: 'Pipe Laying Work, Jamshedpur',
    category: 'Infrastructure',
    description: 'Comprehensive pipe laying infrastructure project in Jamshedpur involving precision installation of water supply and drainage systems with advanced pipeline technology to ensure efficient utility distribution and urban development support.'
  },
  {
    imgSrc: '/images/work/residential 1.jpeg',
    title: 'House Construction Work, Bihar',
    category: 'Residential',
    description: 'Quality residential house construction project in Bihar featuring modern architectural design, durable materials, and efficient space planning to create comfortable living spaces with contemporary amenities and structural integrity.'
  },
  {
    imgSrc: '/images/work/residential 2.jpeg',
    title: 'Luxury Villas',
    category: 'Residential',
    description: 'Premium luxury villa construction featuring bespoke architectural designs, high-end interior finishes, and sophisticated amenities including landscaped gardens, modern security systems, and energy-efficient technologies for discerning homeowners.'
  },
  {
    imgSrc: '/images/work/residential 3.jpeg',
    title: 'Gated Community Housing',
    category: 'Residential',
    description: 'Comprehensive gated community development featuring secure perimeter walls, controlled access systems, recreational facilities, and well-planned residential units with modern infrastructure to create a safe and comfortable living environment.'
  },
  {
    imgSrc: '/images/work/residential 4.jpeg',
    title: 'Affordable Housing Project',
    category: 'Residential',
    description: 'Cost-effective residential housing solutions designed with quality construction materials, efficient space utilization, and essential modern amenities to provide comfortable and affordable living options for families and individuals.'
  }
];

export const CLIENTS: Client[] = [
    { name: 'Tata Steel Foundation', logo: '/images/tatasteel.svg' },
    { name: 'Tata Steel UISL', logo: '/images/tatasteeluisl.svg' },
    { name: 'Tata Steel Beldih Club', logo: '/images/beldihclub.svg' },
    { name: 'Md Issa khan & Sons' },
    { name: 'New Diamond Enterprises' },
    { name: 'Khan Brothers & Construction' },
    { name: 'M/s Shad & Company' },
    { name: 'Nazir & Others' },
    { name: 'M/s Aurangzeb Khan Estate' },
    { name: 'ANM Enterprises' },
    { name: 'Subica Trading' },
    { name: 'Md. Shahabuddin & Others' },
];

export const CONTACT_INFO = {
    phone1: '+91 7004503386',
    phone2: '+91 06572951805',
    email: 'info@samsherbuildcon.com',
    address: 'Near Makkah Masjid Road Godwon Area , B Block Dhatkidih , Bistupur , Jamshedpur – 831001',
    mapUrl: 'https://maps.google.com/maps?q=Samsher%20Buildcon%20Jamshedpur&t=m&z=17&output=embed&iwloc=near',
}
