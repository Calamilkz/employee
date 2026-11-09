'use client';

import { useState } from 'react';

interface HistoryItem {
  id: string;
  submitDate: string;
  requestId: string;
  title: string;
  subtitle?: string;
  amount: number;
  status: string;
  transferCycle: string;
  category: string;
  year: string;
  month: string;
}

const mockHistoryData: HistoryItem[] = [
  {
    id: '1',
    submitDate: '02 พ.ย. 2569',
    requestId: 'QAM030690001',
    title: 'ค่าทันตกรรม',
    amount: 2000,
    status: 'รอเบิก',
    transferCycle: '28 พ.ย. 2569',
    category: 'dental',
    year: '2569',
    month: '11',
  },
  {
    id: '2',
    submitDate: '15 ต.ค. 2569',
    requestId: 'QAM011690001',
    title: 'ค่าทันตกรรม (เบิกแทน)',
    subtitle: 'เบิกให้นาย A',
    amount: 1500,
    status: 'รอส่งเอกสาร',
    transferCycle: '-',
    category: 'dental',
    year: '2569',
    month: '10',
  },
  {
    id: '3',
    submitDate: '10 ก.ย. 2569',
    requestId: 'QAM053690001',
    title: 'สวัสดิการ AI Subscription',
    subtitle: 'Claude Pro Max 5x',
    amount: 5000,
    status: 'รอตรวจสอบ',
    transferCycle: '-',
    category: 'ai_subscription',
    year: '2569',
    month: '09',
  },
];

export default function HistoryPage() {
  const [historyList, setHistoryList] = useState<HistoryItem[]>(mockHistoryData);
  const [searchTerm, setSearchTerm] = useState('');
  const [timeFilterType, setTimeFilterType] = useState<'year' | 'month'>('year');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const yearOptions = [
    { value: '2569', label: '2569' },
    { value: '2568', label: '2568' },
  ];

  const monthOptions = [
    { value: '11', label: 'พฤศจิกายน' },
    { value: '10', label: 'ตุลาคม' },
    { value: '09', label: 'กันยายน' },
    { value: '08', label: 'สิงหาคม' },
  ];

  const categoryOptions = [
    { value: 'medical_opd', label: 'ค่ารักษาพยาบาล (ส่วนที่เกินจากประกัน)' },
    { value: 'dental', label: 'ค่าทันตกรรม' },
    { value: 'checkup', label: 'ค่าตรวจสุขภาพ' },
    { value: 'family_medical', label: 'ค่ารักษาพยาบาลครอบครัว' },
    { value: 'childbirth', label: 'เงินช่วยเหลือกรณีคลอดบุตร' },
    { value: 'funeral', label: 'เงินฌาปนกิจ' },
    { value: 'degree_scholarship', label: 'ทุนการศึกษาระดับปริญญา' },
    { value: 'certification', label: 'ทุนสอบ Certifications' },
    { value: 'recreation', label: 'ค่ากิจกรรมนันทนาการ' },
    { value: 'ai_subscription', label: 'สวัสดิการ AI Subscription' },
  ];

  const filteredHistory = historyList.filter((item) => {
    // Search query matching
    const matchesSearch =
      searchTerm.trim() === '' ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.subtitle && item.subtitle.toLowerCase().includes(searchTerm.toLowerCase())) ||
      item.requestId.toLowerCase().includes(searchTerm.toLowerCase());

    // Time filter matching
    let matchesTime = true;
    if (selectedTime) {
      if (timeFilterType === 'year') {
        matchesTime = item.year === selectedTime;
      } else {
        matchesTime = item.month === selectedTime;
      }
    }

    // Category filter matching
    const matchesCategory =
      !selectedCategory || item.category === selectedCategory;

    return matchesSearch && matchesTime && matchesCategory;
  });

  return (
    <div className="bg-[#FAF9F5] min-h-screen -m-6 p-8 font-sans text-gray-800">
      <div className="max-w-[1100px] mx-auto space-y-4">
        {/* Page Title */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">ประวัติการเบิกสวัสดิการ</h1>
          <p className="text-xs text-gray-400 mt-1">
            รวบรวมประวัติการเบิกตลอดระยะเวลาที่ผ่านมาตั้งแต่เริ่มเข้าทำงาน
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] min-h-[600px] flex flex-col">
          {/* Card Title */}
          <h2 className="text-lg font-bold text-gray-900 mb-6">ประวัติการเบิก</h2>

          {/* Filters Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-8">
            {/* Search Input */}
            <div className="lg:col-span-5 space-y-2">
              <label className="block text-sm font-semibold text-gray-800">ค้นหา</label>
              <input
                type="text"
                placeholder="เช่น เบิกค่าบุตร"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full text-xs text-gray-700 bg-white border border-gray-800 rounded-lg px-3.5 py-2.5 outline-none focus:ring-1 focus:ring-[#124E3F] placeholder:text-gray-400"
              />
            </div>

            {/* Filters Section */}
            <div className="lg:col-span-7 space-y-2">
              <span className="block text-sm font-semibold text-gray-800">ตัวกรอง</span>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                
                {/* Time Type (Radio buttons) */}
                <div className="sm:col-span-4 space-y-1.5">
                  <span className="block text-xs font-semibold text-gray-800">เวลา</span>
                  <div className="space-y-1">
                    <label className="flex items-center gap-2 cursor-pointer text-xs text-gray-700">
                      <input
                        type="radio"
                        name="timeType"
                        value="year"
                        checked={timeFilterType === 'year'}
                        onChange={() => {
                          setTimeFilterType('year');
                          setSelectedTime('');
                        }}
                        className="w-3.5 h-3.5 text-[#124E3F] focus:ring-[#124E3F] border-gray-300 accent-[#124E3F]"
                      />
                      <span>ปีงบประมาณ</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer text-xs text-gray-700">
                      <input
                        type="radio"
                        name="timeType"
                        value="month"
                        checked={timeFilterType === 'month'}
                        onChange={() => {
                          setTimeFilterType('month');
                          setSelectedTime('');
                        }}
                        className="w-3.5 h-3.5 text-[#124E3F] focus:ring-[#124E3F] border-gray-300 accent-[#124E3F]"
                      />
                      <span>ตามเดือน</span>
                    </label>
                  </div>
                </div>

                {/* Time Select Dropdown */}
                <div className="sm:col-span-3">
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full text-xs text-gray-600 bg-white border border-gray-800 rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-[#124E3F] transition-all"
                  >
                    <option value="">[ กรุณาเลือก ]</option>
                    {timeFilterType === 'year'
                      ? yearOptions.map((y) => (
                          <option key={y.value} value={y.value}>
                            {y.label}
                          </option>
                        ))
                      : monthOptions.map((m) => (
                          <option key={m.value} value={m.value}>
                            {m.label}
                          </option>
                        ))}
                  </select>
                </div>

                {/* Category Select Dropdown */}
                <div className="sm:col-span-5 space-y-1.5">
                  <label className="block text-xs font-semibold text-gray-800">ประเภทสวัสดิการ</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full text-xs text-gray-600 bg-white border border-gray-800 rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-[#124E3F] transition-all"
                  >
                    <option value="">[ กรุณาเลือก ]</option>
                    {categoryOptions.map((cat) => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>

              </div>
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto rounded-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#124E3F] text-white text-xs font-medium">
                  <th className="py-3 px-4 font-medium whitespace-nowrap rounded-l-md">วันยื่นเรื่อง</th>
                  <th className="py-3 px-4 font-medium whitespace-nowrap">รหัสคำขอ</th>
                  <th className="py-3 px-4 font-medium whitespace-nowrap">รายละเอียดคำขอ</th>
                  <th className="py-3 px-4 font-medium text-right whitespace-nowrap">ยอดเงิน</th>
                  <th className="py-3 px-4 font-medium text-center whitespace-nowrap">สถานะ</th>
                  <th className="py-3 px-4 font-medium text-center whitespace-nowrap rounded-r-md">รอบการโอน</th>
                </tr>
              </thead>
              <tbody className="text-xs text-gray-700 divide-y divide-gray-100">
                {filteredHistory.length > 0 ? (
                  filteredHistory.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50/70 transition-colors">
                      <td className="py-4 px-4 whitespace-nowrap">{item.submitDate}</td>
                      <td className="py-4 px-4 font-mono text-gray-800 whitespace-nowrap">{item.requestId}</td>
                      <td className="py-4 px-4">
                        <div className="font-semibold text-gray-800">{item.title}</div>
                        {item.subtitle && (
                          <div className="text-[11px] text-gray-400 mt-0.5">{item.subtitle}</div>
                        )}
                      </td>
                      <td className="py-4 px-4 text-right font-medium whitespace-nowrap">
                        {item.amount.toLocaleString()}
                      </td>
                      <td className="py-4 px-4 text-center whitespace-nowrap">{item.status}</td>
                      <td className="py-4 px-4 text-center whitespace-nowrap">{item.transferCycle}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-gray-400 text-xs">
                      ไม่พบข้อมูลประวัติการเบิก
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
