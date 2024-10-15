import { NextResponse, NextRequest } from 'next/server'

// type ResponseData = {
//     message: string,
//     userId: number | null
// }

// export const dynamic = 'force-dynamic'

export async function GET(
    req: NextRequest
): Promise<NextResponse> {

    const PANTRY_ID = process.env.PANTRY_ID;
    const PANTRY_BASKET_NAME = process.env.PANTRY_BASKET_NAME;

    const getLinks = (() => {
        return new Promise((resolve, reject) => {
            fetch("https://getpantry.cloud/apiv1/pantry/" + PANTRY_ID + "/basket/" + PANTRY_BASKET_NAME, {
                method: 'GET',
            }).then(async function (res) {
                let _data = [];
                const data = await res.json()
                Object.keys(data).forEach((key, i) => { _data.push({ id: i, title: key, url: data[key] }); })
                resolve(_data)
            }).catch(function (error: Error) {
                console.error(error);
                reject(error)
            });
        })
    });

    try {
        let data = undefined;
        data = await getLinks();
        return NextResponse.json({ links: data }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });

    }
}