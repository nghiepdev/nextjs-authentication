import {type NextRequest, NextResponse} from 'next/server';

async function handle(
  req: NextRequest,
  ctx: RouteContext<'/api/backend/[...paths]'>
) {
  const accessToken = req.cookies.get('session')?.value;
  if (accessToken) {
    const {paths} = await ctx.params;
    const nextUrl = new URL(paths.join('/'), process.env.NEXT_PUBLIC_API_URL);
    const response = await fetch(nextUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return new NextResponse(response.body, {
      status: response.status,
      statusText: response.statusText,
      // Do not forward all headers to avoid CORS issues
      // headers: response.headers,
    });
  }

  return NextResponse.json(
    {
      message: 'Unauthorized',
    },
    {status: 401}
  );
}

export {
  handle as GET,
  handle as POST,
  handle as PUT,
  handle as PATCH,
  handle as DELETE,
  handle as HEAD,
  handle as OPTIONS,
};
