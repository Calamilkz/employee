'use client';

import { useState } from 'react';

interface EmployeeData {
  name: string;
  avatarBg: string;
  tags: string[];
  email: string;
  phone: string;
  tenure: string;
  personalInfo: {
    position: string;
    department: string;
    employmentType: string;
    startDate: string;
    tenure: string;
    status: string;
    skills: string[];
  };
  hierarchy: {
    name: string;
    role: string;
    isCurrent?: boolean;
  }[];
  projects: {
    workingOn: string[];
    completed: string[];
  };
}

const mockEmployee: EmployeeData = {
  name: 'เจษฎา มานัดโขจิต',
  avatarBg: '#A7F3D0',
  tags: ['ฝ่ายบริการลูกค้า', 'ฝ่ายกำกับบริการลูกค้า', 'ออนไลน์'],
  email: 'Patipat@example.com',
  phone: '095-332-1213',
  tenure: '2 ปี 2 เดือน',
  personalInfo: {
    position: 'QA Manager',
    department: 'IT',
    employmentType: 'เต็มเวลา',
    startDate: '18/02/2007',
    tenure: '2 ปี 2 เดือน',
    status: 'ออนไลน์',
    skills: ['ดูแลลูกค้า', 'ภาษาอังกฤษ'],
  },
  hierarchy: [
    { name: 'name surname', role: 'IT Director(ผู้บริหารสายงาน)' },
    { name: 'name surname', role: 'Product Manager (ผู้จัดการ)', isCurrent: true },
    { name: 'name surname', role: 'QA (ทดสอบผลิตภัณฑ์)' },
  ],
  projects: {
    workingOn: [],
    completed: [],
  },
};

export default function PersonalEmpPage() {
  const [employee, setEmployee] = useState<EmployeeData>(mockEmployee);
  const [activeTab, setActiveTab] = useState<'personal' | 'career'>('personal');
  const [newProject, setNewProject] = useState('');

  const handleAddProject = () => {
    if (!newProject.trim()) return;
    setEmployee((prev) => ({
      ...prev,
      projects: {
        ...prev.projects,
        workingOn: [...prev.projects.workingOn, newProject.trim()],
      },
    }));
    setNewProject('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddProject();
    }
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen -m-6 p-8 font-sans text-gray-800">
      <div className="max-w-[1100px] mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">พนักงาน</h1>
          <p className="text-xs text-gray-400 mt-1">
            ข้อมูลส่วนตัว เช่น ประวัติส่วนตัว ครอบครัว ประวัติการทำงาน
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] space-y-6">
          <div className="flex items-center gap-6">
            {/* Avatar / Placeholder */}
            <div className="w-24 h-24 rounded-2xl bg-[#B7F498] flex items-center justify-center shrink-0 shadow-xs" />

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900">{employee.name}</h2>
              <div className="flex flex-wrap items-center gap-2">
                {employee.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#D3F5C3] text-[#2C6E25] text-xs rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100" />

          {/* Contact Details Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-1">
            {/* Email */}
            <div className="flex items-start gap-3">
              <span className="text-gray-400 mt-0.5">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <div>
                <span className="text-xs text-gray-400 font-medium block">อีเมล</span>
                <span className="text-xs text-gray-700 font-normal mt-0.5 block">{employee.email}</span>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <span className="text-gray-400 mt-0.5">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <div>
                <span className="text-xs text-gray-400 font-medium block">เบอร์โทร</span>
                <span className="text-xs text-gray-700 font-normal mt-0.5 block">{employee.phone}</span>
              </div>
            </div>

            {/* Tenure */}
            <div className="flex items-start gap-3">
              <span className="text-gray-400 mt-0.5">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
              <div>
                <span className="text-xs text-gray-400 font-medium block">อายุงาน</span>
                <span className="text-xs text-gray-700 font-normal mt-0.5 block">{employee.tenure}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 3 Columns Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          
          {/* Column 1: Tabs + Information Card (Width: ~5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {/* Tabs */}
            <div className="inline-flex bg-[#EFEFEF] p-1 rounded-full text-xs font-medium">
              <button
                type="button"
                onClick={() => setActiveTab('personal')}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeTab === 'personal'
                    ? 'bg-white text-gray-900 shadow-xs font-semibold'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                ข้อมูลส่วนบุคคล
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('career')}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeTab === 'career'
                    ? 'bg-white text-gray-900 shadow-xs font-semibold'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                ประวัติวิชาชีพ
              </button>
            </div>

            {/* Content Card */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] space-y-5">
              {activeTab === 'personal' ? (
                <>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    {/* Row 1 */}
                    <div className="pb-2 border-b border-gray-100">
                      <span className="text-xs font-semibold text-gray-800 block">ตำแหน่ง</span>
                      <span className="text-[11px] text-gray-500 mt-1 block">
                        {employee.personalInfo.position}
                      </span>
                    </div>
                    <div className="pb-2 border-b border-gray-100">
                      <span className="text-xs font-semibold text-gray-800 block">แผนก</span>
                      <span className="text-[11px] text-gray-500 mt-1 block">
                        {employee.personalInfo.department}
                      </span>
                    </div>

                    {/* Row 2 */}
                    <div className="pb-2 border-b border-gray-100">
                      <span className="text-xs font-semibold text-gray-800 block">ประเภทการจ้างงาน</span>
                      <span className="text-[11px] text-gray-500 mt-1 block">
                        {employee.personalInfo.employmentType}
                      </span>
                    </div>
                    <div className="pb-2 border-b border-gray-100">
                      <span className="text-xs font-semibold text-gray-800 block">วันที่เริ่มต้น</span>
                      <span className="text-[11px] text-gray-500 mt-1 block">
                        {employee.personalInfo.startDate}
                      </span>
                    </div>

                    {/* Row 3 */}
                    <div className="pb-2 border-b border-gray-100">
                      <span className="text-xs font-semibold text-gray-800 block">อายุงาน</span>
                      <span className="text-[11px] text-gray-500 mt-1 block">
                        {employee.personalInfo.tenure}
                      </span>
                    </div>
                    <div className="pb-2 border-b border-gray-100">
                      <span className="text-xs font-semibold text-gray-800 block">สถานะ</span>
                      <span className="text-[11px] text-gray-500 mt-1 block">
                        {employee.personalInfo.status}
                      </span>
                    </div>
                  </div>

                  {/* Skills Section */}
                  <div className="pt-1">
                    <span className="text-xs font-semibold text-gray-800 block mb-2.5">สกิล</span>
                    <div className="flex flex-wrap gap-2">
                      {employee.personalInfo.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3.5 py-1 text-[11px] text-gray-600 bg-white border border-gray-200 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="py-8 text-center text-xs text-gray-400">
                  ไม่มีข้อมูลประวัติวิชาชีพเพิ่มเติม
                </div>
              )}
            </div>
          </div>

          {/* Column 2: Hierarchy Card (Width: ~4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between min-h-[360px]">
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-6">สายบัญชาการ (hierarchy)</h3>

              <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-3 before:w-[2px] before:bg-gray-200">
                {employee.hierarchy.map((item, idx) => (
                  <div key={idx} className="relative">
                    {/* Bullet Node */}
                    <span
                      className={`absolute -left-[21px] top-1.5 w-3 h-3 rounded-full border-2 bg-white ${
                        item.isCurrent
                          ? 'border-[#34D399] bg-[#34D399]'
                          : 'border-gray-300'
                      }`}
                    />
                    <div className="leading-tight">
                      <p className="text-xs font-medium text-gray-900">{item.name}</p>
                      <p className="text-[11px] text-gray-400 mt-0.5">{item.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-4">
              <button
                type="button"
                className="text-xs text-gray-500 hover:text-gray-800 font-medium transition-colors"
              >
                ดูเพิ่มเติม
              </button>
            </div>
          </div>

          {/* Column 3: Projects Card (Width: ~3 cols) */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-5 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-gray-900">Projects</h3>
              <span className="text-[11px] text-gray-400">
                {employee.projects.workingOn.length + employee.projects.completed.length} งาน
              </span>
            </div>

            {/* Input project name + Add button */}
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="งาน / project name"
                  value={newProject}
                  onChange={(e) => setNewProject(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full text-xs text-gray-700 bg-white border border-gray-200 rounded-full px-3.5 py-1.5 outline-none focus:border-gray-400 placeholder:text-gray-400"
                />
              </div>
              <button
                type="button"
                onClick={handleAddProject}
                className="w-7 h-7 rounded-lg bg-[#53D769] hover:bg-[#46c25b] text-white flex items-center justify-center font-bold text-base shadow-xs shrink-0 transition-colors"
              >
                +
              </button>
            </div>

            {/* Project lists */}
            <div className="space-y-3 pt-1 text-[11px]">
              <div>
                <span className="font-semibold text-gray-800 block mb-1">ทำอยู่</span>
                {employee.projects.workingOn.length > 0 ? (
                  <ul className="space-y-1 pl-1 text-gray-600">
                    {employee.projects.workingOn.map((p, i) => (
                      <li key={i} className="truncate">• {p}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400">ไม่มีสิ่งใดกำลังดำเนินการอยู่</p>
                )}
              </div>

              <div>
                <span className="font-semibold text-gray-800 block mb-1">เสร็จแล้ว</span>
                {employee.projects.completed.length > 0 ? (
                  <ul className="space-y-1 pl-1 text-gray-600">
                    {employee.projects.completed.map((p, i) => (
                      <li key={i} className="truncate">• {p}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400">ยังไม่มีงานที่เสร็จสมบูรณ์</p>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
