import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("students")
      .select("slug, name, nickname, role")
      .eq("role", "Student")
      .order("name", { ascending: true });

    if (error) {
      console.error("Supabase students error:", error);

      return NextResponse.json(
        {
          message: error.message,
          data: [],
        },
        { status: 500 }
      );
    }

    // Kita jadikan slug sebagai ID untuk dropdown
    const students = (data || []).map((student) => ({
      id: student.slug,
      name: student.name,
      nickname: student.nickname,
      role: student.role,
    }));

    return NextResponse.json(
      {
        data: students,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API students error:", error);

    return NextResponse.json(
      {
        message: error.message,
        data: [],
      },
      { status: 500 }
    );
  }
}