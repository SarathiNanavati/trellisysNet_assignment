import { promises as fs } from "fs";
const fileName = "grid_data.json";

export async function GET(request: Request) {
  try {
    const data = await fs.readFile(
      process.cwd() + "/src/data/" + fileName,
      "utf8"
    );
    return Response.json({ ok: true, results: data });
  } catch (error) {
    return Response.json({
      ok: false,
    });
  }
}

export async function POST(request: Request) {
  try {
    const receivedData = await request.json();
    await fs.writeFile(
      process.cwd() + "/src/data/" + fileName,
      Buffer.from(JSON.stringify(receivedData), "utf8")
    );
    return Response.json({ ok: true });
  } catch (error) {
    console.log(error);
    return Response.json({
      ok: false,
    });
  }
}
