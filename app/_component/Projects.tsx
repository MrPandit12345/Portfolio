"use client";
import { GoTerminal } from "react-icons/go";
import { ProjectData, ProjectCard } from "./ProjectCard";

const projects: ProjectData[] = [
  {
    id: 1,
    title: "Task Manager with n8n Email Automation",
    description:
      " Developed a full-stack task management application using MERN stack with CRUD operations for tasks.Integrated n8n self-hosted workflow to automate email notifications when a task is marked as completed.Configured Zoho SMTP in n8n to securely send emails without relying on OAuth or third-party APIs. Designed a Webhook to Set to Email automation workflow to format task data and trigger notifications.Implemented backend-to-automation integration, allowing the Node.js backend to trigger workflows dynamically.",
    image: "/Project1.png",
    repo:"task_automation_FE",
    url:"https://task-automation-fe.vercel.app/",
    tags: ["React.js", "Node.js", "n8n"],
  },
  {
    id: 2,
    title: "Expense Tracker App ",
    description:
      " Developed a full-stack Expense Tracker application using the MERN stack. The app allows users to add, categorize, and track income & expenses with a user-friendly dashboard. Implemented JWT-based authentication, category-wise filtering, and real-time transaction updates. Ensured responsive UI, RESTful API integration, and secure data handling.",
    image: "/Project2.png",
    repo:"tracker_frontend",
    url:"https://tracker-frontend-eight.vercel.app",
    tags: ["React.js", "Node.js", "MongoDB", "JWT", "REST API", "Express"],
  },
  {
    id: 3,
    title: "Student Manager",
    description:
      "Developed a React.js-based Student Management System with full CRUD functionality using JSON Server as a mock backend. Implemented Create, Read, Update, and Delete (CRUD) operations to manage student records dynamically. Integrated Axios for handling API requests to interact with JSON Server. Designed a responsive and user-friendly interface using React components and hooks. Enabled seamless data manipulation and real-time updates to enhance user experience.",
    image: "/Project3.png",
    repo:"Student_Manager",
    url:"https://student-manager-pi.vercel.app/",
    tags: ["React.js", "JSON Server", "Axios", "CRUD", "REST API"],
  },
  {
    id: 4,
    title: "Role-Based Access Control System with Enterprise Management",
    description:
      "A full-stack Role-Based Access Control (RBAC) system. Built with React.js, Node.js (Express), and NoSql. User authentication with JWT.Role-based permissions (CRUD for roles, users, products, etc.). Enterprise and employee management. RESTful API with Express.js. React.js frontend with Axios for API calls. CORS enabled for frontend-backend communication",
    image: "/Project4.png",
    repo:"Role_Based_Access_Control",
    url:"https://github.com/MrPandit12345/Role_Based_Access_Control",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
  },
   {
    id: 5,
    title: "CouponCraft",
    description:
      "A dynamic discount engine for e-commerce applications. Add, remove, and configure coupon codes without modifying core logic. Dynamic coupon management at runtime. Multiple discount strategies (percentage, flat, category-specific, BOGO, tiered, Buy X Get Y). Automatic best coupon finder. Unlimited product categories support.",
    image: "/Project5.png",
    repo:"Coupon_Cart",
    url:"https://github.com/MrPandit12345/Coupon_Cart",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
  },
];

const Projects = () => {
  return (
    <section className="max-w-full mx-auto px-2">
      <div className="flex flex-col items-center text-center gap-4 border-b border-glass-border pb-6">
        <div className="flex items-center gap-2 text-primary/60 text-xl font-mono">
          <GoTerminal className="text-lg" />
          <span>root/user/projects</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white via-white to-gray-500">
          PROJECT_DATABASE
        </h2>

        <p className="text-slate-400 text-sm md:text-base max-w-3xl font-mono">
          Accessing secure archives. Displaying high-priority builds optimized
          for the Metaverse.
        </p>
      </div>

      <div className="perspective-container py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
