const rvttiData = {
  name: "Rift Valley Technical Training Institute",
  abbreviation: "RVTTI",
  location: "Eldoret, Kenya",
  address: "P.O. Box 718-30100, Eldoret, Kenya",
  contact: {
    phone: "+254-53-2060000",
    mobile: "+254-700-000000",
    email: "info@rvtti.ac.ke",
    admissions_email: "admissions@rvtti.ac.ke",
    finance_email: "finance@rvtti.ac.ke"
  },
  website: "www.rvtti.ac.ke",
  social_media: {
    facebook: "RVTTI Eldoret",
    twitter: "@RVTTI_Kenya",
    instagram: "rvtti_eldoret"
  },
  
  // Academic Information
  academic_calendar: {
    first_semester: "September to December",
    second_semester: "January to April",
    third_semester: "May to August",
    holidays: "December, April, August breaks"
  },
  
  // Departments and Courses
  departments: {
    engineering: {
      name: "School of Engineering",
      courses: [
        {
          name: "Diploma in Civil Engineering",
          duration: "3 years",
          entry_requirements: "KCSE C- with C- in Mathematics, Physics, and English",
          modules: ["Engineering Mathematics", "Structural Analysis", "Construction Management", "Surveying", "Hydraulics"],
          career_paths: ["Civil Engineer", "Construction Manager", "Surveyor", "Project Manager"]
        },
        {
          name: "Diploma in Electrical Engineering",
          duration: "3 years", 
          entry_requirements: "KCSE C- with C- in Mathematics, Physics, and English",
          modules: ["Electrical Circuits", "Electronics", "Power Systems", "Control Systems", "Renewable Energy"],
          career_paths: ["Electrical Engineer", "Power Systems Engineer", "Electronics Technician", "Maintenance Engineer"]
        },
        {
          name: "Diploma in Mechanical Engineering",
          duration: "3 years",
          entry_requirements: "KCSE C- with C- in Mathematics, Physics, and English", 
          modules: ["Thermodynamics", "Machine Design", "Manufacturing Processes", "Automotive Engineering", "CAD/CAM"],
          career_paths: ["Mechanical Engineer", "Automotive Engineer", "Manufacturing Engineer", "Maintenance Engineer"]
        }
      ]
    },
    
    business: {
      name: "School of Business and Economics",
      courses: [
        {
          name: "Diploma in Business Management",
          duration: "2 years",
          entry_requirements: "KCSE C- with C- in English and Mathematics",
          modules: ["Business Communication", "Marketing Management", "Financial Management", "Human Resource Management", "Entrepreneurship"],
          career_paths: ["Business Manager", "Marketing Officer", "HR Officer", "Entrepreneur"]
        },
        {
          name: "Diploma in Accounting",
          duration: "2 years",
          entry_requirements: "KCSE C- with C- in English and Mathematics",
          modules: ["Financial Accounting", "Cost Accounting", "Taxation", "Auditing", "Business Law"],
          career_paths: ["Accountant", "Auditor", "Tax Consultant", "Financial Analyst"]
        },
        {
          name: "Diploma in Supply Chain Management",
          duration: "2 years",
          entry_requirements: "KCSE C- with C- in English and Mathematics",
          modules: ["Logistics Management", "Procurement", "Inventory Management", "Transportation", "Warehouse Management"],
          career_paths: ["Supply Chain Manager", "Logistics Officer", "Procurement Officer", "Warehouse Manager"]
        }
      ]
    },
    
    ict: {
      name: "School of Information and Communication Technology",
      courses: [
        {
          name: "Diploma in Information Technology",
          duration: "2 years",
          entry_requirements: "KCSE C- with C- in English and Mathematics",
          modules: ["Programming", "Database Management", "Web Development", "Networking", "System Analysis"],
          career_paths: ["Software Developer", "Database Administrator", "Web Developer", "IT Support"]
        },
        {
          name: "Diploma in Computer Science",
          duration: "2 years",
          entry_requirements: "KCSE C- with C- in English and Mathematics",
          modules: ["Data Structures", "Algorithms", "Software Engineering", "Computer Networks", "Operating Systems"],
          career_paths: ["Software Engineer", "Systems Analyst", "Network Administrator", "IT Consultant"]
        }
      ]
    },
    
    hospitality: {
      name: "School of Hospitality and Tourism",
      courses: [
        {
          name: "Diploma in Hotel Management",
          duration: "2 years",
          entry_requirements: "KCSE C- with C- in English",
          modules: ["Food and Beverage Management", "Front Office Operations", "Housekeeping", "Event Management", "Customer Service"],
          career_paths: ["Hotel Manager", "Restaurant Manager", "Event Planner", "Hospitality Consultant"]
        },
        {
          name: "Diploma in Tourism Management",
          duration: "2 years",
          entry_requirements: "KCSE C- with C- in English",
          modules: ["Tourism Planning", "Tour Operations", "Destination Management", "Travel Agency Operations", "Cultural Tourism"],
          career_paths: ["Tourism Officer", "Travel Agent", "Tour Guide", "Destination Manager"]
        }
      ]
    }
  },
  
  // Admissions Information
  admissions: {
    inquiries: "For admission inquiries, please visit the admissions office or check the website at www.rvtti.ac.ke/admissions",
    requirements: {
      general: "KCSE Certificate with minimum grade C-",
      mature_entry: "25+ years with relevant work experience",
      international: "Equivalent qualifications from recognized institutions"
    },
    application_process: [
      "Fill online application form at www.rvtti.ac.ke/apply",
      "Submit required documents (KCSE certificate, ID copy, passport photos)",
      "Pay application fee of KES 1,000",
      "Attend interview if required",
      "Receive admission letter upon acceptance"
    ],
    application_deadlines: {
      september_intake: "July 31st",
      january_intake: "November 30th",
      may_intake: "March 31st"
    },
    required_documents: [
      "KCSE Certificate (original and copy)",
      "National ID or Passport copy",
      "4 passport size photos",
      "Application fee receipt",
      "Medical certificate",
      "Character reference letter"
    ]
  },
  
  // Fees and Financial Information
  fees: {
    payment_methods: "Fee payment can be done through our bank accounts, M-Pesa, or at the finance office",
    bank_details: {
      bank_name: "Cooperative Bank of Kenya",
      account_name: "Rift Valley Technical Training Institute",
      account_number: "0112345678900",
      branch: "Eldoret Branch"
    },
    mpesa_details: {
      paybill: "123456",
      account_number: "Student Registration Number"
    },
    fee_structure: {
      application_fee: "KES 1,000 (non-refundable)",
      registration_fee: "KES 5,000 (per semester)",
      tuition_fee: "KES 25,000 (per semester)",
      examination_fee: "KES 2,000 (per semester)",
      library_fee: "KES 1,000 (per semester)",
      laboratory_fee: "KES 3,000 (per semester - Engineering courses only)",
      accommodation: "KES 15,000 (per semester - optional)",
      meals: "KES 12,000 (per semester - optional)"
    },
    payment_schedule: {
      first_installment: "50% before registration",
      second_installment: "25% by mid-semester",
      third_installment: "25% before examinations"
    },
    scholarships: [
      "Government bursaries for needy students",
      "Merit-based scholarships for top performers",
      "Sports scholarships for talented athletes",
      "County government scholarships"
    ]
  },
  
  // Student Services
  student_services: {
    accommodation: {
      on_campus: "Available for 500 students with modern facilities",
      off_campus: "Assistance provided for private accommodation",
      facilities: ["24/7 security", "WiFi", "Common rooms", "Kitchen facilities", "Laundry services"]
    },
    health_services: {
      clinic: "On-campus health clinic with qualified nurse",
      services: ["First aid", "Health consultations", "Referrals to hospitals", "Health education"]
    },
    counseling: {
      services: ["Academic counseling", "Career guidance", "Personal counseling", "Peer counseling"]
    },
    sports: {
      facilities: ["Football field", "Basketball court", "Volleyball court", "Athletics track", "Gymnasium"],
      teams: ["Football team", "Basketball team", "Volleyball team", "Athletics team"]
    },
    clubs: [
      "Student Council",
      "Engineering Club",
      "Business Club", 
      "ICT Club",
      "Hospitality Club",
      "Environmental Club",
      "Debate Club",
      "Drama Club"
    ]
  },
  
  // Student Portal
  student_portal: {
    url: "portal.rvtti.ac.ke",
    features: [
      "Course registration",
      "Fee payment",
      "Exam results",
      "Timetable access",
      "Library resources",
      "Communication with lecturers"
    ],
    password_reset: "To reset your portal password, click on the 'Forgot Password' link on the student portal login page or contact IT support",
    login_issues: "For login problems, contact IT support at it-support@rvtti.ac.ke or visit the IT office"
  },
  
  // Library Services
  library: {
    hours: "Monday-Friday: 8:00 AM - 8:00 PM, Saturday: 9:00 AM - 5:00 PM",
    resources: [
      "Over 10,000 books",
      "Online databases",
      "E-books and e-journals",
      "Computer workstations",
      "Study rooms",
      "Printing and photocopying services"
    ],
    membership: "Free for all registered students",
    borrowing: "Maximum 3 books for 2 weeks"
  },
  
  // Career Services
  career_services: {
    services: [
      "Career counseling",
      "Resume writing assistance",
      "Interview preparation",
      "Job placement assistance",
      "Industry partnerships",
      "Career fairs"
    ],
    partnerships: [
      "Local industries",
      "Government institutions",
      "Private companies",
      "International organizations"
    ]
  },
  
  // Transportation
  transportation: {
    public_transport: [
      "Matatus from Eldoret town center",
      "Boda boda services",
      "Taxi services"
    ],
    campus_location: "Located 5km from Eldoret town center on Eldoret-Nakuru highway",
    parking: "Free parking available for students with vehicles"
  },
  
  // Emergency Contacts
  emergency_contacts: {
    security: "+254-700-000001",
    ambulance: "+254-700-000002", 
    fire: "+254-700-000003",
    police: "+254-700-000004"
  }
};

module.exports = rvttiData;