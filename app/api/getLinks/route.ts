import { NextResponse, NextRequest } from 'next/server'

// type ResponseData = {
//     message: string,
//     userId: number | null
// }

// export const dynamic = 'force-dynamic'

export async function GET(
    req: NextRequest
): Promise<NextResponse> {

    // const PANTRY_ID = process.env.PANTRY_ID;
    // const PANTRY_BASKET_NAME = process.env.PANTRY_BASKET_NAME;

    const getLinks = (() => {
        return new Promise((resolve, reject) => {
            // fetch("https://getpantry.cloud/apiv1/pantry/" + PANTRY_ID + "/basket/" + PANTRY_BASKET_NAME, {
            //     method: 'GET',
            // }).then(async function (res) {
            //     let _data = [];
            //     const data = await res.json()
            //     Object.keys(data).forEach((key, i) => { _data.push({ id: i, title: key, url: data[key] }); })
            //     resolve(_data)
            // }).catch(function (error: Error) {
            //     console.error(error);
            //     reject(error)
            // });
            resolve([
                {
                    "id": 0,
                    "title": "Grande Fumo on Spotify",
                    "url": "https://open.spotify.com/artist/3WEdqGk6CheSLrHmGoX2c8"
                }
            ])
        })
    });

    return getLinks()
        .then(data => NextResponse.json({ links: data }, { status: 200 }))
        .catch(error => NextResponse.json({ error: error }, { status: 500 }))
}