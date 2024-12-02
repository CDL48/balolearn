export async function POST(req: Request) {
    const { username, password } = await req.json();

    if (username === "admin" && password === "admin") {
        console.log("login success");
    }

    return Response.json(req.body);
}
