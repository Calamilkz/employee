'use client';

import { useState, useRef, ChangeEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SubmitClaimPage() {
  const router = useRouter();

  // Form state
  const [claimantType, setClaimantType] = useState<"self" | "family" | "employee">("self");
  const [familyMember, setFamilyMember] = useState<string>("");
  const [employeeTarget, setEmployeeTarget] = useState<string>("");
  const [benefitCategory, setBenefitCategory] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [receiptDate, setReceiptDate] = useState<string>("");
  const [details, setDetails] = useState<string>("");
  const [files, setFiles] = useState<File[]>([]);

  // File input ref
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Options mock data
  const familyOptions = [
    { value: "father", label: "บิดา" },
    { value: "mother", label: "มารดา" },
    { value: "spouse", label: "คู่สมรส" },
    { value: "child_1", label: "บุตรคนที่ 1" },
  ];

  const employeeOptions = [
    { value: "emp_self", label: "พนักงานของตนเอง / ทีมงาน" },
  ];

  const benefitOptions = [
    { value: "medical_opd", label: "ค่ารักษาพยาบาล (ส่วนที่เกินจากประกัน)" },
    { value: "dental", label: "ค่าทันตกรรม" },
    { value: "checkup", label: "ค่าตรวจสุขภาพ (ใช้สิทธิ์ครบแล้ว)", disabled: true },
    { value: "family_medical", label: "ค่ารักษาพยาบาลครอบครัว" },
    { value: "childbirth", label: "เงินช่วยเหลือกรณีคลอดบุตร" },
    { value: "funeral", label: "เงินฌาปนกิจ" },
    { value: "degree_scholarship", label: "ทุนการศึกษาระดับปริญญา" },
    { value: "certification", label: "ทุนสอบ Certifications" },
    { value: "recreation", label: "ค่ากิจกรรมนันทนาการ" },
    { value: "ai_subscription", label: "สวัสดิการ AI Subscription (ใช้สิทธิ์ครบแล้ว)", disabled: true },
  ];

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selected = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...selected]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      const droppedFiles = Array.from(e.dataTransfer.files);
      setFiles((prev) => [...prev, ...droppedFiles]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleCancel = () => {
    router.push("/dashboardemp");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("ยื่นแบบฟอร์มเบิกสวัสดิการเรียบร้อยแล้ว");
    router.push("/dashboardemp");
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen -m-6 p-8 font-sans text-gray-800">
      <div className="max-w-[1000px] mx-auto space-y-4">
        {/* Title Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">เบิกสวัสดิการ</h1>
          <Link
            href="/dashboardemp"
            className="text-xs text-gray-500 hover:text-gray-800 inline-flex items-center gap-1 mt-1 transition-colors"
          >
            &lt; กลับสู่หน้าภาพรวม
          </Link>
        </div>

        {/* Main Form Container Card */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
          <h2 className="text-xl font-bold text-gray-900 mb-8">
            แบบฟอร์มยื่นเบิกสวัสดิการ
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: เบิกในฐานะ & เลือกประเภทสวัสดิการ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Left: เบิกในฐานะ * */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3">
                  เบิกในฐานะ <span className="text-red-500">*</span>
                </label>
                <div className="space-y-3">
                  {/* ตนเอง */}
                  <label className="flex items-center gap-2.5 cursor-pointer">
                    <input
                      type="radio"
                      name="claimantType"
                      value="self"
                      checked={claimantType === "self"}
                      onChange={() => setClaimantType("self")}
                      className="w-4 h-4 text-[#124E3F] focus:ring-[#124E3F] border-gray-300 accent-[#124E3F]"
                    />
                    <span className="text-sm text-gray-700">ตนเอง</span>
                  </label>

                  {/* ครอบครัว */}
                  <div className="flex items-center gap-2.5">
                    <label className="flex items-center gap-2.5 cursor-pointer shrink-0">
                      <input
                        type="radio"
                        name="claimantType"
                        value="family"
                        checked={claimantType === "family"}
                        onChange={() => setClaimantType("family")}
                        className="w-4 h-4 text-[#124E3F] focus:ring-[#124E3F] border-gray-300 accent-[#124E3F]"
                      />
                      <span className="text-sm text-gray-700 w-16">ครอบครัว</span>
                    </label>
                    <div className="flex-1">
                      <select
                        disabled={claimantType !== "family"}
                        value={familyMember}
                        onChange={(e) => setFamilyMember(e.target.value)}
                        className="w-full text-xs text-gray-600 bg-white border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#124E3F] disabled:bg-gray-50 disabled:text-gray-400 disabled:border-gray-200 transition-colors"
                      >
                        <option value="">[ กรุณาเลือกบุคคลในครอบครัว ]</option>
                        {familyOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* พนักงาน */}
                  <div className="flex items-center gap-2.5">
                    <label className="flex items-center gap-2.5 cursor-pointer shrink-0">
                      <input
                        type="radio"
                        name="claimantType"
                        value="employee"
                        checked={claimantType === "employee"}
                        onChange={() => setClaimantType("employee")}
                        className="w-4 h-4 text-[#124E3F] focus:ring-[#124E3F] border-gray-300 accent-[#124E3F]"
                      />
                      <span className="text-sm text-gray-700 w-16">พนักงาน</span>
                    </label>
                    <div className="flex-1">
                      <select
                        disabled={claimantType !== "employee"}
                        value={employeeTarget}
                        onChange={(e) => setEmployeeTarget(e.target.value)}
                        className="w-full text-xs text-gray-600 bg-white border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#124E3F] disabled:bg-gray-50 disabled:text-gray-400 disabled:border-gray-200 transition-colors"
                      >
                        <option value="">[ กรุณาเลือกพนักงาน ]</option>
                        {employeeOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: เลือกประเภทสวัสดิการ * */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  เลือกประเภทสวัสดิการ <span className="text-red-500">*</span>
                </label>
                <select
                  value={benefitCategory}
                  onChange={(e) => setBenefitCategory(e.target.value)}
                  className="w-full text-xs text-gray-700 bg-white border border-gray-800 rounded-lg px-3 py-2.5 outline-none focus:ring-1 focus:ring-[#124E3F] transition-all"
                >
                  <option value="">[ กรุณาเลือก ]</option>
                  {benefitOptions.map((item) => (
                    <option key={item.value} value={item.value} disabled={item.disabled}>
                      {item.label}
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-gray-400 mt-1.5">
                  สวัสดิการที่ใช้สิทธิ์ครบแล้วจะไม่สามารถกดเลือกได้
                </p>
              </div>
            </div>

            {/* Row 2: ยอดเงินที่ขอเบิก & วันที่ตามใบเสร็จ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start pt-2">
              {/* ยอดเงินที่ขอเบิก */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  ยอดเงินที่ขอเบิก (บาท) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="0.00 บาท"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full text-xs text-gray-700 bg-white border border-gray-800 rounded-lg px-3 py-2.5 outline-none focus:ring-1 focus:ring-[#124E3F] placeholder:text-gray-400"
                  />
                </div>
                <p className="text-[11px] text-gray-400 mt-1.5">
                  วงเงินสูงสุดจะจำกัดตามเงื่อนไขสวัสดิการ
                </p>
              </div>

              {/* วันที่ตามใบเสร็จ */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  วันที่ตามใบเสร็จ <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={receiptDate}
                    onChange={(e) => setReceiptDate(e.target.value)}
                    className="w-full text-xs text-gray-700 bg-white border border-gray-800 rounded-lg px-3 py-2.5 outline-none focus:ring-1 focus:ring-[#124E3F]"
                  />
                </div>
              </div>
            </div>

            {/* Row 3: รายละเอียด / เหตุผลการเบิก */}
            <div className="pt-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                รายละเอียด / เหตุผลการเบิก
              </label>
              <textarea
                rows={3}
                placeholder="เช่น ไข้หวัด (OPD) รพ. ศิริราช..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full text-xs text-gray-700 bg-white border border-gray-800 rounded-lg p-3 outline-none focus:ring-1 focus:ring-[#124E3F] placeholder:text-gray-400 resize-none"
              />
            </div>

            {/* Row 4: แนบไฟล์หลักฐาน (ใบเสร็จ/ใบรับรองแพทย์) * */}
            <div className="pt-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                แนบไฟล์หลักฐาน (ใบเสร็จ/ใบรับรองแพทย์) <span className="text-red-500">*</span>
              </label>

              <div
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                className="border border-dashed border-gray-400 rounded-lg py-10 px-4 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50/60 transition-colors"
              >
                <input
                  type="file"
                  multiple
                  accept=".jpg,.jpeg,.png,.pdf"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                />
                {/* Cloud Upload Icon */}
                <svg
                  className="w-12 h-12 text-gray-800 mb-3 stroke-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <p className="text-xs text-gray-600 leading-relaxed">
                  คลิกเพื่ออัปโหลด หรือลากไฟล์มาวางที่นี่
                </p>
                <p className="text-[11px] text-gray-400 mt-0.5">
                  รองรับ JPG, PNG, PDF ขนาดไม่เกิน 5MB
                </p>
                <p className="text-[11px] text-gray-400">
                  สามารถแนบได้มากกว่า 1 ไฟล์
                </p>
              </div>

              {/* Uploaded File List */}
              {files.length > 0 && (
                <div className="mt-3 space-y-2">
                  {files.map((file, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between text-xs bg-gray-50 border border-gray-200 rounded-md px-3 py-1.5"
                    >
                      <span className="text-gray-700 truncate max-w-[80%]">
                        {file.name} ({(file.size / 1024).toFixed(1)} KB)
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveFile(idx);
                        }}
                        className="text-red-500 hover:text-red-700 font-bold ml-2"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Row 5: Yellow Warning Banner */}
            <div className="bg-[#FFF1A8] rounded-md px-4 py-3 flex items-center gap-3 text-[#5A4A00]">
              <svg
                className="w-5 h-5 text-amber-600 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span className="text-xs">
                กรุณานำใบเสร็จและเอกสารตัวจริงส่งฝ่าย HR ภายในวันที่ 20 เพื่อให้ทันรอบการจ่ายเงินเดือนนี้
              </span>
            </div>

            {/* Row 6: Action Buttons */}
            <div className="flex justify-end items-center gap-4 pt-4">
              <button
                type="button"
                onClick={handleCancel}
                className="px-8 py-2 text-sm border border-red-400 text-red-500 rounded-lg hover:bg-red-50 transition-colors"
              >
                ยกเลิก
              </button>
              <button
                type="submit"
                className="px-8 py-2 text-sm bg-[#124E3F] hover:bg-[#0d3b2f] text-white font-medium rounded-lg shadow-sm transition-colors"
              >
                ยืนยัน
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
