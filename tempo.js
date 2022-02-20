async function tempo(request, response) {
    const apiSecret = process.env.CONVERTKIT_API_SECRET; 
    const dynamicDate = new Date();

    const subcribersResponse = await fetch('https//api.convertkit.com/v3/subsbribers?api_secret=${apiSecret}');
    const subcribersResponseJson = await subscriberResponse.json();
    const inscritos = subcribersResponseJson.total_subscribers;

    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

    response.json({
        date: dynamicDate.toGMTString(),
        inscritos: inscritos
    });
}

export default tempo;