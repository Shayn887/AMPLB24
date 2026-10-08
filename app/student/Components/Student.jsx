'use client'

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import ImageWithSkeleton from '@/app/components/ImageWithSkeleton';
import { ArrowUpRight, Search } from 'lucide-react';

export default function StudentListPage({ students = [] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(8);

  const waliKelas = useMemo(() => {
    return (
      students.find(
        (s) =>
          s.id === 'wali-kelas' ||
          s.role?.toLowerCase().includes('teacher') ||
          s.role?.toLowerCase().includes('homeroom')
      ) || {
        id: 'wali-kelas',
        name: 'Kalina Juliana S.Pd.',
        role: 'Homeroom Teacher',
        image: '/default-avatar.png',
        instagram: 'kalinajuliana70',
        quote: 'Always Happy!'
      }
    );
  }, [students]);

  const classMembers = useMemo(() => {
    return students.filter(
      (s) =>
        s.id !== waliKelas?.id &&
        s.id !== 'wali-kelas' &&
        !s.role?.toLowerCase().includes('teacher') &&
        !s.role?.toLowerCase().includes('homeroom')
    );
  }, [students, waliKelas]);

  const filteredStudents = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return classMembers;

    return classMembers.filter((student) => {
      return [student.name, student.nickname, student.role, student.instagram]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(query));
    });
  }, [classMembers, searchQuery]);

  const displayedStudents = searchQuery
    ? filteredStudents
    : filteredStudents.slice(0, visibleCount);

  const handleExpand = () => {
    setVisibleCount((prev) => Math.min(prev + 8, students.length));
  };

  return (
    <main className="min-h-screen bg-[#f4eef4] text-slate-900 px-4 py-12 sm:px-8 relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -left-32 w-80 h-80 rounded-full bg-pink-300/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-violet-300/15 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        <header className="text-center space-y-3 pt-4">
          <span className="inline-flex px-4 py-1.5 rounded-full border border-slate-300/80 bg-white/70 text-xs font-semibold tracking-[0.22em] uppercase text-slate-500 shadow-sm">
            Class Directory
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-800">
            Meet Our Class
          </h1>
          <p className="text-slate-500 text-sm sm:text-base max-w-md mx-auto">
            30 Students • 1 Teacher • Countless Memories
          </p>
        </header>

        <section className="flex justify-center">
          <Link
            href={`/student/${waliKelas.id}`}
            className="group w-full max-w-4xl rounded-[30px] border border-slate-200 bg-slate-950 p-1 shadow-[0_25px_80px_-35px_rgba(15,23,42,0.8)] transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="rounded-[27px] bg-slate-950 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-7 overflow-hidden relative">
              <div className="absolute -right-16 -top-20 w-56 h-56 rounded-full bg-pink-500/10 blur-3xl" />
              <div className="absolute -left-12 -bottom-24 w-52 h-52 rounded-full bg-violet-500/10 blur-3xl" />

              <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border border-white/10 flex-shrink-0 shadow-2xl">
                <ImageWithSkeleton
                  src={waliKelas.image}
                  alt={waliKelas.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative z-10 min-w-0 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-[0.2em] text-yellow-300 mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                  {waliKelas.role}
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-3">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white truncate">
                    {waliKelas.name}
                  </h2>
                  <span className="hidden sm:inline text-slate-600">|</span>
                  <span className="text-sm sm:text-base text-slate-400">
                    @{waliKelas.instagram || 'homeroom'}
                  </span>
                </div>
                <p className="mt-3 text-sm sm:text-base text-slate-400 italic max-w-2xl">
                  “{waliKelas.quote}”
                </p>
              </div>

              <ArrowUpRight className="relative z-10 hidden sm:block ml-auto w-6 h-6 text-slate-500 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-300" />
            </div>
          </Link>
        </section>

        <div className="max-w-5xl mx-auto rounded-[24px] border border-white/80 bg-white/75 backdrop-blur-xl p-4 shadow-[0_18px_60px_-35px_rgba(15,23,42,0.5)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-slate-800">Class Members</h2>
            <p className="text-xs text-slate-400 mt-0.5">Find a classmate and open their profile.</p>
          </div>

          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search name, nickname, role..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(8);
              }}
              className="w-full bg-slate-950 text-white pl-9 pr-4 py-2.5 rounded-2xl text-sm border border-slate-800 focus:outline-none focus:border-sky-500/70 placeholder-slate-500"
            />
          </div>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-6xl mx-auto">
          {displayedStudents.map((student, index) => {
            const handle = student.instagram || student.nickname || 'student';
            const cleanHandle = String(handle).replace(/^@/, '');

            return (
              <Link
                key={student.id}
                href={`/student/${student.id}`}
                className="group block rounded-[28px] border border-white/80 bg-white/85 backdrop-blur-xl p-4 sm:p-5 shadow-[0_15px_45px_-30px_rgba(15,23,42,0.7)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.45)]"
              >
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="relative w-20 h-20 sm:w-[92px] sm:h-[92px] rounded-full overflow-hidden flex-shrink-0 border border-slate-200 bg-slate-100 shadow-inner">
                    <ImageWithSkeleton
                      key={student.image || 'no-image'}
                      src={student.image}
                      alt={student.name}
                      fill
                      sizes="92px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 truncate">
                        {student.name}
                      </h3>
                    </div>

                    <div className="mt-0.5 flex items-center gap-2 min-w-0 text-sm text-slate-500">
                      <span className="truncate">@{cleanHandle}</span>
                      <span className="text-slate-300">|</span>
                      <span className="truncate">{student.nickname || 'Student'}</span>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      {student.role && (
                        <span className="inline-flex items-center rounded-full bg-slate-100 border border-slate-200 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
                          {student.role.replace(/^Student\s*\/\s*/i, '')}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Classmate
                      </span>
                    </div>
                  </div>

                  <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 transition-all duration-300 group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white flex-shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>MPLB</span>
                  <span className="font-semibold text-slate-500">View profile</span>
                </div>
              </Link>
            );
          })}
        </section>

        {!searchQuery && visibleCount < filteredStudents.length && (
          <div className="text-center pt-2">
            <button
              onClick={handleExpand}
              className="px-8 py-3 rounded-2xl bg-slate-900 text-slate-100 font-bold text-sm shadow-lg shadow-slate-900/10 hover:bg-slate-800 transition-colors"
            >
              Show More ({visibleCount} of {filteredStudents.length})
            </button>
          </div>
        )}

        {displayedStudents.length === 0 && (
          <p className="text-center text-slate-500 py-8 text-sm">
            No member found matching “{searchQuery}”.
          </p>
        )}
      </div>
    </main>
  );
}
