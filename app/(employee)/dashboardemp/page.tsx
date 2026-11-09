"use client";

import Link from "next/link";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const handleClaimClick = useCallback(() => {
    router.push("/submit_claimemp");
  }, [router]);

  return (
    <div className="bg-[#FAF9F5] min-h-screen -m-6 p-8 font-sans text-gray-800">
      <div className="max-w-[1200px] mx-auto space-y-7">
        
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">ภาพรวม</h1>
          <p className="text-xs text-gray-400 mt-1">แสดงข้อมูลสวัสดิการและสวัสดิการที่รอเบิก</p>
        </div>

        {/* Top 3 Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
          
          {/* Card 1: รอบบิลปัจจุบัน */}
          <div className="md:col-span-4 bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-900">รอบบิลปัจจุบัน</h2>
              <div className="mt-3">
                <p className="text-sm font-semibold text-gray-800">1 พ.ย. - 30 พ.ย.</p>
                <p className="text-[11px] text-gray-400 mt-1">
                  (กรุณายื่นเบิกภายในวันที่ 3 ธ.ค. เพื่อรับเงินรอบเดือนนี้)
                </p>
              </div>
            </div>
            
            <button
              onClick={handleClaimClick}
              className="mt-6 w-full cursor-pointer bg-[#00897B] hover:bg-[#00796B] active:scale-[0.99] text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <span className="text-xl leading-none font-light">+</span>
              <span className="text-base font-medium">เบิกสวัสดิการ</span>
            </button>
          </div>

          {/* Card 2: รายการรอเบิก */}
          <div className="md:col-span-3 bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col items-center justify-between text-center">
            <span className="text-sm font-bold text-gray-800">รายการรอเบิก</span>
            <div className="my-auto py-2">
              <span className="text-4xl font-bold text-gray-900 block">2</span>
            </div>
            <span className="text-xs text-gray-600 font-medium">รายการ</span>
          </div>

          {/* Card 3: รายการรอเบิก (ตารางสถานะ) */}
          <div className="md:col-span-5 bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] overflow-hidden flex flex-col">
            {/* Table Header */}
            <div className="bg-[#124E3F] text-white px-5 py-2.5 flex justify-between items-center text-xs font-medium">
              <span>รายการรอเบิก</span>
              <span>สถานะ</span>
            </div>

            {/* Table Rows */}
            <div className="p-4 space-y-4 flex-1 flex flex-col justify-center divide-y divide-gray-50">
              {/* Item 1 */}
              <div className="flex justify-between items-start gap-4 pt-1">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#124E3F] shrink-0" />
                    <span className="text-xs font-bold text-gray-800">รักษาพยาบาล</span>
                  </div>
                  <p className="text-[11px] text-gray-400 pl-3.5">ไข้หวัด (OPD) รพ.ศิริราช</p>
                </div>
                <div className="text-right text-[11px] leading-tight text-gray-600 font-medium whitespace-nowrap">
                  รอส่งเอกสาร<br />ฉบับจริง
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex justify-between items-start gap-4 pt-3">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#124E3F] shrink-0" />
                    <span className="text-xs font-bold text-gray-800">การศึกษา</span>
                  </div>
                  <p className="text-[11px] text-gray-400 pl-3.5">Cisco Secure Client (Licensing)</p>
                </div>
                <div className="text-right text-[11px] leading-tight text-gray-600 font-medium whitespace-nowrap">
                  จะได้รับเงิน<br />23 พ.ย. 69
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Section Heading with Dropdown */}
        <div className="flex items-center gap-3 pt-3">
          <h2 className="text-base font-bold text-gray-900">วงเงินสวัสดิการคงเหลือ</h2>
          <div className="flex items-center gap-2 border border-gray-300 bg-white rounded-lg px-3 py-1 text-xs text-gray-700 shadow-2xs">
            <span>(ปีงบประมาณ 2569)</span>
            <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Categories Section */}
        <div className="space-y-4">

          {/* หมวดที่ 1: ด้านการรักษาพยาบาลและสุขภาพพนักงาน */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#124E3F]" />
              <h3 className="font-bold text-sm text-gray-900">ด้านการรักษาพยาบาลและสุขภาพพนักงาน</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 1.1 */}
              <div className="flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-gray-800">ค่ารักษาพยาบาล (ส่วนที่เกินจากประกัน)</h4>
                  <p className="text-[10px] text-gray-400 mt-1">เบิกได้ไม่เกิน 1,000 บ./ครั้ง</p>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-gray-400">คงเหลือ</span>
                    <span className="font-medium text-gray-700">25 / 30 ครั้ง</span>
                  </div>
                  {/* Progress Bar: Dark Green (used/left) + light peach bar */}
                  <div className="w-full bg-[#F5DEB3] h-2 rounded-full overflow-hidden flex">
                    <div className="bg-[#124E3F] h-full" style={{ width: "35%" }} />
                  </div>
                </div>
              </div>

              {/* 1.2 */}
              <div className="flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-gray-800">ค่าทันตกรรม</h4>
                  <p className="text-[10px] text-gray-400 mt-1">เบิกได้ไม่เกิน 3,000 บ./ปี</p>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-gray-400">คงเหลือ</span>
                    <span className="font-medium text-gray-700">3,000 / 3,000 บาท</span>
                  </div>
                  <div className="w-full bg-[#F5DEB3] h-2 rounded-full overflow-hidden flex">
                    <div className="bg-[#124E3F] h-full" style={{ width: "100%" }} />
                  </div>
                </div>
              </div>

              {/* 1.3 */}
              <div className="flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-gray-800">ค่าตรวจสุขภาพ</h4>
                  <p className="text-[10px] text-gray-400 mt-1">เบิกได้ไม่เกิน 1 ครั้ง/ปี</p>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-gray-400">คงเหลือ</span>
                    <span className="font-medium text-gray-700">0 / 1 ครั้ง</span>
                  </div>
                  <div className="w-full bg-[#F5DEB3] h-2 rounded-full overflow-hidden flex">
                    <div className="bg-[#124E3F] h-full" style={{ width: "2%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* หมวดที่ 2: ด้านครอบครัวและเงินช่วยเหลือ */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#124E3F]" />
              <h3 className="font-bold text-sm text-gray-900">ด้านครอบครัวและเงินช่วยเหลือ</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 2.1 */}
              <div className="flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-gray-800">ค่ารักษาพยาบาลครอบครัว</h4>
                  <p className="text-[10px] text-gray-400 mt-1 leading-relaxed">
                    เบิกได้ไม่เกิน 30,000 บ. โดยแบ่งเป็น<br />
                    • IPD (นอนรพ.) ไม่เกิน 20,000 บ./ครั้ง<br />
                    • OPD (ไป-กลับ) ไม่เกิน 2,000 บ./ครั้ง
                  </p>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-gray-400">คงเหลือ</span>
                    <span className="font-medium text-gray-700">4,000 / 30,000 บาท</span>
                  </div>
                  <div className="w-full bg-[#F5DEB3] h-2 rounded-full overflow-hidden flex">
                    <div className="bg-[#124E3F] h-full" style={{ width: "20%" }} />
                  </div>
                </div>
              </div>

              {/* 2.2 */}
              <div className="flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-gray-800">เงินช่วยเหลือกรณีคลอดบุตร</h4>
                  <p className="text-[10px] text-gray-400 mt-1 leading-relaxed">
                    เบิกได้ไม่เกิน 10,000 บ./ครั้ง สำหรับพนักงานหรือคู่สมรสที่จดทะเบียนสมรสแล้ว (สามารถเบิกได้ตามจำนวนครั้งที่มีการคลอดบุตร)
                  </p>
                </div>
                <div className="pt-2">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-gray-400">เงื่อนไข</span>
                    <span className="font-medium text-gray-700">10,000 / ครั้ง</span>
                  </div>
                </div>
              </div>

              {/* 2.3 */}
              <div className="flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-gray-800">เงินฌาปนกิจ</h4>
                  <p className="text-[10px] text-gray-400 mt-1 leading-relaxed">
                    เบิกได้ไม่เกิน 10,000 บ./ครั้ง สำหรับกรณีบิดา, มารดา, คู่สมรสจดทะเบียน หรือบุตรเสียชีวิต และพนักงานผู้ขอเบิกต้องยังมีชีวิตอยู่
                  </p>
                </div>
                <div className="pt-2">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-gray-400">เงื่อนไข</span>
                    <span className="font-medium text-gray-700">10,000 / ครั้ง</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* หมวดที่ 3: ด้านการเรียนรู้และพัฒนาทักษะ */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#124E3F]" />
              <h3 className="font-bold text-sm text-gray-900">ด้านการเรียนรู้และพัฒนาทักษะ</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 3.1 */}
              <div className="flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-gray-800">ทุนการศึกษาระดับปริญญา</h4>
                  <p className="text-[10px] text-gray-400 mt-1 leading-relaxed">
                    เบิกได้ไม่เกิน 300,000 บ. สำหรับป.โท<br />
                    และ 700,000 บ. สำหรับป.เอก ทั้งนี้ผู้เบิกสามารถเบิกได้เพียง 1 หลักสูตรครั้งเดียวเท่านั้น
                  </p>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-gray-400">คงเหลือ</span>
                    <span className="font-medium text-gray-700">ตามเกณฑ์เงื่อนไข</span>
                  </div>
                  <div className="w-full bg-[#F5DEB3] h-2 rounded-full overflow-hidden flex">
                    <div className="bg-[#124E3F] h-full" style={{ width: "100%" }} />
                  </div>
                </div>
              </div>

              {/* 3.2 */}
              <div className="flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-gray-800">ทุนสอบ Certifications</h4>
                  <p className="text-[10px] text-gray-400 mt-1">เบิกได้ไม่เกิน 50,000 บ./ปี</p>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-gray-400">คงเหลือ</span>
                    <span className="font-medium text-gray-700">50,000 / 50,000 บาท</span>
                  </div>
                  <div className="w-full bg-[#F5DEB3] h-2 rounded-full overflow-hidden flex">
                    <div className="bg-[#124E3F] h-full" style={{ width: "100%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* หมวดที่ 4: ด้านไลฟ์สไตล์และเทคโนโลยี */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#124E3F]" />
              <h3 className="font-bold text-sm text-gray-900">ด้านไลฟ์สไตล์และเทคโนโลยี</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 4.1 */}
              <div className="flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-gray-800">ค่ากิจกรรมนันทนาการ</h4>
                  <p className="text-[10px] text-gray-400 mt-1">เบิกได้ไม่เกิน 3,000 บ./ปี</p>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-gray-400">คงเหลือ</span>
                    <span className="font-medium text-gray-700">250 / 3,000 บาท</span>
                  </div>
                  <div className="w-full bg-[#F5DEB3] h-2 rounded-full overflow-hidden flex">
                    <div className="bg-[#124E3F] h-full" style={{ width: "18%" }} />
                  </div>
                </div>
              </div>

              {/* 4.2 */}
              <div className="flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-gray-800">สวัสดิการ AI Subscription</h4>
                  <p className="text-[10px] text-gray-400 mt-1">เบิกได้ไม่เกิน 5,000 บ./ปี</p>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-gray-400">คงเหลือ</span>
                    <span className="font-medium text-gray-700">0 / 5,000 บาท</span>
                  </div>
                  <div className="w-full bg-[#F5DEB3] h-2 rounded-full overflow-hidden flex">
                    <div className="bg-[#124E3F] h-full" style={{ width: "2%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
