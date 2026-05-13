import { useState } from "react";
import { Plus } from "lucide-react";

const Insights = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
    {
      id: 1,
      title: "Create and Organize Tasks with Ease",
      content:
        "Start by creating tasks in just a few clicks. Whether it's a personal to-do list or a team-wide project, SWIVT TMS helps you break tasks into smaller, manageable parts. Organize tasks into categories, assign priorities, and add relevant details, ensuring everything is clearly outlined from the start.",
    },
    {
      id: 2,
      title: "Collaborate and Communicate Seamlessly",
      content:
        "Teamwork is at the core of SWIVT. Assign tasks to team members, set deadlines, and share files or instructions directly within the platform. Say goodbye to scattered emails and endless follow-ups- collaboration happens in real time, so everyone stays in sync. Use built-in communication tools to leave comments, provide feedback, or discuss updates without switching apps.",
    },
    {
      id: 3,
      title: "Track Progress and Stay Updated",
      content:
        "Gain full visibility into your workflow with real-time progress tracking. Use intuitive dashboards, Gantt charts, and Kanban boards to monitor task statuses and project timelines. Receive automatic updates and reminders to keep you informed about deadlines, overdue tasks, and key milestones. With SWIVT TMS, staying on track has never been easier.",
    },
    {
      id: 4,
      title: "Achieve Goals and Optimize Workflow",
      content:
        "With SWIVT TMS, achieving your goals is efficient and stress-free. Analyze performance through detailed reports and identify areas for improvement. The platform helps you optimize workflows, eliminate bottlenecks, and focus on what matters most-delivering results. Whether you're managing a personal project or leading a team, SWIVT TMS adapts to your needs to help you work smarter.",
    },
  ];

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div className="w-full px-4 py-6 mt-20" id="insights">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold">How It Works?</h2>
        <h1 className="text-4xl font-bold">
          How does <span className="text-[#F1F510]">TMS</span> work?
        </h1>
        <p className="text-xl text-gray-300">
          Seamless Task Management In 4 Easy Ways.
        </p>
      </div>

      <div className="space-y-8 max-w-6xl mx-auto">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`bg-gradient-to-r from-[#16170194] to-[#000000CC] bg-opacity-20 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden gap-[32px] hover:border-gray-600 transition-all duration-300`}
          >
            <div
              className="flex items-center justify-between p-6 cursor-pointer"
              onClick={() => toggleSection(section.id)}
            >
              <div className="flex items-center gap-4">
                <Plus
                  className={`w-5 h-5 text-gray-400 transition-transform duration-200 mr-4 ${
                    expandedSection === section.id ? "rotate-45" : ""
                  }`}
                />
                <h3 className="text-xl font-semibold text-gray-200">
                  {section.title}
                </h3>
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                expandedSection === section.id
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-16 pb-6 text-gray-300">{section.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insights;
