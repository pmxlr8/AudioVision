import { NextResponse } from "next/server";
import path from "path";
import { exec } from "child_process";
import util from "util";
import fs from "fs";

export async function POST(req: Request) {
  const execPromise = util.promisify(exec);
  const data = await req.json();
  try {
    const baseDir = path.resolve(__dirname, "../../../../../../../../");
    const script = `python runner.py --video_url "${data.url}" --user_id ${data.id} `;

    const command = `cd "${baseDir}"; ${script}`;

    console.log(`Resolved path: ${baseDir}`);
    console.log(`Command: ${command}`);

    const { stdout, stderr } = await execPromise(command, {
      shell: "powershell.exe",
    });

  

    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.error("Error running script:", error);
    return NextResponse.json(
      { error: "Failed to run script" },
      { status: 500 }
    );
  }
}
